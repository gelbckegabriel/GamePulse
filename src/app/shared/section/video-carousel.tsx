"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import {
  mainSports,
  randomSportsSet1,
  randomSportsSet2,
  SportImages,
  sports,
} from "./sports-images";
import { useRef } from "react";

export const VideoCarousel = () => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [3, 2.5, 1]);

  return (
    <div className="bg-background pb-8">
      <div
        ref={carouselWrapperRef}
        className="overflow-clip mt-[-100vh] h-[300vh]"
      >
        <div className="h-screen sticky top-0 flex items-center">
          <div className="flex gap-5 mb-5 relative left-1/2 -translate-x-1/2">
            <div className="shrink-0 w-[100vh] aspect-video rounded-2xl overflow-clip">
              <img
                className="h-full w-full object-cover"
                src={mainSports[1].image}
                alt={mainSports[1].title}
              />
            </div>
            <motion.div style={{ scale }} className="shrink-0 w-[100vh] aspect-video rounded-2xl overflow-clip">
              <img
                className="h-full w-full object-cover"
                src={mainSports[0].image}
                alt={mainSports[0].title}
              />
            </motion.div>
            <div className="shrink-0 w-[100vh] aspect-video rounded-2xl overflow-clip">
              <img
                className="h-full w-full object-cover"
                src={mainSports[2].image}
                alt={mainSports[0].title}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <SmallVideoCarousel sports={randomSportsSet1} />
        <div className="[--duration:68s] [--carousel-offset:-32px]">
          <SmallVideoCarousel sports={randomSportsSet2} />
        </div>
      </div>
    </div>
  );
};

const SmallVideoCarousel = ({ sports }: { sports: SportImages[] }) => {
  return (
    <div className="overflow-clip">
      <div className="flex gap-3 animate-carousel-move relative left-[var(--carousel-offset,0px)]">
        {sports.map((sport, index) => (
          <div
            className="w-[23vh] aspect-video shrink-0"
            key={`${sport.title}-${index}`}
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={sport.image}
              alt={sport.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
