import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  padding: 7.3vh 0 0 0;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TitleBox = styled.div`
  width: 1000px;
  color: #333;
  font-family: "Pretendard Variable";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  padding: 70px;
`;

export const Desc = styled.p`
  color: #707070;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

export const Highlight = styled.span`
  color: #466ed4;
`;

export const AnswerBox = styled.div`
  width: 1000px;
  color: #4575f1;
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 250%;
  margin-bottom: 120px;
`;

export const Answer = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 12px;
  background: #f4f7ff;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
  margin-top: 16px;
`;
