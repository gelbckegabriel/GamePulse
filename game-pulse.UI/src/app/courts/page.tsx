// EVERY COURT AVAILABLE, YOU CAN FILTER BY COUNTRY, CITY, AND COURT NAME. AS WELL AS ORDER BY DISTANCE.

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
        <div className="mt-10 flex flex-row flex-wrap justify-around">
          {filterCards.map((card, index) => (
            <SportCard name={card.name} backgroundImage={card.backgroundImage} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
