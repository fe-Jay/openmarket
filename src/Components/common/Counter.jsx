/* eslint-disable no-unused-vars */
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { countAtom, priceAtom } from "../../recoil/cartCountAtom";
import {
  totalPrice,
  incrementCount,
  descrementCount,
} from "../../recoil/cartCountSelector";

import A11yHidden from "./A11yHidden";

export default function Counter() {
  const [count, setCount] = useRecoilState(countAtom);
  const [unitPrice, setUnitPrice] = useRecoilState(priceAtom);
  const setIncrement = useSetRecoilState(incrementCount);
  const setDecrement = useSetRecoilState(descrementCount);

  // * 장바구니 수량 변경
  const handleCartCount = e => {
    const buttonValue = e.target.value;

    if (buttonValue === "minus" && count > 1) {
      setDecrement();
    } else if (buttonValue === "plus") {
      setIncrement();
    }
  };

  return (
    <CountArticle>
      <h2>
        <A11yHidden>상품 수량 선택</A11yHidden>
      </h2>
      <button type="button" value="minus" onClick={e => handleCartCount(e)}>
        -
      </button>
      <p value={unitPrice}>{count}</p>
      <button type="button" value="plus" onClick={e => handleCartCount(e)}>
        +
      </button>
    </CountArticle>
  );
}

const CountArticle = styled.article`
  margin: 0.5rem 0;
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--color-light);
  background-color: #fff;
  button {
    background: none;
    border: none;
    width: 2rem;
    height: 2rem;
    color: var(--color-dark);
    &:nth-of-type(1) {
      border-right: 1px solid var(--color-light);
    }
    &:nth-of-type(2) {
      border-left: 1px solid var(--color-light);
    }
  }
  p {
    padding: 0 1rem;
  }
`;
