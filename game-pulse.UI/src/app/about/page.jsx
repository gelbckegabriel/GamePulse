"use client";

import React, { useRef } from "react";
import { Container } from "../shared/container";
import { Vortex } from "../shared/vortex";
import { motion } from "framer-motion";
import { EvervaultCard, Icon } from "../shared/evervault-card";
import { CodeBlock } from "../shared/code-block";

export default function AboutPage() {
  const ref = useRef(null);
  const [screenWidth, setScreenWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const variantsLeft = {
    offscreen: { opacity: 0, y: -300, transition: { duration: 0.8 } },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const variantsRight = {
    offscreen: { opacity: 0, y: 300, transition: { duration: 0.8 } },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const code = `const GamePulse = () => {
    const [count, setCount] = React.useState(0);
   
    const handleClick = () => {
      setCount(prev => prev + 1);
    };
   
    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-bold mb-4">Game Pulse - Improve your game</h2>
        <p className="mb-2">Games Played: {count}</p>
        <button 
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Play
        </button>
      </div>
    );
  };
  `;

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
          <motion.div
            ref={ref}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3, once: true }}
            className="mt-14 md:mt-32 flex flex-row justify-center items-center gap-4"
          >
            <motion.div variants={variantsLeft} className="w-[50%] md:w-[60%] flex flex-col justify-center">
              <h1 className="text-xl md:text-4xl font-bold">Gabriel Gelbcke</h1>
              <p className="pt-2 md:pt-5 text-gray-500 text-xs md:text-lg">
                Gelbcke is the sole developer of this project, driven by his passion for sports, particularly Basketball. He enjoys playing at public
                courts, competing against others, making new friends, and socializing. Inspired by these experiences, he developed an application to
                encourage more people in his city to engage in similar activities.
              </p>
            </motion.div>
            <motion.div variants={variantsRight} className="w-[50%] md:w-[40%] flex justify-center">
              <img src="./about/gelbcke.webp" alt="Gelbcke's Photo" className="w-[600px] h-[280px] md:h-[400px] object-cover rounded-lg" />
            </motion.div>
          </motion.div>

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

          {/* TODO: MAKE THE CODE BLOCK BE SIDE BY SIDE WITH THE GITHUB REPO CARD ONLY ON MEDIUM/LARGER SCREENS, IF SMALL, JUST DON'T SHOW IT */}
          <div className="mt-20 pb-10 flex items-center gap-4">
            {/* GitHub Repo Card */}
            <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

              <EvervaultCard text="hover" />

              <h2 className="text-white mt-4 text-sm font-light">Would you like to see the code behind this website and how everything was built?</h2>
              <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5">View GitHub Repo</p>
              </a>
            </div>

            {/* Code Block */}
            {screenWidth >= 1130 ? (
              <>
                <div className="max-w-3xl mx-auto w-full">
                  <CodeBlock language="jsx" filename="GamePulse.jsx" highlightLines={[9, 13, 14, 18]} code={code} />
                </div>
              </>
            ) : null}
          </div>
        </Container>
      </div>
    </>
  );
}
