// 아기사자 출석 정보 확인 페이지
import { useState } from "react";
import { Header } from "@components/Header";
import * as S from "./LionAttInfoPage.styled";
import LionAttInfo from "@components/lionAttPage/LionAttInfo";
export const LionAttInfoPage = () => {
  const infoData = {
    id: "2",
    date: "2024-11-07",
    time: "18:30",
    place: "신공학과 5147",
    track: "백엔드",
    title: "9주차 세션 쉽게 배포하기",
    description:
      "늦지 않게 와주세요~ 일찍 오신분들은 5143에서 대기해주시면 됩니다.",
    file: "https://example.com/9주차배포자료.pdf",
  };

  return (
    <S.Wrapper>
      <Header title="출석 정보" />
      <S.Content>
        <LionAttInfo
          date={infoData.date}
          time={infoData.time}
          place={infoData.place}
          track={infoData.track}
          title={infoData.title}
          description={infoData.description}
          file={infoData.file}
        />
        <S.AttCount></S.AttCount>
      </S.Content>
    </S.Wrapper>
  );
};

export default LionAttInfoPage;
