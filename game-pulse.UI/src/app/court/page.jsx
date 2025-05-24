"use client";

import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { Container } from "../shared/container";
import { GridCardsGlows } from "../shared/grid-card-glows/grid-cards";
import { SparklesCore } from "../shared/sparkles";
import { GenericTable } from "../shared/generic-table/generic-table";

export default function CourtPage() {
  // TODO: CREATE THE GENERIC TABLE FOR TEST
  const [test, setTest] = useState([
    { name: "Gabriel Gelbcke", nickname: "Gelbcke", sport: "basketball", color: "gold", grade: 9.3 },
    { name: "John Doe", nickname: "Wick", sport: "football", color: "silver", grade: 8.7 },
    { name: "Rodolfo Malagueta", nickname: "Porquito", sport: "basketball", color: "bronze", grade: 7.7 },
    { name: "Peter Jaine", nickname: "Omiranha", sport: "basketball", color: "red", grade: 7.5 },
    { name: "Pedro Pedrado da Pedra Rochosa", nickname: "", sport: "volley", color: "red", grade: 7 },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [court, setCourt] = useState({});

  // GET COURT DETAILS
  useEffect(() => {
    // SET QUERY PARAMETERS
    const urlString = window.location.href;
    const url = new URL(urlString);
    const params = new URLSearchParams(url.search);

    apiClient("Courts/getFilteredCourt", "POST", {
      name: params.get("name"),
      city: params.get("city"),
    }).then((response) => {
      setCourt(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="bg-black">
        <Container>
          <div className="pt-24">
            <GridCardsGlows court={court} sports={court.sportsAvailable} isLoading={isLoading} />
          </div>

          <br />

          {/* TOP COURT PLAYERS */}
          <div>
            {/* TITLE */}
            <div className="mt-16 h-[15rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
              <h1 className="md:text-3xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">Dominators of the Court</h1>
              <div className="w-[40rem] h-40 relative">
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
              <GenericTable tableType="rank" columns={["pos", "name", "sport", "grade"]} data={test} isLoading={isLoading} />
            </div>
          </div>

          <br />

          {/* TODO: The 'GetInTheGameCard' could open that DrawerModal for the user to pick his game time */}
          {/* TODO: Will I need 'User's next games' on the court? Or just on the 'Games' page? */}
        </Container>
      </div>
    </>
  );
}
