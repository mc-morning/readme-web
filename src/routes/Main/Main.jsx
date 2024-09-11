import React from "react";
import BannerImg from "../../assets/BannerImg.svg";
import AnswerList from "../../components/Main/AnswerList/AnswerList";
import { Wrapper, Banner, BannerText } from "./Main.styles";

function Main() {
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
      <AnswerList />
    </Wrapper>
  );
}

export default Main;
