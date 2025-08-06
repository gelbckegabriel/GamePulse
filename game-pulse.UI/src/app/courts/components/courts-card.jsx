"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../shared/utilities/use-outside-click";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

export function CourtsCard({ courts = [], isLoading, onFavoriteToggle }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm h-full w-full z-20 transition-all ease duration-300"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="z-50 flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`court-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-backgroundContrast sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                {isLoading ? (
                  <>
                    <div className="grid h-80 w-full animate-pulse-strong place-items-center rounded-lg bg-gray-700">
                      <GlobeAmericasIcon className="h-16 w-16 text-gray-500" />
                    </div>
                  </>
                ) : (
                  <>
                    <figure>
                      <iframe
                        src={active.map}
                        width={200}
                        height={200}
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full h-80 sm:rounded-tr-lg border-none filter grayscale invert"
                      ></iframe>
                    </figure>
                  </>
                )}
              </motion.div>

              <div>
                {/* Court Header */}
                <div className="flex justify-between items-start p-4">
                  <div>
                    {isLoading ? (
                      <>
                        <Typography className="h-4 w-[12rem] rounded-sm bg-gray-700 animate-pulse-strong">
                          &nbsp;
                        </Typography>
                        <Typography className="mt-2 h-3 w-[8rem] rounded-sm bg-gray-700 animate-pulse-strong">
                          &nbsp;
                        </Typography>
                      </>
                    ) : (
                      <>
                        <motion.h3
                          layoutId={`title-${active.name}-${id}`}
                          className="font-bold text-white"
                        >
                          {active.name} (~{active.distance} km)
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.name}-${id}`}
                          className="text-gray-700"
                        >
                          {active.city}, {active.state}
                        </motion.p>
                      </>
                    )}
                  </div>

                  {/* Play + Fav Button */}
                  <div className="flex items-center">
                    {isLoading ? (
                      <>
                        {/* <IconButton className="mr-5" variant="text" onClick={onFavoriteToggle}>
                          <FaHeart className="text-[30px] text-darkGray animate-pulse-strong" />
                        </IconButton> */}
                        <Typography className="h-8 w-[4rem] rounded-full bg-darkGray animate-pulse-strong">
                          &nbsp;
                        </Typography>
                      </>
                    ) : (
                      <>
                        {/* <IconButton className="mr-5" variant="text" onClick={onFavoriteToggle}>
                          {active.favorite ? (
                            <FaHeart className="text-[30px] text-red-900" />
                          ) : (
                            <FaHeartBroken className="text-[30px] text-darkGray" />
                          )}
                        </IconButton> */}
                        <div>
                          <Link href={active.redirect_link}>
                            <motion.button
                              layoutId={`button-${active.name}-${id}`}
                              className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                            >
                              Play
                            </motion.button>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Sports Info */}
                <div className="relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-700 h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {/* Sports Icons */}
                    <div className="mx-auto flex flex-row flex-wrap gap-4 py-4">
                      {isLoading ? (
                        <>
                          <Typography className="mt-6 md:mt-4 h-10 w-[15rem] rounded-md bg-gray-700 animate-pulse-strong">
                            &nbsp;
                          </Typography>
                        </>
                      ) : (
                        <>
                          {active.sports.map((sport, index) => (
                            <img
                              key={index}
                              src={`/logos/${sport}.webp`}
                              alt={sport}
                              className="w-[40px]"
                            />
                          ))}
                        </>
                      )}
                    </div>

                    {/* Court Address */}
                    <div className="flex gap-4 items-center justify-center">
                      {isLoading ? (
                        <>
                          <Typography className="mt-2 mr-3 h-8 w-[4rem] md:w-[7rem] rounded-full bg-gray-700 animate-pulse-strong">
                            &nbsp;
                          </Typography>
                          <Typography className="mt-2 h-3 w-[20rem] rounded-full bg-gray-700 animate-pulse-strong">
                            &nbsp;
                          </Typography>
                        </>
                      ) : (
                        <>
                          <a
                            href={active.web_address}
                            target="_blank"
                            className="min-w-[4rem] md:min-w-[7rem] px-4 py-3 text-sm text-center rounded-full font-bold bg-gray-600 text-white"
                          >
                            How to get there?
                          </a>
                          <span className="text-center text-sm">
                            {active.address}
                          </span>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full gap-4">
        {courts.map((court, index) => (
          <motion.div
            layoutId={`court-${court.name}-${id}`}
            key={`court-${court.name}-${id}`}
            onClick={() => setActive(court)}
            className="p-4 mb-3 flex flex-col md:flex-row justify-between items-center bg-gray-900/40 hover:bg-gray-800/50 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${court.name}-${id}`}>
                {isLoading ? (
                  <>
                    <div className="grid h-[100px] w-[100px] animate-pulse-strong place-items-center rounded-lg bg-gray-700">
                      <GlobeAmericasIcon className="h-16 w-16 text-gray-500" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mx-auto h-40 w-40 md:h-[8rem] md:w-[8rem] bg-gray-900/40 flex items-center justify-center">
                      <div className="flex flex-row flex-wrap gap-4 justify-center">
                        {court.sports.map((sport, index) => (
                          <img
                            key={index}
                            src={`/logos/${sport}.webp`}
                            alt={sport}
                            className="w-[40px]"
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
              <div className="">
                {isLoading ? (
                  <>
                    <Typography className="mt-2 h-4 w-[12rem] rounded-sm bg-gray-700 animate-pulse-strong">
                      &nbsp;
                    </Typography>
                  </>
                ) : (
                  <>
                    <motion.h3
                      layoutId={`title-${court.name}-${id}`}
                      className="font-medium text-white text-center md:text-left"
                    >
                      {court.name} (~{court.distance} km)
                    </motion.h3>
                  </>
                )}
                {isLoading ? (
                  <>
                    <Typography className="mt-2 h-2 w-[5rem] rounded-sm bg-gray-700 animate-pulse-strong">
                      &nbsp;
                    </Typography>
                  </>
                ) : (
                  <>
                    <motion.p
                      layoutId={`description-${court.name}-${id}`}
                      className="text-gray-700 text-center md:text-left"
                    >
                      {court.city}, {court.state}
                    </motion.p>
                  </>
                )}
              </div>
            </div>
            {!isLoading && (
              <>
                <motion.button
                  layoutId={`button-${court.name}-${id}`}
                  className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                >
                  View
                </motion.button>
              </>
            )}
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
