"use client";

import React from "react";
import styled from "styled-components";
import ParticlesContainer from "../../atom/ParticlesContainer";
const Conteiner = styled.div`
  height: 30rem;
`;

const Content = styled.div`
padding: 4rem 0;
width: 31rem;

  p{
    font-size: 1.5rem;
    padding: 1rem 0;
  },
  
`;

const Name = styled.div`
  h1 {
    font-family: Zilla Slab, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 3.5rem;
    border: 2px dashed #000;
    text-align: center;
    padding: 2rem 1rem;
  }
`;

const Header: React.FC = () => {
  return (
    <>
      <Conteiner>
        {/* <ParticlesContainer /> */}
        <Content>
          <p>Olá, Eu sou</p>
          <Name>
            <h1>Daviny Letícia</h1>
          </Name>
          <p>Software Engineer</p>
        </Content>
      </Conteiner>
    </>
  );
};

export default Header;
