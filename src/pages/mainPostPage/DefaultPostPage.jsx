// 자유 게시판 글 상세 페이지

import styled from "styled-components";

export const DefaultPostPage = () => {
  return (
    <Wrapper>
      <Wrap>
        <Info>
          <ProfileImg>프로필사진</ProfileImg>
          <Text>
            <p>작성자</p>
            <p>작성날짜/시간</p>
          </Text>
        </Info>

        <Title>제목</Title>

        <Content>내용내용</Content>

        <Button>
          <Like>추천버튼</Like>
          <Scrap>스크랩버튼</Scrap>
        </Button>
      </Wrap>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
`;

export const Wrap = styled.div`
  width: 450px;
  height: 200px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const Info = styled.div`
  display: flex;
`;

export const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background-color: gray;
`;

export const Text = styled.div``;

export const Title = styled.h1``;

export const Content = styled.p``;

export const Button = styled.div`
  display: flex;
`;

export const Like = styled.button`
  width: 50px;
  height: 50px;
  background-color: gray;
`;

export const Scrap = styled.button`
  width: 50px;
  height: 50px;
  background-color: gray;
`;
