"use client";

import { useEffect, useState } from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Button, Checkbox, Slider, Select, Option } from "@material-tailwind/react";
import Paginator from "../shared/utilities/paginator";
import { Container } from "../shared/utilities/container";
import { CourtsCard } from "../shared/court/courts-card";
import { apiClient } from "../services/apiClient";

export default function Courts() {
  const [isLoading, setIsLoading] = useState(true);
  const [sportFilter, setSportFilter] = useState([]);
  const [distanceFilter, setDistanceFilter] = useState(50);
  const [locationFilter, setLocationFilter] = useState({
    country: "",
    state: "",
    city: "",
  });
  const [orderFilter, setOrderFilter] = useState("distance");
  const [courts, setCourts] = useState([
    {
      id: 0,
      name: "Fake1",
      distance: 0,
      city: "",
      address: "",
      web_address: "",
      map: "",
      redirect_link: "/",
      src: "",
      sports: "",
    },
    {
      id: 0,
      name: "Fake2",
      distance: 0,
      city: "",
      address: "",
      web_address: "",
      map: "",
      redirect_link: "/",
      src: "",
      sports: "",
    },
    {
      id: 0,
      name: "Fake3",
      distance: 0,
      city: "",
      address: "",
      web_address: "",
      map: "",
      redirect_link: "/",
      src: "",
      sports: "",
    },
  ]);

  const [countryFilter, setCountryFilter] = useState([]);
  const [stateFilter, setStateFilter] = useState([]);
  const [cityFilter, setCityFilter] = useState([]);

  // GET BASIC COURTS INFO
  useEffect(() => {
    // Get Sports for Filter
    apiClient("Sports/getSports").then((response) => {
      const availableSports = [];

      response.forEach((element) => {
        availableSports.push({
          name: element,
          checked: true,
        });
      });
      setSportFilter(availableSports);
    });

    // Get Available Courts
    apiClient("Courts/getCourts").then((response) => {
      const courtsAvailable = [];

      response.forEach((element) => {
        courtsAvailable.push({
          id: element.id,
          name: element.name,
          distance: 0,
          city: `${element.city}, ${element.state}`,
          address: element.address,
          web_address: element.gMaps,
          map: element.map,
          redirect_link: `/court?court_id=${element.id}&name=${element.name}&city=${element.city}`,
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

  // UPDATE LOCATIONS FILTER
  useEffect(() => {
    apiClient("Courts/getLocations", "POST", locationFilter).then((response) => {
      setCountryFilter(response.country);
      setStateFilter(response.state);
      setCityFilter(response.city);
    });
  }, [locationFilter]);

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
                  {sportFilter.map((sport, index) => {
                    return (
                      <MenuItem key={index}>
                        <Checkbox
                          id={sport.name}
                          label={sport.name}
                          checked={sportFilter.find((item) => item.name === sport.name)?.checked}
                          onChange={() => {
                            const updatedSportFilter = [...sportFilter];
                            const sportIndex = updatedSportFilter.findIndex((item) => item.name === sport.name);
                            updatedSportFilter[sportIndex].checked = !updatedSportFilter[sportIndex].checked;
                            setSportFilter(updatedSportFilter);
                          }}
                        />
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>

              {/* LOCATION */}
              <Menu
                lockScroll={true}
                dismiss={false}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                  <Button className="bg-white text-black w-[105px] hover:scale-105 hover:bg-white/80"> Location </Button>
                </MenuHandler>
                <MenuList className="!min-h-[40vh] flex flex-col items-center">
                  {/* Country Filter */}
                  <Select
                    onChange={(val) => setLocationFilter(() => ({ country: val, state: "", city: "" }))}
                    label={locationFilter.country == "" ? "Select Country" : locationFilter.country}
                  >
                    <Option value="">-</Option>
                    {countryFilter.map((country, index) => {
                      return (
                        <Option key={index} value={country}>
                          {country}
                        </Option>
                      );
                    })}
                  </Select>

                  <br />

                  {/* State Filter */}
                  <Select
                    onChange={(val) => setLocationFilter((prev) => ({ ...prev, state: val, city: "" }))}
                    label={locationFilter.state == "" ? "Select State" : locationFilter.state}
                  >
                    <Option value="">-</Option>
                    {stateFilter.map((state, index) => {
                      return (
                        <Option key={index} value={state}>
                          {state}
                        </Option>
                      );
                    })}
                  </Select>

                  <br />

                  {/* City Filter */}
                  <Select
                    onChange={(val) => setLocationFilter((prev) => ({ ...prev, city: val }))}
                    label={locationFilter.city == "" ? "Select City" : locationFilter.city}
                  >
                    <Option value="">-</Option>
                    {cityFilter.map((city, index) => {
                      return (
                        <Option key={index} value={city}>
                          {city}
                        </Option>
                      );
                    })}
                  </Select>

                  <Button className="mt-10 rounded-full"> Apply </Button>
                </MenuList>
              </Menu>

              {/* DISTANCE */}
              {/* <Menu
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
              </Menu> */}

              {/* ORDER BY */}
              {/* <Menu
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
              </Menu> */}
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
