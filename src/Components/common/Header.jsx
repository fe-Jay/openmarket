import React from 'react'
import styled from 'styled-components'
import { A11yHidden } from './A11yHidden';
import logo from '../../Assets/Logo-hodu.svg'
import cart from '../../Assets/icon-shopping-cart.svg'
import user from '../../Assets/icon-user.svg'
import bag from '../../Assets/icon-shopping-bag.svg'
import Button from '../common/Button';

const Header = () => {
    return (
        <Head>
            <Wrapper>
                <h1>
                    <img src={logo} alt="호두마켓" />
                </h1>
                <Search>
                    <A11yHidden>검색</A11yHidden>
                    <form>
                        <input type="text" placeholder="상품을 검색해보세요!" />
                        <button>검색</button>
                    </form>
                </Search>
                <article>
                    <A11yHidden>메뉴</A11yHidden>
                    <ButtonIcon icon={cart}>장바구니</ButtonIcon>
                    <ButtonIcon icon={user}>마이페이지</ButtonIcon>
                    <Button icon={bag} variant="primary" size="sm">판매자 센터</Button>

                    {/* <Button icon={bag} size="md" variant="primary">판매자 센터</Button> */}
                </article>
            </Wrapper>
        </Head>
    )
}

const Head = styled.header`
    width: 100%;
    background-color: #fff;
    padding: 1.375rem;
`


const Wrapper = styled.div`
    width: min(100%, 1280px);
    margin: 0 auto;
    border: 1p solid #eee;
`

const Search = styled.article`
    display: inline-block;
    width: min(100%, 400px);
`

// ButtonIcon
const StyledButtonIcon = styled.button`
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    background-color: transparent;
    border: 0;
    background: url(${(props) => props.icon})no-repeat center/1.5rem;
`

const ButtonIcon = ({ icon, children }) => {
    return (
        <StyledButtonIcon icon={icon}>
            {children}
        </StyledButtonIcon>
    )
}

// Button

export default Header