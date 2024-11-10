import styled from "styled-components";

export const Wrapper = styled.div`
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: calc(100% - 70px);
`

export const Title = styled.h2`
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const Context = styled.p`
    font-size: 12px;
    color: #323232;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const RightImg = styled.img`
    margin-left: 7px;
`