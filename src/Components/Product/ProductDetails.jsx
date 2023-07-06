import React from 'react'
import { Link, useParams } from 'react-router-dom'
import FetchComponent from '../common/FetchComponent';
import { A11yHidden } from '../common/A11yHidden';

export default function ProductDetails() {
  const { product_id } = useParams();
  console.log(product_id)
  return (
    <FetchComponent url={`products/${product_id}`}>
      {(data) => (
        <section>
          <h2>
            <A11yHidden>상품 상세</A11yHidden>
          </h2>
          {
            data &&
            <article key={data.product_id}>
              <span>
                <img src={data.image} alt={data.product_name} />
              </span>
              <p>{data.store_name}</p>
              <h3>{data.product_name}</h3>
              <h4><strong>{data.price}</strong>원</h4>
              <p>{data.shipping_method} / {data.shipping_fee}</p>
            </article>
          }

          <article>
            <h2>
              <A11yHidden>상품 수량 선택</A11yHidden>
            </h2>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </article>

          <article>
            <h2>총 상품금액</h2>
            <p>총 수량
              <strong>
                1
              </strong>
              개
            </p>
            <p>
              {data.price}
            </p>
          </article>
          <button>바로 구매</button>
          <button>장바구니</button>
        </section>
      )}
    </FetchComponent >
  )
}
