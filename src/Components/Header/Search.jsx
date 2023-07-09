import React from "react";
import styled from "styled-components";

import search from "../../Assets/icon-search.svg";
import { A11yHidden } from "../common/A11yHidden";

export default function Search() {
  return (
    <SearchInput icon={search}>
      <A11yHidden>검색</A11yHidden>
      <form>
        <input type="text" placeholder="상품을 검색해보세요!" />
        <button type="button">
          <A11yHidden>검색</A11yHidden>
        </button>
      </form>
    </SearchInput>
  );
}

const SearchInput = styled.article`
  display: inline-block;
  width: min(100%, 400px);
  position: relative;
  input {
    width: 100%;
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-xxs);
    background-color: none;
    border: 2px solid var(--color-primary);
    border-radius: 2rem;
    &:focus {
      outline: none;
      box-shadow: 0 0 10px 0 var(--color-primary);
    }
  }
  button {
    position: absolute;
    right: 1rem;
    top: 0;
    width: 3rem;
    height: 100%;
    background: url(${props => props.icon}) no-repeat center/1.5rem;
    border: none;
  }
`;
