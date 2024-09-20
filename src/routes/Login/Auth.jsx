import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Auth.styles";
import Cloud from "../../assets/Cloud.svg";

function Auth() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <img src={Cloud} />
      로그인 중입니다...
      <img src={Cloud} />
    </Wrapper>
  );
}

export default Auth;
