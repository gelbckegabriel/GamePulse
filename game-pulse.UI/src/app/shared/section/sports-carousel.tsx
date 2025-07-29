"use client";

import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
// import { mainSports, randomSportsSet1, randomSportsSet2, SportImages } from "./sports-images"; // TODO
import { mainSports } from "./sports-images";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { Button } from "../utilities/button";

export const SportsCarousel = () => {
  const { width, height } = useWindowSize();

  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = width >= 768 ? 1.66667 : 0.3;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(scrollYProgress, [0.3, 0.35, 0.6], [maximumScale * 1.8, maximumScale, 1]);

  const secondaryCardsOpacity = useTransform(scrollYProgress, [0.56, 0.66], [0, 1]);

  const secondaryCardsTranslateXLeft = useTransform(scrollYProgress, [0.64, 0.66], [-20, 0]);
  const secondaryCardsTranslateXRight = useTransform(scrollYProgress, [0.64, 0.66], [20, 0]);

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">("inactive");
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress > 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16">
      <div ref={carouselWrapperRef} className="overflow-clip mt-[-100vh] h-[300vh]">
        <div className="h-screen sticky top-0 flex items-center">
          <div className="flex gap-5 mb-5 relative left-1/2 -translate-x-1/2">
            <motion.div
              style={{
                opacity: secondaryCardsOpacity,
                x: secondaryCardsTranslateXLeft,
              }}
              className="shrink-0 w-[250px] md:w-[120vh] aspect-[9/16] md:aspect-video rounded-2xl overflow-clip"
            >
              <img className="h-full w-full object-cover" src={mainSports[1].image} alt={mainSports[1].title} />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="relative shrink-0 w-[250px] md:w-[120vh] aspect-[9/16] md:aspect-video rounded-2xl overflow-clip"
            >
              <img className="h-full w-full object-cover" src={mainSports[0].image} alt={mainSports[0].title} />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute text-white text-lg left-0 bottom-0 p-8 w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-center"
              >
                <p>Basketball</p>
                <Button>Pick a court!</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{
                opacity: secondaryCardsOpacity,
                x: secondaryCardsTranslateXRight,
              }}
              className="shrink-0 w-[250px] md:w-[120vh] aspect-[9/16] md:aspect-video rounded-2xl overflow-clip"
            >
              <img className="h-full w-full object-cover" src={mainSports[2].image} alt={mainSports[0].title} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* TODO: NEED TO FIX ERRORS (NEXTJS IMAGES) */}
      {/* <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.3 }}
        className="space-y-3 -mt-[calc((100vh-(250px*(16/9)))/2)] md:-mt-[calc((100vh-(60vw*(9/16)))/2)] pt-4"
      >
        <SmallVideoCarousel sports={randomSportsSet1} />
        <div className="[--duration:68s] [--carousel-offset:-32px]">
          <SmallVideoCarousel sports={randomSportsSet2} />
        </div>
      </motion.div> */}
    </motion.div>
  );
};

// const SmallVideoCarousel = ({ sports }: { sports: SportImages[] }) => {
//   return (
//     <div className="overflow-clip">
//       <div className="flex gap-3 animate-carousel-move relative left-[var(--carousel-offset,0px)]">
//         {sports.map((sport, index) => (
//           <div className="w-[15vh] md:w-[23vh] aspect-video shrink-0" key={`${sport.title}-${index}`}>
//             <Image className="w-full h-full object-cover rounded-xl" src={sport.image} alt={sport.title} width={150} height={84} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
