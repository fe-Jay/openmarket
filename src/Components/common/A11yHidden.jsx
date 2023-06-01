import React from 'react'
import styled from 'styled-components'

export const A11yHidden = ({ txt }) => {
    return (
        <ScreenOut>{`${txt}`}</ScreenOut>
    )
}

const ScreenOut = styled.span`
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
`

export default A11yHidden
