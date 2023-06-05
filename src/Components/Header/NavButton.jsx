import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom";
import { ButtonIcon } from './ButtonIcon';

import cart from '../../Assets/icon-shopping-cart.svg'
import user from '../../Assets/icon-user.svg'
import bag from '../../Assets/icon-shopping-bag.svg'
import Button from '../common/Button';


export const NavButton = () => {
    const location = useLocation();
    console.log(location.pathname); // 현재 페이지 경로

    return (
        <NavWrap>
            {
                location.pathname === '/user' ? <UserHeader />
                    : location.pathname === '/seller' ? <SellerHeader />
                        : <GuestHeader />
            }
        </NavWrap>
    )
}

const GuestHeader = () => (
    <>
        <Link to="/cart">
            <ButtonIcon icon={cart}>장바구니</ButtonIcon>
        </Link>
        <Link to="/login">
            <ButtonIcon icon={user}>로그인</ButtonIcon>
        </Link>
    </>
)

const UserHeader = () => (
    <>
        <Link to="/cart">
            <ButtonIcon icon={cart}>장바구니</ButtonIcon>
        </Link>
        <Link to="/login">
            <ButtonIcon icon={user}>로그아웃</ButtonIcon>
        </Link>
    </>
)

const SellerHeader = () => (
    <>
        <Link to="/mypage">
            <ButtonIcon icon={user}>마이페이지</ButtonIcon>
        </Link>
        <Link to="/">
            <Button icon={bag} variant="primary" size="sm">판매자 센터</Button>
        </Link>
    </>
)

const NavWrap = styled.nav`
    flex: 1 0 0;
    gap: 1rem;
    display: flex;
    justify-content: flex-end;
`