import React from "react";
import Logo from "../../assets/Logo.svg";
import { Navbar, ImgContainer, MenuContainer, MenuLink } from "./Nav.styles";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  // 토큰 확인 함수
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  // 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/"); // 로그아웃 후 로그인 페이지로 이동
  };

  return (
    <Navbar>
      <ImgContainer>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </ImgContainer>
      <MenuContainer>
        {accessToken && refreshToken ? (
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
