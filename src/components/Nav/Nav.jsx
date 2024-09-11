import React from "react";
import Logo from "../../assets/Logo.svg";
import { Navbar, ImgContainer, MenuContainer, MenuLink } from "./Nav.styles";

function Nav() {
  return (
    <Navbar>
      <ImgContainer>
        <a href="/">
          <img src={Logo} />
        </a>
      </ImgContainer>
      <MenuContainer>
        <MenuLink to="/">마이페이지</MenuLink>
        <MenuLink to="/login">로그인</MenuLink>
      </MenuContainer>
    </Navbar>
  );
}

export default Nav;
