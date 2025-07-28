"use client";

import { useEffect, useState } from "react";
import { useAnimate, useDragControls, useMotionValue, motion } from "framer-motion";
import { FaRegUserCircle, FaRunning } from "react-icons/fa";
import { IoMdPerson, IoMdPin } from "react-icons/io";
import useMeasure from "react-use-measure";
import { Button } from "../utilities/button";
import { Option, Select } from "@material-tailwind/react";
import { apiClient } from "@/app/services/apiClient";
import Swal from "sweetalert2";
import { userService } from "@/app/services/cache/user-info";

export const ProviderAuth = ({ openProvider, setOpenProvider, setAuthOpen }) => {
  // FORM
  const [user, setUser] = useState(userService.getCurrentUser());
  const [name, setName] = useState(user.name);
  const [nickname, setNickname] = useState(user.nickname);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteSport, setFavoriteSport] = useState();
  const [sports, setSports] = useState([]);

  useEffect(() => {
    apiClient("Sports/GetSports", "GET").then((response) => {
      setSports(response);
    });
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);

    userService.signInUser({
      name: name,
      nickname: nickname,
      favoriteSport: favoriteSport,
    });

    apiClient("User/CreateUser", "POST", {
      id: user.id,
      name: name,
      nickname: nickname,
      xp: 0,
      favoriteSport: favoriteSport,
      email: user.email,
      city: user.city,
      state: user.state,
      country: user.country,
    })
      .then((response) => {
        if (response) {
          setIsLoading(false);
          setOpenProvider(false);
          setAuthOpen(false);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Creation Error",
          text: "An error occurred while trying to create your user. Please try again later.",
          footer: `${error}`,
          confirmButtonColor: "#f27474",
          confirmButtonText: "Close",
          background: "#555",
          color: "#EEE",
        }).then(() => {
          setIsLoading(false);
          setOpenProvider(false);
          setAuthOpen(false);
        });
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

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpenAuth(false);
  };

  return (
    <>
      {openProvider && (
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
            className="absolute bottom-0 h-[70vh] md:h-[55vh] lg:h-[75vh] w-full overflow-hidden rounded-t-3xl bg-backgroundModal"
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
                onClick={() => setOpenAuth(false)}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-darkGray active:cursor-grabbing"
              ></button>
            </div>

            <div className="relative z-0 h-full overflow-y-auto p-4 pt-12">
              <div className="mx-auto max-w-2xl space-y-4 text-neutral-400 text-white">
                <h2 className="pt-2 text-3xl md:text-4xl lg:text-4xl font-bold text-center">Finish Account Setup</h2>

                {/* DISPLAY UPDATE FORM IF NEW USER DETECTED */}
                <motion.div
                  initial={{ opacity: 0, y: 500 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <form className="form mt-8">
                    {/* NAME AND NICKNAME FIELDS */}
                    <div className="flex justify-between gap-6">
                      <div className="w-[50%] md:w-[45%]">
                        <p className="text-sm2 mb-1">Name</p>
                        <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                          <IoMdPerson />
                          <input
                            required
                            type="text"
                            value={name}
                            maxLength={60}
                            style={{ backgroundColor: "transparent" }}
                            className="pl-1 border-0 w-full outline-none text-sm2"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="w-[50%] md:w-[45%]">
                        <p className="text-sm2 mb-1">Nickname</p>
                        <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                          <FaRegUserCircle />
                          <input
                            required
                            type="text"
                            value={nickname}
                            maxLength={20}
                            style={{ backgroundColor: "transparent" }}
                            className="pl-1 border-0 w-full outline-none text-sm2"
                            onChange={(e) => setNickname(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* LOCATION AND FAVORITE SPORT FIELDS */}
                    <div className="flex justify-between gap-6 mt-8">
                      <div className="!z-50 w-[50%] md:w-[45%]">
                        <p className="text-sm2 mb-1">Location</p>
                        <div className="max-h-10 bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                          <IoMdPin />
                          <Select
                            containerProps={{
                              className: "!min-w-0 w-full",
                            }}
                            className="!w-full !pl-1 !border-0 !border-transparent !outline-none !text-sm2 !bg-opacity-0 !text-white"
                          >
                            <Option value="curitiba">Curitiba, PR</Option>
                          </Select>
                        </div>
                      </div>

                      <div className="!z-50 w-[50%] md:w-[45%]">
                        <p className="text-sm2 mb-1">Favorite Sport</p>
                        <div className="max-h-10 bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                          <FaRunning />
                          <Select
                            onChange={(val) => setFavoriteSport(val)}
                            containerProps={{
                              className: "!min-w-0 w-full",
                            }}
                            className="!pl-1 !border-0 !border-transparent !w-full !outline-none !text-sm2 !bg-opacity-0 !text-white"
                          >
                            {sports.map((sport, index) => (
                              <Option key={index} value={index + 1}>
                                {sport}
                              </Option>
                            ))}
                          </Select>
                        </div>
                      </div>
                    </div>
                  </form>

                  {/* SUBMIT BUTTON */}
                  <div className="!mt-14 pb-6 flex justify-center">
                    <Button className={`w-[30%] ${isLoading ? "!animate-pulse-strong" : ""}`} onClick={() => handleSubmit()}>
                      Submit
                    </Button>
                  </div>
                </motion.div>

                {/* TERMS OF ACCEPTANCE */}
                {/* <div className="terms"></div> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
