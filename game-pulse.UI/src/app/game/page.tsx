"use client";

import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { Container } from "../shared/utilities/container";

export default function CourtPage() {
//   const [isLoading, setIsLoading] = useState(true);

  // GET COURT DETAILS
  useEffect(() => {
    // SET SCROLL TO ACTIVE AGAIN
    document.body.style.overflow = "auto";

    // SET QUERY PARAMETERS
    const urlString = window.location.href;
    const url = new URL(urlString);
    const params = new URLSearchParams(url.search);

    // TODO: Get Game Details (API)
    apiClient("Games/GetGame", "POST", {
      game_id: params.get("game_id"),
    }).then((response) => {
      console.log("Game Details:", response);
    });
  }, []);

  return (
    <>
      <Container>
        <h1>This is the Game Page</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia unde veritatis, alias dolorem voluptatem cumque
          veniam nam, recusandae animi, modi et. Reiciendis excepturi quam mollitia amet doloribus expedita consequatur.
        </p>
      </Container>
    </>
  );
}
