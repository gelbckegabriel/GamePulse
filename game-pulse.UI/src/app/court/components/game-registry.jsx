"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAnimate, useDragControls, useMotionValue, motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaRunning } from "react-icons/fa";
import { IoIosCalendar, IoIosTime, IoIosTimer } from "react-icons/io";
import useMeasure from "react-use-measure";
import { Button } from "../../shared/utilities/button";
import { Option, Select } from "@material-tailwind/react";
import { apiClient } from "@/app/services/apiClient";
import { GridGamesColored } from "@/app/shared/grid-card-glows/grid-cards";
import { sportsService } from "@/app/services/cache/sports-info";
import { SwalAlertTrigger, SwalConfirmTrigger, SwalErrorTrigger, SwalSuccessTrigger } from "@/app/shared/utilities/swal-trigger";
import { userService } from "@/app/services/cache/user-info";

export const GameRegistration = ({ court, isOpen, setIsOpen }) => {
  const dateInputRef = useRef(null);
  const [isCreatingGame, setIsCreatingGame] = useState(false);
  const [sports, setSports] = useState(sportsService.getSports());
  const [isSearched, setIsSearched] = useState(false);
  const [userFilter, setUserFilter] = useState({
    date: null,
    startTime: null,
    endTime: null,
    sportId: null,
  });
  const timeOptions = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const [courtGames, setCourtGames] = useState([]);

  useEffect(() => {
    sportsService.sports$.subscribe((result) => {
      setSports(result);
    });
  }, [isOpen]);

  const areFiltersValid = () => {
    const { date, startTime, endTime } = userFilter;

    if (!date || !startTime || !endTime) return false;

    return startTime < endTime;
  };

  const isUserLoggedIn = () => {
    return userService.getUserId() !== "";
  };

  const handleSubmit = () => {
    if (!areFiltersValid()) {
      SwalAlertTrigger("Form Incomplete", "Please fill all fields correctly before submitting.");
      return;
    }

    // TODO: When searching remember to also add the sport filter
    apiClient("Games/GetCourtGames", "POST", {
      CourtId: court.id,
      GameDate: userFilter.date,
      GameTimeStart: userFilter.startTime,
      GameTimeEnd: userFilter.endTime,
    }).then((response) => {
      setCourtGames(response);
      setIsSearched(true);
    });
  };

  const showDatePicker = () => {
    dateInputRef.current?.showPicker();
  };

  const subscribeToGame = (gameId) => {
    // Validate if user is logged in
    if (!isUserLoggedIn()) {
      SwalAlertTrigger("Not Logged In", "You must be logged in to create a game.");
      return;
    }

    SwalConfirmTrigger("Confirm Subscription", "Are you sure you want to subscribe to this game?").then((result) => {
      if (result.isConfirmed) {
        handleSubscribeToGame(gameId);
      }
    });
  };

  const handleSubscribeToGame = (gameId) => {
    apiClient("Games/SubscribeToGame", "POST", {
      gameId: gameId,
      userId: userService.getUserId(),
    })
      .then(() => {
        SwalSuccessTrigger("Subscribed to Game", "You have successfully subscribed to the game.");
      })
      .catch((error) => {
        console.error("Error subscribing to game: ", error);
        SwalErrorTrigger(
          "Error Subscribing to Game",
          "There was an error subscribing to the game. Please try again later.",
          error
        );
      })
      .finally(() => {
        // Reset state after creating game
        setUserFilter({
          date: null,
          startTime: null,
          endTime: null,
          sportId: null,
        });
        setCourtGames([]);
        setIsSearched(false);
        setIsCreatingGame(false);
        setIsOpen(false);
      });
  };

  const createGame = () => {
    // Validate form fields
    if (!areFiltersValid() || !userFilter.sportId) {
      SwalAlertTrigger("Form Incomplete", "Please fill all fields correctly before submitting.");
      return;
    }

    // Validate if user is logged in
    if (!isUserLoggedIn()) {
      SwalAlertTrigger("Not Logged In", "You must be logged in to create a game.");
      return;
    }

    setIsCreatingGame(true);

    apiClient("Games/CreateGame", "POST", {
      userId: userService.getUserId(),
      courtId: court.id,
      sportId: userFilter.sportId,
      gameDate: userFilter.date,
      gameTimeStart: userFilter.startTime,
    })
      .then(() => {
        SwalSuccessTrigger("Game Created", "Your game has been successfully created.");
      })
      .catch((error) => {
        console.error("Error creating game: ", error);
        SwalErrorTrigger("Error Creating Game", "There was an error creating your game. Please try again later.", error);
      })
      .finally(() => {
        // Reset state after creating game
        setUserFilter({
          date: null,
          startTime: null,
          endTime: null,
          sportId: null,
        });
        setCourtGames([]);
        setIsSearched(false);
        setIsCreatingGame(false);
        setIsOpen(false);
      });
  };

  // ANIMATION
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", { y: [yStart, height] });

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

            <div className="relative z-0 h-full overflow-y-auto p-4 pt-12">
              <div className="mx-auto max-w-2xl md:max-w-4xl space-y-4 text-neutral-400 text-white">
                <h2 className="pt-2 text-2xl md:text-4xl font-bold text-center">When would you like to play?</h2>
                {/* PICK */}
                <div className="!relative !z-20 pt-8 md:pt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* DATE */}
                  <div className="w-full" onClick={() => showDatePicker()}>
                    <p className="text-sm2 mb-1">Date</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <IoIosCalendar />
                      <input
                        ref={dateInputRef}
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setUserFilter({ ...userFilter, date: e.target.value })}
                        className="bg-transparent h-10 w-full cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* SPORT */}
                  <div className="w-full">
                    <p className="text-sm2 mb-1">Sport</p>
                    <div className="relative z-10 bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <FaRunning />
                      <Select
                        onChange={(value) => setUserFilter({ ...userFilter, sportId: value })}
                        containerProps={{
                          className: "!min-w-0 w-full",
                        }}
                        className="!w-full !pl-1 !border-transparent !text-sm2 !bg-opacity-0 !text-white"
                      >
                        {sports.map((sport) => (
                          <Option key={sport.id} value={sport.id}>
                            {sport.sportName}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  {/* START TIME */}
                  <div className="w-full">
                    <p className="text-sm2 mb-1">Start Time</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <IoIosTime />
                      <Select
                        onChange={(value) => setUserFilter({ ...userFilter, startTime: value })}
                        containerProps={{
                          className: "!min-w-0 w-full",
                        }}
                        className="!w-full !pl-1 !border-transparent !text-sm2 !bg-opacity-0 !text-white"
                      >
                        {timeOptions.map((time, index) => (
                          <Option key={index} value={time}>
                            {time}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  {/* END TIME */}
                  <div className="w-full">
                    <p className="text-sm2 mb-1">End Time</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <IoIosTimer />
                      <Select
                        onChange={(value) => setUserFilter({ ...userFilter, endTime: value })}
                        containerProps={{
                          className: "!min-w-0 w-full",
                        }}
                        className="!w-full !pl-1 !border-transparent !text-sm2 !bg-opacity-0 !text-white"
                      >
                        {timeOptions.map((time, index) => (
                          <Option key={index} value={time}>
                            {time}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                {/* SUBMIT PICK */}
                <div className="py-8 md:py-16 pb-6 flex justify-center">
                  <div className="flex gap-4">
                    {/* SEARCH GAMES BUTTON */}
                    <motion.div
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <Button
                        className={`z-10 ${
                          userFilter.date && userFilter.startTime && userFilter.endTime ? "" : "bg-gray-500 cursor-not-allowed"
                        }`}
                        onClick={() => handleSubmit()}
                      >
                        Search Games
                      </Button>
                    </motion.div>

                    {/* CREATE GAMES BUTTON */}
                    <AnimatePresence>
                      {isSearched && (
                        <motion.div
                          layout
                          key="create-game"
                          initial={{ opacity: 0, x: -40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -40 }}
                          transition={{
                            duration: 0.4,
                            scale: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          }}
                          className={`${!isSearched ? "pointer-events-none" : ""}`}
                        >
                          <Button
                            className={`z-0 bg-[#18631565] text-white" ${isCreatingGame ? "!animate-pulse-strong" : ""}`}
                            onClick={() => createGame()}
                          >
                            Create Game
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* GAMES AVAILABLE */}
                {isSearched && (
                  <>
                    {courtGames.length > 0 ? (
                      <>
                        {Object.keys(courtGames).length > 0 && (
                          <div className="!relative !z-10">
                            {courtGames.map((game, index) => (
                              <React.Fragment key={index}>
                                <GridGamesColored
                                  area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                                  icon={<FaCheck className="h-4 w-4 text-gray-700" />}
                                  date={game.gameTime.split("T")[0].split("-").reverse().join("/")}
                                  time={game.gameTime.split("T")[1].slice(0, 5)}
                                  sport={game.sport}
                                  players={game.players}
                                  onClick={() => subscribeToGame(game.gameId)}
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
                            <h1 className="md:text-xl text-xl lg:text-2xl font-bold text-center text-white relative z-0">
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
