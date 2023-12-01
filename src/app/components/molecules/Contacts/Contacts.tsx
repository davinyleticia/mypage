"use client";
import React from "react";
import styled from "styled-components";
import {
  FaGitlab,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineAnnotation } from "react-icons/hi";

const Conteiner = styled.div``;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1265px) {
    display: flex;
    flex-direction: column;
  }
`;
const Link = styled.a`
  margin: 2rem 0;
  display: flex;
  text-align: center;
  align-items: center;
  color: #000;
  padding: 1rem;
  border-radius: 5%; /* Add the missing semicolon here */
  :hover {
    text-decoration: underline; /* Fix the typo here (line instead of underline) */
  }
  p{
    padding: 0 .5rem;
  }
`;


const Contacts: React.FC = () => {
  return (
    <Conteiner>
      <Nav>
        <Link href="https://github.com/davinyleticia" target="_blank">
          <FaGithub />
          <p>Github</p>
        </Link>
        <Link
          href="https://gitlab.com/davinyleticia"
          target="
    _top"
        >
          <FaGitlab />
          <p>GitLab</p>
        </Link>
        <Link
          href="https://linkedin.com/in/davinyleticia"
          target="
    _top"
        >
          <FaLinkedin />
          <p>Linkedin</p>
        </Link>
        <Link
          href="https://youtube.com/@davinyleticia"
          target="
    _top"
        >
          <FaYoutube />
          <p>Youtube</p>
        </Link>
        <Link
          href="https://open.spotify.com/user/31sjt2np62y7355ousqfu35ttsci?si=11a42b19e9e344a0"
          target="
    _top"
        >
          <FaSpotify />
          <p>Spotify</p>
        </Link>
        <Link
          href="https://pt-docs.daviny.dev"
          target="
    _top"
        >
          <HiOutlineAnnotation />
          <p>Notações</p>
        </Link>
        <Link
          href="mailto:maksim@koshelev.ru?subject=Hello!&body=Hi!"
          target="
    _top"
        >
          <MdAlternateEmail />
          <p>daviny@vidal.dev.br</p>
        </Link>
      </Nav>
    </Conteiner>
  );
};

export default Contacts;
