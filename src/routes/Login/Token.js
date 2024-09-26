import axios from "axios";
import instance from "../../api/axios";

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    const accessExpiredAt = parseInt(localStorage.getItem("access_expired_at"));

    // access token 만료 여부 확인
    if (accessExpiredAt && Date.now() > accessExpiredAt) {
      // 만료된 경우 처리 (예: 토큰 갱신 또는 로그인 페이지로 리다이렉트)
      console.log("Access token이 만료되었습니다. 갱신이 필요합니다.");
      // 토큰 갱신 또는 리다이렉트 로직 추가
    }

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
