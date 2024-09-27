import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper, Title, AnswerBtn, Desc } from "./StartAnswer.styles";
import Logo from "../../../assets/LogoV2.svg";
import Kakao from "../../../assets/kakao.png";

const StartAnswer = () => {
  const { questionnaireId } = useParams();
  const REST_API_KEY = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_CALLBACK_URL;
  const navigate = useNavigate();

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const loginHandler = () => {
    window.location.href = link;
  };

  const handleStartAnswer = () => {
    navigate(`/writeanswer/${questionnaireId}`); // Navigate to WriteAnswer with questionnaireId
  };

  return (
    <Wrapper>
      <Desc>
        24-2 캡스톤디자인 08팀 박시은 동료평가
        <br />
        답변을 작성해 주세요!
      </Desc>
      <img src={Logo} style={{ margin: "40px 0 20px 0" }} />
      <Title>나 자신에 대해 알아 보고 싶다면?</Title>
      <img
        src={Kakao}
        width="360px"
        style={{ cursor: "pointer", margin: "40px 0 20px 0" }}
        onClick={loginHandler}
      />
      <AnswerBtn onClick={handleStartAnswer}>지금 바로 답변하기</AnswerBtn>
    </Wrapper>
  );
};

export default StartAnswer;
