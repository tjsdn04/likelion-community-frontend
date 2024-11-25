import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 88.89%;
  margin: 0 auto;
  align-items: center;
`;
export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7.25vh;
  width: 100%;
  margin-bottom: 80px;
  height: calc(100vh - 7.25vh - 85px);
  overflow-y: auto;
`;

export const RightDiv = styled.div`
  border: 1.5px solid #ff7710;
  border-radius: 20px 20px 0px 20px;
  background: #ffd3b3;
  padding: 20px;
  width: fit-content;
  margin-left: auto;
  margin-top: 20px;
  max-width: calc(100% - 38px);
`;

export const RightContext = styled.div`
  font-size: 14px;
  width: fit-content;

  img {
    max-width: 100%;
    max-height: 20vh;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-top: 20px;
`;

export const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

export const LeftContext = styled.div`
  font-size: 14px;
  border-radius: 20px 20px 20px 0px;
  border: 1.5px solid #ff7710;
  background: #fff;
  padding: 20px;

  img {
    max-width: 100%;
    max-height: 20vh;
  }
`;

export const SendWrap = styled.div`
  width: 100%;
  max-width: 540px;
`;

export const Send = styled.div`
  margin: 20px 0;
  border: 1.5px solid #ff7710;
  border-radius: 20px;
  width: 88.89%;
  padding: 10px 15px;
  max-width: 480px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  background-color: #fff;
`;
export const SendRight = styled.div`
  display: flex;
  gap: 5px;
`;
export const InputImg = styled.label`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
`;
export const FileUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 22px;
    height: 22px;
  }

  input[type="file"] {
    display: none;
  }
`;
export const Input = styled.input`
  display: none;
`;

export const TextInput = styled.input`
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
  font-size: 14px;
  width: 100%;
  margin-right: 20px;
  outline: none;
  background-color: #ffffff00;
`;

export const Btn = styled.button`
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 90%;
  max-width: 540px;
  padding: 10px;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* 흰색 배경, 투명도 50% */

  border-radius: 10px;
  margin-bottom: 10px;
  position: fixed;
  bottom: 58px; /* 입력창 위로 고정 */
  z-index: 10; /* 입력창 위에 표시되도록 */
`;

export const PreviewImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 8px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  display: flex;
  cursor: pointer;
`;
