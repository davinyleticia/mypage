import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { projects, Project } from "./data";

const Container = styled.div`
  margin-top: 5rem;

  @media (max-width: 1265px) {
    margin: 0;
    width: 100%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  margin: 2rem 0px;
  width: 80rem;

  section {
    margin: 0;
  }

  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 10rem;
  margin-bottom: 5rem;

  h2 {
    font-size: 1rem;
    font-weight: bolder;
  }

  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
    width: 100%;
    height: auto;
  }
`;

const Img = styled(Image)`
  border-radius: 5%;
  border: solid 1px #dcc9c9;

  @media (max-width: 1265px) {
    margin: 0;
  }
`;

const Description = styled.div`
  padding: 0 1rem;
  width: 50rem;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    @media (max-width: 1265px) {
      text-align: center;
      padding: 1rem 0;
    }
  }

  @media (max-width: 1265px) {
    width: 100%;
    margin: 0;
  }
`;

const CardText = styled.div`
  border: solid 1px #000;
  padding: 0.5rem;
  margin-top: 1rem;
`;

const Title = styled.h2`
  span {
    background: #fff357;
    color: #000;
    padding: 0.4rem 0.9rem;
    font-weight: bolder;
  }

  margin-bottom: 3rem;
`;

const Projects: FC = () => {
  return (
    <Container id="Projetos">
      <Title>
        06. <span>Projetos</span>
      </Title>
      <Content>
        {projects.map((elem: Project, key: number) => (
          <section key={key}>
            <ProjectCard>
              <Img
                src={elem.image}
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Description>
                <h2>
                  <a href={elem.link}>{elem.name}</a>
                </h2>
                <CardText
                  dangerouslySetInnerHTML={{
                    __html: elem.description || "Sem descrição",
                  }}
                ></CardText>
              </Description>
            </ProjectCard>
          </section>
        ))}
      </Content>
    </Container>
  );
};

export default Projects;
