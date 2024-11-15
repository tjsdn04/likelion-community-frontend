// 자유 게시판 글 작성 페이지

import * as S from "./PostingPage.styled";
import { Header } from "@components/Header";
import { PostingBox } from "@components/post/PostingBox";
import axiosInstance from "@apis/axiosInstance";

export const DefaultPostingPage = () => {

  const boardTitle = "자유게시판";

  const handlePostSubmit = async(postData) => {
    const formData = new FormData();
    formData.append("board_title", boardTitle);
    formData.append("title", postData.title);
    formData.append("anonymous", postData.anonymous);
    formData.append("body", postData.body);
    if (postData.image) formData.append("image", postData.image);
    
    try {
      
      const getCsrfToken = async () => {
        try {
          await axiosInstance.get('/signup/set-csrf-cookie/');
        } catch (error) {
          console.error('CSRF 토큰을 설정하는 데 실패했습니다:', error);
        }
      };
      getCsrfToken();

      const response = await axiosInstance.post("/post/mainboard/", formData, {
        headers: { 
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("POST 성공:", response.data);
    } catch (error) {
      console.error("POST 실패:", error);
    }
  }

  return (
    <S.Wrapper>
      <Header title="자유 게시판" />
      <S.ContentWrapper>
        <S.ContentWrap>
          <PostingBox  onSubmit={handlePostSubmit} />
        </S.ContentWrap>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
