"use client";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { SportCard } from "../shared/sport-card/sport-card";
import { Menu, MenuHandler, MenuList, MenuItem, Button, Checkbox, Slider, Select, Option } from "@material-tailwind/react";
import Paginator from "../shared/paginator";
import { CourtDetails } from "../shared/court-details/court-details";
import { Container } from "../shared/container";

export default function Courts() {
  const filterCards = [
    {
      backgroundImage: "/home/football2.webp",
      name: "football",
    },
    {
      backgroundImage: "/home/basketball6.webp",
      name: "basketball",
    },
    {
      backgroundImage: "/home/volleyball.webp",
      name: "volleyball",
    },
    {
      backgroundImage: "/home/volleyball3.webp",
      name: "tennis",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const [sportFilter, setSportFilter] = useState([
    { name: "football", checked: true },
    { name: "basketball", checked: true },
    { name: "volleyball", checked: true },
    { name: "tennis", checked: true },
  ]);
  const [distanceFilter, setDistanceFilter] = useState(25);
  const [cityFilter, setCityFilter] = useState("curitiba");
  const [courts, setCourts] = useState([
    {
      name: "Parque Atuba",
      city: "Curitiba, PR",
      distance: 13,
      address: "R. Pintor Ricardo Krieger, 550 - Atuba, Curitiba - PR, 82630-143",
      web_address: "https://www.curitiba.pr.gov.br/conteudo/parque-municipal-atuba/288",
      gps_assist: "http://localhost:3000/courts",
      sports: ["basketball", "football"],
      favorite: false,
      redirect_link: "http://localhost:3000/courts",
    },
    {
      name: "",
      city: "",
      distance: "",
      address: "",
      web_address: "",
      gps_assist: "",
      sports: [],
      favorite: false,
      redirect_link: "",
    },
  ]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filterCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filterCards.length - 1 : prev - 1));
  };

  const currentCards = [
    ...filterCards.slice(currentIndex, currentIndex + visibleCards),
    ...filterCards.slice(0, Math.max(0, currentIndex + visibleCards - filterCards.length)),
  ];

  const handleFavoriteToggle = (index) => {
    const updatedCourts = [...courts];
    updatedCourts[index].favorite = !updatedCourts[index].favorite;
    setCourts(updatedCourts);
  };

  return (
    <>
      <Container>
        <div>
          {/* SPORTS FILTER */}
          <div className="hidden lg:flex mt-10 mx-4 h-fit flex-row items-center justify-between gap-5">
            <button onClick={handlePrev}>
              <BiChevronLeft className="text-4xl" />
            </button>
            <div className="flex w-full relative justify-center gap-10">
              {currentCards.map((card, index) => (
                <SportCard name={card.name} backgroundImage={card.backgroundImage} key={index} />
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
            {/* SPORTS */}
            <Menu
              lockScroll={true}
              dismiss={false}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <Button>
                  <span>Sports</span>
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>
                  <Checkbox
                    checked={sportFilter.find((item) => item.name === "football")?.checked}
                    id="football"
                    label="Football"
                    onChange={() => {
                      const updatedSportFilter = [...sportFilter];
                      const sportIndex = updatedSportFilter.findIndex((item) => item.name === "football");
                      updatedSportFilter[sportIndex].checked = !updatedSportFilter[sportIndex].checked;
                      setSportFilter(updatedSportFilter);
                    }}
                  />
                </MenuItem>
                <MenuItem>
                  <Checkbox
                    checked={sportFilter.find((item) => item.name === "basketball")?.checked}
                    id="basketball"
                    label="Basketball"
                    onChange={() => {
                      const updatedSportFilter = [...sportFilter];
                      const sportIndex = updatedSportFilter.findIndex((item) => item.name === "basketball");
                      updatedSportFilter[sportIndex].checked = !updatedSportFilter[sportIndex].checked;
                      setSportFilter(updatedSportFilter);
                    }}
                  />
                </MenuItem>
                <MenuItem>
                  <Checkbox
                    checked={sportFilter.find((item) => item.name === "volleyball")?.checked}
                    id="volleyball"
                    label="Volleyball"
                    onChange={() => {
                      const updatedSportFilter = [...sportFilter];
                      const sportIndex = updatedSportFilter.findIndex((item) => item.name === "volleyball");
                      updatedSportFilter[sportIndex].checked = !updatedSportFilter[sportIndex].checked;
                      setSportFilter(updatedSportFilter);
                    }}
                  />
                </MenuItem>
                <MenuItem>
                  <Checkbox
                    checked={sportFilter.find((item) => item.name === "tennis")?.checked}
                    id="tennis"
                    label="Tennis"
                    onChange={() => {
                      const updatedSportFilter = [...sportFilter];
                      const sportIndex = updatedSportFilter.findIndex((item) => item.name === "tennis");
                      updatedSportFilter[sportIndex].checked = !updatedSportFilter[sportIndex].checked;
                      setSportFilter(updatedSportFilter);
                    }}
                  />
                </MenuItem>
              </MenuList>
            </Menu>

            {/* DISTANCE */}
            <Menu
              lockScroll={true}
              dismiss={false}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <Button> Distance </Button>
              </MenuHandler>
              <MenuList>
                <span className="flex justify-center mb-3">{distanceFilter} km</span>
                <Slider step={1} min={1} defaultValue={distanceFilter} onChange={(event) => setDistanceFilter(Number(event.target.value))} />
              </MenuList>
            </Menu>

            {/* CITY */}
            <Menu
              lockScroll={true}
              dismiss={false}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <Button> City </Button>
              </MenuHandler>
              <MenuList className="!min-h-[25vh]">
                <Select value={cityFilter} onChange={(val) => setCityFilter(val)} label="Select City">
                  <Option value="curitiba">Curitiba, PR</Option>
                </Select>
              </MenuList>
            </Menu>
          </div>

          {/* COURTS */}
          <div className="flex flex-wrap justify-center my-20">
            {courts.map((court, index) => (
              <CourtDetails
                name={court.name}
                city={court.city}
                distance={court.distance}
                address={court.address}
                web_address={court.web_address}
                gps_assist={court.gps_assist}
                sports={court.sports}
                redirect_link={court.redirect_link}
                favorite={court.favorite}
                onFavoriteToggle={() => handleFavoriteToggle(index)}
              />
            ))}
          </div>

          <div className="flex justify-center my-5">
            <Paginator index={1} />
          </div>
        </div>
      </Container>
    </>
  );
}
