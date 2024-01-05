"use client";

import Image from "next/image";
import styled from "styled-components";
import moment from 'moment';

const Conteiner = styled.div`
  position: absolute;
  background: #8e7c93;
  color: #000;
  width: 100%;
  height: 3.5rem;  
  z-index: 100;

  @media (max-width: 1265px) {
    width: 100%;
  }
`;

const SectionMenu = styled.section`
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
padding: 1rem 0 ;
z-index: 100;
@media (max-width: 1265px) {
  width: 100%;
}
a{
  padding: 0 1rem;
  margin: 0;
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

function Menu() {

  const dataAtual = moment().format('DD / MM / YYYY')

  return <Conteiner>
    <SectionMenu>      <Date>Hoje é: {dataAtual}</Date>
      <a href="./"><Image src="./favicon.svg" width={30} height={30} alt='logo' /></a>
      <p><a href="./Daviny_Leticia_Vidal_CV.pdf">Download CV</a></p>

    </SectionMenu>
  </Conteiner>;
}

export default Menu;