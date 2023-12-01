"use client";

import styled from "styled-components";
import CurriculumButton from "./components/atom/CurriculumButton";
import Education from "./components/Education/Education";
import Contacts from "./components/molecules/Contacts/Contacts";
import Skills from "./components/molecules/Skills/Skills";
import WhoAmI from "./components/molecules/WhoAmI/WhoAmI";
import WorkExperience from "./components/molecules/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import Talks from "./components/talks/Talks";

const Container = styled.div`
  width: 60rem;
`;

export default function Home() {
  return (
    <Container>
      <WhoAmI />
      <Contacts />
      <CurriculumButton />
      <WorkExperience/>
      <Skills/>
      <Education/>
      <Talks/>
      <Projects/>
    </Container>
  );
}
