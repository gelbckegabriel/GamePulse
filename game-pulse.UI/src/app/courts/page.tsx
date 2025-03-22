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
          <div className="flex gap-8 md:gap-16 rounded-3xl p-4 bg-slate-900/20 backdrop-blur shadow-xl text-sm2 relative">
            <button
              className="cursor-pointer pl-4 relative"
              onClick={() => toggleFilter("sports")}
            >
              Sports
              {activeFilter === "sports" && (
                <div className="absolute flex flex-col bg-white text-black p-4 rounded shadow-lg top-full mt-2">
                  <form>
                    <div className="flex flex-row gap-2">
                      <input type="checkbox" placeholder="Football" />{" "}
                      <span>Football</span>
                    </div>
                  </form>
                  <span>Football</span>
                  <span>Basketball</span>
                  <span>Volleyball</span>
                  <span>Tennis</span>
                  <span>Baseball</span>
                </div>
              )}
            </button>
            <button
              className="cursor-pointer relative"
              onClick={() => toggleFilter("distance")}
            >
              Distance
              {activeFilter === "distance" && (
                <div className="absolute flex flex-col bg-white text-black p-4 rounded shadow-lg top-full mt-2 w-48">
                  <label className="block mb-2 text-sm font-medium text-center">
                    {distanceFilter} km
                  </label>
                  <input
                    id="default-range"
                    type="range"
                    value={distanceFilter}
                    min="0"
                    max="50"
                    step="1"
                    onChange={(e) => setDistanceFilter(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                </div>
              )}
            </button>
            <button
              className="cursor-pointer relative"
              onClick={() => toggleFilter("type")}
            >
              Type
              {activeFilter === "type" && (
                <div className="absolute flex flex-col bg-white text-black p-4 rounded shadow-lg top-full mt-2">
                  <span>Indoor</span>
                  <span>Outdoor</span>
                </div>
              )}
            </button>
            <button
              className="cursor-pointer pr-4 relative"
              onClick={() => toggleFilter("parking")}
            >
              Parking
              {activeFilter === "parking" && (
                <div className="absolute flex flex-col bg-white text-black p-4 rounded shadow-lg top-full mt-2">
                  <span>Available</span>
                  <span>Not Available</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
