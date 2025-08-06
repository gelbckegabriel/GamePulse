"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";
import { Container } from "../shared/utilities/container";
import { CourtsCard } from "./components/courts-card";
import { apiClient } from "../services/apiClient";
import InstallGamePulse from "../shared/install-button/install-button";
import { sportsService } from "../services/cache/sports-info";
import { FaSearch } from "react-icons/fa";

export default function Courts() {
  const [isLoading, setIsLoading] = useState(true);
  const [sports, setSports] = useState(sportsService.getSports() || []);
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
      sports: [],
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
      sports: [],
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
      sports: [],
    },
  ]);
  const [courtNameFilter, setCourtNameFilter] = useState("");
  const [sportFilter, setSportFilter] = useState([]);
  const [distanceFilter, setDistanceFilter] = useState(50);
  const [locationFilter, setLocationFilter] = useState({
    country: "",
    state: "",
    city: "",
  });
  const [orderFilter, setOrderFilter] = useState("distance");

  const [countryFilter, setCountryFilter] = useState([]);
  const [stateFilter, setStateFilter] = useState([]);
  const [cityFilter, setCityFilter] = useState([]);

  // GET BASIC COURTS INFO
  useEffect(() => {
    // Get Sports for Filter
    sportsService.sports$.subscribe((result) => {
      setSports(result);
    });

    // Get Available Courts
    apiClient("Courts/GetCourts").then((response) => {
      const courtsAvailable = [];

      response.forEach((element) => {
        courtsAvailable.push({
          id: element.id,
          name: element.name,
          distance: 0,
          city: element.city,
          state: element.state,
          country: element.country,
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

  // UPDATE SPORTS FILTER
  useEffect(() => {
    const availableSports = [];

    sports.forEach((sport) => {
      availableSports.push({
        name: sport.sportName,
        checked: true,
      });
      setSportFilter(availableSports);
    });
  }, [sports]);

  // UPDATE LOCATIONS FILTER
  useEffect(() => {
    apiClient("Courts/GetLocations", "POST", locationFilter).then(
      (response) => {
        setCountryFilter(response.country);
        setStateFilter(response.state);
        setCityFilter(response.city);
      }
    );
  }, [locationFilter]);

  const handleFavoriteToggle = (index) => {
    const updatedCourts = [...courts];
    updatedCourts[index].favorite = !updatedCourts[index].favorite;
    setCourts(updatedCourts);
  };

  const filteredCourts = courts.filter((court) => {
    const matchName = court.name
      .toLowerCase()
      .includes(courtNameFilter.toLowerCase());

    const matchCountry =
      locationFilter.country === "" ||
      court.country.includes(locationFilter.country);

    const matchState =
      locationFilter.state === "" || court.city.includes(locationFilter.state);

    const matchCity =
      locationFilter.city === "" || court.city.includes(locationFilter.city);

    const matchSport =
      sportFilter.filter((sport) => sport.checked).length === 0 ||
      court.sports.some((sport) =>
        sportFilter
          .filter((s) => s.checked)
          .map((s) => s.name)
          .includes(sport)
      );

    return matchName && matchSport && matchCountry && matchState && matchCity;
  });

  return (
    <>
      <Container>
        <div>
          {/* INSTALL GAMEPULSE */}
          <div className="mt-12 mb-6">
            <InstallGamePulse />
          </div>

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
                <Button className="bg-white text-black w-[105px] hover:scale-105 hover:bg-white/80">
                  {" "}
                  Sports{" "}
                </Button>
              </MenuHandler>
              <MenuList>
                {sportFilter.map((sport, index) => {
                  return (
                    <MenuItem key={index}>
                      <Checkbox
                        id={sport.name}
                        label={sport.name}
                        checked={
                          sportFilter.find((item) => item.name === sport.name)
                            ?.checked
                        }
                        onChange={() => {
                          const updatedSportFilter = [...sportFilter];
                          const sportIndex = updatedSportFilter.findIndex(
                            (item) => item.name === sport.name
                          );
                          updatedSportFilter[sportIndex].checked =
                            !updatedSportFilter[sportIndex].checked;
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
                <Button className="bg-white text-black w-[105px] hover:scale-105 hover:bg-white/80">
                  {" "}
                  Location{" "}
                </Button>
              </MenuHandler>
              <MenuList className="!min-h-[40vh] flex flex-col items-center">
                {/* Country Filter */}
                <Select
                  onChange={(val) =>
                    setLocationFilter(() => ({
                      country: val,
                      state: "",
                      city: "",
                    }))
                  }
                  label={
                    locationFilter.country == ""
                      ? "Select Country"
                      : locationFilter.country
                  }
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
                  onChange={(val) =>
                    setLocationFilter((prev) => ({
                      ...prev,
                      state: val,
                      city: "",
                    }))
                  }
                  label={
                    locationFilter.state == ""
                      ? "Select State"
                      : locationFilter.state
                  }
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
                  onChange={(val) =>
                    setLocationFilter((prev) => ({ ...prev, city: val }))
                  }
                  label={
                    locationFilter.city == ""
                      ? "Select City"
                      : locationFilter.city
                  }
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

          <div className="flex justify-center mb-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <div className="relative">
                <input
                  className="w-full bg-transparent placeholder:text-white/40 text-white/80 text-sm border border-white/[0.2] rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Court name..."
                  value={courtNameFilter}
                  onChange={(e) => setCourtNameFilter(e.target.value)}
                />
                <button
                  className="absolute top-1 right-1 flex items-center rounded bg-white/10 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <FaSearch className="pr-1" />
                  Search
                </button>
              </div>
            </div>
          </div>

          <br />

          {/* COURTS */}
          {/* {courts.length > 0 && ()} */}
          <CourtsCard
            courts={filteredCourts}
            isLoading={isLoading}
            onFavoriteToggle={() => handleFavoriteToggle(index)}
          />

          <br />
          <br />

          <div className="flex justify-center my-5">
            {/* <Paginator index={1} /> */}
          </div>
          <br />
          <br />
          <br />
        </div>
      </Container>
    </>
  );
}
