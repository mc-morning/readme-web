import React, { useState } from "react";
import {
  Answer,
  InputBox,
  Wrapper,
  CharCount,
  PrevBtn,
  NextBtn,
  BtnBox,
} from "./WriteForm.styles";
import Prev from "../../../assets/Prev.svg";
import Next from "../../../assets/Next.svg";

function WriteForm() {
  const [text, setText] = useState("");
  const maxLength = 1000;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Wrapper>
      <Answer>2. 협업 시 시은 님의 장점은 무엇인가요?</Answer>
      <InputBox
        value={text}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder="여기에 답변을 입력하세요."
      />
      <CharCount>{`${text.length} / ${maxLength}자`}</CharCount>
      <BtnBox>
        <PrevBtn>
          <img src={Prev} />
          이전 질문으로
        </PrevBtn>
        <NextBtn>
          다음 질문으로
          <img src={Next} />
        </NextBtn>
      </BtnBox>
    </Wrapper>
  );
}

export default WriteForm;
