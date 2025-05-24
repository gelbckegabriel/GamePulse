"use client";

import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { Container } from "../shared/container";
import { GridCardsGlows } from "../shared/grid-card-glows/grid-cards";

export default function CourtPage() {
  // TODO: CREATE THE GENERIC TABLE FOR TEST
  const [test, setTest] = useState([
    { name: "Gabriel Gelbcke", color: "gold", grade: 9.3 },
    { name: "John Doe", color: "silver", grade: 8.7 },
    { name: "Rodolfo Malagueta", color: "bronze", grade: 7.7 },
    { name: "Peter Jaine", color: "red", grade: 7.5 },
    { name: "Pedro Pedrado da Pedra Rochosa", color: "red", grade: 7 },
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </div>
    </>
  );
}
