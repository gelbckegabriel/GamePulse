"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import {
  mainSports,
  randomSportsSet1,
  randomSportsSet2,
  SportImages,
  sports,
} from "./sports-images";
import { useMemo, useRef } from "react";
import { useWindowSize } from "react-use";

export const VideoCarousel = () => {
  const { width, height } = useWindowSize();

  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const secondaryCardsOpacity = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [0, 1]
  );
  const secondaryCardsTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const secondaryCardsTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  return (
    <div className="bg-background pb-8">
      <div
        ref={carouselWrapperRef}
        className="overflow-clip mt-[-100vh] h-[300vh]"
      >
        <div className="h-screen sticky top-0 flex items-center">
          <div className="flex gap-5 mb-5 relative left-1/2 -translate-x-1/2">
            <motion.div
              style={{
                opacity: secondaryCardsOpacity,
                x: secondaryCardsTranslateXLeft,
              }}
              className="shrink-0 w-[120vh] aspect-video rounded-2xl overflow-clip"
            >
              <img
                className="h-full w-full object-cover"
                src={mainSports[1].image}
                alt={mainSports[1].title}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="shrink-0 w-[120vh] aspect-video rounded-2xl overflow-clip"
            >
              <img
                className="h-full w-full object-cover"
                src={mainSports[0].image}
                alt={mainSports[0].title}
              />
            </motion.div>
            <motion.div
              style={{
                opacity: secondaryCardsOpacity,
                x: secondaryCardsTranslateXRight,
              }}
              className="shrink-0 w-[120vh] aspect-video rounded-2xl overflow-clip"
            >
              <img
                className="h-full w-full object-cover"
                src={mainSports[2].image}
                alt={mainSports[0].title}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="space-y-3 -mt-[calc(100vh - (60vw * (16 / 9) / 2))]">
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
