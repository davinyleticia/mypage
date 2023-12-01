"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Conteiner = styled.div`  @media (max-width: 1265px) {
  width: 100%;
}`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  section {
    max-width: 60rem;
    padding: 0 4rem;
    p {
        margin: 1rem 0;
        font-size: 1.2rem;
      span {
        background: #f1802d;
        color: #000;
        padding: 0.4rem 0.9rem;
        font-weight: bolder;
      }
    }
  }
  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
  }
`;

const Img = styled(Image)`
          border-radius: 50%;
          border: solid 1px #000;
`

const Title = styled.h2`
  span {
    background: #fff357;
    color: #000;
    padding: 0.4rem 0.9rem;
    font-weight: bolder;

  }    margin-bottom: 3rem;
`;

const WhoAmI: React.FC = () => {
  return (
    <Conteiner>
      <Title>
        01. <span>Quem sou?</span>
      </Title>
      <Content>
        <Img
          src="/logo_02.jpg"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <section>
          <p>
            <span>Prazer em conhecê-lo!</span> Sou engenheira de software e
            educadora, apaixonada por experiências sociais e colaborativas, tem
            como hobby o violino, escrever na minha página pessoal sobre as
            minhas descoberta.
          </p>
          <p>Sou especializada em tecnologias web, atuando com as principais lingaugem </p>
          <p>Full Stack Developer • JavaScript • React • Next • TypeScript • Python • ORM • NodeJS</p>
        </section>
      </Content>
    </Conteiner>
  );
};

export default WhoAmI;
