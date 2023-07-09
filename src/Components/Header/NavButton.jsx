/* eslint-disable no-nested-ternary */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import bag from "../../Assets/icon-shopping-bag.svg";
import cart from "../../Assets/icon-shopping-cart.svg";
import user from "../../Assets/icon-user.svg";
import Button from "../common/Button";

import ButtonIcon from "./ButtonIcon";

export default function NavButton() {
  const location = useLocation();
  // console.log(location.pathname); // 현재 페이지 경로

  return (
    <NavWrap>
      {location.pathname === "/user" ? (
        <UserHeader />
      ) : location.pathname === "/seller" ? (
        <SellerHeader />
      ) : (
        <GuestHeader />
      )}
    </NavWrap>
  );
}

function GuestHeader() {
  return (
    <>
      <Link to="/cart">
        <ButtonIcon icon={cart}>장바구니</ButtonIcon>
      </Link>
      <Link to="/login">
        <ButtonIcon icon={user}>로그인</ButtonIcon>
      </Link>
    </>
  );
}

function UserHeader() {
  return (
    <>
      <Link to="/cart">
        <ButtonIcon icon={cart}>장바구니</ButtonIcon>
      </Link>
      <Link to="/login">
        <ButtonIcon icon={user}>로그아웃</ButtonIcon>
      </Link>
    </>
  );
}

function SellerHeader() {
  return (
    <>
      <Link to="/mypage">
        <ButtonIcon icon={user}>마이페이지</ButtonIcon>
      </Link>
      <Link to="/">
        <Button icon={bag} variant="primary" size="sm">
          판매자 센터
        </Button>
      </Link>
    </>
  );
}

const NavWrap = styled.nav`
  flex: 1 0 0;
  gap: 1rem;
  display: flex;
  justify-content: flex-end;
`;
