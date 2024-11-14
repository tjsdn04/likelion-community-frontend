import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  margin-top: 7.25vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 88.89%;
  height: calc(100vh - 7.25vh - 96px);
  overflow-y: auto;
  margin-top: 15px;
  gap: 15px;
`;

export const AttCount = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 22px 35px;
  width: 100%;
  height: 190px;
  border-radius: 32px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
`;
