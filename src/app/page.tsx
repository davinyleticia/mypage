"use client";

import styled from "styled-components";
import CurriculumButton from "./components/atom/CurriculumButton";
import Education from "./components/organisms/Education/Education";
import Contacts from "./components/organisms/Contacts/Contacts";
import Skills from "./components/organisms/Skills/Skills";
import WhoAmI from "./components/organisms/WhoAmI/WhoAmI";
import WorkExperience from "./components/organisms/WorkExperience/WorkExperience";
import Projects from "./components/organisms/Projects/Projects";
import Talks from "./components/organisms/talks/Talks";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fcfcf7;
  padding: 2rem 1rem;
  z-index: 50;
  position: relative;

  @media (max-width: 1265px) {
  padding: 1rem;
  }
`;

export default function Home() {
  return (
    <Container>
        <WhoAmI />
        <Contacts />
        {/* <CurriculumButton /> */}
        <WorkExperience />
        <Skills />
        <Education />
        <Talks />
        <Projects />
    </Container>
  );
}
