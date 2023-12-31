"use client";

import Image from "next/image";
import styled from "styled-components";
import moment from 'moment';

const Conteiner = styled.div`
display: flex;
z-index: 20000;
  background: #fcfcf7;
  color: #000;
  width: 100%;
  height: 3.5rem;  
  margin-bottom: 2rem;
  @media (max-width: 1265px) {
    width: 100%;
  }
`;

const SectionMenu = styled.section`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
padding: 1rem 0 ;
z-index: 100;
@media (max-width: 1265px) {
  width: 100%;
}
a{
  padding: 0 1rem;
  margin: 0;
  &:hover{
    text-decoration: underline;
  }
}
p{
  margin: 0  1rem ;
}
`

const Date = styled.p`
@media (max-width: 1265px) {
 display: none;
  }
`

const SectionPC = styled.section`
@media (max-width: 1265px) {
  display: none;
   }
`

function Menu() {

  const dataAtual = moment().format('DD / MM / YYYY')

  return <Conteiner id="Menu">
    <SectionMenu>
      {/* <Date>Hoje é: {dataAtual}</Date> */}
      
    <a href="./"><Image src="./favicon.svg" width={30} height={30} alt='logo' /></a>
        <SectionPC><a href="#quem-sou">Quem sou?</a>
        <a href="#Experiência">Experiência</a>
        <a href="#Habilidades">Habilidades</a>
        <a href="#Educação">Educação</a>
        <a href="#Projetos">Projetos</a></SectionPC>
      <a href="./Daviny_Leticia_Vidal_CV.pdf">Download CV</a>
    </SectionMenu>
    <hr></hr>
  </Conteiner>;
}

export default Menu;