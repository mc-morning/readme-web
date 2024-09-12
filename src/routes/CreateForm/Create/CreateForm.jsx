import React from "react";
import { Wrapper, Title, Highlight } from "./CreateForm.styles";
import FormDesc from "../../../components/CreateForm/Create/FormDesc";

function CreateForm() {
  return (
    <Wrapper>
      <Title>
        안녕하세요, 시은 님!
        <br />
        어떤 <Highlight>질문지</Highlight>를 만들어볼까요?🔍
      </Title>
      <FormDesc />
    </Wrapper>
  );
}

export default CreateForm;
