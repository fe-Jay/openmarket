import React from "react";
import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
    --button-font-size: var(--font-size-xxs);
    --button-padding: 0.625rem 1rem;
    --button-radius: 0.25rem;
    --button-display: inline-flex;
  `,
  md: css`
    --button-font-size: var(--font-size-xxs);
    --button-padding: 1rem 4.25rem;
    --button-radius: 0.25rem;
    --button-display: inline-flex;
  `,
  lg: css`
    --button-font-size: var(--font-size-xs);
    --button-padding: 1.25rem 14rem;
    --button-radius: 0.25rem;
    --button-display: flex;
  `,
};

const VARIANTS = {
  primary: css`
    --button-color: var(--color-white);
    --button-background: var(--color-primary);
    --button-border: 1px solid var(--color-primary);
  `,
  white: css`
    --button-color: var(--color-dark);
    --button-background: var(--color-white);
    --button-border: 1px solid var(--color-light);
  `,
  dark: css`
    --button-color: var(--color-white);
    --button-background: var(--color-dark);
    --button-border: 1px solid var(--color-dark);
  `,
};

function Button({
  icon,
  size,
  variant,
  disabled,
  children,
  onClick,
  ...props
}) {
  return (
    <StyledButton
      icon={icon}
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <span>{children}</span>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${({ size }) => SIZES[size]}
  ${({ variant }) => VARIANTS[variant]}

  font:inherit;
  cursor: pointer;
  margin: 0;
  border: var(--button-border, var(--color-primary));
  padding: var(--button-padding, 0.75rem, 1.5rem);
  font-size: var(--button-font-size, 1rem);
  border-radius: var(--button-radius, 0.5rem);
  color: var(--button-color, var(--color-white));
  background: var(--button-background, var(--color-primary));
  display: var(--button-display, inline-flex);
  align-items: center;
  gap: 0.25rem;
  &:active,
  &:hover,
  &:focus {
    opacity: 0.78;
  }
  + button {
    margin: 0 0 0 0.5rem;
  }

  ${({ icon }) =>
    icon &&
    css`
      &::before {
        content: "";
        background: url(${props => props.icon}) no-repeat center/1.5rem;
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--color-dark);
      background: var(--color-light);
      border: 1px solid var(--color-light);
      cursor: not-allowed;
    `};
`;

export default Button;
