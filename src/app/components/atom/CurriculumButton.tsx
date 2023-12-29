import React from "react";
import { RxActivityLog } from "react-icons/rx";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 14rem;
  margin-top: 4rem;
  z-index: 1000;`

const Link = styled.a`
  display: flex;
  text-align: center;
  align-items: center;
  width: 8rem;
  color: #000;
  border: solid 1px #ea370f;
  padding: 1rem;
  border-radius: 5%; /* Add the missing semicolon here */
  :hover {
    text-decoration: underline; /* Fix the typo here (line instead of underline) */
  }
`;

const AboutButton: React.FC = () => {
  return (
    <Conteiner>
      <Link href="#Quem-sou">
        <RxActivityLog />
        <p>Ver Mais</p>
      </Link>
    </Conteiner>
  );
};

export default AboutButton;
