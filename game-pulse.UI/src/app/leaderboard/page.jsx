// SEE THE LEADERBOARD OF THE BEST PLAYERS IN EACH SPORT SUCH AS VOLLEY, BASKETBALL AND FOOTBALL.
// THE LEADERBOARD MIGHT BE MONTHLY OR TRIMESTRAL.

"use client";

import React, { useState } from "react";
import { Container } from "../shared/utilities/container";
import { WorldMap } from "../shared/utilities/world-map";
import { motion } from "framer-motion";
import { GenericTable } from "../shared/generic-table/generic-table";
import { Card, CardCarousel } from "../shared/utilities/card-carousel";

import "./page.scss";

export default function Leaderboard() {
  const [globalPlayers, setGlobalPlayers] = useState([
    { name: "Gabriel Gelbcke", sport: "basketball", awards: 17, points: "Leader" },
    { name: "John Doe", sport: "football", awards: 13, points: 1.547 },
    { name: "Rodolfo Malagueta", sport: "volleyball", awards: 15, points: 1.359 },
    { name: "Peter Jaine", sport: "basketball", awards: 3, points: 1.299 },
    { name: "Pedro Pedrado da Pedra Rochosa", sport: "volleyball", awards: 9, points: 1.099 },
    { name: "Paula Tejando Torando", sport: "football", awards: 7, points: 873 },
    { name: "Mary Doe", sport: "tennis", awards: 4, points: 674 },
    { name: "Josefina Margherita", sport: "volleyball", awards: 11, points: 529 },
    { name: "Dolores Analgésica", sport: "football", awards: 9, points: 468 },
    { name: "Jacinto Lévis", sport: "football", awards: 1, points: 314 },
  ]);
  const [basketballPlayers, setBasketballPlayers] = useState([
    { name: "Gabriel Gelbcke", sport: "basketball", awards: 17, points: "Leader" },
    { name: "Zé da Bola", sport: "basketball", awards: 2, points: 1.547 },
    { name: "Chico Esperto", sport: "basketball", awards: 3, points: 1.359 },
    { name: "Juca Pato", sport: "basketball", awards: 1, points: 1.299 },
    { name: "Tonho do Pneu", sport: "basketball", awards: 4, points: 1.099 },
    { name: "Tião da Quadra", sport: "basketball", awards: 2, points: 873 },
    { name: "Dona Benta", sport: "basketball", awards: 1, points: 674 },
    { name: "Seu Barriga", sport: "basketball", awards: 3, points: 529 },
    { name: "Zeca Tatu", sport: "basketball", awards: 2, points: 468 },
    { name: "Quinzinho", sport: "basketball", awards: 1, points: 314 },
  ]);
  const [footballPlayers, setFootballPlayers] = useState([
    { name: "Gabriel Gelbcke", sport: "football", awards: 17, points: "Leader" },
    { name: "Zé Carioca", sport: "football", awards: 2, points: 1.547 },
    { name: "Chico Bento", sport: "football", awards: 3, points: 1.359 },
    { name: "Juca Bala", sport: "football", awards: 1, points: 1.299 },
    { name: "Tonho da Lua", sport: "football", awards: 4, points: 1.099 },
    { name: "Tião Macalé", sport: "football", awards: 2, points: 873 },
    { name: "Dona Florinda", sport: "football", awards: 1, points: 674 },
    { name: "Seu Madruga", sport: "football", awards: 3, points: 529 },
    { name: "Zeca Urubu", sport: "football", awards: 2, points: 468 },
    { name: "Quinzinho", sport: "football", awards: 1, points: 314 },
  ]);
  const [volleyballPlayers, setVolleyballPlayers] = useState([
    { name: "Gabriel Gelbcke", sport: "volleyball", awards: 17, points: "Leader" },
    { name: "Ziggy Stardust", sport: "volleyball", awards: 2, points: 1.547 },
    { name: "Muffin Man", sport: "volleyball", awards: 3, points: 1.359 },
    { name: "Noodle Nelly", sport: "volleyball", awards: 1, points: 1.299 },
    { name: "Snickers Doodle", sport: "volleyball", awards: 4, points: 1.099 },
    { name: "Tickles McGee", sport: "volleyball", awards: 2, points: 873 },
    { name: "Wobble Wobble", sport: "volleyball", awards: 1, points: 674 },
    { name: "Bingo Bongo", sport: "volleyball", awards: 3, points: 529 },
    { name: "Jester Jest", sport: "volleyball", awards: 2, points: 468 },
    { name: "Quibble Quack", sport: "volleyball", awards: 1, points: 314 },
  ]);
  const [tennisPlayers, setTennisPlayers] = useState([
    { name: "Gabriel Gelbcke", sport: "tennis", awards: 17, points: "Leader" },
    { name: "Bubbles McGee", sport: "tennis", awards: 2, points: 1.547 },
    { name: "Fuzzy Wuzzy", sport: "tennis", awards: 3, points: 1.359 },
    { name: "Wacky Wanda", sport: "tennis", awards: 1, points: 1.299 },
    { name: "Giggles Galore", sport: "tennis", awards: 4, points: 1.099 },
    { name: "Chuckles McSnort", sport: "tennis", awards: 2, points: 873 },
    { name: "Silly Sally", sport: "tennis", awards: 1, points: 674 },
    { name: "Goofy Gus", sport: "tennis", awards: 3, points: 529 },
    { name: "Jolly Jill", sport: "tennis", awards: 2, points: 468 },
    { name: "Quirky Quinn", sport: "tennis", awards: 1, points: 314 },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // FILTER CARDS
  const cardsData = [
    {
      category: "Sport",
      title: "Basketball",
      src: "/leaderboard/basketball.webp",
      content: (
        <GenericTable
          tableType="leaderboard"
          columns={["Pos", "Player", "Best Player Award", "Points"]}
          data={basketballPlayers}
          isLoading={isLoading}
        />
      ),
    },
    {
      category: "Sport",
      title: "Football",
      src: "/leaderboard/football.webp",
      content: (
        <GenericTable
          tableType="leaderboard"
          columns={["Pos", "Player", "Best Player Award", "Points"]}
          data={footballPlayers}
          isLoading={isLoading}
        />
      ),
    },
    {
      category: "Sport",
      title: "Volleyball",
      src: "/leaderboard/volleyball.webp",
      content: (
        <GenericTable
          tableType="leaderboard"
          columns={["Pos", "Player", "Best Player Award", "Points"]}
          data={volleyballPlayers}
          isLoading={isLoading}
        />
      ),
    },
    {
      category: "Sport",
      title: "Tennis",
      src: "/leaderboard/tennis.webp",
      content: (
        <GenericTable tableType="leaderboard" columns={["Pos", "Player", "Best Player Award", "Points"]} data={tennisPlayers} isLoading={isLoading} />
      ),
    },
  ];

  const cards = cardsData.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <>
      {/* Introduction */}
      <Container>
        <div className="mx-auto text-center pt-10">
          <p className="font-bold text-xl md:text-4xl text-white">
            Players{" "}
            <span className="text-neutral-400">
              {"Leaderboard".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>

          <br />

          <p className="text-sm md:text-lg text-gray-500 max-w-4xl mx-auto py-4">
            Here, you can see the best players of each sport, track their progress, and challenge yourself to reach new heights. Perfect for sports
            enthusiasts and competitive spirits.
          </p>
        </div>
      </Container>

      <br />

      {/* World Map */}
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: 38.0522, lng: -121.2437 }, // Vancouver
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -47.4372, lng: -54.2697 }, // Curitiba
          },
          {
            start: { lat: -47.4372, lng: -54.2697 }, // Curitiba
            end: { lat: 24.7223, lng: -8.1393 }, // Lisbon
          },
          {
            start: { lat: 24.7223, lng: -8.1393 }, // Lisbon
            end: { lat: 34.0522, lng: -68.2437 }, // New York
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            end: { lat: -51.8679, lng: 150.2073 }, // Sidney
          },
        ]}
        Container
      />

      <br />

      <Container>
        {/* Leaderboard */}
        <GenericTable tableType="leaderboard" columns={["Pos", "Player", "Best Player Award", "Points"]} data={globalPlayers} isLoading={isLoading} />

        {/* Filter Leaderboard */}
        <div className="!mt-6 !mb-16">
          <CardCarousel items={cards} />
        </div>
      </Container>
    </>
  );
}
