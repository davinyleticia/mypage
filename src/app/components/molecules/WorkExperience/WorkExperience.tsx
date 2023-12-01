import React, { useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";

import styled from "styled-components";
import Image from "next/image";
import { experience } from "./data";

const Conteiner = styled.div`
  width:80rem
`;

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
    h3 {
      font-size: 20px;
      font-weight: bolder;
    }
  }
  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
const Link = styled.button`
  margin: 1rem 0;
  display: flex;
  text-align: center;
  align-items: center;
  color: #000;
  padding: 1rem;
  border-radius: 5%; /* Add the missing semicolon here */
  cursor: pointer;
  :hover {
    text-decoration: underline; /* Fix the typo here (line instead of underline) */
  }
  p {
    padding: 0 0.5rem;
  }
`;

const Img = styled(Image)`
  border: solid 1px #ece4e4;
  padding: 1rem;
  width: 300px;
  height: 300px;
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
  const [item, setItem] = useState(0);

  console.log(item);
  return (
    <Conteiner>
      <Title>
        02. <span>Experiência Profissional</span>
      </Title>
      <Nav>
        <Link onClick={() => setItem(5)}>
          <MdOutlineArrowRight />
          <p>Braz Cubas</p>
        </Link>
        <Link onClick={() => setItem(4)}>
          <MdOutlineArrowRight />
          <p>RHS</p>
        </Link>
        <Link onClick={() => setItem(3)}>
          <MdOutlineArrowRight />
          <p>Codivas</p>
        </Link>
        <Link onClick={() => setItem(2)}>
          <MdOutlineArrowRight />
          <p>DIO</p>
        </Link>
        <Link onClick={() => setItem(1)}>
          <MdOutlineArrowRight />
          <p>Proz</p>
        </Link>
        <Link onClick={() => setItem(0)}>
          <MdOutlineArrowRight />
          <p>Reprograma</p>
        </Link>
      </Nav>
      <Content>
        <Img
          src={experience[item].img}
          width={300}
          height={300}
          alt="Picture of the author"
        />

        <section>
          <h3>{experience[item].name}</h3>
          <p>{experience[item].span}</p>
          <p>{experience[item].description}</p>
          <p>{experience[item].worker}</p>
        </section>
      </Content>
    </Conteiner>
  );
};

export default WorkExperience;
