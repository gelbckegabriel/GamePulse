"use client";

import { useEffect, useState } from "react";
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
  FaRunning,
} from "react-icons/fa";
import { IoMdPerson, IoMdPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import useMeasure from "react-use-measure";
import { Button } from "../utilities/button";
import { Option, Select } from "@material-tailwind/react";
import { apiClient } from "@/app/services/apiClient";
import { firebaseAuth } from "@/app/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { userService } from "@/app/services/cache/user-info";
import { SwalErrorTrigger } from "../utilities/swal-trigger";
import { sportsService } from "@/app/services/cache/sports-info";

export const CreateUser = ({ openCreate, setOpenCreate, setAuthOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(userService.getCurrentUser());
  const [sports, setSports] = useState(sportsService.getSports());
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  // FORM
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [favoriteSport, setFavoriteSport] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const userSubscription = userService.user$.subscribe((result) => {
      setUser(result);
    });

    const sportsSubscription = sportsService.sports$.subscribe((result) => {
      setSports(result);
    });

    // Clean up on unmount
    return () => {
      userSubscription.unsubscribe();
      sportsSubscription.unsubscribe();
    };
  }, [openCreate]);

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordInvalid(!validatePassword(value));
  };

  const handleSubmit = () => {
    setIsLoading(true);

    if (validatePassword(password)) {
      createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;

          userService.signInUser({
            id: user.uid,
            name: name,
            nickname: nickname,
            xp: 0,
            favoriteSport: favoriteSport,
            email: email,
            city: "Curitiba",
            state: "PR",
            country: "BR",
          });

          verifyUserExists(user.uid);
        })
        .catch((error) => {
          console.error(error);

          switch (error.message) {
            case "Firebase: Error (auth/email-already-in-use).":
              SwalErrorTrigger(
                "Authentication Error",
                "Looks like this email is already in use. Try signing in or use another email to create a new account.",
                error
              ).then(() => setIsLoading(false));
              break;
            default:
              triggerSwalError(
                "Authentication Error",
                "An error occurred while trying to create your user. Please try again later.",
                error
              ).then(() => {
                setIsLoading(false);
              });
              break;
          }
        });
    }
  };

  const verifyUserExists = async (userId) => {
    // Verify if user exists on the DB
    apiClient("User/GetUser/" + userId, "GET")
      .then((response) => {
        if (!response) {
          createUser(userId);
        } else {
          setIsLoading(false);
          setOpenCreate(false);
          setAuthOpen(false);
        }
      })
      .catch((error) => {
        triggerSwalError(
          "Authentication Error",
          "An error occurred while trying to verify your user. Please try again later.",
          error
        ).then(() => {
          setIsLoading(false);
        });
      });
  };

  const createUser = async (userId) => {
    apiClient("User/CreateUser", "POST", {
      id: userId,
      name: name,
      nickname: nickname,
      xp: 0,
      favoriteSport: favoriteSport,
      email: email,
      city: user.city,
      state: user.state,
      country: user.country,
    })
      .then((response) => {
        if (response) {
          setIsLoading(false);
          setOpenCreate(false);
          setAuthOpen(false);
        }
      })
      .catch((error) => {
        triggerSwalError(
          "Creation Error",
          "An error occurred while trying to create your user. Please try again later.",
          error
        ).then(() => {
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
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">
                  Create a new account
                </h2>

                <form className="form !mt-8">
                  {/* NAME FIELD */}
                  <div>
                    <p className="text-sm2 mb-1">Full Name</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <IoMdPerson />
                      <input
                        required
                        type="text"
                        maxLength={80}
                        style={{ backgroundColor: "transparent" }}
                        className="pl-1 border-0 w-full outline-none text-sm2"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* NICKNAME FIELD */}
                  <div>
                    <p className="mt-6 text-sm2 mb-1">Nickname</p>
                    <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                      <FaRegUserCircle />
                      <input
                        required
                        type="text"
                        maxLength={15}
                        style={{ backgroundColor: "transparent" }}
                        className="pl-1 border-0 w-full outline-none text-sm2"
                        onChange={(e) => setNickname(e.target.value)}
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
                          onChange={(val) => setFavoriteSport(val)}
                        >
                          {sports.map((sport) => (
                            <Option key={sport.id} value={sport.id}>
                              {sport.sportName}
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
                        required
                        type="email"
                        maxLength={50}
                        className="bg-transparent pl-1 border-0 w-full outline-none text-sm2"
                        onChange={(e) => setEmail(e.target.value)}
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
                        required
                        type={showPassword ? "text" : "password"}
                        maxLength={20}
                        className="bg-transparent pl-1 border-0 w-full outline-none text-sm2"
                        onChange={handlePasswordChange}
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
                </form>

                {/* CREATE BUTTON */}
                <div className="!mt-10 flex justify-center">
                  <Button
                    className={`${isLoading ? "animate-pulse-strong" : ""}`}
                    onClick={() => handleSubmit()}
                  >
                    Create Account
                  </Button>
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
