import React, { useEffect, useState } from "react";
import {
  Wrapper,
  FormInput,
  FormBox,
  AnsGuide,
  CreateBtn,
  Text,
} from "./FormDesc.styles";
import { useNavigate } from "react-router-dom";
import Check from "../../../assets/Check.svg";
import { instance } from "../../../api/axios";

function FormDesc() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [headCount, setHeadCount] = useState("");
  const [userName, setUserName] = useState("");

  const fetchUserInfo = async () => {
    try {
      const response = await instance.get("/auth/user");
      setUserName(response.data);
    } catch (error) {
      console.log("사용자 정보 불러오기 오류:", error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleCreate = async () => {
    try {
      const response = await instance.post("/questionnaire/create", {
        title,
        headCount: Number(headCount),
      });

      if (response.status === 201) {
        // Extract the questionnaire id from the response and navigate
        const questionnaireId = response.data.id;
        navigate(`/completeform/${questionnaireId}`);
      }
    } catch (error) {
      console.error("질문지 생성 실패:", error);
    }
  };

  return (
    <Wrapper>
      <FormBox>
        1. 질문지 제목을 입력해 주세요.
        <FormInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormBox>
      <FormBox>
        2. 답변 작성에 참여할 인원 수를 알려주세요.
        <FormInput
          value={headCount}
          onChange={(e) => setHeadCount(e.target.value)}
        />
      </FormBox>
      <FormBox>
        3. 다음과 같은 질문이 포함돼요.
        <Text>아직 질문을 커스텀 할 수 있는 기능은 제공하지 않고 있어요.</Text>
        <AnsGuide>
          <ul>
            <li style={{ marginBottom: "20px" }}>
              협업 시 {userName.username} 님의 장점은 무엇인가요?
            </li>
            <li style={{ marginBottom: "20px" }}>
              프로젝트를 하면서 {userName.username} 님의 어떤 점이 돋보였나요?
            </li>
            <li style={{ marginBottom: "20px" }}>
              앞으로 {userName.username} 님이 프로젝트를 하면서 보완해야 할
              부분이 있나요?
            </li>
            <li>{userName.username} 님께 마지막으로 하고 싶은 말이 있나요?</li>
          </ul>
        </AnsGuide>
      </FormBox>
      <CreateBtn onClick={handleCreate}>
        질문지 만들기
        <img src={Check} alt="Create" />
      </CreateBtn>
    </Wrapper>
  );
}

export default FormDesc;
