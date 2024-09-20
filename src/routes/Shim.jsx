import React, { useState } from "react";
import { Wrapper } from "./Answer/Check/AnswerCheck.styles";

function WriteAnswer() {
  const [idx, setIdx] = useState(0);
  const label = ["탐정", "함정", "인정"];
  return (
    <Wrapper>
      <h1>답변을확인해보아요.</h1>
      <span>전 경원입니다</span>

      <div
        onClick={() => setIdx((prev) => (prev >= 2 ? prev - 2 : prev + 1))}
        style={{ padding: "10px", backgroundColor: "gray", cursor: "pointer" }}
      >
        <span>{label[idx]}이죠</span>
      </div>
    </Wrapper>
  );
}

export default WriteAnswer;
