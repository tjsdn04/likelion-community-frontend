import React from 'react'
import * as S from './MyPostPage.styled'
import { Header } from '@components/Header'

export const MyPostPage = () => {
    return (
        <S.Wrapper>
            <Header title="내가 쓴 글" />
        </S.Wrapper>
    )
}

export default MyPostPage
