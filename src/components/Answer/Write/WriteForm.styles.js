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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  margin-bottom: 20px;
  height: 6px;
  position: fixed;
  top: 7.3vh;
  left: 0;
  display: flex;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 50px;
  background: #4575f1;
  width: 0;
  transition: width 0.3s ease;
`;

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // 화면 어두워짐
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; // 화면 위에 오도록
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
