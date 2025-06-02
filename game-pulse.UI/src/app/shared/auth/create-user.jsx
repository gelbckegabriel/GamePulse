"use client";

import { useEffect, useState } from "react";
import { useAnimate, useDragControls, useMotionValue, motion } from "framer-motion";
import { FaFingerprint, FaRegEye, FaRegEyeSlash, FaRegUserCircle, FaRunning } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoMdPerson, IoMdPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import useMeasure from "react-use-measure";
import { Button } from "../utilities/button";
import { Option, Select } from "@material-tailwind/react";
import { apiClient } from "@/app/services/apiClient";
import { firebaseAuth } from "@/app/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInUser } from "@/userSlice";
import { useDispatch } from "react-redux";

export const CreateUser = ({ openCreate, setOpenCreate, setAuthOpen }) => {
  // FORM
  const dispatch = useDispatch();
  const [sports, setSports] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  useEffect(() => {
    apiClient("Sports/GetSports", "GET").then((response) => {
      setSports(response);
    });
  }, []);

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
      createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          // const userId = user.uid;
          // const createdTime = user.metadata.createdAt;
          console.log(user);
          setOpenCreate(false);
          setAuthOpen(false);

          // TODO: SET THE USER AT THE STORE
          // dispatch(signInUser({
          //   id: user.uid,
          // }));
        })
        .catch((e) => {
          const errorCode = e.code;
          const errorMessage = e.message;

          console.error(errorCode, errorMessage);
        });
    }
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

    setOpenCreate(false);
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
            className="absolute bottom-0 h-[70vh] md:h-[75vh] lg:h-[90vh] w-full overflow-hidden rounded-t-3xl bg-backgroundModal"
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
                onClick={() => setOpenCreate(false)}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-darkGray active:cursor-grabbing"
              ></button>
            </div>

            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              <div className="mx-auto max-w-2xl space-y-4 text-neutral-400 text-white">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">Create a new account</h2>

                <form className="form !mt-8">
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
                          className="pl-1 border-0 w-full outline-none text-sm2"
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
                          className="pl-1 border-0 w-full outline-none text-sm2"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* NICKNAME FIELD */}
                  <div>
                    <p className="mt-6 text-sm2 mb-1">Nickname</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <FaRegUserCircle />
                      <input
                        type="text"
                        maxLength={15}
                        style={{ backgroundColor: "transparent" }}
                        className="pl-1 border-0 w-full outline-none text-sm2"
                        required
                      />
                    </div>
                  </div>

                  {/* LOCATION AND FAVORITE SPORT FIELDS */}
                  <div className="flex justify-between gap-6 mt-6">
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

                  {/* EMAIL FIELD */}
                  <div>
                    <p className="mt-6 text-sm2 mb-1">Email</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <MdEmail />
                      <input
                        type="email"
                        maxLength={50}
                        style={{ backgroundColor: "transparent" }}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-1 border-0 w-full outline-none text-sm2"
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
                      <FaFingerprint className={`transition-all duration-300 ease-in-out ${isPasswordInvalid ? "text-issueRed" : ""}`} />
                      <input
                        type={showPassword ? "text" : "password"}
                        maxLength={20}
                        style={{ backgroundColor: "transparent" }}
                        onChange={handlePasswordChange}
                        className="pl-1 border-0 w-full outline-none text-sm2"
                        required
                      />
                      {showPassword ? (
                        <FaRegEye
                          className={`transition-all duration-300 ease-in-out cursor-pointer mr-1 ${isPasswordInvalid ? "text-issueRed" : ""}`}
                          onClick={togglePasswordView}
                        />
                      ) : (
                        <FaRegEyeSlash
                          className={`transition-all duration-300 ease-in-out cursor-pointer mr-1 ${isPasswordInvalid ? "text-issueRed" : ""}`}
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
                </form>

                {/* CREATE BUTTON */}
                <div className="!mt-10 flex justify-center">
                  <Button onClick={() => handleSubmit()}>Create Account</Button>
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
