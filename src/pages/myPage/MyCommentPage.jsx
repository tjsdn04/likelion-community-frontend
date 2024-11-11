import React from 'react'
import * as S from './MyCommentPage.styled'
import { Header } from '@components/Header'

export const MyCommentPage = () => {
    return (
        <S.Wrapper>
            <Header title="댓글 쓴 글" />
        </S.Wrapper>
    )
}

export default MyCommentPage
