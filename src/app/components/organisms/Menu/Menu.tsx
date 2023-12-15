"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  background: #9885ff;
  color: #fff;
  width: 100%;
  height: 3.5rem;
  z-index: 100;
  @media (max-width: 1265px) {
    width: 100%;
    margin: 0;
  }
`;

const SectionMenu = styled.section`
display: flex;
flex-direction: row;
width: 80rem;
padding: 1rem;
`;


function Menu() {
  return <Conteiner>
    <SectionMenu>
      <p>dalevamusic.ynk.ink</p>
      <Image src="./favicon.svg" width={30} height={30}/>
      <p>EN</p>
      </SectionMenu>
  </Conteiner>;
}

export default Menu;