// 글 작성 박스

import * as S from "./PostingBox.styled";
import React, { useState, useImperativeHandle } from "react";
import photo from "@assets/icons/photo.svg";
import { PostingBtn } from "@components/post/PostingBtn";

export const PostingBox = ({ onSubmit }) => {
    
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [anonymous, setAnonymous] = useState(false);



  const handleImageChange = (event) => {
    const files = event.target.files;
    setImage(URL.createObjectURL(files));
  };

  const handleSubmit= () => {
    onSubmit({title, body, anonymous, image});
  }


  return (
    <S.Wrapper>
      <S.Title 
        type="text" 
        placeholder="제목을 입력해주세요." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <S.ContentWrapper>
        <S.Content 
          placeholder="내용을 입력해주세요"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <S.ImageWrapper>
          <S.PreviewsWrapper>
            {image && (
              <S.ImagePreview src={image} alt='psot img' />
            )}
          </S.PreviewsWrapper>
        </S.ImageWrapper>
      </S.ContentWrapper>

      <S.BottomWrap>
        <S.Check>
          <S.CheckBox 
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />
          <S.CheckLabel htmlFor="check">익명</S.CheckLabel>
        </S.Check>

        <S.InputImg $img={photo}>
          <S.Input 
            type="file" 
            accept="image/*" 
            multiple onChange={handleImageChange} 
          />
        </S.InputImg>
      </S.BottomWrap>
      <S.Button onClick={handleSubmit}>
          <PostingBtn />
        </S.Button>
    </S.Wrapper>
  );
};
