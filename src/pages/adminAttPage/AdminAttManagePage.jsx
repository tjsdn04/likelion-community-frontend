//운영진 출석 관리페이지
import * as S from "./AdminAttManagePage.styled";
import { F5Header } from "@components/adminAttManage/F5Header";
import AdminAttInfo from "@components/adminAttManage/AdminAttInfo";
import AttCard from "@components/adminAttManage/AttCard";
import AttCodeTimer from "@components/adminAttManage/AttCodeTimer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance";

export const AdminAttManagePage = () => {
  const { id } = useParams();
  // API에서 받은 출석 데이터를 상태로 관리
  const [attendance, setAttendance] = useState(null);
  const [attendanceStatuses, setAttendanceStatuses] = useState([]);
  const [code, setCode] = useState([]);
  // useEffect를 사용해 API 요청
  useEffect(() => {
    const fetchAttendanceDetail = async () => {
      try {
        const response = await axiosInstance.get(
          `/attendance/detail/${id}/`
        );
        console.log("API 응답 데이터:", response.data);

        const attendanceData = response.data.attendance;
        setAttendance(attendanceData);
        setAttendanceStatuses(response.data.attendance_statuses);

        // auth_code를 배열로 변환하여 저장
        if (attendanceData?.auth_code) {
          const codeArray = attendanceData.auth_code
            .split("")
            .map(Number);
          setCode(codeArray);
        }
      } catch (error) {
        console.error("API 요청 실패:", error);
      }
    };

    if (id) fetchAttendanceDetail();
  }, [id]);

  // 상태 변경 함수
  const handleStatusChange = (index, newStatus) => {
    const updatedStatuses = [...attendanceStatuses];
    updatedStatuses[index].status = newStatus;
    setAttendanceStatuses(updatedStatuses);
    console.log("Updated Attendee Status:", updatedStatuses[index]);
  };
  const startTime = attendance
    ? `${attendance.date} ${attendance.time}`
    : "";
  return (
    <S.Wrapper>
      <F5Header title="출석 관리" />
      <S.Content>
        {attendance && (
          <AdminAttInfo
            date={attendance.date}
            time={attendance.time}
            place={attendance.place}
            track={attendance.track}
            title={attendance.title}
            description={attendance.description}
            file={attendance.file}
          />
        )}
        <AttCodeTimer
          code={code} // 변환된 code 배열 사용
          startTime={startTime} // attendance에서 가져온 startTime
          lateTime={attendance?.late_threshold} // 지각 시간에 접근
          absentTime={attendance?.absent_threshold} // 결석 시간에 접근
        />
        <S.AttCardWrapper>
          {attendanceStatuses.map((status, index) => (
            <AttCard
              key={index}
              name={status.user_name}
              details={`${status.membership_term}기 ${status.user_track}`}
              status={status.status}
              onStatusChange={(newStatus) =>
                handleStatusChange(index, newStatus)
              }
            />
          ))}
        </S.AttCardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
