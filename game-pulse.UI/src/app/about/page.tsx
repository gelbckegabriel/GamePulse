"use client";

import React from "react";
import { Container } from "../shared/container";
import { Vortex } from "../shared/vortex";

export default function AboutPage() {
  return (
    <>
      <div className="bg-black">
        <div className="w-[100%] mx-auto rounded-md h-[25rem] overflow-hidden">
          <Vortex backgroundColor="#00000000" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center">Game Pulse</h2>
            <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">Learn more about the project and the developer.</p>
          </Vortex>
        </div>

        <Container>
          <div className="h-[25rem]"></div>
          <span>Vortex Background</span>
          <span>Evervault Card</span>
          <span>Placeholders and Vanish Input</span>
        </Container>
      </div>
    </>
  );
}
