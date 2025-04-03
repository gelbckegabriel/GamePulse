// SEE THE LEADERBOARD OF THE BEST PLAYERS IN EACH SPORT SUCH AS VOLLEY, BASKETBALL AND FOOTBALL.
// THE LEADERBOARD MIGHT BE MONTHLY OR TRIMESTRAL.

"use client";

import React from "react";
import { Container } from "../shared/container";
import { WorldMap } from "../shared/world-map";
import { motion } from "framer-motion";
import { LeaderboardTable } from "../shared/leaderboard-table/leaderboard-table";
import { Card, CardCarousel } from "../shared/card-carousel/card-carousel";

import "./page.scss";

export default function Leaderboard() {
  // PLAYERS
  const globalPlayers = [
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
  ];

  const basketballPlayers = [
    { name: "Gabriel Gelbcke", sport: "basketball", awards: 17, points: "Leader" },
    { name: "John Doe", sport: "basketball", awards: 13, points: 1.547 },
    { name: "Rodolfo Malagueta", sport: "basketball", awards: 15, points: 1.359 },
    { name: "Peter Jaine", sport: "basketball", awards: 3, points: 1.299 },
    { name: "Pedro Pedrado da Pedra Rochosa", sport: "basketball", awards: 9, points: 1.099 },
    { name: "Paula Tejando Torando", sport: "basketball", awards: 7, points: 873 },
    { name: "Mary Doe", sport: "basketball", awards: 4, points: 674 },
    { name: "Josefina Margherita", sport: "basketball", awards: 11, points: 529 },
    { name: "Dolores Analgésica", sport: "basketball", awards: 9, points: 468 },
    { name: "Jacinto Lévis", sport: "basketball", awards: 1, points: 314 },
  ];

  const footballPlayers = [
    { name: "Gabriel Gelbcke", sport: "football", awards: 17, points: "Leader" },
    { name: "John Doe", sport: "football", awards: 13, points: 1.547 },
    { name: "Rodolfo Malagueta", sport: "football", awards: 15, points: 1.359 },
    { name: "Peter Jaine", sport: "football", awards: 3, points: 1.299 },
    { name: "Pedro Pedrado da Pedra Rochosa", sport: "football", awards: 9, points: 1.099 },
    { name: "Paula Tejando Torando", sport: "football", awards: 7, points: 873 },
    { name: "Mary Doe", sport: "football", awards: 4, points: 674 },
    { name: "Josefina Margherita", sport: "football", awards: 11, points: 529 },
    { name: "Dolores Analgésica", sport: "football", awards: 9, points: 468 },
    { name: "Jacinto Lévis", sport: "football", awards: 1, points: 314 },
  ];

  const volleyballPlayers = [
    { name: "Gabriel Gelbcke", sport: "volleyball", awards: 17, points: "Leader" },
    { name: "John Doe", sport: "volleyball", awards: 13, points: 1.547 },
    { name: "Rodolfo Malagueta", sport: "volleyball", awards: 15, points: 1.359 },
    { name: "Peter Jaine", sport: "volleyball", awards: 3, points: 1.299 },
    { name: "Pedro Pedrado da Pedra Rochosa", sport: "volleyball", awards: 9, points: 1.099 },
    { name: "Paula Tejando Torando", sport: "volleyball", awards: 7, points: 873 },
    { name: "Mary Doe", sport: "volleyball", awards: 4, points: 674 },
    { name: "Josefina Margherita", sport: "volleyball", awards: 11, points: 529 },
    { name: "Dolores Analgésica", sport: "volleyball", awards: 9, points: 468 },
    { name: "Jacinto Lévis", sport: "volleyball", awards: 1, points: 314 },
  ];

  const tennisPlayers = [
    { name: "Gabriel Gelbcke", sport: "tennis", awards: 17, points: "Leader" },
    { name: "John Doe", sport: "tennis", awards: 13, points: 1.547 },
    { name: "Rodolfo Malagueta", sport: "tennis", awards: 15, points: 1.359 },
    { name: "Peter Jaine", sport: "tennis", awards: 3, points: 1.299 },
    { name: "Pedro Pedrado da Pedra Rochosa", sport: "tennis", awards: 9, points: 1.099 },
    { name: "Paula Tejando Torando", sport: "tennis", awards: 7, points: 873 },
    { name: "Mary Doe", sport: "tennis", awards: 4, points: 674 },
    { name: "Josefina Margherita", sport: "tennis", awards: 11, points: 529 },
    { name: "Dolores Analgésica", sport: "tennis", awards: 9, points: 468 },
    { name: "Jacinto Lévis", sport: "tennis", awards: 1, points: 314 },
  ];

  const data = [
    {
      category: "Sport",
      title: "Basketball",
      src: "/leaderboard/basketball.jpg",
      content: <LeaderboardTable players={basketballPlayers} />,
    },
    {
      category: "Sport",
      title: "Football",
      src: "/leaderboard/football.jpg",
      content: <LeaderboardTable players={footballPlayers} />,
    },
    {
      category: "Sport",
      title: "Volleyball",
      src: "/leaderboard/volleyball.jpg",
      content: <LeaderboardTable players={volleyballPlayers} />,
    },

    {
      category: "Sport",
      title: "Tennis",
      src: "/leaderboard/tennis.jpg",
      content: <LeaderboardTable players={tennisPlayers} />,
    },
  ];

  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

  return (
    <div className="bg-black">
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
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -25.4372, lng: -49.2697 }, // Brazil (Curitiba)
          },
          {
            start: { lat: -25.4372, lng: -49.2697 }, // Brazil (Curitiba)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
        Container
      />

      <br />

      <Container className="">
        {/* Leaderboard */}
        <LeaderboardTable players={globalPlayers} />

        <br />

        {/* Filter Leaderboard */}
        <CardCarousel items={cards} />
      </Container>

      <br />
      <br />
      <br />
    </div>
  );
}
