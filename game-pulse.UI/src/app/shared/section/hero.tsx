"use client";

import { useRef } from "react";
import { Button } from "../utilities/button";
import { Container } from "../utilities/container";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0]);

  return (
    <>
      <div className="relative bg-background text-white">
        <motion.div
          ref={videoContainerRef}
          style={{ opacity }}
          className="absolute left-0 h-[200vh] w-full"
        >
          <video
            src="/home/HeroVideoHD.mp4"
            className="sticky top-0 h-screen object-cover w-full"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
        <Container className="relative z-10 pb-7 h-[--hero-height]">
          <motion.div
            className="flex flex-col items-start justify-end h-full"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 0.98 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-10">
              Players are waiting. <br />
              Are you in?
            </h1>
            <Link href="/courts">
              <Button className="mb-16" size="large">
                Courts
              </Button>
            </Link>
            <p className="font-semibold">Only on GamePulse.</p>
          </motion.div>
        </Container>
      </div>
    </>
  );
};
