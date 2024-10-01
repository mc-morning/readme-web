import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Desc, TitleBox, Wrapper } from "./FormTitle.styles";
import { instance } from "../../../api/axios";

function FormTitle() {
  const [userName, setUserName] = useState("");
  const { questionnaireId } = useParams();
  const [questionnaire, setQuestionnaire] = useState(null);

  const fetchUserName = async () => {
    try {
      const response = await instance.get("/auth/user");
      setUserName(response.data);
    } catch (error) {
      console.log("사용자 정보 불러오기 실패", error);
    }
  };

  const fetchQuestionnaire = async () => {
    try {
      const response = await instance.get(`/questionnaire/${questionnaireId}`);
      setQuestionnaire(response.data);
    } catch (error) {
      console.error("질문지 불러오기 오류:", error);
    }
  };

  useEffect(() => {
    if (questionnaireId) {
      fetchQuestionnaire();
      fetchUserName();
    }
  }, [questionnaireId]);

  if (!questionnaire) {
    return <div>...</div>;
  }

  return (
    <Wrapper>
      <TitleBox>
        {questionnaire.creator.username} 님에 대한 솔직한 평가를 남겨 주세요 ✍🏻
        <Desc>
          {userName.username} 님의 솔직한 답변이{" "}
          {questionnaire.creator.username} 님의 성장에 큰 도움이 될 거예요!
          <br />
          모든 답변은 익명으로 수집되어 전달되니 편하게 답변을 작성해 주세요.
        </Desc>
      </TitleBox>
    </Wrapper>
  );
}

export default FormTitle;
