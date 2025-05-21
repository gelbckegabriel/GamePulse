"use client";

import { useEffect, useState } from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Button, Checkbox, Slider, Select, Option } from "@material-tailwind/react";
import Paginator from "../shared/paginator";
import { Container } from "../shared/container";
import { CourtsCard } from "../shared/courts-card";
import { getCourts } from "../services/courtsService";

export default function Courts() {
  const [isLoading, setIsLoading] = useState(true);
  const [sportFilter, setSportFilter] = useState([
    { name: "football", checked: true },
    { name: "basketball", checked: true },
    { name: "volleyball", checked: true },
    { name: "tennis", checked: true },
  ]);
  const [distanceFilter, setDistanceFilter] = useState(50);
  const [cityFilter, setCityFilter] = useState("curitiba");
  const [orderFilter, setOrderFilter] = useState("distance");
  const [courts, setCourts] = useState([]);
  // const [courts, setCourts] = useState([
  //   {
  //     name: "Parque Atuba",
  //     city: "Curitiba, PR",
  //     distance: 13,
  //     address: "R. Pintor Ricardo Krieger, 550 - Atuba, Curitiba - PR, 82630-143",
  //     web_address: "https://www.curitiba.pr.gov.br/conteudo/parque-municipal-atuba/288",
  //     gps_assist: "http://localhost:3000/courts",
  //     map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.80313691373!2d-49.2078254!3d-25.377913499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce61cccc4aa8d%3A0xd94db68cd4cd4489!2sAtuba%20Park!5e0!3m2!1sfr!2sbr!4v1743891260643!5m2!1sfr!2sbr",
  //     sports: ["basketball", "football"],
  //     favorite: false,
  //     redirect_link: "/",
  //     src: "/courts/background.png",
  //   },
  //   {
  //     name: "Public Tennis Court",
  //     city: "Curitiba, PR",
  //     distance: 17,
  //     address: "Av. Presidente Arthur da Silva Bernardes, 589 - Portão, Curitiba - PR, 80310-010",
  //     web_address: "https://g.co/kgs/yZTFnZi",
  //     gps_assist: "",
  //     map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230503.43746694!2d-49.43401161685449!3d-25.48448775126223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x6d2f6ba5bacbe809!2sCuritiba%2C%20Paran%C3%A1!5e0!3m2!1sfr!2sbr!4v1743117337947!5m2!1sfr!2sbr",
  //     sports: ["tennis"],
  //     favorite: false,
  //     redirect_link: "/",
  //     src: "/courts/background.png",
  //   },
  //   {
  //     name: "",
  //     city: "",
  //     distance: 0,
  //     address: "",
  //     web_address: "",
  //     gps_assist: "",
  //     map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230503.43746694!2d-49.43401161685449!3d-25.48448775126223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x6d2f6ba5bacbe809!2sCuritiba%2C%20Paran%C3%A1!5e0!3m2!1sfr!2sbr!4v1743117337947!5m2!1sfr!2sbr",
  //     sports: ["basketball", "football", "football"],
  //     favorite: false,
  //     redirect_link: "/",
  //     src: "/courts/background.png",
  //   },
  // ]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // });

  useEffect(() => {
    getCourts().then((response) => {
      const courtsAvailable = [];

      response.forEach((element) => {
        courtsAvailable.push({
          name: element.name,
          distance: 0,
          city: `${element.city}, ${element.state}`,
          address: element.address,
          web_address: element.gMaps,
          map: element.map,
          redirect_link: "/",
          src: "/courts/background.png",
          sports: element.sportsAvailable,
          // TODO: distance: element.distance,
          // TODO: favorite: false,
        });
      });
      setCourts(courtsAvailable);
      setIsLoading(false);
    });
  }, []);

  const handleFavoriteToggle = (index) => {
    const updatedCourts = [...courts];
    updatedCourts[index].favorite = !updatedCourts[index].favorite;
    setCourts(updatedCourts);
  };

  return (
    <>
      <div className="bg-black">
        <Container>
          <div>
            <br />
            <br />

            {/* FILTERS BAR */}
            <div className="mb-6 flex flex-wrap justify-center gap-6">
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
                  <Button className="bg-white text-black w-[105px] hover:scale-105 hover:bg-white/80"> Sports </Button>
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
                  <Button className="bg-white text-black w-[105px] hover:scale-105 hover:bg-white/80"> Distance </Button>
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
                  <Button className="bg-white text-black w-[105px] hover:scale-105 hover:bg-white/80"> City </Button>
                </MenuHandler>
                <MenuList className="!min-h-[25vh]">
                  <Select value={cityFilter} onChange={(val) => setCityFilter(val)} label="Select City">
                    <Option value="curitiba">Curitiba, PR</Option>
                  </Select>
                </MenuList>
              </Menu>

              {/* ORDER BY */}
              <Menu
                lockScroll={true}
                dismiss={false}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                  <Button className="bg-white text-black w-[105px] duration-150 hover:scale-105 hover:bg-white/80"> Order By </Button>
                </MenuHandler>
                <MenuList className="!min-h-[25vh]">
                  <Select value={orderFilter} onChange={(val) => setOrderFilter(val)} label="Order by...">
                    <Option value="distance">Distance</Option>
                    <Option value="favorite">Favorites</Option>
                  </Select>
                </MenuList>
              </Menu>
            </div>

            <br />

            {/* COURTS */}
            {/* {courts.length > 0 && ()} */}
            <CourtsCard courts={courts} isLoading={isLoading} onFavoriteToggle={() => handleFavoriteToggle(index)} />

            <br />
            <br />

            <div className="flex justify-center my-5">{/* <Paginator index={1} /> */}</div>
            <br />
            <br />
            <br />
          </div>
        </Container>
      </div>
    </>
  );
}
