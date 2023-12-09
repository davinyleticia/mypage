"use client";
import { Particles, IParticlesProps } from "react-tsparticles";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {

  }, []);

  return (
    <Particles
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
        quantity: 70000,
      },
      repulse: {
        distance: 20,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#000f19",
    },
    links: {
      color: "#003111",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
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
        area: 800,
      },
      value: 80,
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