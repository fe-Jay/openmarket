import React from 'react'
import styled from 'styled-components'
import { Search } from './Search';
import { NavButton } from './NavButton';

import logo from '../../Assets/Logo-hodu.svg'
import { A11yHidden } from '../common/A11yHidden';


const Header = () => {
    return (
        <>
            <Head>
                <div>
                    <h1>
                        <img src={logo} alt="호두마켓" />
                        <A11yHidden>
                            Hello World
                        </A11yHidden>
                    </h1>
                    <Search />
                    <NavButton />
                </div>
            </Head>
        </ >
    )
}

const Head = styled.header`
    width: 100%;
    background-color: #fff;
    padding: 1.375rem;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
    div {
        width: min(100%, 1280px);
        margin: 0 auto;
        border: 1p solid #eee;
        display: flex;
        align-items: center;
        gap: 2rem;
    }
`


export default Header