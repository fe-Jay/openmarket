import React from "react";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingWrapper>
      <div className="load-3">
        <p>Loading 3</p>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 10px 10px 0;
  padding: 20px 20px 20px;
  border-radius: 5px;
  text-align: center;
  background-color: #d8d8d8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .line {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #4b9cdb;
  }

  .load-3 .line:nth-last-child(1) {
    animation: loadingC 0.6s 0.1s linear infinite;
  }
  .load-3 .line:nth-last-child(2) {
    animation: loadingC 0.6s 0.2s linear infinite;
  }
  .load-3 .line:nth-last-child(3) {
    animation: loadingC 0.6s 0.3s linear infinite;
  }
`;
