// EVERY COURT AVAILABLE, YOU CAN FILTER BY COUNTRY, CITY, AND COURT NAME. AS WELL AS ORDER BY DISTANCE.

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { SportCard } from "../shared/sport-card/sport-card";

export default function Courts() {
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
  ];

  return (
    <>
      <div>
        <div className="flex mt-10 mx-4 h-fit flex-row items-center justify-between gap-5">
          <BiChevronLeft className="text-4xl cursor-pointer" />
          <div className="flex w-full flex-row flex-wrap justify-around">
            {filterCards.map((card, index) => (
              <SportCard
                name={card.name}
                backgroundImage={card.backgroundImage}
                key={index}
              />
            ))}
          </div>
          <BiChevronRight className="text-4xl cursor-pointer" />
        </div>
      </div>
    </>
  );
}
