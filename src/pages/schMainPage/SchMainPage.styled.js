import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 5.56vw;
    max-width: 540px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 55px 0 22px 0;
`;

export const Button = styled.div`
    background-color: #fff;
    width: 30%;
    height: 109px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;

    img {
        width: 25px;
        height: 25px;
    }
`;

export const Title = styled.p`

`;

export const Boards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin-bottom: 100px;
`;