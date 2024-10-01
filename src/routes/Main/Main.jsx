import React from 'react';
import landing1 from '../../assets/Landing1.png';
import AnswerList from '../../components/Main/FormList/FormList';
import Landing from '../../components/Main/Landing/Landing';
import { Wrapper, Banner, BannerText, Highlight } from './Main.styles';

function Main() {
  const currentTime = new Date().getTime();
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  const accessExpiredAt = localStorage.getItem('access_expired_at');

  return (
    <Wrapper>
      <Banner>
        <div>
          <BannerText>
            동료들이 보는
            <Highlight> 나의 모습</Highlight>이 어떤지
            <br />
            궁금하지 않으신가요?
            <p>
              리드미에서는 동료들의 답변을 통해 자신의 강점과 보완할 점을 찾고,
              <br />
              이를 활용하고 개선할 수 있는 기회를 마련해요.
            </p>
          </BannerText>
          <img src={landing1} alt="landing1" className="content" />
        </div>
      </Banner>
      {accessToken && refreshToken && currentTime < accessExpiredAt ? <AnswerList /> : <Landing />}
    </Wrapper>
  );
}

export default Main;
