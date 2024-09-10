import React from "react";
import styled from "styled-components";
import Logo from "../assets/LogoV2.svg";

const Wrapper = styled.div`
    height: 92.3vh;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.p`
    color: #383838;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 50px;
`;

function Login() {
    return (
        <Wrapper>
            <img src={Logo}/>
            <Title>나 자신에 대해 알아 보고 싶다면?</Title>
        </Wrapper>
    );
}

export default Login;