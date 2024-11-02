//헤더
import styled from "styled-components";
import back from "@assets/icons/back.svg";
export const Header = ({ title }) => {
  return (
    <Wrapper>
      <Content>
        <img src={back} alt="back icon" />
        {title}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 540px;
  position: fixed; /* 화면에 고정 */
  top: 0; /* 상단에 위치 */
  /* left: 0;
  right: 0; */
  display: flex;

  width: 100vw;
  height: 7.25vh;
  background-color: #f1f3f5; //#F1F3F5
  border: solid 1px blue;
`;
const Content = styled.div`
  display: flex;
  width: 88.89%;
  margin: 0 auto;
  border: solid 1px red;
`;
