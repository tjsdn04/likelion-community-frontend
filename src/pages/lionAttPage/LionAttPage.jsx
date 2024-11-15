//아기사자 출석페이지
import * as S from "./LionAttPage.styled";
import { Header } from "@components/Header";
import { Dropdown } from "@components/adminAtt/Dropdown";
import adminPen from "@assets/icons/adminPen.svg";
import { AttCard } from "@components/adminAtt/AttCard";
import { LionAttCard } from "@components/lionAttPage/LionAttCard";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import axiosInstance from "@apis/axiosInstance"; // axiosInstance 가져오기
import { useEffect, useState } from "react";

export const LionAttPage = () => {
  const { goTo } = useCustomNavigate(); // 페이지 이동을 위한 커스텀 훅 사용
  const [attendances, setAttendances] = useState([]); // 출석 데이터를 저장하는 상태
  const [error, setError] = useState(null); // 오류 메시지를 저장하는 상태
  const data = { att: 3, late: 2, absent: 1 }; // 출석, 지각, 결석 횟수를 저장한 더미 데이터

  // 출석 목록 데이터를 가져오는 함수
  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const response = await axiosInstance.get("/attendance/main"); // 서버로부터 출석 데이터를 가져옴
        setAttendances(response.data.attendances || []); // attendances가 없을 경우 빈 배열로 초기화
      } catch (err) {
        setError(
          err.response?.data?.detail || "오류가 발생했습니다."
        ); // 오류가 발생한 경우 상태에 오류 메시지 설정
      }
    };

    fetchAttendances(); // 데이터 가져오기 함수 호출
  }, []);

  console.log(attendances);

  // isOpen 상태를 계산하는 함수
  // date와 time을 결합해 열린 시간(openTime)과 닫힌 시간(closeTime)을 계산
  // 현재 시간이 열린 시간과 닫힌 시간 사이에 있으면 isOpen을 1로 설정, 그렇지 않으면 0으로 설정
  const calculateIsOpen = (date, time, absentThreshold) => {
    const openTime = new Date(`${date}T${time}`); // 열린 시간
    const closeTime = new Date(
      openTime.getTime() + absentThreshold * 60000
    ); // absentThreshold를 분 단위로 추가해 닫힌 시간 설정
    const currentTime = new Date(); // 현재 시간

    return currentTime >= openTime && currentTime < closeTime ? 1 : 0; // 조건에 따라 1 또는 0 반환
  };

  return (
    <S.Wrapper>
      <Header title="출석" />
      {/* 콘텐츠를 묶는 Wrapper */}
      <S.Content>
        {/* 출석, 지각, 결석 횟수를 보여주는 컴포넌트 */}
        <S.LionAttScore>
          <S.ScoreContent>
            <S.ScoreText>
              <div>출석</div>
              <div className="score">{data.att}회</div>{" "}
              {/* 출석 횟수 */}
            </S.ScoreText>
            <S.ScoreText>
              <div>지각</div>
              <div className="score">{data.late}회</div>{" "}
              {/* 지각 횟수 */}
            </S.ScoreText>
            <S.ScoreText>
              <div>결석</div>
              <div className="score">{data.absent}회</div>{" "}
              {/* 결석 횟수 */}
            </S.ScoreText>
          </S.ScoreContent>
        </S.LionAttScore>

        <S.CardWrapper>
          {/* 출석 목록이 있으면 map 함수로 각 출석 데이터를 렌더링 */}
          {Array.isArray(attendances) && attendances.length > 0 ? (
            attendances.map((attendance) => {
              const isOpen = calculateIsOpen(
                attendance.date,
                attendance.time,
                attendance.absent_threshold
              ); // isOpen 상태 계산
              return isOpen === 1 ? (
                // isOpen이 1이면 AttCard 컴포넌트 렌더링
                <AttCard
                  key={attendance.id} // 고유한 key 값 사용
                  isOpen={isOpen}
                  onClick={() =>
                    goTo(`/adminAttManage/${attendance.id}`)
                  } // 클릭 시 페이지 이동
                  absentThreshold={attendance.absent_threshold}
                  date={attendance.date}
                  description={attendance.description}
                  file={attendance.file}
                  lateThreshold={attendance.late_threshold}
                  place={attendance.place}
                  time={attendance.time}
                  title={attendance.title}
                  track={attendance.track}
                />
              ) : (
                // isOpen이 0이면 LionAttCard 컴포넌트 렌더링
                <LionAttCard
                  key={attendance.id} // 고유한 key 값 사용
                  isOpen={isOpen}
                  onClick={() =>
                    goTo(`/adminAttManage/${attendance.id}`)
                  } // 클릭 시 페이지 이동
                  date={attendance.date}
                  place={attendance.place}
                  time={attendance.time}
                  title={attendance.title}
                  track={attendance.track}
                  status={attendance.status}
                />
              );
            })
          ) : (
            <p>출석 목록이 없습니다.</p> // 출석 목록이 없을 때 표시
          )}
        </S.CardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
