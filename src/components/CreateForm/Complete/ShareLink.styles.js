import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7.3vh 0 0 0;
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
  height: 48px;
  border-radius: 6px;
  border: 1px solid #cfcfcf;
  padding: 0 56px 0 12px;
  position: relative;
`;

export const CopyButton = styled.button`
  width: 43px;
  height: 48px;
  border-radius: 0px 6px 6px 0px;
  border: none;
  border-left: 1px solid #cfcfcf;
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

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalCon = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 30px 50px;
  font-family: "Pretendard Variable";
  text-decoration: none;
  color: #333;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
  text-align: center;
`;

export const ModalBtn = styled.button`
  width: 88px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  border: none;
  background: #4575f1;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
  margin: 10px;
`;

export const ModalCloseBtn = styled.button`
  width: 88px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  border: none;
  background: #a8a8a8;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
  margin: 10px;
`;
