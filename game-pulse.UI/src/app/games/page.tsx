"use client";

import { useEffect, useState } from "react";
import { GenericTable } from "../shared/generic-table/generic-table";
import { Container } from "../shared/utilities/container";
import { GamesCard } from "./components/game-card";
import Image from "next/image";
import { apiClient } from "../services/apiClient";
import { Game } from "../interfaces/db-entities";
import { userService } from "../services/cache/user-info";
import { SwalErrorTrigger } from "../shared/utilities/swal-trigger";
import { Subscription } from "rxjs";

export default function GamesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [games, setGames] = useState<Game[]>([]);

  // const [games, setGames] = useState([
  //   { court_name: "Parque Atuba", sport: "Basketball", date: "2023-10-01", time: "10:00", players: 10 },
  //   { court_name: "Parque Milharel", sport: "Volleyball", date: "2024-17-03", time: "14:00", players: 7 },
  //   { court_name: "Parque dos Santos", sport: "Basketball", date: "2025-11-07", time: "09:00", players: 4 },
  //   { court_name: "Parque Barigui", sport: "Football", date: "2025-12-18", time: "19:00", players: 9 },
  //   { court_name: "Parque de São dos Pinhais", sport: "Basketball", date: "2026-01-04", time: "21:00", players: 1 },
  // ]);

  useEffect(() => {
    const subscription: Subscription = userService.user$.subscribe((user) => {
      if (user.id && user.id !== userId) {
        setUserId(user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return;

    setIsLoading(true);

    apiClient("Games/GetUserNextGames", "POST", { userId })
      .then((response) => {
        if (Array.isArray(response)) {
          const mappedGames: Game[] = response.map((game) => {
            const date = new Date(game.gameTime);
            const formattedDate = `${date.toLocaleDateString("pt-BR")} at ${date.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}`;

            return {
              id: game.gameId,
              court_id: game.courtId,
              court_name: game.courtName,
              sport_id: game.sportId,
              sport_name: game.sportName.toLowerCase(),
              game_date: date,
              game_date_formatted: formattedDate,
              game_day: date.toLocaleDateString('pt-BR', { weekday: 'long' }).replace(/^\p{L}/u, c => c.toUpperCase())
            };
          });
          setGames(mappedGames);
        }
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
        SwalErrorTrigger("Faile to fetch games", "An error occurred while trying to fetch the games.", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  return (
    <>
      <div className="mx-auto text-center text-white mt-20">
        <span className="text-4xl font-bold">NEXT GAMES</span>
      </div>

      <Container>
        {/* GAMES CARDS */}
        <div className="flex flex-wrap justify-center gap-x-10">
          {games.map((game) => (
            <GamesCard key={game.id} className="-my-5 md:-my-10">
              <button
                type="button"
                className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <Image
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-background object-cover contrast-75"
                      alt={`${game.sport_name} Game`}
                      src={`/games/${game.sport_name}.webp`}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                      fill
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 text-white">
                  <div className="text-sm2">{game.court_name}</div>
                  <div className="min-w-fit text-xs text-gray-300 opacity-50 flex flex-col items-end">
                    <span>{game.game_date_formatted}</span>
                    <span>{game.game_day}</span>
                  </div>
                </div>
              </button>
            </GamesCard>
          ))}
        </div>

        {/* PREVIOUS GAMES */}
        <div>
          <div className="mx-auto text-center text-white mt-20 mb-8">
            <span className="text-4xl font-bold">PREVIOUS GAMES</span>
          </div>
          {/* <GenericTable
            tableType="games"
            columns={["Game", "Court", "Date", "Time", "Players"]}
            data={games}
            isLoading={isLoading}
          /> */}
        </div>
      </Container>
    </>
  );
}
