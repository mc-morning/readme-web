import React, { useEffect, useState } from "react";
import Complete from "../../../assets/Complete.png";
import Copy from "../../../assets/Copy.svg";
import {
  Wrapper,
  Highlight,
  Title,
  Desc,
  LinkBox,
  CopyBox,
  CopyButton,
  ModalBox,
  ModalBtn,
  ModalCloseBtn,
  ModalCon,
} from "./ShareLink.styles";
import { instance } from "../../../api/axios";
import { useNavigate } from "react-router-dom"; // For navigating to the home page

function ShareLink() {
  const [copySuccess, setCopySuccess] = useState("");
  const [questionnaires, setQuestionnaires] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate(); // React Router navigation

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
    fetchQuestionnaires();
  }, []);

  const linkToShare =
    questionnaires.length > 0 ? `${questionnaires[0].id}` : "";

  const copyToClipboard = () => {
    if (!linkToShare) {
      alert("링크가 없습니다.");
      return;
    }

    navigator.clipboard.writeText(linkToShare).then(
      () => {
        setCopySuccess("링크가 복사되었습니다!");
        setIsModalOpen(true); // Modal open on success
      },
      (err) => {
        setCopySuccess("복사에 실패했습니다. 다시 시도해주세요.");
        setIsModalOpen(true); // Open modal for failure as well
      }
    );
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const goToHome = () => {
    navigate("/"); // Navigate to home
  };

  return (
    <Wrapper>
      <Title>
        24-2 캡스톤디자인 08팀 박시은 동료평가{" "}
        <Highlight>질문지가 생성되었어요!</Highlight>
      </Title>
      <img src={Complete} alt="Complete" />
      <LinkBox>
        <Desc>지금 동료에게 질문지를 공유하고 답변을 받아 보세요</Desc>
        <CopyBox>
          {linkToShare ? (
            <>
              {linkToShare}
              <CopyButton onClick={copyToClipboard}>
                <img src={Copy} alt="Copy Icon" />
              </CopyButton>
            </>
          ) : (
            "질문지 링크를 불러오는 중입니다..."
          )}
        </CopyBox>
      </LinkBox>

      {isModalOpen && (
        <ModalBox>
          <ModalCon>
            <p>복사가 완료되었습니다!</p>
            <ModalCloseBtn onClick={closeModal}>닫기</ModalCloseBtn>
            <ModalBtn onClick={goToHome} style={{ marginLeft: "10px" }}>
              홈으로
            </ModalBtn>
          </ModalCon>
        </ModalBox>
      )}
    </Wrapper>
  );
}

export default ShareLink;
