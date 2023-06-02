import React from 'react';
import FetchComponent from '../common/FetchComponent';
import { A11yHidden } from '../common/A11yHidden';
import styled from 'styled-components';
import Header from '../common/Header';

const ProductList = () => (
    <>
        <Header />
        <FetchComponent url="products/">
            {(data) => (
                <ProductItem>
                    <h2>
                        <A11yHidden>상품리스트</A11yHidden>
                    </h2>
                    {data && data.results && Array.isArray(data.results) ? (
                        data.results.map((product) => (
                            <article key={product.product_id}>
                                <span>
                                    <img src={product.image} alt={product.product_name} />
                                </span>
                                <p>{product.store_name}</p>
                                <h3>{product.product_name}</h3>
                                <h4><strong>{product.price}</strong>원</h4>
                            </article>
                        ))
                    ) : (
                        <div>상품이 없습니다.</div>
                    )}
                </ProductItem>
            )}
        </FetchComponent>
    </>
);



const ProductItem = styled.section`
    width: mim(100%, 1280px);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    h2 {
        grid-column: 1 / -1;
    }
    article {
        * {
            margin: 1rem 0;
        }
        p {
            font-size: var(--font-size-xxs);
            color: var(--color-main-dark);
        }
        h3 {
            font-size: var(--font-size-xs);
            font-weight: 400;
        }
        h4 {
            font-size: var(--font-size-xxs);
            font-weight: 400;
            strong {
                font-size: var(--font-size-m);
                font-weight: 700;
            }
        }
        span {
            display: block;
            padding: 0;
            margin: 0;
            aspect-ratio: 1/1;
            object-fit: cover;
            overflow: hidden;
            border:1px solid #C4C4C4;
            border-radius: 10px;
            img {
                width: 100%;
                display: block;
                margin: 0;
            }
        }
    }
`

export default ProductList;
