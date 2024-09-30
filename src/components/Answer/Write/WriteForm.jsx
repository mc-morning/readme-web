import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../../api/axios";
import {
  Answer,
  InputBox,
  Wrapper,
  CharCount,
  PrevBtn,
  NextBtn,
  BtnBox,
  ProgressBarContainer,
  ProgressBarFill,
  SpinnerOverlay,
  Spinner,
} from "./WriteForm.styles";
import Prev from "../../../assets/Prev.svg";
import Next from "../../../assets/Next.svg";
import Check from "../../../assets/Check.svg";

function WriteForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]); // State to store questions
  const [loading, setLoading] = useState(false);
  const [questionnaire, setQuestionnaire] = useState(null);
  const maxLength = 1000;
  const navigate = useNavigate();
  const { questionnaireId } = useParams();

  const progress = ((currentQuestionIndex + 1) / (questions.length || 1)) * 100;

  const fetchQuestionnaire = async () => {
    try {
      const response = await instance.get(`/questionnaire/${questionnaireId}`);
      const creator = response.data.creator;
      setQuestionnaire(creator);
      console.log(creator);

      // 질문 리스트 설정
      const questionsData = [
        {
          questionId: 1,
          question: `1. ${creator.username} 님의 첫 인상은 어떠셨나요?`,
        },
        {
          questionId: 2,
          question: `2. 협업 시 ${creator.username} 님의 장점은 무엇인가요?`,
        },
        {
          questionId: 3,
          question: `3. 앞으로 ${creator.username} 님이 프로젝트를 하면서 보완해야 할 부분이 있나요?`,
        },
        {
          questionId: 4,
          question: `4. ${creator.username} 님께 마지막으로 하고 싶은 말이 있나요?`,
        },
      ];

      setQuestions(questionsData); // 질문 상태 업데이트
      setAnswers(Array(questionsData.length).fill("")); // 답변 상태 초기화
    } catch (error) {
      console.error("질문지 불러오기 오류:", error);
    }
  };

  useEffect(() => {
    if (questionnaireId) {
      fetchQuestionnaire();
    }
  }, [questionnaireId]);

  const handleChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true); // 제출 시작 시 로딩 상태 true
    try {
      for (let i = 0; i < questions.length; i++) {
        const payload = {
          questionnaireId,
          questionId: questions[i].questionId,
          question: questions[i].question,
          answer: answers[i],
        };
        console.log(payload);
        await instance.post("/answer", payload);
      }

      alert("답변이 성공적으로 제출되었습니다!");
      navigate("/");
    } catch (error) {
      console.error("답변 제출 오류:", error);
      alert("답변 제출 중 오류가 발생했습니다.");
    } finally {
      setLoading(false); // 제출 후 로딩 상태 false
    }
  };

  return (
    <Wrapper>
      {loading && (
        <SpinnerOverlay>
          <Spinner />
        </SpinnerOverlay>
      )}

      <ProgressBarContainer>
        <ProgressBarFill style={{ width: `${progress}%` }} />
      </ProgressBarContainer>

      {questions.length > 0 && (
        <>
          <Answer>{questions[currentQuestionIndex].question}</Answer>
          <InputBox
            value={answers[currentQuestionIndex]}
            onChange={handleChange}
            maxLength={maxLength}
            placeholder="여기에 답변을 입력하세요."
          />
          <CharCount>{`${answers[currentQuestionIndex].length} / ${maxLength}자`}</CharCount>

          <BtnBox>
            <PrevBtn
              onClick={handlePrev}
              style={{
                visibility: currentQuestionIndex > 0 ? "visible" : "hidden",
              }}
            >
              <img src={Prev} alt="Prev" />
              이전 질문으로
            </PrevBtn>

            {currentQuestionIndex < questions.length - 1 ? (
              <NextBtn onClick={handleNext}>
                다음 질문으로
                <img src={Next} alt="Next" />
              </NextBtn>
            ) : (
              <NextBtn onClick={handleSubmit}>
                답변 제출하기
                <img src={Check} alt="Check" />
              </NextBtn>
            )}
          </BtnBox>
        </>
      )}
    </Wrapper>
  );
}

export default WriteForm;
