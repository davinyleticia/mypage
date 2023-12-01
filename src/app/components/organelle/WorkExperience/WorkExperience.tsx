import React, { FC, useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import styled from "styled-components";
import Image from "next/image";
import { experience } from "./data";

const Conteiner = styled.div`
  width: 80rem;

  @media (max-width: 1265px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  section {
    min-width: 60rem;
    padding: 0 4rem;

    @media (max-width: 1265px) {
      min-width: 100%;
    }

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
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1265px) {
    align-items: start;
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    margin: 1rem 0;
  }
`;

const Link = styled.button`
  margin: 1rem 0;
  display: flex;
  text-align: center;
  align-items: center;
  color: #000;
  padding: 1rem;
  border-radius: 5%;
  cursor: pointer;

  :hover {
    text-decoration: underline;
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

const WorkExperience: FC = () => {
  const [item, setItem] = useState<number>(0);

  console.log(item);

  return (
    <Conteiner>
      <Title>
        02. <span>Experiência Profissional</span>
      </Title>
      <Nav>
        {experience.map((exp, index) => (
          <Link key={index} onClick={() => setItem(index)}>
            <MdOutlineArrowRight />
            <p>{exp.company}</p>
          </Link>
        ))}
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
