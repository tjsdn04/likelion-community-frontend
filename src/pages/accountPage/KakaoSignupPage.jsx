import * as S from "./KakaoSignupPage.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { Header } from "@components/Header";
import { Button } from "@components/account/Button";
import { InputBox } from "@components/account/InputBox";
import { LionClass } from "@components/account/LionClass";
import { Loading } from "@components/account/Loading";
import axiosInstance from "../../apis/axiosInstance";
import sampleImg from "@assets/images/verification_sample.svg";
import img from "@assets/icons/img.svg";

export const KakaoSignupPage = () => {
  const navigate = useNavigate();
  const { goTo } = useCustomNavigate();

  const [form, setForm] = useState({
    name: "",
    nickname: "",
    class: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const fetchKakaoData = async () => {
      try {
        // 닉네임이 비어있을 때만 데이터를 가져오도록 조건을 추가
        if (!form.nickname) {
          const encodedNickname = encodeURIComponent(
            form.nickname || ""
          );
          const response = await axiosInstance.get(
            `/signup/complete_profile/?nickname=${encodedNickname}`
          );

          console.log("응답 상태 코드:", response.status);
          console.log("전체 응답 데이터:", response.data);

          // 닉네임이 존재할 경우 업데이트
          if (response.data.nickname) {
            console.log("닉네임:", response.data.nickname);
            setForm((prev) => ({
              ...prev,
              nickname: response.data.nickname,
            }));
          } else {
            goTo("/kakaoSignup", { replace: true });
          }
        }
      } catch (error) {
        console.error("닉네임 불러오기 실패:", error);
      }
    };

    // 닉네임이 설정되지 않은 경우에만 fetchKakaoData 호출
    if (!form.nickname) {
      fetchKakaoData();
    }
  }, [form.nickname, goTo]); // form.nickname이 변경될 때만 useEffect 실행

  const InputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  useEffect(() => {
    const Complete = Object.values(form).every(
      (value) => value.trim() !== ""
    );
    setIsFormComplete(Complete);
  }, [form]);

  const handleCheck = () => {
    setIsLoading(true);
    setIsVerified(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsVerified(true);
    }, 2000);
  };

  const handleSignup = async () => {
    if (isFormComplete && isVerified) {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("nickname", form.nickname);
      formData.append("membership_term", form.class);
      if (imageFile) {
        formData.append("verification_photo", imageFile);
      }

      console.log("보내는 데이터:", formData);

      try {
        const response = await axiosInstance.post(
          "/signup/complete_profile/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("회원가입 성공:", response.data.message);
        navigate("/main", { state: form });
      } catch (error) {
        console.error(
          "회원가입 실패:",
          error.response?.data || error.message
        );
      }
    }
  };

  return (
    <S.Wrapper>
      <Header title="회원가입" />
      <S.ContentWrap>
        <InputBox
          title="이름"
          value={form.name}
          onChange={InputChange("name")}
        />
        <InputBox
          title="닉네임"
          value={form.nickname}
          onChange={InputChange("nickname")}
          disabled
        />
        <LionClass
          value={form.class}
          onChange={InputChange("class")}
        />
      </S.ContentWrap>

      <S.ContentWrap>
        <S.Text>회원 인증하기</S.Text>
        <S.SampleImg>
          <p>예시 이미지</p>
          <img src={sampleImg} alt="예시 이미지" />
          <p className="Notice">
            멋쟁이사자처럼 공식 홈페이지에서 회원 정보 페이지를 <br />
            로고와 개인정보가 나오도록 전체캡쳐해서 업로드 해주세요!!
          </p>
        </S.SampleImg>
      </S.ContentWrap>

      <S.ContentWrap>
        <S.Text>회원인증</S.Text>
        <S.InputWrap>
          <S.InputBox>
            <S.InputImg img={img}>
              <S.Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </S.InputImg>
          </S.InputBox>
          <S.Confirm onClick={handleCheck}>검사</S.Confirm>
        </S.InputWrap>
        {isLoading && <Loading />}
        {isVerified && (
          <S.CompleteMessage>
            유효한 회원 인증 이미지입니다.
          </S.CompleteMessage>
        )}
      </S.ContentWrap>

      <S.ContentWrap>
        <Button
          btnName="회원가입"
          onClick={handleSignup}
          disabled={!isFormComplete || !isVerified}
        />
        <S.LogIn>
          <span className="text">이미 회원이신가요?</span>
          <span className="underline" onClick={() => goTo("/login")}>
            로그인
          </span>
        </S.LogIn>
      </S.ContentWrap>
    </S.Wrapper>
  );
};
