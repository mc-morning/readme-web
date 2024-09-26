import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Plus from "../../../assets/Plus.svg";
import Cloud from "../../../assets/Cloud.svg";
import Comment from "../../../assets/Comment.svg";
import Trash from "../../../assets/Trash.svg";
import CloudZero from "../../../assets/CloudZero.svg";
import CommentZero from "../../../assets/CommentZero.svg";
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
  ModalCloseBtn,
} from "./FormList.styles";
import { instance } from "../../../api/axios";

const CopyModal = ({ isOpen, onClose }) => {
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

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <ModalBox>
      <ModalCon>
        <p>정말로 삭제하시겠습니까?</p>
        <ModalCloseBtn onClick={onClose}>닫기</ModalCloseBtn>
        <ModalBtn onClick={onDelete} style={{ marginLeft: "10px" }}>
          삭제하기
        </ModalBtn>
      </ModalCon>
    </ModalBox>
  );
};

function FormList() {
  const navigate = useNavigate();
  const [questionnaires, setQuestionnaires] = useState([]);
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [deleteTargetId, setDeleteTargetId] = useState(null); // 삭제할 대상 id

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
        setIsCopyModalOpen(true);
      })
      .catch((error) => {
        console.error("링크 복사 실패:", error);
      });
  };

  const closeCopyModal = () => {
    setIsCopyModalOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteClick = (id) => {
    setDeleteTargetId(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await instance.delete(`/questionnaire/${deleteTargetId}`);
      fetchQuestionnaires();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("질문지 삭제 실패:", error);
    }
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
          {questionnaire.completedUsers.length > 0 ? (
            <>
              <img
                src={Cloud}
                style={{
                  marginLeft: "20px",
                  opacity:
                    (questionnaire.completedUsers.length + 1) /
                    questionnaire.headCount,
                }}
                alt="Cloud"
              />
            </>
          ) : (
            <>
              <img src={CloudZero} style={{ marginLeft: "20px" }} alt="Cloud" />
            </>
          )}
          <AnsTitle>
            <Title>{questionnaire.title}</Title>
            <CreateDate>
              생성일 {formatKST(questionnaire.createdAt)}
              <img
                src={Trash}
                style={{ marginLeft: "5px", cursor: "pointer" }}
                alt="Trash"
                onClick={() => handleDeleteClick(questionnaire.id)}
              />
            </CreateDate>
          </AnsTitle>
          <CommentBox>
            {questionnaire.completedUsers.length > 0 ? (
              <>
                <img src={Comment} alt="Comment" />
                <CreateDate>
                  답변 {questionnaire.completedUsers.length}개
                </CreateDate>
              </>
            ) : (
              <>
                <img src={CommentZero} alt="Comment" />
                <CreateDate>아직 답변이 없어요</CreateDate>
              </>
            )}
          </CommentBox>
          <BtnBox>
            <CopyBtn onClick={() => handleCopy(questionnaire.id)}>
              링크 복사
            </CopyBtn>
            <CheckBtn
              onClick={() => handleCheck(questionnaire.id)}
              isDisabled={questionnaire.completedUsers.length === 0}
              disabled={questionnaire.completedUsers.length === 0} // disabled 속성 추가
            >
              답변 확인하기
            </CheckBtn>
          </BtnBox>
        </Answer>
      ))}

      <CopyModal isOpen={isCopyModalOpen} onClose={closeCopyModal} />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={handleConfirmDelete}
      />
    </Wrapper>
  );
}

export default FormList;
