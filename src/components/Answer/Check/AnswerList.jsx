import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // useParams로 URL의 questionnaireId를 가져옴
import { instance } from "../../../api/axios";
import Comment from "../../../assets/Comment.svg";
import {
  Desc,
  TitleBox,
  Wrapper,
  Highlight,
  AnswerBox,
  Answer,
} from "./AnswerList.styles";

function AnswerList() {
  const { questionnaireId } = useParams();
  const [questionnaire, setQuestionnaire] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuestionnaire = async () => {
    try {
      const response = await instance.get(`/questionnaire/${questionnaireId}`);
      setQuestionnaire(response.data); // 질문지 데이터를 상태에 저장
    } catch (error) {
      console.error("질문지 불러오기 오류:", error);
      setError("질문지 데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchQuestionnaire = async () => {
      try {
        const response = await instance.get(
          `/questionnaire/${questionnaireId}`
        );
        const sortedQuestions = response.data.questions.sort(
          (a, b) => a.questionId - b.questionId
        );
        setQuestionnaire({
          ...response.data,
          questions: sortedQuestions,
        });
      } catch (error) {
        console.error("질문지 불러오기 오류:", error);
        setError("질문지 데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionnaire();
  }, [questionnaireId]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Wrapper>
      {questionnaire && (
        <>
          <TitleBox>
            {questionnaire.title}
            <Desc>
              <img
                src={Comment}
                style={{ marginRight: "5px" }}
                alt="Comment Icon"
              />
              <Highlight>{questionnaire.questions[0].answers.length}</Highlight>
              개의 질문과 답변을 확인해보세요
            </Desc>
          </TitleBox>

          {questionnaire.questions.map((question) => (
            <AnswerBox key={question.questionId}>
              {question.question}
              {question.answers.map((answer, index) => (
                <Answer key={index}>{answer}</Answer>
              ))}
            </AnswerBox>
          ))}
        </>
      )}
    </Wrapper>
  );
}

export default AnswerList;
