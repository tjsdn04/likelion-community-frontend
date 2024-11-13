// 프론트 게시판 글 상세 페이지

import * as S from "./PostPage.styled";
import { Header } from "@components/Header";
import { Content } from "@components/post/Content";
import { Comments } from "@components/post/Comments";
import { Input } from "@components/post/Input";

export const FePostPage = () => {
  return (
    <S.Wrapper>
      <Header title="프론트엔드 게시판" />
      <Content />

      <S.CommentWrap>
        <S.CommentTitle>댓글(2)</S.CommentTitle>
        <Comments />
        <Comments />
      </S.CommentWrap>

      <Input />
    </S.Wrapper>
  );
};
