"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { GlowingEffect } from "./glowing-effect";
import { motion } from "framer-motion";

export function GridItem({ area, icon, title, description, isLoading }) {
  return (
    <>
      <li className={`min-h-[14rem] list-none ${area}`}>
        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
              <div className="space-y-3">
                {isLoading ? (
                  <>
                    <Typography as="div" variant="paragraph" className="mt-2 h-6 w-[80%] rounded-sm bg-gray-700 animate-pulse-strong">
                      &nbsp;
                    </Typography>
                    <Typography as="div" variant="paragraph" className="mt-2 h-3 w-[45%] rounded-sm bg-gray-700 animate-pulse-strong">
                      &nbsp;
                    </Typography>
                  </>
                ) : (
                  <>
                    <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white">
                      {title}
                    </h3>
                    <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-700 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                      {description}
                    </h2>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export function GridItemColored({ onClick, area, icon, title, description, hover, link, isLoading }) {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <>
      <li className={`min-h-[14rem] list-none ${area}`}>
        <a href={link != "" ? link : undefined} target="_blank">
          <div
            onClick={onClick}
            className={`relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 ${
              hover ? "cursor-pointer transition-all ease-in-out duration-300 hover:scale-105" : ""
            }`}
          >
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <motion.div
              initial="initial"
              animate="animate"
              variants={variants}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: [0.75, 0, 0.25, 1],
              }}
              style={{
                background: "linear-gradient(-45deg, #85090943, #79123b3c, #2047c649, #11677f51)",
                backgroundSize: "400% 400%",
              }}
              className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]"
            >
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
                <div className="space-y-3">
                  {isLoading ? (
                    <>
                      <Typography as="div" variant="paragraph" className="mt-2 h-6 w-[80%] rounded-sm bg-gray-700 animate-pulse-strong">
                        &nbsp;
                      </Typography>
                      <Typography as="div" variant="paragraph" className="mt-2 h-3 w-[45%] rounded-sm bg-gray-700 animate-pulse-strong">
                        &nbsp;
                      </Typography>
                    </>
                  ) : (
                    <>
                      <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white">
                        {title}
                      </h3>
                      <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-700 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                        {description}
                      </h2>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </a>
      </li>
    </>
  );
}

export function GridGamesColored({ onClick, area, icon, date, time, players }) {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <>
      <li className={`min-h-[14rem] list-none ${area}`}>
        <div
          onClick={onClick}
          className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105"
        >
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [0.75, 0, 0.25, 1],
            }}
            style={{
              background: "linear-gradient(-45deg, #85090943, #79123b3c, #2047c649, #11677f51)",
              backgroundSize: "400% 400%",
            }}
            className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]"
          >
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
              <div className="space-y-3">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white">
                  {date} at {time}
                </h3>
                <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-700 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                  {players.map((player, index) => (
                    <React.Fragment key={index}>
                      <span className="inline-block mr-1">
                        {index + 1}. {player.name} ({player.nickname}) - {player.xp}xp
                      </span>
                      <br />
                    </React.Fragment>
                  ))}
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </li>
    </>
  );
}
