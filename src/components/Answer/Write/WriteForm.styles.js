import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Answer = styled.div`
  width: 900px;
  color: #4575f1;
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const InputBox = styled.textarea`
  width: 850px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid #cfcfcf;
  padding: 20px;
  margin-top: 20px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  resize: none;
`;

export const CharCount = styled.div`
  width: 850px;
  text-align: right;
  margin-top: 10px;
  font-family: "Pretendard Variable";
  font-size: 14px;
  color: #666;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 20px;
  padding: 50px 0 0 600px;
`;

export const PrevBtn = styled.button`
  cursor: pointer;
  width: 136px;
  height: 44px;
  flex-shrink: 0;
  color: #366eff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;
  border: 1px solid #366eff;
  background-color: #ffffff;
  border-radius: 6px;
`;

export const NextBtn = styled.button`
  cursor: pointer;
  width: 136px;
  height: 44px;
  flex-shrink: 0;
  color: #ffffff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;
  border: 1px solid #366eff;
  background-color: #366eff;
  border-radius: 6px;
`;
