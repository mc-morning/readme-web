import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 92.3vh;
  background-color: #fff;
  text-align: center;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Banner = styled.div`
  height: 300px;
  background-color: #e5ecff;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    box-sizing: border-box;
    position: relative;
    padding: 52px 0 0 0;
    z-index: 2;
    width: 720px;
    height: 100%;
    gap: 20px;

    img {
      align-self: flex-end;
      width: 332px;
      height: 300px;
      position: absolute;
      bottom: -48px;
    }
  }
`;

export const BannerText = styled.h1`
  margin: 0;
  color: #3d4043;
  font-family: 'Pretendard Variable';
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  text-align: left;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const Highlight = styled.span`
  color: #366eff;
`;
