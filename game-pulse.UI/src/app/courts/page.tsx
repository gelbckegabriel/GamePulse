// EVERY COURT AVAILABLE, YOU CAN FILTER BY COUNTRY, CITY, AND COURT NAME. AS WELL AS ORDER BY DISTANCE.

"use client";

import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { SportCard } from "../shared/sport-card/sport-card";

export default function Courts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const filterCards = [
    {
      backgroundImage: "/home/football2.webp",
      name: "Football",
    },
    {
      backgroundImage: "/home/basketball6.webp",
      name: "Basketball",
    },
    {
      backgroundImage: "/home/volleyball.webp",
      name: "Volleyball",
    },
    {
      backgroundImage: "/home/volleyball3.webp",
      name: "Tennis",
    },
    {
      backgroundImage: "/home/football.webp",
      name: "Baseball",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filterCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filterCards.length - 1 : prev - 1));
  };

  const currentCards = [
    ...filterCards.slice(currentIndex, currentIndex + visibleCards),
    ...filterCards.slice(
      0,
      Math.max(0, currentIndex + visibleCards - filterCards.length)
    ),
  ];

  return (
    <>
      <div>
        <div className="flex mt-10 mx-4 h-fit flex-row items-center justify-between gap-5">
          <BiChevronLeft
            className="text-4xl cursor-pointer"
            onClick={handlePrev}
          />
          <div className="flex w-full relative justify-center gap-10">
            {currentCards.map((card, index) => (
              <SportCard
                name={card.name}
                backgroundImage={card.backgroundImage}
                key={index}
              />
            ))}
          </div>
          <BiChevronRight
            className="text-4xl cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  );
}
