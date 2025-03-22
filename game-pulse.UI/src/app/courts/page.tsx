"use client";

import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { SportCard } from "../shared/sport-card/sport-card";
import { motion } from "framer-motion";

export default function Courts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const [distanceFilter, setDistanceFilter] = useState(25);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const ref = useRef<HTMLLIElement | null>(null);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

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

  const toggleFilter = (filterName: string) => {
    setActiveFilter((prev) => (prev === filterName ? null : filterName));
  };

  return (
    <>
      <div>
        {/* SPORTS FILTER */}
        <div className="hidden lg:flex mt-10 mx-4 h-fit flex-row items-center justify-between gap-5">
          <button onClick={handlePrev}>
            <BiChevronLeft className="text-4xl" />
          </button>
          <div className="flex w-full relative justify-center gap-10">
            {currentCards.map((card, index) => (
              <SportCard
                name={card.name}
                backgroundImage={card.backgroundImage}
                key={index}
              />
            ))}
          </div>
          <button onClick={handleNext}>
            <BiChevronRight className="text-4xl" />
          </button>
        </div>

        <br />
        <br />

        {/* FILTERS BAR */}
        <div className="flex justify-center">
          
        </div>
      </div>
    </>
  );
}
