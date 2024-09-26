import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Auth.styles";
import Cloud from "../../assets/Cloud.svg";

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");
    const accessExpiredAt = urlParams.get("access_expired_at");
    const refreshExpiredAt = urlParams.get("refresh_expired_at");

    if (accessToken && refreshToken && accessExpiredAt && refreshExpiredAt) {
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      localStorage.setItem("access_expired_at", accessExpiredAt);
      localStorage.setItem("refresh_expired_at", refreshExpiredAt);

      // 토큰이 저장된 후 페이지 이동을 약간 늦추기
      setTimeout(() => {
        navigate("/");
      }, 100); // 100ms 정도 딜레이
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
