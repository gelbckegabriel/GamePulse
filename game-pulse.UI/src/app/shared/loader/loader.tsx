import React from "react";
import { motion } from "framer-motion";

type LoaderProps = {
  gap: string;
  size: string;
};

export const Loader = ({ size, gap }: LoaderProps) => {
  const transition = (x: number) => {
    return {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop" as const,
      delay: x * 0.2,
      ease: "easeInOut",
    };
  };
  return (
    <div className={`flex items-center gap-${gap}`}>
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={transition(0)}
        className={`h-${size} w-${size} rounded-full border border-lightGray/60 bg-gradient-to-b from-lightGray to-lightGray/60`}
      />
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={transition(1)}
        className={`h-${size} w-${size} rounded-full border border-lightGray/60 bg-gradient-to-b from-lightGray to-lightGray/60`}
      />
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={transition(2)}
        className={`h-${size} w-${size} rounded-full border border-lightGray/60 bg-gradient-to-b from-lightGray to-lightGray/60`}
      />
    </div>
  );
};
