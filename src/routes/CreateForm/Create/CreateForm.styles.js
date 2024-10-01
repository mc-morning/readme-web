import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Title = styled.div`
  height: 96px;
  flex-shrink: 0;
  color: #333;
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  padding: 80px 500px 80px 0px;
`;

export const Highlight = styled.span`
  color: #366eff;
`;
