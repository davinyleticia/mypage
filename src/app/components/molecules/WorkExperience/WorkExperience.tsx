"use client";
import React from "react";
import { MdOutlineArrowRight } from "react-icons/md";

import styled from "styled-components";
import Image from "next/image";

const Conteiner = styled.div``;

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
    h3{
    font-size: 20px;
    font-weight: bolder;
  }
  }
  
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Link = styled.a`
  margin: 1rem 0;
  display: flex;
  text-align: center;
  align-items: center;
  color: #000;
  padding: 1rem;
  border-radius: 5%; /* Add the missing semicolon here */
  :hover {
    text-decoration: underline; /* Fix the typo here (line instead of underline) */
  }
  p {
    padding: 0 0.5rem;
  }
`;

const Img = styled(Image)`
  border: solid 1px #000;
`;

const Title = styled.h2`
  margin-top: 7rem;
  span {
    background: #fff357;
    color: #000;
    padding: 0.4rem 0.9rem;
    font-weight: bolder;
  }
  margin-bottom: 2rem;
`;
const WorkExperience: React.FC = () => {
  return (
    <Conteiner>
      <Title>
        02. <span>Experiência Profissional</span>
      </Title>
      <Nav>
        <Link href="https://t.me/mr_koshelev" target="_blank">
          <MdOutlineArrowRight />
          <p>Braz Cubas</p>
        </Link>
        <Link
          href="mailto:maksim@koshelev.ru?subject=Hello!&body=Hi!"
          target="
    _top"
        >
          <MdOutlineArrowRight />
          <p>RHS</p>
        </Link>
        <Link
          href="mailto:maksim@koshelev.ru?subject=Hello!&body=Hi!"
          target="
    _top"
        >
          <MdOutlineArrowRight />
          <p>Codivas</p>
        </Link>
        <Link
          href="mailto:maksim@koshelev.ru?subject=Hello!&body=Hi!"
          target="
    _top"
        >
          <MdOutlineArrowRight />
          <p>DIO</p>
        </Link>
        <Link
          href="mailto:maksim@koshelev.ru?subject=Hello!&body=Hi!"
          target="
    _top"
        >
          <MdOutlineArrowRight />
          <p>Proz</p>
        </Link>
        <Link
          href="mailto:maksim@koshelev.ru?subject=Hello!&body=Hi!"
          target="
    _top"
        >
          <MdOutlineArrowRight />
          <p>Reprograma</p>
        </Link>
      </Nav>
      <Content>
        <Img
          src="/reprograma-logo.0bc8e5eb.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <section>
          <h3>Reprograma | Professora</h3>
          <p>São Paulo - Brasil | mai de 2023 - o momento</p>
          <p>
            A Reprograma é uma ONG que tem como missão empoderar mulheres,
            ministrando um curso intensivo.
          </p>
          <p>
            Administrei cursos de front-end, workshops, e cursos POO em python
          </p>
        </section>
      </Content>
    </Conteiner>
  );
};

export default WorkExperience;
