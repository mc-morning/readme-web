import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";

const Navbar = styled.div`
    height: 7.3vh;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #B9B9B9;
`;

const ImgContainer = styled.div`
    margin-left: 7%;
`;

const MenuContainer = styled.div`
    margin-right: 7%;
    position: relative;
    display: inline-block;
`;

const MenuLink = styled(Link)`
    margin: 15px;
    text-decoration: none;
    color: #333;
    font-size: 20px;
    font-style: normal;
    font-weight: 40;
    line-height: normal;
    letter-spacing: -0.8px;
`;


function LoginNav() {
    return (
        <Navbar>
            <ImgContainer>
                <a href="/"><img src={Logo}/></a>
            </ImgContainer>
            <MenuContainer>
                <MenuLink to="/createform">질문지 만들기</MenuLink>
                <MenuLink to="/">로그아웃</MenuLink>
            </MenuContainer>
        </Navbar>
    );
}

export default LoginNav;


