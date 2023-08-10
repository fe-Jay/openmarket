/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
// import styled, { css } from "styled-components";

export default function TextInput({
  type,
  key,
  placeholder,
  value,
  error,
  errorMsg = null,
  onChange,
  label = null,
  ...props
}) {
  const handleChange = e => {
    onChange(e);
    console.log(e.target.value);
  };

  return (
    <InputArticle>
      {label && <label htmlFor={key}>{label}</label>}
      <input
        type={type}
        key={key}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <p>{errorMsg}</p>}
    </InputArticle>
  );
}

const InputArticle = styled.div`
  width: min(100%, 400px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: var(--font-size-micro);
    font-weight: bold;
    color: var(--color-dark);
  }

  p {
    font-size: var(--font-size-micro);
    color: var(--color-primary);
  }
  input {
    outline: none;
    border: none;
    min-height: 48px;
    padding: 0 8px;
    border-bottom: 1px solid var(--color-light);

    &:focus {
      border-bottom: 1px solid var(--color-primary);
    }
  }

  &:not(:first-child) {
    margin-top: 24px;
  }
`;
