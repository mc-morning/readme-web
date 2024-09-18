import React, { useState } from "react";
import { Wrapper } from "./WriteAnswer.styles";
import FormTitle from "../../../components/Answer/Write/FormTitle";
import WriteForm from "../../../components/Answer/Write/WriteForm";

function WriteAnswer() {
  return (
    <Wrapper>
      <FormTitle />
      <WriteForm />
    </Wrapper>
  );
}

export default WriteAnswer;
