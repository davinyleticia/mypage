import React from "react";
import { RxActivityLog } from "react-icons/rx";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 14rem;
  margin-top: 4rem`;

const Link = styled.a`
 margin: 1rem 0;
  display: flex;
  text-align: center;
  align-items: center;
  width: 14rem;
  color: #000;
  border: solid 1px #ea370f;
  padding: 1rem;
  border-radius: 5%; /* Add the missing semicolon here */
  :hover {
    text-decoration: underline; /* Fix the typo here (line instead of underline) */
  }
`;

const CurriculumButton: React.FC = () => {
  return (
    <Conteiner>
      <Link href="/Daviny_Leticia_Vidal_CV.pdf">
        <RxActivityLog />
        <p>ver o curriculo em PDF</p>
      </Link>
    </Conteiner>
  );
};

export default CurriculumButton;
