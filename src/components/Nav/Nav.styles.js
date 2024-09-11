import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  height: 7.3vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #b9b9b9;
`;

export const ImgContainer = styled.div`
  margin-left: 7%;
`;

export const MenuContainer = styled.div`
  margin-right: 7%;
  position: relative;
  display: inline-block;
`;

export const MenuLink = styled(Link)`
  margin: 15px;
  font-family: "Pretendard Variable";
  text-decoration: none;
  color: #333;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;
