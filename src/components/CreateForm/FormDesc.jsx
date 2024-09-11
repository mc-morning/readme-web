import React from "react";
import { Wrapper, FormInput, FormBox } from "./FormDesc.styles";

function FormDesc() {
  return (
    <Wrapper>
      <FormBox>
        1. 질문지 제목을 입력해 주세요.
        <FormInput />
      </FormBox>
      <FormBox>
        2. 답변 작성에 참여할 인원 수를 알려주세요.
        <FormInput />
      </FormBox>
      <FormBox>
        3. 다음과 같은 질문이 포함돼요.
        <FormInput />
      </FormBox>
    </Wrapper>
  );
}

export default FormDesc;
