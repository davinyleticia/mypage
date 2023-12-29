"use client";

import Image from "next/image";
import styled from "styled-components";
import moment from 'moment';

const Conteiner = styled.div`
  position: absolute;
  background: #d0d0d0;
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
width: 100%;
padding: 1rem 0 ;
z-index: 100;
@media (max-width: 1265px) {
  width: 100%;
}
a{
  padding: 0;
}
p{
  margin: 0 2rem;
}
`
// const Button = styled.button`
//   outline: none;
//     border: none;
//     cursor: pointer;
//     padding: .1rem 2rem;
//     border: 1px solid #7b0828;
//     color: #7b0828;
//     font-size: 1.8rem;
//     border-radius: 4px;
//     z-index: 20;
//     overflow: hidden;
//     transition: color .2s;
//     &:before {
//       content: "";
//       position: absolute;
//       z-index: -1;
//       background: #7b0828;
//       height: 100%;
//       width: 100%;
//       left: -100%;
//       top: -100%;
//     }
//     transition: left .2s,top .2s;
//     }
// `;



function Menu() {

  const dataAtual = moment().format('DD / MM / YYYY')

  return <Conteiner>
    <SectionMenu>      <p>Hoje é: {dataAtual}</p>
      {/* <a href="https://dalevasound.ynk.ink">dalevasound.ynk.ink</a> */}
      <a href="./"><Image src="./favicon.svg" width={30} height={30} alt='logo' /></a>
      <p><a href="./Daviny_Leticia_Vidal_CV.pdf">Download CV</a></p>

    </SectionMenu>
  </Conteiner>;
}

export default Menu;