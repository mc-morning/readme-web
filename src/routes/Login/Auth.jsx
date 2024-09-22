import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Auth.styles";
import Cloud from "../../assets/Cloud.svg";

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    // 현재 URL에서 쿼리 파라미터 추출
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");
    const accessExpiredAt = urlParams.get("access_expired_at");
    const refreshExpiredAt = urlParams.get("refresh_expired_at");

    if (accessToken && refreshToken && accessExpiredAt && refreshExpiredAt) {
      // 로컬 스토리지에 저장
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      localStorage.setItem("access_expired_at", accessExpiredAt);
      localStorage.setItem("refresh_expired_at", refreshExpiredAt);

      // 홈 화면으로 이동
      navigate("/");
    }
  }, [navigate]);

  return (
    <Wrapper>
      <img src={Cloud} alt="Cloud" />
      로그인 중입니다...
      <img src={Cloud} alt="Cloud" />
    </Wrapper>
  );
}

export default Auth;
