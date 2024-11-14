// src/api/axiosInstance.js
// import axios from "axios";

// // CSRF 토큰을 가져오는 함수
// function getCSRFToken() {
//   const csrfCookie = document.cookie
//     .split("; ")
//     .find((row) => row.startsWith("csrftoken="));
//   return csrfCookie ? csrfCookie.split("=")[1] : null;
// }

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   withCredentials: true, // 쿠키를 포함하여 요청 보내기
// });

// // CSRF 토큰을 헤더에 추가
// const csrfToken = getCSRFToken();
// if (csrfToken) {
//   axiosInstance.defaults.headers.common["X-CSRFToken"] = csrfToken;
// }

// export default axiosInstance;

import axios from "axios";

// CSRF 토큰을 가져오는 함수
function getCSRFToken() {
  const csrfCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken="));
  return csrfCookie ? csrfCookie.split("=")[1] : null;
}

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // 쿠키를 포함하여 요청 보내기
});

// 요청 인터셉터를 사용하여 CSRF 토큰을 모든 요청에 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const csrfToken = getCSRFToken();
    console.log("CSRF Token:", csrfToken); // CSRF 토큰이 잘 설정되었는지 확인
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
// import * as S from "./MainPage.styled";

// import React, { useEffect } from "react";
// import axiosInstance from "../../apis/axiosInstance";

// export const MainPage = () => {
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axiosInstance.get("/");
//         console.log("User Data:", response.data); // 성공 시 사용자 데이터 출력
//       } catch (error) {
//         if (error.response) {
//           console.log("Error:", error.response.data); // 실패 시 에러 메시지 출력
//         } else {
//           console.log("Error:", error.message);
//         }
//       }
//     };

//     fetchUserData(); // 컴포넌트가 마운트될 때 API 호출
//   }, []);

//   return <S.MainWrapper>4호선톤 메인페이지</S.MainWrapper>;
// };
