import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
    display: flex;
    position: absolute;
    bottom: 100px;
    z-index: 1000;
    width: 100%;
    p{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3rem; /* Add the missing semicolon here */
      background: #fff;
      border: solid 1px #fff;
      width: 9rem;
      padding: 1rem;
    }
`

const Link = styled.a`
  color: #000;
  :hover {
    text-decoration: underline; /* Fix the typo here (line instead of underline) */
  }
`;

const AboutButton: React.FC = () => {
  return (
    <Conteiner>
      <Link href="#quem-sou">
        <p>Ver Mais</p>
      </Link>
    </Conteiner>
  );
};

export default AboutButton;
