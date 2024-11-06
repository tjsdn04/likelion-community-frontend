// 기본 로그인 페이지
import * as S from "./LoginPage.styled";
import { Header } from "@components/Header";
import id_img from "@assets/icons/id.svg";
import pw_img from "@assets/icons/pw.svg";
import invisible from "@assets/icons/eyeClosedToggle.svg";
import visible from "@assets/icons/eyeOpenedToggle.svg";
import { useEffect, useState } from "react";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

const User = {
  id: "testId",
  pw: "testPw",
};

export const LoginPage = () => {
  const { goTo } = useCustomNavigate();

  // 로그인 성공/실패
  const [notAllow, setNotAllow] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleId = (event) => {
    setId(event.target.value);
    setShowErrorMessage(false);
  };

  const handlePw = (event) => {
    setPw(event.target.value);
    setShowErrorMessage(false);
  };

  const onClickConfirmButton = () => {
    if ((id === User.id) & (pw === User.pw)) {
      goTo("/main");
    } else {
      setShowErrorMessage(true);
    }
  };

  // 비밀번호 보이기/숨기기
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // 로그인 버튼 활성화
  useEffect(() => {
    setNotAllow(id.trim() === "" || pw.trim() === "");
  }, [id, pw]);

  return (
    <S.Wrapper>
      <Header title="로그인" />
      <S.ContentWrap>
        <S.InputWrapper>
          <S.InputTitle>아이디</S.InputTitle>
          <S.InputWrap>
            <img src={id_img} alt="id Logo" style={{ width: "20px", height: "auto" }} />
            <S.Input placeholder="아이디를 입력해 주세요" value={id} onChange={handleId} />
          </S.InputWrap>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.InputWrap>
            <img src={pw_img} alt="pw Logo" style={{ width: "20px", height: "auto" }} />
            <S.Input placeholder="비밀번호를 입력해 주세요" type={isPasswordVisible ? "text" : "password"} value={pw} onChange={handlePw} />
            <S.Toggle onClick={handlePasswordVisibility}>
              <img src={isPasswordVisible ? visible : invisible} alt="visibility" style={{ width: "20px", height: "auto" }} />
            </S.Toggle>
          </S.InputWrap>
        </S.InputWrapper>

        {showErrorMessage && <S.ErrorMessage>아이디 또는 비밀번호가 잘못되었습니다.</S.ErrorMessage>}
        <S.BottomButton onClick={onClickConfirmButton} disabled={notAllow}>
          로그인
        </S.BottomButton>
        <S.SignUp>
          <span className="text">아직 회원이 아니신가요?</span>
          <span className="underline" onClick={() => goTo("/main")}>
            {/* 임시 */}
            회원가입
          </span>
        </S.SignUp>
      </S.ContentWrap>
    </S.Wrapper>
  );
};
