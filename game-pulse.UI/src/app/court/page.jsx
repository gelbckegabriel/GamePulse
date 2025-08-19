"use client";

import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { Container } from "../shared/utilities/container";
import { GridItem, GridItemColored } from "../shared/grid-card-glows/grid-cards";
import { SparklesCore } from "../shared/utilities/sparkles";
import { GenericTable } from "../shared/generic-table/generic-table";
import { GameRegistration } from "./components/game-registry";
import { FaCalendarCheck, FaInfo, FaLocationArrow, FaRunning } from "react-icons/fa";

export default function CourtPage() {
  const [topPlayers, setTopPlayers] = useState([
    { name: "No Player", nickname: "1st", sport: "SPORT", color: "gold", grade: 0 },
    { name: "No Player", nickname: "2nd", sport: "SPORT", color: "silver", grade: 0 },
    { name: "No Player", nickname: "3rd", sport: "SPORT", color: "bronze", grade: 0 },
    { name: "No Player", nickname: "4th", sport: "SPORT", color: "red", grade: 0 },
    { name: "No Player", nickname: "5th", sport: "SPORT", color: "red", grade: 0 },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [court, setCourt] = useState({});

  // GET COURT DETAILS
  useEffect(() => {
    // SET SCROLL TO ACTIVE AGAIN
    document.body.style.overflow = "auto";

    // SET QUERY PARAMETERS
    const urlString = window.location.href;
    const url = new URL(urlString);
    const params = new URLSearchParams(url.search);

    apiClient("Courts/GetFilteredCourt", "POST", {
      name: params.get("name"),
      city: params.get("city"),
    }).then((response) => {
      setCourt(response);
      setIsLoading(false);
    });

    apiClient("Games/GetCourtTopPlayers", "POST", {
      court_id: params.get("court_id"),
    }).then((response) => {
      setTopPlayers((prevPlayers) =>
        prevPlayers.map((player, index) => {
          const updated = response[index];
          return updated
            ? {
                ...player,
                name: updated.name,
                nickname: updated.nickname,
                sport: updated.sport,
                grade: updated.grade,
              }
            : player;
        })
      );
    });
  }, []);

  return (
    <>
      <Container>
        <div className="pt-24">
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<FaLocationArrow className="h-4 w-4 text-gray-700" />}
              title={court.city + ", " + court.state}
              description={court.name + "."}
              isLoading={isLoading}
            />
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<FaRunning className="h-4 w-4 text-gray-700" />}
              title="What you can play"
              description={court.sportsAvailable != undefined ? court.sportsAvailable.join(", ") : "Loading, loading, loading..."}
              isLoading={isLoading}
            />
            <GridItemColored
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<FaInfo className="h-4 w-4 text-gray-700" />}
              title="Find your way"
              description="Click here and use Google Maps to point out the best route for you!"
              hover={!isLoading}
              link={court.gMaps}
              isLoading={isLoading}
            />
            <GridItemColored
              onClick={() => {
                if (!isLoading) {
                  setIsDrawerOpen(true);
                }
              }}
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/3/13]"
              icon={<FaCalendarCheck className="h-4 w-4 text-gray-700" />}
              title="Get in the game!"
              description="Your crew's waiting. Pick a time, hit the court."
              hover={!isLoading}
              isLoading={isLoading}
            />
          </ul>
        </div>

        <br />

        {/* TOP COURT PLAYERS */}
        <div>
          {/* TITLE */}
          <div className="mt-16 h-[15rem] w-full bg-black flex flex-col items-center justify-center rounded-md">
            <h1 className="md:text-3xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
              Dominators of the Court
            </h1>
            <div className="w-full h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>

          {/* TABLE */}
          <div className="-mt-28 mb-20">
            <GenericTable tableType="rank" columns={["pos", "name", "sport", "grade"]} data={topPlayers} isLoading={isLoading} />
          </div>
        </div>

        <br />

        {/* TODO: Will I need 'User's next games' on the court? Or just on the 'Games' page? */}

        {Object.keys(court).length > 0 && <GameRegistration court={court} isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />}
      </Container>
    </>
  );
}
