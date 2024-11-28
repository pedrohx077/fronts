import React from "react";
import "./Hero.css";
import Particles from '@tsparticles/react';


const Hero = () => {
  return (
    <div className="hero">
      <Particles
        className="particles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              value: 50,
            },
          },
        }}
      />
      <div className="hero-content">
        <h2>Bem-vindo ao Porto Profissional</h2>
        <p>Gerenciando operações com eficiência e excelência.</p>
        <button>Saiba Mais</button>
      </div>
    </div>
  );
};

export default Hero;
