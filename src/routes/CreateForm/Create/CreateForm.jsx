import React, { useEffect, useState } from "react";
import { Wrapper, Title, Highlight } from "./CreateForm.styles";
import FormDesc from "../../../components/CreateForm/Create/FormDesc";
import { instance } from "../../../api/axios";

function CreateForm() {
  const [userName, setUserName] = useState("");

  const fetchUserInfo = async () => {
    try {
      const response = await instance.get("/auth/user");
      setUserName(response.data);
    } catch (error) {
      console.log("사용자 정보 불러오기 오류:".error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Wrapper>
      <Title>
        안녕하세요, {userName.username} 님!
        <br />
        어떤 <Highlight>질문지</Highlight>를 만들어볼까요?🔍
      </Title>
      <FormDesc />
    </Wrapper>
  );
}

export default CreateForm;
