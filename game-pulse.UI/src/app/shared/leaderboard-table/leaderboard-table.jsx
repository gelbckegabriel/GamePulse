import React from "react";

import "./leaderboard-table.scss";
import { Typography } from "@material-tailwind/react";

export const LeaderboardTable = ({ players, isLoading }) => {
  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // COLORS
  const colors = {
    basketball: "#FF8700",
    football: "#9B0000",
    volleyball: "#00D2BE",
    tennis: "#FFF500",
    test1: "#DC0000",
    test2: "#469BFF",
    test3: "#FFFFFF",
  };

  return (
    <>
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
          {players.map((player, index) => (
            <React.Fragment key={index}>
              <tr className="player">
                <td className="position">{index + 1}</td>
                <td className="player text-[0.875rem] md:text-[1.1rem] px-4 py-2 text-left border-l-4" style={{ borderColor: colors[player.sport] }}>
                  {(() => {
                    const nameParts = player.name.split(" ");
                    const firstName = nameParts[0];
                    const lastName = nameParts[nameParts.length - 1];
                    return (
                      <>
                        {isLoading ? (
                          <>
                            <Typography as="div" variant="paragraph" className="title mt-2 h-2 rounded-full bg-gray-700 animate-pulse-strong">
                              &nbsp;
                            </Typography>
                          </>
                        ) : (
                          <>
                            {firstName} <strong>{lastName}</strong>
                          </>
                        )}
                      </>
                    );
                  })()}
                  <span className="text-[0.65rem] md:text-[0.8rem]">{capitalize(player.sport)}</span>
                </td>
                <td className="score">
                  <span className="text-[0.65rem] md:text-[0.8rem]">{player.awards}</span>
                </td>
                <td className="score">
                  <span className="text-[0.65rem] md:text-[0.8rem]">{player.points}</span>
                </td>
              </tr>
              {index < players.length - 1 ? <tr className="h-[20px]"></tr> : null}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};
