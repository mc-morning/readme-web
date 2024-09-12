import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  height: 96px;
  flex-shrink: 0;
  color: #366eff;
  font-family: "Pretendard Variable";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  padding: 60px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Highlight = styled.span`
  color: #333;
`;

export const LinkBox = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CopyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 540px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #cfcfcf;
  position: relative;
`;

export const CopyButton = styled.button`
  width: 43px;
  height: 48px;
  border-radius: 0px 6px 6px 0px;
  border: 1px solid #cfcfcf;
  background: #e1e9ff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    background-color: #d1d9ff;
  }
`;

export const Desc = styled.p`
  color: #3d4043;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
