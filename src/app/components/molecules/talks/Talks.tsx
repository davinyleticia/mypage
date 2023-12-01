"use client";

import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  margin-top: 5rem;
  @media (max-width: 1265px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 2rem 0px;
  width: 80rem;
  section {
    margin: 0;
    ul {
      list-style: inside;
      margin: 1rem 0;
    }
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline; /* Fix the typo here (line instead of underline) */
      }
    }
  }
  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  span {
    background: #fff357;
    color: #000;
    padding: 0.4rem 0.9rem;
    font-weight: bolder;
  }
  margin-bottom: 3rem;
`;

const Talks: React.FC = () => {
  return (
    <Conteiner>
      <Content>
        <section>
          <Title>
            05.1 <span>Talks</span>
          </Title>
          <ul>
            <h3>Cursos de Linux</h3>
            <li>DIO.me - Online</li>
            <li>
              Explicações sobre os comandos ShellScript para manipulações de
              arq.
            </li>
          </ul>
          <ul>
            <h3>Python com Arduino</h3>
            <li>PyladiesSP - Online</li>
            <li>Integração do Python (PC) com Arduino para automações</li>
          </ul>
        </section>
        <section>
          <Title>
            05.2 <span>Publicações</span>
          </Title>
          <ul>
            <li>
              <a href="https://pt-docs.daviny.dev/python_basic_vol1/indice/">
                Python Book - Interno
              </a>
            </li>
            <li>
              <a href="https://pt-docs.daviny.dev/artigos/registrador-de-deslocamento-74hc595/">
                Registrador de deslocamento 74HC595
              </a>
            </li>
            <li>
              <a href="https://davinyleticia.github.io/exercicio_poo_python/">
                Exercicio POO Python Resolvidos
              </a>
            </li>
          </ul>
        </section>
      </Content>
    </Conteiner>
  );
};

export default Talks;
