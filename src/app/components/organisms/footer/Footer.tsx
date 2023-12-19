"use client";

import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  margin-top: 3rem 
  @media (max-width: 1265px) {
    width: 100%;
    margin: 0;
  }
`;

const Content = styled.div`
  background: #5b4e5f;
  a {
    text-decoration: none;
    color: #000;
    background: #fff;
    padding: 1px 2px;
  }
`;

const BugText = styled.div`
  background: #5b4e5f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 16rem;
  padding-top: 4rem;
  h3 {
    font-family: Rubik, Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    color: #fff;
    background: #5b4e5f;
    color: #f1802d;
  }
  p {
    font-family: Rubik, Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    line-height: 1.5;
    color: #fff;
    background: #5b4e5f;
    padding: 0 1rem;
  }
  div {
    background: #5b4e5f;
    margin: 0;
  }
  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 0;
  }
`;

const Note = styled.div`
  background: #8e7c93;
  z-index: 50;
  position: relative;
  P {
    color: #fff;
    background: #8e7c93;
    padding: 1rem 0;
    text-align: center;
    font-family: Rubik, Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    line-height: 1.5;
  }
`;

const Footer: React.FC = () => {
  return (
    <Conteiner>
      <Content>
        <BugText>
          <h3>Sobre este site</h3>
          <div>
            <p>Construído com NextJS. </p>
            <p>
              Se você encontrar um bug, registre um{" "}
              <a href="https://github.com/davinyleticia/mypage/issues">issue</a>
              . Obrigada!{" "}
            </p>
            <p>Este site não coleta nenhum dado pessoal.</p>
          </div>
        </BugText>
        <Note>
          <p>
            Feito com amor por Daviny Letícia 2023 @{" "}
            <a href="https://github.com/davinyleticia/mypage">Github</a>
          </p>
        </Note>
      </Content>
    </Conteiner>
  );
};

export default Footer;
