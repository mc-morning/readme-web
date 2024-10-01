import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3vh 0 0 0;
  height: 92.3vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Desc = styled.div`
  flex-shrink: 0;
  color: #333;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
`;

export const Highlight = styled.h1`
  color: #366eff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
`;

export const Title = styled.p`
  color: #383838;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const AnswerBtn = styled.button`
  width: 360px;
  height: 56px;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: #4575f1;
  color: rgba(255, 255, 255, 0.85);
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;
