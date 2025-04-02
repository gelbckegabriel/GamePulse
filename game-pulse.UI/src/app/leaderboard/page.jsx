// SEE THE LEADERBOARD OF THE BEST PLAYERS IN EACH SPORT SUCH AS VOLLEY, BASKETBALL AND FOOTBALL.
// THE LEADERBOARD MIGHT BE MONTHLY OR TRIMESTRAL.

"use client";

import { Container } from "../shared/container";
import { WorldMap } from "../shared/world-map";
import { motion } from "framer-motion";

export default function Leaderboard() {
  return (
    <div className="bg-black">
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
      />
    </div>
  );
}
