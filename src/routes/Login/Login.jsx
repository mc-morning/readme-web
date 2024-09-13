import React from "react";
import { Wrapper, Title } from "./Login.styles";
import Logo from "../../assets/LogoV2.svg";
import Kakao from "../../assets/kakao.png";

const Login = () => {
  const REST_API_KEY = "55319c0c9164330577c82ef75df5534e";
  const REDIRECT_URI =
    "https://homeless-sheela-mc-morning-2364610f.koyeb.app/auth/kakao/callback";

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <Wrapper>
      <img src={Logo} style={{ marginBottom: "20px" }} />
      <Title>나 자신에 대해 알아 보고 싶다면?</Title>
      <img
        src={Kakao}
        width="360px"
        style={{ cursor: "pointer", marginTop: "120px" }}
        onClick={loginHandler}
      />
    </Wrapper>
  );
};

export default Login;
