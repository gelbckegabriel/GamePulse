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
import { Loader } from "../shared/loader/loader";
import { Vortex } from "../shared/utilities/vortex";
import { SparklesCore } from "../shared/utilities/sparkles";
import Link from "next/link";
import { Button } from "../shared/utilities/button";

export default function GamesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [prevGames, setPrevGames] = useState<Game[]>([]);

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

    // Fetch upcoming games
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
              game_day: date.toLocaleDateString("pt-BR", { weekday: "long" }).replace(/^\p{L}/u, (c) => c.toUpperCase()),
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

    // Fetch previous games
    apiClient("Games/GetUserPreviousGames", "POST", { userId })
      .then((response) => {
        console.log("Previous games response:", response);
        if (Array.isArray(response)) {
          const mappedGames: Game[] = response.map((game) => {
            const date = new Date(game.gameTime);

            return {
              id: game.gameId,
              court_id: game.courtId,
              court_name: game.courtName,
              sport_id: game.sportId,
              sport_name: game.sportName.toLowerCase(),
              game_date: date,
              game_date_formatted: date.toLocaleDateString("pt-BR"),
              game_time: date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
              game_day: date.toLocaleDateString("pt-BR", { weekday: "long" }).replace(/^\p{L}/u, (c) => c.toUpperCase()),
            };
          });
          setPrevGames(mappedGames);
        }
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
        SwalErrorTrigger("Faile to fetch games", "An error occurred while trying to fetch the games.", error);
      });
  }, [userId]);

  return (
    <>
      <div className="w-full mx-auto rounded-md h-[25rem] overflow-hidden text-white md:mb-8">
        <Vortex
          baseHue={140}
          backgroundColor="#00000000"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center">Games</h2>
        </Vortex>
      </div>

      <Container>
        {games.length < 1 && !isLoading ? (
          <>
            <div className="flex flex-col items-center justify-center gap-10">
              <h1 className="text-white/95 font-bold text-2xl md:text-4xl">No Upcoming Games</h1>
              <Button size="medium">Pick a game</Button>
            </div>
          </>
        ) : (
          <>
            {/* GAMES CARDS */}
            <div className="flex flex-wrap justify-center gap-x-10">
              {isLoading ? (
                <div className="my-40">
                  <Loader size="6" gap="5" />
                </div>
              ) : (
                <>
                  {games.map((game) => (
                    <Link key={game.id} href={`/game?id=${game.id}`} passHref>
                      <GamesCard className="-my-5 md:-my-10">
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
                    </Link>
                  ))}
                </>
              )}
            </div>
          </>
        )}

        {prevGames.length > 0 && (
          <>
            {/* PREVIOUS GAMES */}
            <div className="mt-60 mb-40">
              <div className="h-[2rem] w-full bg-black flex flex-col items-center justify-center rounded-md">
                <h1 className="md:text-3xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">Game Archive</h1>
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

              <GenericTable
                tableType="games"
                columns={["Game", "Court", "Sport", "Date", "Details"]}
                data={prevGames}
                isLoading={isLoading}
              />
            </div>
          </>
        )}
      </Container>
    </>
  );
}
