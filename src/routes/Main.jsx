import React from "react";
import styled from "styled-components";
import BannerImg from "../assets/BannerImg.svg";
import AnswerList from "../components/Main/AnswerList";

const Wrapper = styled.div`
    height: 92.3vh;
    background-color: #FFF;
    text-align: center;
`;

const Banner = styled.div`
    height: 300px;
    background-color: #E5ECFF;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BannerText = styled.h1`
    color: #3D4043;
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
`;

function Main() {
    return (
        <Wrapper>
            <Banner>
                <img src={BannerImg}/>
                <BannerText>
                    간편하게 질문지를 만들고<br/> 
                    나에 대한 평가를 받아보세요.
                </BannerText>
            </Banner>
            <AnswerList/>
        </Wrapper>
    );
}

export default Main;