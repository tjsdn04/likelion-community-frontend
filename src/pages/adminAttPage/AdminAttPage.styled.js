import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 7.25vh; //헤더 높이만큼 띄우기
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.fall}; */

  /* font-family: ${({ theme }) =>
    theme.fonts.PretendardThin["font-family"]}; */
`;

export const Test = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  border: solid 1px green;
`;
