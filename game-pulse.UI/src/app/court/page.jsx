"use client";

import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { Container } from "../shared/container";
import { GridCardsGlows } from "../shared/grid-card-glows/grid-cards";

export default function CourtPage() {
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
      console.log(response);
    });
  }, []);

  return (
    <>
      <div className="bg-black">
        <Container>
          <div className="pt-24">
            <GridCardsGlows court={court} sports={court.sportsAvailable} />
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
