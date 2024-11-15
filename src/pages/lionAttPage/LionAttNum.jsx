// 아기사자 출석코드 입력하는 페이지
import { useState, useRef } from "react";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { useCustomNavigate } from "@hooks/useCustomNavigate"; // 커스텀 훅 사용
import * as S from "./LionAttNum.styled";

export const LionAttNum = () => {
  const inputRef = useRef([]);
  const [complete, setComplete] = useState(false); // input 4개에 입력이 다 되었는지를 저장
  const [message, setMessage] = useState("출석코드를 입력해주세요");
  const [att, setAtt] = useState("default"); // 출석 상태를 저장
  const [time, setTime] = useState(null); // 출석 완료 시간을 저장
  const [buttonText, setButtonText] = useState("출석하기"); // 버튼 텍스트 상태 추가
  const realCode = "1234"; // 예시 출석코드
  const [code, setCode] = useState(["", "", "", ""]); // 배열로 변환하여 상태로 관리
  const { goTo } = useCustomNavigate(); // 커스텀 훅 사용

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // 숫자만 허용

    const newCode = [...code];
    newCode[index] = value.slice(-1); // 마지막 숫자만 사용
    setCode(newCode);

    // 숫자 입력 시 다음 input으로 자동 포커스
    if (value && index < code.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }

    // 모든 input이 채워졌는지 확인
    setComplete(newCode.every((num) => num !== ""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`code-input-${index - 1}`).focus();
    }
  };

  const handleButton = () => {
    if (buttonText === "출석하기" && complete) {
      // 출석하기 버튼 클릭 시
      const inputCode = code.join(""); // 배열을 문자열로 합치기
      if (inputCode === realCode) {
        const currentTime = new Date();
        setMessage("출석 완료");
        setTime(currentTime);
        setAtt("success");
        setButtonText("돌아가기"); // 버튼 텍스트 '돌아가기'로 변경

        // 콘솔에 출석 코드와 완료 시간을 출력
        console.log("입력한 출석코드:", inputCode);
        console.log(
          "출석 완료 시간:",
          currentTime.toLocaleTimeString()
        );
      } else {
        // 출석 코드가 일치하지 않는 경우
        setMessage("출석코드가 일치하지 않아요");
        setAtt("fail");
        setCode(["", "", "", ""]); // 코드 초기화
        setComplete(false);
        inputRef.current[0].focus(); // 첫 번째 input으로 포커스 이동
      }
    } else if (buttonText === "돌아가기") {
      // 돌아가기 버튼 클릭 시 페이지 이동
      goTo("/lionAtt");
    }
  };

  return (
    <S.Wrapper>
      <Header title="출석" />
      <S.Info att={att}>
        {time && att === "success"
          ? `${time.toLocaleTimeString()} ${message}`
          : message}
      </S.Info>
      <S.Nums>
        {code.map((num, index) => (
          <S.BoxInput
            key={index}
            id={`code-input-${index}`}
            value={num}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            $isFilled={!!num}
            inputMode="numeric" // 숫자 자판 유지
            ref={(el) => (inputRef.current[index] = el)} // inputRef에 요소 할당
          />
        ))}
      </S.Nums>
      <S.Button
        complete={complete}
        onClick={handleButton}
        buttonText={buttonText} // 버튼 텍스트 전달
      >
        {buttonText}
      </S.Button>
      <Footer />
    </S.Wrapper>
  );
};
