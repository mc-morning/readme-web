import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Wrapper,
  Title,
  AnswerBtn,
  Desc,
  Highlight,
} from "./StartAnswer.styles";
import Logo from "../../../assets/LogoV2.svg";
import Kakao from "../../../assets/ToKakao.png";
import { instance } from "../../../api/axios"; // Import axios instance

const StartAnswer = () => {
  const { questionnaireId } = useParams(); // Get the questionnaireId from the URL
  const [questionnaire, setQuestionnaire] = useState(null); // State to store questionnaire data
  const [user, setUser] = useState(null); // State to store user data
  const [hasAnswered, setHasAnswered] = useState(false); // State to track if the user has already answered
  const REST_API_KEY = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_CALLBACK_URL;
  const navigate = useNavigate();

  const fetchQuestionnaire = async () => {
    try {
      const response = await instance.get(`/questionnaire/${questionnaireId}`);
      setQuestionnaire(response.data); // Set the fetched questionnaire data
      console.log(response.data);
    } catch (error) {
      console.error("질문지 불러오기 오류:", error);
    }
  };

  useEffect(() => {
    if (questionnaireId) {
      fetchQuestionnaire();
    }
  }, [questionnaireId]);

  useEffect(() => {
    if (questionnaire && user) {
      setHasAnswered(questionnaire.completedUsers.includes(user.id));
    }
  }, [questionnaire, user]);

  const loginHandler = () => {
    navigate("/login");
  };

  const handleStartAnswer = () => {
    navigate(`/writeanswer/${questionnaireId}`);
  };

  const handleGoToMain = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Desc>
        {questionnaire ? questionnaire.title : "..."}
        <br />
        {hasAnswered ? (
          <Highlight>이미 답변을 작성했어요!</Highlight>
        ) : (
          <Highlight>답변을 작성해 주세요!</Highlight>
        )}
      </Desc>
      <img src={Logo} style={{ margin: "40px 0 20px 0" }} />
      <Title>나 자신에 대해 알아 보고 싶다면?</Title>
      {!hasAnswered && (
        <img
          src={Kakao}
          width="360px"
          style={{ cursor: "pointer", margin: "40px 0 20px 0" }}
          onClick={loginHandler}
        />
      )}
      {hasAnswered ? (
        <AnswerBtn onClick={handleGoToMain}>메인으로 돌아가기</AnswerBtn>
      ) : (
        <AnswerBtn onClick={handleStartAnswer}>지금 바로 답변하기</AnswerBtn>
      )}
    </Wrapper>
  );
};

export default StartAnswer;
