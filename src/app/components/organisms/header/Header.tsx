"use client";

import React from "react";
import styled from "styled-components";
import AboutButton from "../../atom/CurriculumButton";
import ParticlesContainer from "../../atom/ParticlesContainer";
const Conteiner = styled.div`
  z-index: 100;
  height: 100vh;
p{
  text-align: center;
  bottom: 0;
  position: static;
}
`;

const Content = styled.div`
padding: 11rem 0;
width: 31rem;

  @media (max-width: 1265px) {
    width: 70%;
  }

  p{
    font-size: 1.5rem;
    padding: 1rem 0;
    color: #fff;
  },

`;

const Name = styled.div`
  h1 {
    font-family: Zilla Slab, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 3.5rem;
    border: 2px dashed #add;
    text-align: center;
    padding: 2rem 1rem;
    color: #ff0;
  }
`;
const About = styled.p`
display; flex;
align-items: flex-end;
justify-content: center;
text-aling: center;
height: 3rem;
botton: 0;

`;

const Header: React.FC = () => {
  return (
    <>
      <Conteiner>
        <ParticlesContainer />
        <Content>
          <p>Olá, Eu sou</p>
          <Name>
            <h1>Daviny Letícia</h1>
          </Name>
          <p>Software Engineer</p>

        </Content>
        <AboutButton />
      </Conteiner>
    </>
  );
};

export default Header;
