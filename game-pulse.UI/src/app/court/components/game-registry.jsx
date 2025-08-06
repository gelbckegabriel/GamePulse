"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  useAnimate,
  useDragControls,
  useMotionValue,
  motion,
  useAnimation,
} from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { IoIosCalendar, IoIosTime, IoIosTimer } from "react-icons/io";
import useMeasure from "react-use-measure";
import { Button } from "../../shared/utilities/button";
import { Option, Select } from "@material-tailwind/react";
import { apiClient } from "@/app/services/apiClient";
import { GridGamesColored } from "@/app/shared/grid-card-glows/grid-cards";

export const GameRegistration = ({ court, isOpen, setIsOpen }) => {
  const dateInputRef = useRef(null);
  const [isSearched, setIsSearched] = useState(false);
  const [userFilter, setUserFilter] = useState({
    date: null,
    startTime: null,
    endTime: null,
  });
  const [courtGames, setCourtGames] = useState([]);

  const handleSubmit = () => {
    if (userFilter.date && userFilter.startTime && userFilter.endTime) {
      apiClient("Games/GetCourtGames", "POST", {
        CourtId: court.id,
        GameDate: userFilter.date,
        GameTimeStart: userFilter.startTime,
        GameTimeEnd: userFilter.endTime,
      }).then((response) => {
        // console.log("courtGames: ", response);
        setCourtGames(response);
        setIsSearched(true);
      });
    } else {
      window.alert("Please fill all fields before submitting.");
    }
  };

  const showDatePicker = () => {
    dateInputRef.current?.showPicker();
  };

  const subscribeToGame = (userId, gameId) => {
    console.log(`userId: ${userId} & gameId: ${gameId}`);
  };

  const createGame = () => {
    // TODO: Need to create something for the user to select the sport.
    console.log(
      `courtId: ${court.id} | sportId: ${court.sportId} | gameTime: ${
        userFilter.date
      } ${userFilter.startTime} | bestPlayerId: ${null}`
    ); // TODO: Replace with actual game creation logic
  };

  // ANIMATION
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();
  const searchControls = useAnimation();
  const createControls = useAnimation();

  useEffect(() => {
    if (isSearched) {
      searchControls.start({ x: "25%" });
      createControls.start({ display: "block", x: "50%", opacity: 1 });
    }
  }, [isSearched, searchControls]);

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-background/50"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[70vh] md:h-[75vh] lg:h-[75vh] w-full overflow-hidden rounded-t-3xl bg-backgroundModal"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div
              onPointerDown={(e) => {
                controls.start(e);
              }}
              className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-darkGray active:cursor-grabbing"
              ></button>
            </div>

            {/* TODO: FIX RESPONSIVINESS */}
            <div className="relative z-0 h-full overflow-y-auto p-4 pt-12">
              <div className="mx-auto max-w-[100dvh] md:max-w-4xl space-y-4 text-neutral-400 text-white">
                <h2 className="pt-2 text-xl md:text-4xl lg:text-4xl font-bold text-center">
                  When are you going to play?
                </h2>
                {/* DATE PICK */}
                <div className="!relative !z-20 !mt-20 flex justify-between">
                  {/* DATE */}
                  <div
                    className="w-[30%] cursor-pointer"
                    onClick={() => showDatePicker()}
                  >
                    <p className="text-sm2 mb-1">Date</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <IoIosCalendar />
                      <input
                        ref={dateInputRef}
                        type="date"
                        onChange={(e) =>
                          setUserFilter({ date: e.target.value })
                        }
                        className="bg-transparent h-10 w-full cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* START TIME */}
                  <div className="w-[20%]">
                    <p className="text-sm2 mb-1">Start Time</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <IoIosTime />
                      <Select
                        onChange={(value) =>
                          setUserFilter({ ...userFilter, startTime: value })
                        }
                        containerProps={{
                          className: "!min-w-0 w-full",
                        }}
                        className="!w-full !pl-1 !border-transparent !text-sm2 !bg-opacity-0 !text-white"
                      >
                        <Option value="07:00">07:00</Option>
                        <Option value="08:00">08:00</Option>
                        <Option value="09:00">09:00</Option>
                        <Option value="10:00">10:00</Option>
                        <Option value="11:00">11:00</Option>
                        <Option value="12:00">12:00</Option>
                        <Option value="13:00">13:00</Option>
                        <Option value="14:00">14:00</Option>
                        <Option value="15:00">15:00</Option>
                        <Option value="16:00">16:00</Option>
                        <Option value="17:00">17:00</Option>
                        <Option value="18:00">18:00</Option>
                        <Option value="19:00">19:00</Option>
                        <Option value="20:00">20:00</Option>
                        <Option value="21:00">21:00</Option>
                        <Option value="22:00">22:00</Option>
                      </Select>
                    </div>
                  </div>

                  {/* END TIME */}
                  <div className="w-[20%]">
                    <p className="text-sm2 mb-1">End Time</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <IoIosTimer />
                      <Select
                        onChange={(value) =>
                          setUserFilter({ ...userFilter, endTime: value })
                        }
                        containerProps={{
                          className: "!min-w-0 w-full",
                        }}
                        className="!w-full !pl-1 !border-transparent !text-sm2 !bg-opacity-0 !text-white"
                      >
                        <Option value="07:00">07:00</Option>
                        <Option value="08:00">08:00</Option>
                        <Option value="09:00">09:00</Option>
                        <Option value="10:00">10:00</Option>
                        <Option value="11:00">11:00</Option>
                        <Option value="12:00">12:00</Option>
                        <Option value="13:00">13:00</Option>
                        <Option value="14:00">14:00</Option>
                        <Option value="15:00">15:00</Option>
                        <Option value="16:00">16:00</Option>
                        <Option value="17:00">17:00</Option>
                        <Option value="18:00">18:00</Option>
                        <Option value="19:00">19:00</Option>
                        <Option value="20:00">20:00</Option>
                        <Option value="21:00">21:00</Option>
                        <Option value="22:00">22:00</Option>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* SUBMIT PICK */}
                <div className="!mt-8 pt-8 pb-6 flex justify-center">
                  {/* SEARCH GAMES BUTTON */}
                  <motion.div
                    initial={{ x: "40%" }}
                    animate={searchControls}
                    transition={{
                      duration: 0.4,
                      // scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="!w-full"
                  >
                    <Button
                      className={`z-10 ${
                        userFilter.date &&
                        userFilter.startTime &&
                        userFilter.endTime
                          ? ""
                          : "bg-gray-500 cursor-not-allowed"
                      }`}
                      onClick={() => handleSubmit()}
                    >
                      Search Games
                    </Button>
                  </motion.div>

                  {/* CREATE GAMES BUTTON */}
                  <motion.div
                    initial={{ display: "none", opacity: 0 }}
                    animate={createControls}
                    transition={{
                      duration: 0.4,
                      scale: {
                        type: "tween",
                        visualDuration: 0.4,
                        bounce: 0.5,
                      },
                    }}
                    className="absolute !max-w-[100vh]"
                  >
                    <Button
                      className="z-0 bg-[#18631565] text-white"
                      onClick={() => createGame()}
                    >
                      Create your Own Game
                    </Button>
                  </motion.div>
                </div>

                {/* GAMES AVAILABLE */}
                {isSearched && (
                  <>
                    {courtGames.length > 0 ? (
                      <>
                        {Object.keys(courtGames).length > 0 && (
                          <div className="!relative !z-10 !mt-16">
                            {courtGames.map((game, index) => (
                              <React.Fragment key={index}>
                                <GridGamesColored
                                  area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                                  icon={
                                    <FaCheck className="h-4 w-4 text-gray-700" />
                                  }
                                  date={game.gameTime
                                    .split("T")[0]
                                    .split("-")
                                    .reverse()
                                    .join("/")}
                                  time={game.gameTime.split("T")[1].slice(0, 5)}
                                  players={game.players}
                                  onClick={
                                    () =>
                                      subscribeToGame(
                                        1,
                                        game.gameId
                                      ) /* TODO: Replace 1 with actual userId */
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <motion.div
                          initial={{ y: "-100%", opacity: 0 }}
                          animate={{ y: "0", opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {/* TITLE */}
                          <div className="mt-14 h-[1rem] w-full bg-transparent flex flex-col items-center justify-center rounded-md">
                            <h1 className="md:text-xl text-xl lg:text-2xl font-bold text-center text-white relative z-20">
                              No Games Available
                            </h1>
                            <div className="w-[40rem] h-40 relative">
                              {/* Gradients */}
                              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm" />
                              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
