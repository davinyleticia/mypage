"use client";

import styled from "styled-components";
import CurriculumButton from "./components/atom/CurriculumButton";
import Education from "./components/organelle/Education/Education";
import Contacts from "./components/organelle/Contacts/Contacts";
import Skills from "./components/organelle/Skills/Skills";
import WhoAmI from "./components/organelle/WhoAmI/WhoAmI";
import WorkExperience from "./components/organelle/WorkExperience/WorkExperience";
import Projects from "./components/organelle/Projects/Projects";
import Talks from "./components/organelle/talks/Talks";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background: #fbf3f3;
  padding: 2rem 0;
  z-index: 50;
  position: relative;
`;

export default function Home() {
  return (
    <Container>
      <WhoAmI />
      <Contacts />
      <CurriculumButton />
      <WorkExperience />
      <Skills />
      <Education />
      <Talks />
      <Projects />
    </Container>
  );
}
