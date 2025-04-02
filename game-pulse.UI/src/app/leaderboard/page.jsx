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
    mercedes: "#00D2BE",
    ferrari: "#DC0000",
    redBull: "#1E41FF",
    renault: "#FFF500",
    racingPoint: "#F596C8",
    alfaRomeo: "#9B0000",
    toroRosso: "#469BFF",
    haas: "#BD9E57",
    mclaren: "#FF8700",
    williams: "#FFFFFF",
  };

  // PLAYERS
  const leaderboard = [
    { name: "Lewis Hamilton", team: "mercedes", gap: "Leader" },
    { name: "Valteri Bottas Test", team: "mercedes", gap: "+6.552s" },
    { name: "Sebastian Vettel", team: "ferrari", gap: "+13.744s" },
    { name: "Max Verstappen", team: "red bull", gap: "+27.627s" },
    { name: "Charles Leclerc", team: "ferrari", gap: "+31.627s" },
    { name: "Pierre Gasly", team: "red bull", gap: "+89.307s" },
    { name: "Daniel Ricciardo", team: "renault", gap: "+1 lap" },
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

          <p className="mb-5 text-sm md:text-lg text-gray-500 max-w-4xl mx-auto py-4">
            Here, you can see the best players of each sport, track their progress, and challenge yourself to reach new heights. Perfect for sports
            enthusiasts and competitive spirits.
          </p>
        </div>
      </Container>

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

      <Container>
        {/* Leaderboard */}
        <table className="text-white w-full mx-auto">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Driver</th>
              <th>Gap</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((driver, index) => (
              <tr key={index} className="driver">
                <td className="position">{index + 1}</td>
                <td className="driver px-4 py-2 text-left border-l-4" style={{ borderColor: colors[driver.team] }}>
                  {driver.name.split(" ").map((part, idx) => (
                    <React.Fragment key={idx}>{idx > 0 ? <strong>{part}</strong> : part} </React.Fragment>
                  ))}
                  <span>{driver.team}</span>
                </td>
                <td className="gap">
                  <span>{driver.gap}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* {leaderboard.map((driver, index) => (
          <tr key={index} className="driver">
            <td className="px-4 py-2 font-medium">{index + 1}</td>
            <td className="px-4 py-2 text-left border-l-4" style={{ borderColor: colors[driver.team] }}>
              {driver.name
                .split(" ")
                .map((part, idx) => (idx > 0 ? <strong>{part}</strong> : part))
                .join(" ")}
              <span className="ml-3 text-sm text-gray-500">{driver.team}</span>
            </td>
            <td className="px-4 py-2">
              <span className="bg-gray-700 rounded-full px-3 py-1 text-sm">{driver.gap}</span>
            </td>
          </tr>
        ))} */}
      </Container>
    </div>
  );
}
