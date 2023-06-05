import React from 'react'
import styled from 'styled-components'

export const ButtonIcon = ({ icon, children }) => {
    return (
        <StyledButtonIcon icon={icon}>
            <span>
                {children}
            </span>
        </StyledButtonIcon>
    )
}

// ButtonIcon
const StyledButtonIcon = styled.button`
    display: inline-block;
    width: fit-content;
    min-width: 3.125rem;
    height: 3.125rem;
    background-color: transparent;
    border: none;
    box-shadow:none;
    background: url(${(props) => props.icon})no-repeat center 0.25rem/1.5rem;
    position: relative;
    span {
        word-break: keep-all;
        font-size:var(--font-size-micro);
        color: var(--color-dark);
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
    }
`