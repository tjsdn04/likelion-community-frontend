import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 40px 20px;
  width: 320px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Message = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};

  &:nth-child(1) {
    background-color: #ff7710;
    color: #fff;
  }

  &:nth-child(2) {
    background-color: #ccc;
    color: #333;
  }
`;

const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Message>{message}</Message>
        <ButtonGroup>
          <Button onClick={onConfirm}>확인</Button>
          <Button onClick={onCancel}>취소</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
