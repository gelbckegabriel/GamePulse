// SEE THE LEADERBOARD OF THE BEST PLAYERS IN EACH SPORT SUCH AS VOLLEY, BASKETBALL AND FOOTBALL.
// THE LEADERBOARD MIGHT BE MONTHLY OR TRIMESTRAL.

"use client";

import React from "react";
import { Container } from "../shared/container";
import { WorldMap } from "../shared/world-map";
import { motion } from "framer-motion";
import "./page.scss";

export default function Leaderboard() {
  // COLORS
  const colors = {
    basketball: "#FF8700",
    football: "#9B0000",
    volleyball: "#00D2BE",
    tennis: "#FFF500",
    ferrari: "#DC0000",
    toroRosso: "#469BFF",
    williams: "#FFFFFF",
  };

  // PLAYERS
  const leaderboard = [
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
        <table className="text-white w-full mx-auto">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Player</th>
              <th>Best Player Award</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((player, index) => (
              <React.Fragment key={index}>
                <tr className="player">
                  <td className="position">{index + 1}</td>
                  <td
                    className="player text-[0.875rem] md:text-[1.1rem] px-4 py-2 text-left border-l-4"
                    style={{ borderColor: colors[player.sport] }}
                  >
                    {(() => {
                      const nameParts = player.name.split(" ");
                      const firstName = nameParts[0];
                      const lastName = nameParts[nameParts.length - 1];
                      return (
                        <>
                          {firstName} <strong>{lastName}</strong>
                        </>
                      );
                    })()}
                    <span className="text-[0.65rem] md:text-[0.8rem]">{player.sport}</span>
                  </td>
                  <td className="score">
                    <span className="text-[0.65rem] md:text-[0.8rem]">{player.awards}</span>
                  </td>
                  <td className="score">
                    <span className="text-[0.65rem] md:text-[0.8rem]">{player.points}</span>
                  </td>
                </tr>
                {index < leaderboard.length - 1 ? <tr className="h-[20px]"></tr> : null}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </Container>

      <br />
      <br />
      <br />
    </div>
  );
}
