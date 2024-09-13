import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (code) {
      axios
        .get(
          `https://homeless-sheela-mc-morning-2364610f.koyeb.app/auth/kakao/callback?code=${code}`
        )
        .then((response) => {
          const { accessToken } = response.data;

          if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("로그인 실패:", error);
        });
    }
  }, [navigate]);

  return <div>로그인 중입니다...</div>;
};

export default Auth;
