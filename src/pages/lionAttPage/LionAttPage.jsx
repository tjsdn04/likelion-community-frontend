//아기사자 출석페이지
//운영진 출석페이지
import * as S from "./LionAttPage.styled";
import { Header } from "@components/Header";
import { Dropdown } from "@components/adminAtt/Dropdown";
import adminPen from "@assets/icons/adminPen.svg";
import { AttCard } from "@components/adminAtt/AttCard";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import axiosInstance from "@apis/axiosInstance"; // axiosInstance 가져오기
import { useEffect, useState } from "react";

export const LionAttPage = () => {
  const { goTo } = useCustomNavigate();
  const [attendances, setAttendances] = useState([]);
  const [error, setError] = useState(null);

  // 출석 목록 데이터를 가져오는 함수
  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const response = await axiosInstance.get("/attendance/main/");
        setAttendances(response.data); // 성공적으로 데이터를 받아온 경우 상태에 설정
      } catch (err) {
        setError(
          err.response?.data?.detail || "오류가 발생했습니다."
        );
      }
    };

    fetchAttendances();
  }, []);
  return (
    <S.Wrapper>
      <Header title="출석" />
      {/* 요소들 묶어둔 콘텐츠 태그 */}
      <S.Content>
        {/* 액션바들 묶음 */}

        <S.CardWrapper>
          <AttCard
            isOpen={1}
            onClick={() => goTo("/adminAttManage")}
          />
          <AttCard />
          <AttCard />
        </S.CardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
