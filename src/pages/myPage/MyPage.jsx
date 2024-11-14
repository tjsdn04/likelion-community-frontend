import React, { useState, useEffect } from "react";
import * as S from "./MyPage.styled";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import myPost from "@assets/icons/myPost.svg";
import myComment from "@assets/icons/myComment.svg";
import myScrap from "@assets/icons/myScrap.svg";
import upload from "@assets/icons/upload.svg";
import { Link } from "react-router-dom";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken"; // 커스텀 훅 가져오기
import axiosInstance from "@apis/axiosInstance";

export const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    profile_image: "",
    generation: "",
    role: "",
  });
  const [schoolVerified, setSchoolVerified] = useState("");
  const [verificationPhoto, setVerificationPhoto] = useState(null);

  // CSRF 토큰 설정 훅 호출
  useFetchCsrfToken();

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/mypage/");
      console.log("user Response", response.data);

      if (response.data.user_info) {
        setUserInfo({
          name: response.data.user_info.name,
          email: response.data.user_info.email,
          profile_image: response.data.user_info.profile_image,
          generation: response.data.user_info.generation,
          role: response.data.user_info.role,
        });
        setSchoolVerified(response.data.school_verification_status);
      } else {
        console.log("사용자 정보가 존재하지 않습니다.");
      }
    } catch (e) {
      console.error("error", e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    setVerificationPhoto(e.target.files[0]);
  };

  // 학교 인증 요청 함수
  const submitSchoolVerification = async () => {
    if (!verificationPhoto) {
      alert("인증할 사진을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("verification_photo", verificationPhoto);

    try {
      const response = await axiosInstance.post("/mypage/schoolverification/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("학교 인증이 제출되었습니다.");
      setSchoolVerified("pending");
    } catch (e) {
      console.error("학교 인증 오류:", e);
      alert("학교 인증 중 오류가 발생했습니다.");
    }
  };

  // 로그아웃 함수
  const handleLogout = async () => {
    try {
      await axiosInstance.post("/signup/logout/", {});
      window.location.href = "/";
    } catch (e) {
      console.error("로그아웃 오류:", e);
    }
  };

  // 회원탈퇴 함수
  const handleDeleteAccount = async () => {
    if (window.confirm("정말로 회원탈퇴를 하시겠습니까?")) {
      try {
        await axiosInstance.delete("/signup/delete/");
        window.location.href = "/";
      } catch (e) {
        console.error("회원탈퇴 오류:", e);
      }
    }
  };

  return (
    <S.Wrapper>
      <Header title="마이페이지" />
      <S.Info>
        <S.Left>
          <S.Top>
            <S.Title>내 정보</S.Title>
            <S.Edit>수정</S.Edit>
          </S.Top>
          <S.Mid>
            <S.Name>{userInfo.name}</S.Name>
            <S.Badge>{userInfo.generation}</S.Badge>
            <S.Badge>{userInfo.role}</S.Badge>
          </S.Mid>
          <S.Bottom>{userInfo.email}</S.Bottom>
        </S.Left>
        <S.Img src={userInfo.profile_image} alt="profile img" />
      </S.Info>
      <S.School>
        {schoolVerified === "approved" ? (
          <S.SchoolName>
            내 학교
            <S.SchoolBadge>멋사대학교</S.SchoolBadge>
          </S.SchoolName>
        ) : schoolVerified === "pending" ? (
          <>
            <S.SchoolName>내 학교</S.SchoolName>
            <S.SchoolVerify>
              <S.Guide>처리가 진행 중입니다</S.Guide>
            </S.SchoolVerify>
          </>
        ) : schoolVerified === "rejected" ? (
          <>
            <S.SchoolName>내 학교</S.SchoolName>
            <S.SchoolVerify>
              <S.Guide>인증이 거부되었습니다</S.Guide>
            </S.SchoolVerify>
          </>
        ) : (
          <>
            <S.SchoolName>내 학교</S.SchoolName>
            <S.SchoolVerify>
              <S.Guide>
                학교와 직위를 인증할 수 있는 서류 첨부해주세요!
                <input type="file" onChange={handleFileChange} />
                <button onClick={submitSchoolVerification}>제출하기</button>
              </S.Guide>
            </S.SchoolVerify>
          </>
        )}
      </S.School>
      <S.Mypost>
        <S.Post>
          <S.PostImg src={myPost} />
          <Link to="/myPost">
            <S.MypostTitle>내가 쓴 글</S.MypostTitle>
          </Link>
        </S.Post>
        <S.Comment>
          <S.PostImg src={myComment} />
          <Link to="/myComment">
            <S.MypostTitle>댓글 단 글</S.MypostTitle>
          </Link>
        </S.Comment>
        <S.Scrap>
          <S.PostImg src={myScrap} />
          <Link to="/myScrap">
            <S.MypostTitle>스크랩</S.MypostTitle>
          </Link>
        </S.Scrap>
      </S.Mypost>
      <S.User>
        <S.Btn onClick={handleLogout}>로그아웃</S.Btn>
        <S.Btn onClick={handleDeleteAccount}>회원탈퇴</S.Btn>
      </S.User>
      <Footer />
    </S.Wrapper>
  );
};

export default MyPage;
