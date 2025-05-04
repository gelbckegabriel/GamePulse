"use client";

import { useState } from "react";
import { useAnimate, useDragControls, useMotionValue, motion } from "framer-motion";
import { FaFingerprint, FaRegEye, FaRegEyeSlash, FaRegUserCircle, FaRunning } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoMdPerson, IoMdPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import useMeasure from "react-use-measure";
import { Button } from "./button";
import { Option, Select, Tooltip } from "@material-tailwind/react";

export const ProviderAuth = ({ openAuth, setOpenAuth }) => {
  // FORM
  const [newUser, setNewUser] = useState(false);

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

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordInvalid(!validatePassword(value));
  };

  const handleSubmit = () => {
    if (validatePassword(password)) {
      // Handle form submission
    }
  };

  return (
    <>
      {openAuth && (
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
                <h2 className="pt-2 text-3xl md:text-4xl lg:text-4xl font-bold text-center">Authenticate</h2>

                <div className="providers py-6">
                  {/* AUTHENTICATORS */}
                  <div className="flex justify-center gap-20">
                    <div className="w-[30%]">
                      <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex justify-center items-center gap-2 p-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-25">
                        <span className="flex items-center">
                          <img src="auth/google.webp" alt="google logo" className="h-8 w-8" />
                          {/* <span className="pl-1 text-xl font-medium tracking-wider">oogle</span> */}
                        </span>
                      </div>
                    </div>

                    {/* TODO: Facebook might be implemented later on */}
                    <div className="w-[30%]">
                      <Tooltip content="Not available yet !">
                        <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex justify-center items-center gap-2 p-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-25">
                          <span className="flex items-center">
                            <img src="auth/facebook.webp" alt="facebook logo" className="h-8 w-8" />
                          </span>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </div>

                <div className="form">
                  {/* NAME AND LASTNAME FIELDS */}
                  <div className="flex justify-between">
                    <div className="w-[55%] md:w-[45%]">
                      <p className="text-sm2 mb-1">Name</p>
                      <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                        <IoMdPerson />
                        <input
                          type="text"
                          maxLength={60}
                          style={{ backgroundColor: "transparent" }}
                          className="pl-1 border-0 w-full outline-none text-sm2"
                          required
                        />
                      </div>
                    </div>

                    <div className="w-[40%]">
                      <p className="text-sm2 mb-1">Nickname</p>
                      <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                        <FaRegUserCircle />
                        <input
                          type="text"
                          maxLength={20}
                          style={{ backgroundColor: "transparent" }}
                          className="pl-1 border-0 w-full outline-none text-sm2"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* LOCATION AND FAVORITE SPORT FIELDS */}
                  <div className="flex justify-between mt-8">
                    <div className="w-[55%] md:w-[45%]">
                      <p className="text-sm2 mb-1">Location</p>
                      <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                        <IoMdPin />
                        <Select disabled={newUser} className="!pl-1 !border-0 !border-transparent !w-full !outline-none !text-sm2 !bg-opacity-0 !text-white">
                          <Option value="curitiba">Curitiba, PR</Option>
                        </Select>
                      </div>
                    </div>

                    <div className="w-[40%]">
                      <p className="text-sm2 mb-1">Favorite Sport</p>
                      <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                        <FaRunning />
                        <Select disabled={newUser} className="!pl-1 !border-0 !border-transparent !w-full !outline-none !text-sm2 !bg-opacity-0 !text-white">
                          <Option value="basketball">Basktetball</Option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* UPDATE BUTTON */}
                {newUser ? (
                  <>
                    <div className="pt-6 flex justify-center">
                      <Button onClick={() => handleSubmit}>Update Account Info</Button>
                    </div>
                  </>
                ) : (
                  <></>
                )}

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
