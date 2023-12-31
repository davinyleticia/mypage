import React from "react";
import { RxActivityLog } from "react-icons/rx";
import styled from "styled-components";

const Conteiner = styled.div`
    width: 14rem;
    position: absolute;
    bottom: 100px;
    z-index: 1000;
    left: 45%;
    @media (max-width: 1265px) {
    left: 67px;
    }
`

const Link = styled.a`
  display: flex;
  text-align: center;
  align-items: center;
  width: 8rem;
  color: #000;
  background: #f1802d;
  border: solid 1px #f1802d;
  padding: 1rem;
  border-radius: 5%; /* Add the missing semicolon here */
  :hover {
    text-decoration: underline; /* Fix the typo here (line instead of underline) */
  }
`;

const AboutButton: React.FC = () => {
  return (
    <Conteiner>
      <Link href="#quem-sou">
        <RxActivityLog />
        <p>Ver Mais</p>
      </Link>
    </Conteiner>
  );
};

export default AboutButton;
