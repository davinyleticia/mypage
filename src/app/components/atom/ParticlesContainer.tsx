"use client";
import { Particles, IParticlesProps } from "react-tsparticles";
import { loadFull, IOptions } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer: React.FC = () => {
  const particlesInit = useCallback(async (engine: WebGLRenderingContext) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Add your implementation for particlesLoaded if needed
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

// Define your particle options with types
const particleOptions: IParticlesProps & IOptions = {
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