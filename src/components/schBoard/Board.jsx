// 게시판 목록 페이지에서 사용합니다
import React from 'react'
import * as S from './Board.styled'
import { BoardInfo as BoardInfoComponent } from './BoardInfo'
import exampleImg from '@assets/icons/exampleImg.svg'

export const Board = ({title,context}) => {

    const BoardInfo = [
        {time: 6, name: '익명',comment:3, recommend: 10, img: exampleImg}
    ]

    return (
        <S.Wrapper>
            <S.Left>
                <S.Title>
                    {title}
                </S.Title>
                <S.Context>
                    {context}
                </S.Context>
                <BoardInfoComponent 
                    time={BoardInfo[0].time}
                    name={BoardInfo[0].name}
                    comment={BoardInfo[0].comment}
                    recommend={BoardInfo[0].recommend}
                />
            </S.Left>
            <S.RightImg src={exampleImg}/>
        </S.Wrapper>
    )
}

export default Board
