import React, { useState } from 'react'
import * as S from './MyPage.styled'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import myPost from '@assets/icons/myPost.svg'
import myComment from '@assets/icons/myComment.svg'
import myScrap from '@assets/icons/myScrap.svg'
import upload from '@assets/icons/upload.svg'
import { Link } from 'react-router-dom'

export const MyPage = () => {

    const [schoolVerified, setSchoolVerified] =useState(false);

    const schoolUpdate = (e) => {
        setSchoolVerified(true);
    }

    return (
        <S.Wrapper>
            <Header title="마이페이지" />
            <S.Info>
                <S.Left>
                    <S.Top>
                        <S.Title>내 정보</S.Title>
                        <S.Edit>수정</S.Edit>
                    </S.Top>
                    <S.Mid>
                        <S.Name>김멋사</S.Name>
                        <S.Badge>12기</S.Badge>
                        <S.Badge>아기사자</S.Badge>
                    </S.Mid>
                    <S.Bottom>likelion@example.com</S.Bottom>
                </S.Left>
                <S.Img src='' alt="profile img"/>
            </S.Info>
            <S.School>
                {schoolVerified?(
                    <S.SchoolName>
                        내 학교
                        <S.SchoolBadge>멋사대학교</S.SchoolBadge>
                    </S.SchoolName>
                    
                ):
                <>
                    <S.SchoolName>내 학교</S.SchoolName>
                    <S.SchoolVerify>
                        <S.Guide>
                            학교와 직위를 인증할 수 있는 서류 첨부해주세요!
                            <S.UploadIcon src={ upload } alt="" />
                        </S.Guide>
                    </S.SchoolVerify>
                </>
                }
                
            </S.School>
            <S.Mypost>
                <S.Post>
                    <S.PostImg src={myPost}/>
                    <Link to='/myPost'><S.MypostTitle>내가 쓴 글</S.MypostTitle></Link>
                </S.Post>
                <S.Comment>
                    <S.PostImg src={myComment}/>
                    <Link to='/myComment'><S.MypostTitle>댓글 단 글</S.MypostTitle></Link>
                </S.Comment>
                <S.Scrap>
                    <S.PostImg src={myScrap}/>
                    <Link to='/myScrap'><S.MypostTitle>스크랩</S.MypostTitle></Link>
                </S.Scrap>
            </S.Mypost>
            <Footer />
        </S.Wrapper>
    )
}

export default MyPage
