import { isDisabled } from '@testing-library/user-event/dist/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ListHeader = styled.div`
  color: #333;
  font-family: 'Pretendard Variable';
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding: 20px;
`;

export const HeaderButton = styled.button`
  width: 136px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  background: #366eff;
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const Answer = styled.div`
  width: 70%;
  height: 88px;
  align-self: center;
  border-radius: 12px;
  border: 1px solid #b6c9fd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 40px;
`;

export const AnsTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: start;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #383838;
  font-family: 'Pretendard Variable';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 405px;
`;

export const CreateDate = styled.p`
  color: #9b9b9b;
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const CommentBox = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 20px;
`;

export const CopyBtn = styled.button`
  width: 67px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #366eff;
  color: #366eff;
  background: #fff;
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
`;

export const CheckBtn = styled.button`
  width: 88px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  border: none;
  background: ${props => (props.isDisabled ? '#A8A8A8' : '#4575f1')};
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
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
  z-index: 3;
`;

export const ModalCon = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 30px 50px;
  font-family: 'Pretendard Variable';
  text-decoration: none;
  color: #333;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;

export const ModalBtn = styled.button`
  width: 88px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  border: none;
  background: #4575f1;
  color: #fff;
  font-family: 'Pretendard Variable';
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
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  cursor: pointer;
  margin: 10px;
`;
