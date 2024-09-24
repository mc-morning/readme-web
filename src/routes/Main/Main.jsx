import React from "react";
import BannerImg from "../../assets/BannerImg.svg";
import AnswerList from "../../components/Main/FormList/FormList";
import Landing from "../../components/Main/Landing/Landing";
import { Wrapper, Banner, BannerText } from "./Main.styles";

function Main() {
  const currentTime = new Date().getTime();
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const accessExpiredAt = localStorage.getItem("access_expired_at");

  return (
    <Wrapper>
      <Banner>
        <img src={BannerImg} />
        <BannerText>
          간편하게 질문지를 만들고
          <br />
          나에 대한 평가를 받아보세요.
        </BannerText>
      </Banner>
      {accessToken && refreshToken && currentTime < accessExpiredAt ? (
        <AnswerList />
      ) : (
        <Landing />
      )}
    </Wrapper>
  );
}

export default Main;
