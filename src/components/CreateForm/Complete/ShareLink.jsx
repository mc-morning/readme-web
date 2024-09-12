import React, { useState } from "react";
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
} from "./ShareLink.styles";

function ShareLink() {
  const [copySuccess, setCopySuccess] = useState("");

  const linkToShare = "https://blog.naver.com/recoding_won";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkToShare).then(
      () => {
        setCopySuccess("링크가 복사되었습니다!");
        alert("링크가 복사되었습니다!");
      },
      (err) => {
        setCopySuccess("복사에 실패했습니다. 다시 시도해주세요.");
        alert("복사에 실패했습니다. 다시 시도해주세요.");
      }
    );
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
          {linkToShare}
          <CopyButton onClick={copyToClipboard}>
            <img src={Copy} alt="Copy Icon" />
          </CopyButton>
        </CopyBox>
      </LinkBox>
    </Wrapper>
  );
}

export default ShareLink;
