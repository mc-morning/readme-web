import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  ModalBox,
  ModalCon,
  ModalBtn,
} from "./FormList.styles";
import { instance } from "../../../api/axios";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalBox>
      <ModalCon>
        <p>복사가 완료되었습니다!</p>
        <ModalBtn onClick={onClose}>닫기</ModalBtn>
      </ModalCon>
    </ModalBox>
  );
};

function FormList() {
  const navigate = useNavigate();
  const [questionnaires, setQuestionnaires] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const fetchQuestionnaires = async () => {
    try {
      const response = await instance.get("/questionnaire/list");
      setQuestionnaires(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("질문지 리스트 불러오기 오류:", error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const response = await instance.get("/auth/user");
      setUserName(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("사용자 정보 불러오기 오류:", error);
    }
  };

  useEffect(() => {
    fetchQuestionnaires();
    fetchUserInfo();
  }, []);

  const formatKST = (dateString) => {
    const date = new Date(dateString);
    const kstOffset = 9 * 60;
    const localTime = new Date(date.getTime() + kstOffset * 60 * 1000);

    const year = localTime.getFullYear();
    const month = String(localTime.getMonth() + 1).padStart(2, "0");
    const day = String(localTime.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  };

  const handleCheck = (id) => {
    navigate(`/answercheck/${id}`);
  };

  const handleCopy = (id) => {
    const url = `${window.location.origin}/answercheck/${id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("링크 복사 실패:", error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <ListHeader>
        {userName.username} 님의 질문지 답변을 확인해 보세요!
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

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Wrapper>
  );
}

export default FormList;
