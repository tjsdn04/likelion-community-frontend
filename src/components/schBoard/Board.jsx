// 게시판 목록 페이지에서 사용합니다
import React from 'react'
import * as S from './Board.styled'
import { BoardInfo as BoardInfoComponent } from './BoardInfo'
import exampleImg from '@assets/icons/exampleImg.svg'

export const Board = ({id, title, body, time, anonymous, writer, comments_count, scraps_count}) => {

    return (
        <S.Wrapper>
            <S.Left>
                {/* <S.Top> */}
                    <S.Title>
                        {title}
                    </S.Title>
                    <S.Context>
                        {body}
                    </S.Context>                    
                {/* </S.Top> */}
                <BoardInfoComponent 
                    time={time}
                    anonymous={anonymous}
                    writer={writer}
                    comments_count={comments_count}
                    scraps_count={scraps_count}
                />
            </S.Left>
            <S.RightImg src={exampleImg}/>
        </S.Wrapper>
    )
}

export default Board
