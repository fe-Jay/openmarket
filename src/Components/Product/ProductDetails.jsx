/* eslint-disable camelcase */
import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import cartCountAtom from "../../recoil/cartCountAtom";
import { A11yHidden } from "../common/A11yHidden";
import FetchComponent from "../common/FetchComponent";

export default function ProductDetails() {
  const { product_id } = useParams();
  const [count, setCount] = useRecoilState(cartCountAtom);

  return (
    <FetchComponent url={`products/${product_id}`}>
      {data => (
        <section>
          <h2>
            <A11yHidden>상품 상세</A11yHidden>
          </h2>
          {data && (
            <article key={data.product_id}>
              <span>
                <img src={data.image} alt={data.product_name} />
              </span>
              <p>{data.store_name}</p>
              <h3>{data.product_name}</h3>
              <h4>
                <strong>{data.price}</strong>원
              </h4>
              <p>
                {data.shipping_method} / {data.shipping_fee}
              </p>
            </article>
          )}

          <article>
            <h2>
              <A11yHidden>상품 수량 선택</A11yHidden>
            </h2>
            <button
              type="button"
              onClick={() => setCount(prevState => prevState - 1)}
            >
              -
            </button>
            <span>{count}</span>
            <button
              type="button"
              onClick={() => setCount(prevState => prevState + 1)}
            >
              +
            </button>
          </article>

          <article>
            <h2>총 상품금액</h2>
            <p>
              총 수량
              <strong>1</strong>개
            </p>
            <p>{data.price}</p>
          </article>
          <button type="button">바로 구매</button>
          <button type="button">장바구니</button>
        </section>
      )}
    </FetchComponent>
  );
}
