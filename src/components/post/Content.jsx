// 게시글 상세

import * as S from "./Content.styled";
import React, { useState } from "react";
import profileLion from "@assets/icons/profileLion.svg";

export const Content = ({title, body, images, likes_count, scraps_count, time, writer, anonymous}) => {

  const getTime = (time) => {
    const date=new Date(time);
    const now = new Date();
    const elapseTime = Math.floor((now - date) / (1000 * 60));

    if (elapseTime < 60) return `${elapseTime}분 전`;
    if (elapseTime < 1440) return `${Math.floor(elapseTime / 60)}시간 전`;
    return `${Math.floor(elapseTime / 1440)}일 전`;
}

const elapseTime = getTime(time);

const user = anonymous ? '익명' : writer;

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
            <S.Id>{user}</S.Id>
            <S.Time>{elapseTime}</S.Time>
          </S.Text>
        </S.Writter>
        <S.ModifyWrap>
          <S.Modify>수정 </S.Modify>|<S.Delete> 삭제</S.Delete>
        </S.ModifyWrap>
      </S.User>
      <S.Title>{title}</S.Title>
      <S.Content>{body}</S.Content>
      <S.ImgWrap>
        {images && images.length > 0 
        && images.map((imageObj, index) => (
          <S.Img key={index} src={imageObj.image} alt={`Post Image ${index}`} />
        ))}
      </S.ImgWrap>
      <S.Button>
        <S.Like onClick={handleLikeClick} liked={liked}>
          추천 <span>{likes_count}</span>
        </S.Like>
        <S.Scrap onClick={handleScrapClick} scrapped={scrapped}>
          {scrapped ? "스크랩 취소 " : "스크랩 "}
          <span>{scraps_count}</span>
        </S.Scrap>
      </S.Button>
    </S.PostWrap>
  );
};
