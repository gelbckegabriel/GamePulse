"use client";

import React, { useEffect } from "react";
import { Container } from "../shared/container";
import { Vortex } from "../shared/vortex";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.45,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variantsLeft = {
    hidden: { opacity: 0, x: -300, transition: { duration: 0.8 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const variantsRight = {
    hidden: { opacity: 0, x: 300, transition: { duration: 0.8 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="bg-black text-white">
        <div className="w-[100%] mx-auto rounded-md h-[25rem] overflow-hidden">
          <Vortex backgroundColor="#00000000" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
            <h2 className="text-2xl md:text-4xl font-bold text-center">Game Pulse</h2>
            <p className="text-sm md:text-xl max-w-xl mt-6 text-center">Learn more about the project and the developer.</p>
          </Vortex>
        </div>

        <Container>
          {/* About the Developer */}
          <div className="mt-14 md:mt-32 flex flex-row justify-center items-center gap-4">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variantsLeft}
              className="w-[50%] md:w-[60%] flex flex-col justify-center"
            >
              <h1 className="text-2xl md:text-4xl font-bold">Gabriel Gelbcke</h1>
              <p className="pt-2 md:pt-5 text-gray-500 text-xs md:text-lg">
                Gelbcke is the sole developer of this project, driven by his passion for sports, particularly Basketball. He enjoys playing at public
                courts, competing against others, making new friends, and socializing. Inspired by these experiences, he developed an application to
                encourage more people in his city to engage in similar activities.
              </p>
            </motion.div>
            <motion.div ref={ref} animate={controls} initial="hidden" variants={variantsRight} className="w-[50%] md:w-[40%] flex justify-center">
              <img
                src="./about/gelbcke.webp"
                alt="Gelbcke's Photo"
                className="w-[600px] h-[280px] md:h-[400px] object-cover rounded-lg"
              />
            </motion.div>
          </div>

          {/* About the Project */}
          <div className="mt-32">
            <h1 className="font-bold text-center text-3xl md:text-4xl">About the Project</h1>
            <br />
            <br />
            <p className="text-gray-500 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero molestiae corporis dolores dolore nisi cupiditate quaerat veritatis?
              Impedit deserunt numquam accusamus ut ratione inventore facilis, explicabo temporibus aut autem repellendus. This website aims to
              enhance community interaction, allowing more individuals to benefit from the joy of sports and social connections.
            </p>
          </div>

          <div className="h-[25rem]"></div>
          <span>Vortex Background</span>
          <span>Evervault Card</span>
          <span>Placeholders and Vanish Input</span>
        </Container>
      </div>
    </>
  );
}
