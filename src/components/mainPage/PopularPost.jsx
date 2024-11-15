import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const PopularPost = ({id, board_title, body}) => {
    
    const boardPath = {
        '자유게시판': 'defaultPostPage',
        '프론트엔드 게시판': 'fePostPage',
        '백엔드 게시판': 'bePostPage',
        '기획/디자인 게시판': 'pmPostPage',
        '아기사자게시판': 'lionPostPage',
        '참여게시판': 'joinPostPage',
        '이벤트/공지게시판': 'notiPostPage',
    };
    const path = boardPath[board_title];

    // const getTime = (time) => {
	// 	const date=new Date(time);
	// 	const now = new Date();
	// 	const elapseTime = Math.floor((now - date) / (1000 * 60));

	// 	if (elapseTime < 60) return `${elapseTime}분 전`;
	// 	if (elapseTime < 1440) return `${Math.floor(elapseTime / 60)}시간 전`;
	// 	return `${Math.floor(elapseTime / 1440)}일 전`;
	// }

    // const user = anonymous ? '익명' : writer;

    return (
        <Wrapper>
            <Top>
                <Title>{board_title}</Title>
                <Link to={`/${path}/${id}`}><More>더보기</More></Link>
            </Top>
            <Text>{body}</Text>
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
    margin-bottom: 5px;
`

export const Title = styled.div`
    font-size: 12px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`

export const Text = styled.div`
    font-size: 12px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardRegular["font-family"]};
    line-height: 140%;
    letter-spacing: -0.225px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const More = styled.div`
    color: #7C7C82;
    font-size: 10px;

`