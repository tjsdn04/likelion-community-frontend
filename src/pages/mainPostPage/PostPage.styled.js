import styled from "styled-components";
import check from "@assets/icons/check.svg";
import comment from "@assets/icons/comment.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 88.89%;
  margin: 0 auto;
  align-items: center;
`;

export const PostWrap = styled.div`
  margin-top: 70px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #ffffff;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12));
`;

export const Writter = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 10px;
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
  font-size: 12px;
  color: #323232;
  margin-left: 5px;
`;

export const ModifyWrap = styled.div`
  display: flex;
  align-items: start;
`;

export const Modify = styled.button`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
  font-size: 12px;
  color: #323232;
  margin: 0 2px;
`;

export const Delete = styled.button`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
  font-size: 12px;
  color: #323232;
  margin: 0 2px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 15px;
  color: #111111;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 12px;
  color: #323232;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Img = styled.img`
  width: 50%;
  margin: 10px;
`;

export const Button = styled.div`
  display: flex;
  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.PretendardRegular["font-family"]};
    font-size: 10px;
    color: #767676;
    margin-top: 10px;
    padding: 2px 5px;
    border-radius: 5px;
  }
`;

export const Like = styled.button`
  margin-right: 10px;
  background-color: ${({ liked }) => (liked ? "#fde4c6" : "#EFEFEF")};
  span {
    color: ${({ liked }) => (liked ? "#ff7d2c" : "#767676")};
  }
`;

export const Scrap = styled.button`
  background-color: ${({ scrapped }) => (scrapped ? "#fde4c6" : "#EFEFEF")};
  span {
    color: ${({ scrapped }) => (scrapped ? "#ffa232" : "#767676")};
  }
`;

export const CommentWrap = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 9vh;
  border-top: 1px solid #ffd3b3;
`;

export const CommentTitle = styled.h1`
  margin: 10px 2px;
`;

export const Comment = styled.div`
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12));
`;

export const WriteWrap = styled.div`
  position: fixed;
  bottom: 3vh;
  transform: translateX(-50%);
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 88.89%;
  max-width: 480px;
  height: 35px;
  border-radius: 4px;
  background-color: #e7e4e4;
  padding: 10px;
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1.5px solid #767676;
  border-radius: 4px;
  &:checked {
    background-color: #ff7d2c;
    border-color: #ff7d2c;
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }

  &:checked + label {
    color: #ff7d2c;
  }
`;

export const CheckLabel = styled.label`
  margin-left: 4px;
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 13px;
  color: #767676;
`;

export const Write = styled.input`
  outline: none;
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 13px;
  margin-left: 10px;
  flex: 1;
  background-color: inherit;
  &::placeholder {
    color: #ccc9c9;
  }
`;

export const WriteBtn = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${comment});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  background-color: transparent;
`;
