import React from "react";
import Logo from "../../assets/Logo.svg";
import { Navbar, ImgContainer, MenuContainer, MenuLink } from "./Nav.styles";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const currentTime = new Date().getTime();

  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const accessExpiredAt = localStorage.getItem("access_expired_at");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar>
      <ImgContainer>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </ImgContainer>
      <MenuContainer>
        {accessToken && refreshToken && currentTime < accessExpiredAt ? (
          <>
            <MenuLink to="/createform">질문지 만들기</MenuLink>
            <MenuLink as="button" onClick={handleLogout}>
              로그아웃
            </MenuLink>
          </>
        ) : (
          <>
            <MenuLink to="/">마이페이지</MenuLink>
            <MenuLink to="/login">로그인</MenuLink>
          </>
        )}
      </MenuContainer>
    </Navbar>
  );
}

export default Nav;
