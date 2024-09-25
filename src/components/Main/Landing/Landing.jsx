import React, { useRef } from 'react';

import landing1 from '../../../assets/Landing1.png';
import landing2 from '../../../assets/Landing2.png';
import landing3 from '../../../assets/Landing3.png';
import landing4 from '../../../assets/Landing4.png';

import Logo from '../../../assets/LogoV2.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useComponentOnScreen } from '../../../hooks/useComponentOnScreen';
import {
  Box,
  Button,
  Description,
  Footer,
  Section1,
  Section2,
  Section3,
  Section4,
  Text,
  Title1,
  Title2,
  Wrapper,
} from './Landing.styles';

function Landing() {
  const navigate = useNavigate();

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  useComponentOnScreen([section1Ref, section2Ref, section3Ref, section4Ref, section5Ref, section6Ref]);

  return (
    <Wrapper>
      <Section1 ref={section1Ref}>
        <Text>
          <Title1 className="title">
            동료들이 보는 <span>나의 모습</span>이 어떤지
            <br />
            궁금하지 않으신가요?
          </Title1>
          <Description className="content">
            리드미에서는 동료들의 답변을 통해 자신의 강점과 보완할 점을 찾고,
            <br />
            이를 활용하고 개선할 수 있는 기회를 마련해요.
          </Description>
        </Text>
        <img src={landing1} alt="landing1" className="content" />
      </Section1>

      <Section2 ref={section2Ref}>
        <Title1 className="title">
          나에 대한 객관적인 평가가 궁금하다면,
          <br />
          지금 바로 <span>리드미</span>를 이용해 보세요
        </Title1>
        <img src={landing2} alt="landing2" className="content" />
      </Section2>

      <Section3>
        <section ref={section3Ref}>
          <Title2 className="title">동료의 피드백을 통해 한층 더 성장할 수 있어요</Title2>
          <Box background="#FFF4F7" className="content">
            윤정 님 덕분에 협업이 정말 매끄럽게 진행될 수 있었습니다! 💕 항상 명확하고 효과적인 방법으로 자신의 의견을
            전달해 주셨고, 팀원들의 다양한 의견을 경청하며 조율하는 데 큰 역할을 해주셨습니다. 정말 최고의 커뮤니케이터
            👍🏻
          </Box>
          <Box background="#F6F4FF" className="content">
            안녕하세요 정석 님! 이번 프로젝트의 일정이 많이 뒤쳐져서 아쉬웠습니다 🥲 앞으로는 일정 관리와 팀 내 소통을
            더욱 강화하여 비슷한 상황이 반복되지 않기를 바라며, 함께 노력해 나갔으면 좋겠습니다! 같이 화이팅 해요~ 🔥
          </Box>
        </section>

        <section ref={section4Ref}>
          <Title2 className="title">✏️ 간편하게 질문지를 생성하고</Title2>
          <img src={landing3} alt="landing3" style={{ width: '615px', height: '237px' }} className="content" />
        </section>

        <section ref={section5Ref}>
          <Title2 className="title">팀원들에게 공유해 보세요 ✉️</Title2>
          <img src={landing4} alt="landing4" style={{ width: '469px', height: '519px' }} className="content" />
        </section>
      </Section3>

      <Section4 ref={section6Ref}>
        <img src={Logo} alt="logo" className="content" />
        <Button onClick={() => navigate('/login')} className="content">
          지금 사용해 보기
        </Button>
      </Section4>

      <Footer>
        <span>2024 맹모닝불여일견</span>
        <Link href="https://github.com/mc-morning" target="_blank">
          <span>https://github.com/mc-morning</span>
        </Link>
      </Footer>
    </Wrapper>
  );
}

export default Landing;
