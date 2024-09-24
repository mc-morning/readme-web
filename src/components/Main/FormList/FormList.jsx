import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Plus from "../../../assets/Plus.svg";
import Cloud from "../../../assets/Cloud.svg";
import Comment from "../../../assets/Comment.svg";
import Trash from "../../../assets/Trash.svg";
import {
  Wrapper,
  ListHeader,
  HeaderButton,
  Answer,
  AnsTitle,
  Title,
  CreateDate,
  CommentBox,
  BtnBox,
  CopyBtn,
  CheckBtn,
} from "./FormList.styles";
import { instance } from "../../../api/axios"; // Axios instance 불러오기

// 모달 컴포넌트 추가
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <p>복사가 완료되었습니다!</p>
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          닫기
        </button>
      </div>
    </div>
  );
};

function FormList() {
  const navigate = useNavigate();
  const [questionnaires, setQuestionnaires] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기 상태 추가

  // 질문지 리스트를 불러오는 함수
  const fetchQuestionnaires = async () => {
    try {
      const response = await instance.get("/questionnaire/list");
      setQuestionnaires(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("질문지 리스트 불러오기 오류:", error);
    }
  };

  useEffect(() => {
    fetchQuestionnaires(); // 컴포넌트가 처음 렌더링될 때 API 호출
  }, []);

  // 한국 표준시로 날짜 변환 함수
  const formatKST = (dateString) => {
    const date = new Date(dateString);
    // UTC+9 시간대로 변환
    const kstOffset = 9 * 60; // 9시간을 분 단위로 변환
    const localTime = new Date(date.getTime() + kstOffset * 60 * 1000);

    // 원하는 형식으로 반환 (예: 20240908)
    const year = localTime.getFullYear();
    const month = String(localTime.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 필요
    const day = String(localTime.getDate()).padStart(2, "0");

    // "YYYY.MM.DD" 포맷으로 출력
    return `${year}.${month}.${day}`;
  };

  const handleCheck = (id) => {
    navigate(`/answercheck/${id}`);
  };

  // 링크 복사 함수
  const handleCopy = (id) => {
    const url = `${window.location.origin}/answercheck/${id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsModalOpen(true); // 복사 완료 후 모달 열기
      })
      .catch((error) => {
        console.error("링크 복사 실패:", error);
      });
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <ListHeader>
        시은 님의 질문지 답변을 확인해 보세요!
        <HeaderButton
          onClick={() => {
            navigate("/createform");
          }}
        >
          <img src={Plus} alt="Create Form" /> 질문지 만들기
        </HeaderButton>
      </ListHeader>

      {questionnaires.map((questionnaire) => (
        <Answer key={questionnaire.id}>
          <img src={Cloud} style={{ marginLeft: "20px" }} alt="Cloud" />
          <AnsTitle>
            <Title>{questionnaire.title}</Title>
            <CreateDate>
              생성일 {formatKST(questionnaire.createdAt)}
              <img src={Trash} style={{ marginLeft: "5px" }} alt="Trash" />
            </CreateDate>
          </AnsTitle>
          <CommentBox>
            <img src={Comment} alt="Comment" />
            <CreateDate>답변 {questionnaire.questions.length}개</CreateDate>
          </CommentBox>
          <BtnBox>
            <CopyBtn onClick={() => handleCopy(questionnaire.id)}>
              링크 복사
            </CopyBtn>
            <CheckBtn onClick={() => handleCheck(questionnaire.id)}>
              답변 확인하기
            </CheckBtn>
          </BtnBox>
        </Answer>
      ))}

      {/* 모달 컴포넌트 렌더링 */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Wrapper>
  );
}

export default FormList;
