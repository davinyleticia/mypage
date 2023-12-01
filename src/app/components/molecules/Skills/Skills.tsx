"use client";

import React from "react";
import styled from "styled-components";

const Conteiner = styled.div`
  margin-top: 5rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 2rem 0px;
  width: 80rem;
  section {
    padding: 0 4rem;
    margin: 0;
    ul {
      list-style: inside;
      margin: 1rem 0;
    }
    span {
      background: #e5cebd;
      color: #000;
      padding: 0.4rem 0.9rem;
      font-weight: bolder;
      margin: 1rem;
    }
  }
  @media (max-width: 1265px) {
      display: flex;
      flex-direction: column;
    }
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

const Skills: React.FC = () => {
  return (
    <Conteiner>
      <Title>
        03. <span>Habilidades</span>
      </Title>
      <Content>
        <section>
          <span>Front-end </span>
          <ul>
            <li>HTML5 CSS3 (Sass/SCSS)</li>
            <li>Bootstrap</li> <li>JavaScript (ES6+)</li>
            <li>Typescript</li> <li>React</li> <li>Jest</li>
            <li>React Testing Library</li>
            <li>Redux</li>
            <li>styled components</li>
            <li>Custom Hooks</li> <li>Nextjs</li>
          </ul>
          <span>Back-end </span>
          <ul>
            <li>Banco de dados</li>
            <li>SQL</li>
            <li>Node.js</li>
            <li>Django</li>
            <li>MongoDB</li>
          </ul>
        </section>
        <section>
          <span>Outros</span>
          <ul>
            <li>PHP</li>
            <li>Python</li>
            <li>Shell Script</li>
            <li>Wordpress (CMS e desenvolvimento web)</li>
            <li>Experiência do usuário (UX)</li>
            <li> MVVM (arquitetura)</li>
            <li>Programação orientada a objetos (paradigma)</li>
            <li>Código Limpo e SOLID (melhores práticas)</li>
          </ul>
          <span>Tools</span>
          <ul>
            <li>Git (version control)</li>
            <li>Github, GitLab</li>
            <li>VS Code / Nano</li>
            <li>Agile methods</li>
            <li>ESLint</li>
            <li>Prettier</li>
            <li>Docker / Docker Componse</li>
            <li>Linux</li> <li>Nginx</li>
          </ul>
        </section>
      </Content>
    </Conteiner>
  );
};

export default Skills;
