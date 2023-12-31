"use client";
import { IParticlesProps, Particles } from "react-tsparticles";
import React, { useCallback } from "react";
import styled from "styled-components";
import { loadFull } from "tsparticles";

const ParticlesJs = styled(Particles)`
z-index: 10;
`

const ParticlesContainer: React.FC = () => {


  const particlesInit = useCallback(async (engine: any) => {

    await loadFull(engine);
  },[]);

  const particlesLoaded = useCallback(async () => {

  }, []);

  return (
    <ParticlesJs
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
};


const particleOptions: IParticlesProps["options"] = {
  fullScreen: { enable: true },
  background: {
    color: {
      value: "",
    },
  },
  fpsLimit: 100,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 700000,
      },
      repulse: {
        distance: 20,
        duration: 5,
      },
    },
  },
  particles: {
    color: {
      value: "#000",
    },
    links: {
      color: "#aaaaf2",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 500,
      },
      value: 90,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        min: 1,
        max: 5,
      },
    },
  },
  detectRetina: true,
};

export default ParticlesContainer;