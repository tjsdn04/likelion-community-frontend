import React, { useEffect, useState, useRef } from "react";
import * as S from "./ChatPage.styled";
import { Header } from "@components/Header";
import logo from "/thumbnail.png";
import send from "@assets/icons/send.svg";
import axiosInstance from "@apis/axiosInstance";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";
import fileICon from "@assets/icons/file.svg";
import chatX from "@assets/icons/chatX.svg";
export const ChatPage = () => {
  useFetchCsrfToken();

  const [currentUser, setCurrentUser] = useState({
    id: null,
    username: "",
    nickname: "",
  });
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [participantName, setParticipantName] = useState("");
  const [roomName, setRoomName] = useState("");
  const chatRef = useRef(null);
  const { chatroom_id } = useParams();
  const socketRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axiosInstance.get(
          "/friend/api/user/"
        );
        setCurrentUser({
          id: userResponse.data.id,
          username: userResponse.data.username,
          nickname: userResponse.data.nickname,
        });

        const chatResponse = await axiosInstance.get(
          `/friend/chat/${chatroom_id}/`
        );
        setMessages(chatResponse.data.messages);
        setParticipantName(
          chatResponse.data.other_participant.nickname
        );
        setRoomName(chatResponse.data.room_name);
      } catch (error) {
        console.error("데이터 로드 오류:", error);
      }
    };

    fetchData();
  }, [chatroom_id]);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    };

    // 데이터 로드 후 약간의 딜레이로 스크롤 이동 보장
    setTimeout(scrollToBottom, 50);
  }, [messages, chatroom_id]); // 메시지나 방 ID 변경 시 스크롤 이동

  useEffect(() => {
    if (!roomName || !currentUser.id) return;

    let retryInterval = 1000;

    const connectWebSocket = () => {
      socketRef.current = new WebSocket(
        `wss://everion.store/ws/chat/${roomName}/`
      );

      socketRef.current.onopen = () => {
        console.log("WebSocket 연결 성공.");
        retryInterval = 1000;
      };

      socketRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.message) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: data.sender,
              content: data.message,
              image: data.image_url || null,
            },
          ]);
        }
      };

      socketRef.current.onclose = (event) => {
        console.error(
          "WebSocket 연결 종료:",
          event.code,
          event.reason
        );
        setTimeout(connectWebSocket, retryInterval);
        retryInterval = Math.min(retryInterval * 2, 30000);
      };

      socketRef.current.onerror = (error) => {
        console.error("WebSocket 오류 발생:", error);
      };
    };

    connectWebSocket();

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [roomName, currentUser.id]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const csrftoken = Cookies.get("csrftoken");
      const response = await axiosInstance.post(
        `/friend/chat/${chatroom_id}/`,
        formData,
        {
          headers: {
            "X-CSRFToken": csrftoken,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      return response.data.image_url;
    } catch (error) {
      console.error("이미지 업로드 오류:", error);
      throw error;
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() || selectedImage) {
      if (selectedImage) {
        const reader = new FileReader();
        reader.onload = () => {
          sendMessage(reader.result);
        };
        reader.readAsDataURL(selectedImage);
      } else {
        sendMessage(null);
      }
    }
  };

  const sendMessage = (imageBase64) => {
    const messageData = {
      message: newMessage,
      username: currentUser.username,
      nickname: currentUser.nickname,
      image: imageBase64,
    };

    if (
      socketRef.current &&
      socketRef.current.readyState === WebSocket.OPEN
    ) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: currentUser.id,
          content: newMessage,
          image: imageBase64 || null,
        },
      ]);
      socketRef.current.send(JSON.stringify(messageData));
      setNewMessage("");
      setSelectedImage(null);
    } else {
      console.error(
        "WebSocket 연결이 닫혀 있습니다. 메시지를 전송할 수 없습니다."
      );
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 지원 가능한 파일 형식 확인
      const validExtensions = [
        "image/png",
        "image/jpeg",
        "image/gif",
      ];
      if (!validExtensions.includes(file.type)) {
        alert("지원하지 않는 이미지 형식입니다.");
        return;
      }

      // 유효한 파일 형식인 경우 이미지 상태 업데이트
      setSelectedImage(file);
    }
  };

  return (
    <S.Wrapper>
      <Header title={participantName} />
      <S.Chat ref={chatRef}>
        {messages.map((msg, index) =>
          msg.sender === currentUser.id ? (
            <S.RightDiv key={index}>
              <S.RightContext>
                {msg.image ? (
                  msg.image.startsWith("data:") ? (
                    // Base64 데이터
                    <img src={msg.image} alt="chat img" />
                  ) : (
                    // 서버 URL
                    <img
                      src={`https://everion.store${msg.image}`}
                      alt="chat img"
                    />
                  )
                ) : (
                  msg.content
                )}
              </S.RightContext>
            </S.RightDiv>
          ) : (
            <S.LeftDiv key={index}>
              <S.Profile src={logo} />
              <S.LeftContext>
                {msg.image ? (
                  msg.image.startsWith("data:") ? (
                    <img src={msg.image} alt="chat img" />
                  ) : (
                    <img
                      src={`https://everion.store${msg.image}`}
                      alt="chat img"
                    />
                  )
                ) : (
                  msg.content
                )}
              </S.LeftContext>
            </S.LeftDiv>
          )
        )}
      </S.Chat>
      {selectedImage && (
        <S.PreviewWrapper>
          <S.PreviewImage
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
          />
          <S.RemoveButton onClick={() => setSelectedImage(null)}>
            <img src={chatX} alt="delete icon" />
          </S.RemoveButton>
        </S.PreviewWrapper>
      )}

      <S.SendWrap>
        <S.Send>
          <S.SendRight>
            <S.FileUploadWrapper>
              <label htmlFor="image-upload">
                <img src={fileICon} alt="file icon" />
              </label>
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                onChange={handleImageChange}
              />
            </S.FileUploadWrapper>
            <S.TextInput
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="메시지를 입력하세요"
            />
          </S.SendRight>
          <S.Btn onClick={handleSendMessage}>
            <img src={send} alt="send icon" />
          </S.Btn>
        </S.Send>
      </S.SendWrap>
    </S.Wrapper>
  );
};

export default ChatPage;
