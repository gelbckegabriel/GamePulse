import React from "react";
import { LeaderboardBodyTable } from "./table-types/leaderboard-table";
import { RankBodyTable } from "./table-types/rank-table";

import "./generic-table.scss";
import { GamesBodyTable } from "./table-types/games-table";

export const GenericTable = ({ tableType, columns, data, isLoading }) => {
  const renderTableBody = () => {
    switch (tableType) {
      case "leaderboard":
        return <LeaderboardBodyTable data={data} isLoading={isLoading} />;
      case "rank":
        return <RankBodyTable data={data} isLoading={isLoading} />;
      case "games":
        return <GamesBodyTable data={data} isLoading={isLoading} />;
    }
  };

  return (
    <>
      <table className="text-white max-w-none w-[100%] md:w-[80%] mx-auto">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </>
  );
};
