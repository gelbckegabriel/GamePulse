"use client";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { SportCard } from "../shared/sport-card/sport-card";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Slider,
} from "@material-tailwind/react";

export default function Courts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const [distanceFilter, setDistanceFilter] = useState(25);

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
        <div className="flex justify-center gap-6">
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler>
              <Button> Sports </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <Checkbox id="football" label="Football" ripple={false} />
              </MenuItem>
              <MenuItem>
                <Checkbox id="basketball" label="Basketball" ripple={false} />
              </MenuItem>
              <MenuItem>
                <Checkbox id="volleyball" label="Volleyball" ripple={false} />
              </MenuItem>
              <MenuItem>
                <Checkbox id="tennis" label="Tennis" ripple={false} />
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler>
              <Button> Distance </Button>
            </MenuHandler>
            <MenuList>
              <span className="flex justify-center mb-3">
                {distanceFilter} km
              </span>
              <Slider
                step={1}
                min={1}
                defaultValue={distanceFilter}
                onChange={(event) =>
                  setDistanceFilter(Number(event.target.value))
                }
              />
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
}
