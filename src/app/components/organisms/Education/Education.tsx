"use client";

import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  margin-top: 5rem;
  @media (max-width: 1265px) {
     margin: 0;
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
  }
  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
    width: 100%;
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

const Education: React.FC = () => {
  return (
    <Conteiner>
      <Content>
        <section>
          <Title>
            04.1 <span>Educação</span>
          </Title>
          <ul>
            <h3>Universidade Braz Cubas (UBC)</h3>
            <li>Graduada, Análise e Desenvolvimento de Sistemas</li>
            <li>Mogi das Cruzes - SP | 2015 - 2018</li>
          </ul>
          <ul>
            <h3>Liceu Braz Cubas</h3>
            <li>Técnica em Eletrônica</li>
            <li>Mogi das Cruzes - SP | 2013 - 2014</li>
          </ul>
        </section>
        <section>
          <Title>
            04.2 <span>Cursos</span>
          </Title>
          <ul>
            <li>Imersão JavaScript - Reprograma</li>
            <li> Front-end - Reprograma</li>
            <li>Linux Admin - 4Linux</li>
            <li>Python - Maria vai com as Dev</li>
          </ul>
        </section>
      </Content>
    </Conteiner>
  );
};

export default Education;
