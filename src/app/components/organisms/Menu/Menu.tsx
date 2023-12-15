"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  background: #f1802d;
  color: #000;
  width: 100%;
  height: 3.5rem;  
  position: abosolute;
  z-index: 100;

  @media (max-width: 1265px) {
    width: 100%;
  }
`;

const SectionMenu = styled.section`
display: flex;
flex-direction: row;
width: 100%;
padding: 1rem 0 ;
@media (max-width: 1265px) {
  width: 100%;

}
a:hover{
  color: #fff;
}
`;


function Menu() {
  return <Conteiner>
    <SectionMenu>
      <a href="https://dalevamusic.ynk.ink">dalevamusic.ynk.ink</a>
      <a href="./"><Image src="./favicon.svg" width={30} height={30} alt='logo' /></a>
      <a href="./en">EN</a>
      </SectionMenu>
  </Conteiner>;
}

export default Menu;