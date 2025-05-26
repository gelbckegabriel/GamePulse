"use client";

import { useState } from "react";
import { GenericTable } from "../shared/generic-table/generic-table";
import { Container } from "../shared/utilities/container";

export default function GamesPage() {
  const [isLoading, setIsLoading] = useState(false);

  const [games, setGames] = useState([
    { court_name: "Parque Atuba", sport: "Basketball", date: "2023-10-01", time: "10:00", players: 10 },
    { court_name: "Parque Milharel", sport: "Volleyball", date: "2024-17-03", time: "14:00", players: 7 },
    { court_name: "Parque dos Santos", sport: "Basketball", date: "2025-11-07", time: "09:00", players: 4 },
    { court_name: "Parque Barigui", sport: "Football", date: "2025-12-18", time: "19:00", players: 9 },
    { court_name: "Parque de São dos Pinhais", sport: "Basketball", date: "2026-01-04", time: "21:00", players: 1 },
  ]);

  return (
    <>
      <div className="mx-auto text-center text-white my-20">
        <span className="text-4xl font-bold">WORK IN PROGRESS</span>
      </div>
      <Container>
        {/* GAMES TABLE */}
        <GenericTable tableType="games" columns={["Game", "Court", "Date", "Time", "Players"]} data={games} isLoading={isLoading} />
      </Container>
    </>
  );
}
