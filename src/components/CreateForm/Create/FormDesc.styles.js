import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const FormBox = styled.div`
  color: #333;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 900px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #cfcfcf;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 15px;
  padding-left: 15px;
`;

export const Text = styled.p`
  color: #888;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const AnsGuide = styled.div`
  width: 900px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #cfcfcf;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 10px;
  padding-left: 15px;
`;

export const CreateBtn = styled.button`
  width: 136px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  background: #366eff;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin: 50px 0 100px 900px;
`;
