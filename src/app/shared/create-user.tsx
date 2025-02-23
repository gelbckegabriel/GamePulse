"use client";

import { useState } from "react";
import {
  useAnimate,
  useDragControls,
  useMotionValue,
  motion,
} from "framer-motion";
import {
  FaFingerprint,
  FaRegEye,
  FaRegEyeSlash,
  FaRegUserCircle,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import useMeasure from "react-use-measure";
import { Button } from "./button";

type Props = {
  openCreate: boolean;
  setOpenCreate: (isOpen: boolean) => void;
};

export const CreateUser = ({ openCreate, setOpenCreate }: Props) => {
  // FORM
  const [password, setPassword] = useState<string>("");
  const [isPasswordInvalid, setIsPasswordInvalid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

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

    setOpenCreate(false);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      {openCreate && (
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
            className="absolute bottom-0 h-[75vh] md:h-[55vh] lg:h-[85vh] w-full overflow-hidden rounded-t-3xl bg-backgroundModal"
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
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-darkGray active:cursor-grabbing"
              ></button>
            </div>

            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              <div className="mx-auto max-w-2xl space-y-4 text-neutral-400 text-white">
                <h2 className="text-4xl font-bold text-center">
                  Create a new account
                </h2>

                <div className="form">
                  {/* NAME AND LASTNAME CONTAINER */}
                  <div className="flex justify-between">
                    <div className="w-[40%] md:w-[35%] lg:w-[35%]">
                      <p className="text-sm2 mb-1">First Name</p>
                      <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                        <IoMdPerson />
                        <input
                          type="text"
                          maxLength={20}
                          style={{ backgroundColor: "transparent" }}
                          className="pl-1 border-0 w-full outline-none text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="w-[55%]">
                      <p className="text-sm2 mb-1">Last Name</p>
                      <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                        <FaPerson />
                        <input
                          type="text"
                          maxLength={30}
                          style={{ backgroundColor: "transparent" }}
                          className="pl-1 border-0 w-full outline-none text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* USERNAME FIELD */}
                  <div>
                    <p className="mt-6 text-sm2 mb-1">Username</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <FaRegUserCircle />
                      <input
                        type="text"
                        maxLength={15}
                        style={{ backgroundColor: "transparent" }}
                        className="pl-1 border-0 w-full outline-none text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* EMAIL FIELD */}
                  <div>
                    <p className="mt-6 text-sm2 mb-1">Email</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <MdEmail />
                      <input
                        type="email"
                        maxLength={50}
                        style={{ backgroundColor: "transparent" }}
                        className="pl-1 border-0 w-full outline-none text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* PASSWORD FIELD */}
                  <div>
                    <p className="mt-6 text-sm2 mb-1">Password</p>
                    <div
                      className={`bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl ${
                        isPasswordInvalid ? "border-issueRed border-2" : ""
                      }`}
                    >
                      <FaFingerprint
                        className={`transition-all duration-300 ease-in-out ${
                          isPasswordInvalid ? "text-issueRed" : ""
                        }`}
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        maxLength={20}
                        style={{ backgroundColor: "transparent" }}
                        onChange={handlePasswordChange}
                        className="pl-1 border-0 w-full outline-none text-sm"
                        required
                      />
                      {showPassword ? (
                        <FaRegEye
                          className={`transition-all duration-300 ease-in-out cursor-pointer mr-1 ${
                            isPasswordInvalid ? "text-issueRed" : ""
                          }`}
                          onClick={togglePasswordView}
                        />
                      ) : (
                        <FaRegEyeSlash
                          className={`transition-all duration-300 ease-in-out cursor-pointer mr-1 ${
                            isPasswordInvalid ? "text-issueRed" : ""
                          }`}
                          onClick={togglePasswordView}
                        />
                      )}
                    </div>
                    <p
                      className={`transition-all duration-300 ease-in-out text-sm text-lightGray text-opacity-90 ${
                        isPasswordInvalid ? "text-issueRed" : ""
                      }`}
                    >
                      Minimum length is 8 characters.
                    </p>
                  </div>
                </div>

                {/* CREATE BUTTON */}
                <div className="mt-6 flex justify-center">
                  <Button onClick={() => handleSubmit}>Create Account</Button>
                </div>

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
