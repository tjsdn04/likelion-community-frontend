// 게시글 상세

import * as S from "./Content.styled";
import React, { useState } from "react";
import profileLion from "@assets/icons/profileLion.svg";
import exImg from "@assets/images/ExImg.svg";

export const Content = () => {
  const [liked, setLiked] = useState(false);
  const [scrapped, setScrapped] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleScrapClick = () => {
    setScrapped(!scrapped);
  };

  return (
    <S.PostWrap>
      <S.User>
        <S.Writter>
          <S.ProfileImg src={profileLion}></S.ProfileImg>
          <S.Text>
            <S.Id>익명</S.Id>
            <S.Time>10/28 14:26</S.Time>
          </S.Text>
        </S.Writter>
        <S.ModifyWrap>
          <S.Modify>수정 </S.Modify>|<S.Delete> 삭제</S.Delete>
        </S.ModifyWrap>
      </S.User>
      <S.Title>🌍지구🌍를 사랑하고 보호하고 싶다면, 우리 팀 지구 지킴이 지지에 합류하세요! </S.Title>
      <S.Content>
        환경 보호에 관심 있는 열정적인 팀원을 모집합니다. 함께 지구의 소중한 자원을 지키고, 지속 가능한 미래를 만들어가요. 참여를 원하신다면,
        지금 바로 연락을 주시면 감사하겠습니다!
      </S.Content>
      <S.ImgWrap>
        <S.Img src={exImg} />
      </S.ImgWrap>
      <S.Button>
        <S.Like onClick={handleLikeClick} liked={liked}>
          추천 <span>10</span>
        </S.Like>
        <S.Scrap onClick={handleScrapClick} scrapped={scrapped}>
          {scrapped ? "스크랩 취소 " : "스크랩 "}
          <span>2</span>
        </S.Scrap>
      </S.Button>
    </S.PostWrap>
  );
};
