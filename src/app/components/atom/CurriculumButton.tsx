import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
    display: flex;
    position: absolute;
    bottom: 100px;
    z-index: 1000;
    width: 100%;
    p{
      color: #FFF;
  border: 2px solid #fff;
  border-radius: 3rem;
  padding: 18px 36px;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #fff;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 1s;
    }
`

const Link = styled.a`
  color: #000;
  :hover {
    text-decoration: none;
    box-shadow: inset 400px 0 0 0 #fff;
    color: #000;
  }
`;

const AboutButton: React.FC = () => {
  return (
    <Conteiner>
      <Link href="#Menu">
        <p>Ver Mais</p>
      </Link>
    </Conteiner>
  );
};

export default AboutButton;
