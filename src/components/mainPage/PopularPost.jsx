import React from 'react'
import styled from 'styled-components'


export const PopularPost = ({time,anonymous,writer,body,image}) => {
    
    const getTime = (time) => {
		const date=new Date(time);
		const now = new Date();
		const elapseTime = Math.floor((now - date) / (1000 * 60));

		if (elapseTime < 60) return `${elapseTime}분 전`;
		if (elapseTime < 1440) return `${Math.floor(elapseTime / 60)}시간 전`;
		return `${Math.floor(elapseTime / 1440)}일 전`;
	}

    const user = anonymous ? '익명' : writer;

    return (
        
        <Wrapper>
            <Top>
                <Info>
                    {getTime(time)} | {user}
                </Info>
                <More>더보기</More>
            </Top>
            <Content>
                <Text>{body}</Text>
                <Img src={image}/>
            </Content>
        </Wrapper>
    )
}

export default PopularPost

export const Wrapper = styled.div`
    width: 100%;
    padding: 10px 15px;
    border-radius: 10px;
    background: #EFEFEF;
`

export const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Content = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    width: 100%;

`

export const Text = styled.div`
    font-size: 9px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    line-height: 140%;
    letter-spacing: -0.225px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

`

export const Img = styled.img`
    width: 50px;


`

export const Info = styled.div`
    font-size: 10px;
    line-height: 140%;
    letter-spacing: -0.25px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardRegular["font-family"]};
`

export const More = styled.div`
    color: #7C7C82;
    font-size: 10px;

`