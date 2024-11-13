//운영진 출석 관리페이지
import * as S from "./AdminAttManagePage.styled";
import { F5Header } from "@components/adminAttManage/F5Header";
import AdminAttInfo from "@components/adminAttManage/AdminAttInfo";
import AttCard from "@components/adminAttManage/AttCard";
import AttCodeTimer from "@components/adminAttManage/AttCodeTimer";
export const AdminAttManagePage = () => {
  return (
    <S.Wrapper>
      <F5Header title="출석 관리" />
      <S.Content>
        <AdminAttInfo />
        <AttCodeTimer
          code={[1, 2, 5, 6]}
          startTime="2024-11-13 20:31"
          lateTime={2} // 30분 지각
          absentTime={1} // 10분 결석
        />
        <S.AttCardWrapper>
          <AttCard
            name="이동건"
            details="12기 프론트엔드"
            status="출석"
          />
          <AttCard
            name="이동건"
            details="12기 백엔드"
            status="지각"
          />
          <AttCard
            name="이동건"
            details="12기 기획/디자인"
            status="결석"
          />
        </S.AttCardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
