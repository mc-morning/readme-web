import React from "react";
import { useNavigate } from "react-router-dom";
import Plus from "../../../assets/Plus.svg";
import Cloud from "../../../assets/Cloud.svg";
import Comment from "../../../assets/Comment.svg";
import Trash from "../../../assets/Trash.svg";
import {
  Wrapper,
  ListHeader,
  HeaderButton,
  Answer,
  AnsTitle,
  Title,
  Date,
  CommentBox,
  BtnBox,
  CopyBtn,
  CheckBtn,
} from "./FormList.styles";

function AnswerList() {
  const navigate = useNavigate();

  const handleCheck = () => {
    navigate("/answercheck");
  };

  return (
    <Wrapper>
      <ListHeader>
        시은 님의 질문지 답변을 확인해 보세요!
        <HeaderButton
          onClick={() => {
            navigate("/createform");
          }}
        >
          <img src={Plus} /> 질문지 만들기
        </HeaderButton>
      </ListHeader>
      <Answer>
        <img src={Cloud} style={{ marginLeft: "20px" }} />
        <AnsTitle>
          <Title>LG 유플러스 미니 프로젝트</Title>
          <Date>
            생성일 2024.09.08
            <img src={Trash} style={{ marginLeft: "5px" }} />
          </Date>
        </AnsTitle>
        <CommentBox>
          <img src={Comment} />
          <Date>답변 6개</Date>
        </CommentBox>
        <BtnBox>
          <CopyBtn>링크 복사</CopyBtn>
          <CheckBtn onClick={handleCheck}>답변 확인하기</CheckBtn>
        </BtnBox>
      </Answer>
      <Answer>
        <img src={Cloud} style={{ marginLeft: "20px" }} />
        <AnsTitle>
          <Title>
            LG 유플러스 미니 프로젝asdasdjkahdkfjahkjfhl;jsdhfklhj트
          </Title>
          <Date>
            생성일 2024.09.08
            <img src={Trash} style={{ marginLeft: "5px" }} />
          </Date>
        </AnsTitle>
        <CommentBox>
          <img src={Comment} />
          <Date>답변 6개</Date>
        </CommentBox>
        <BtnBox>
          <CopyBtn>링크 복사</CopyBtn>
          <CheckBtn>답변 확인하기</CheckBtn>
        </BtnBox>
      </Answer>
      <Answer>
        <img src={Cloud} style={{ marginLeft: "20px" }} />
        <AnsTitle>
          <Title>
            LG 유플러스 미니 프로젝asdasdjkahdkfjahkjfhl;jsdhfklhj트
          </Title>
          <Date>
            생성일 2024.09.08
            <img src={Trash} style={{ marginLeft: "5px" }} />
          </Date>
        </AnsTitle>
        <CommentBox>
          <img src={Comment} />
          <Date>답변 6개</Date>
        </CommentBox>
        <BtnBox>
          <CopyBtn>링크 복사</CopyBtn>
          <CheckBtn>답변 확인하기</CheckBtn>
        </BtnBox>
      </Answer>
      <Answer>
        <img src={Cloud} style={{ marginLeft: "20px" }} />
        <AnsTitle>
          <Title>
            LG 유플러스 미니 프로젝asdasdjkahdkfjahkjfhl;jsdhfklhj트
          </Title>
          <Date>
            생성일 2024.09.08
            <img src={Trash} style={{ marginLeft: "5px" }} />
          </Date>
        </AnsTitle>
        <CommentBox>
          <img src={Comment} />
          <Date>답변 6개</Date>
        </CommentBox>
        <BtnBox>
          <CopyBtn>링크 복사</CopyBtn>
          <CheckBtn>답변 확인하기</CheckBtn>
        </BtnBox>
      </Answer>
    </Wrapper>
  );
}

export default AnswerList;
