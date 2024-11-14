import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
  border-radius: 32px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const Details = styled.span`
  font-size: 12px;
  color: #888;
`;

const Status = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 37px;
  border-radius: 32px;
  font-size: 15px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  background-color: ${({ $status }) =>
    $status === "출석"
      ? "#A2FF9A"
      : $status === "지각"
      ? "#FFF39A"
      : "#FF9A9A"};
  color: ${({ $status }) =>
    $status === "출석"
      ? "#067600"
      : $status === "지각"
      ? "#C07D00"
      : "#760400"};
`;

const AttCard = ({ name, details, status }) => {
  return (
    <CardWrapper>
      <Content>
        <Profile>
          <ProfileImg />
          <Info>
            <Name>{name}</Name>
            <Details>|{details}</Details>
          </Info>
        </Profile>
        <Status $status={status}>{status}</Status>
      </Content>
    </CardWrapper>
  );
};

export default AttCard;
