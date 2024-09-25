import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard Variable';
  padding: 0 0 278px 0;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 40px;
  font-weight: 600;
  text-align: left;

  span {
    color: #4575f1;
  }
`;

export const Title2 = styled.h1`
  margin: 0 0 4px 0;
  padding: 0;
  font-size: 32px;
  font-weight: 600;
  text-align: left;

  span {
    color: #4575f1;
  }
`;

export const Description = styled.span`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
`;

export const Section1 = styled.section`
  width: 100%;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  transition: all 1s;
  transform: translateY(150px);

  img {
    width: 364px;
    height: 328px;
  }
`;

export const Section2 = styled.section`
  width: 100%;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  transform: translateY(150px);

  h1 {
    text-align: center;
    line-height: 1.3;
  }
  span {
    color: #4575f1;
  }
  img {
    width: 680px;
    height: 433px;
    margin-top: 40px;
  }
`;

export const Section3 = styled.section`
  width: 100%;
  margin-top: 144px;
  padding-top: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  background: linear-gradient(0deg, #e4ebff 0%, rgba(247, 249, 255, 0) 100%);

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    transition: all 1s;
    transform: translateY(150px);
  }
`;

export const Box = styled.div`
  max-width: 600px;
  padding: 30px;
  border-radius: 12px;
  background: ${props => props.background};
  font-weight: 500;
  text-align: left;
`;

export const Section4 = styled.section`
  width: 100%;
  padding: 154px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 400px;
  height: 66px;
  border-radius: 18px;
  background: #4575f1;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  border: none;
  color: white;
  margin-top: 32px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 278px;
  background: #333333;
  padding: 60px 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  span {
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
  }
`;
