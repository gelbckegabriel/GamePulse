import React from "react";
import { LeaderboardBodyTable } from "./table-types/leaderboard-table";
import { RankBodyTable } from "./table-types/rank-table";

import "./generic-table.scss";

export const GenericTable = ({ tableType, columns, data, isLoading }) => {
  const renderTableBody = () => {
    switch (tableType) {
      case "leaderboard":
        return <LeaderboardBodyTable data={data} isLoading={isLoading} />;
      case "rank":
        return <RankBodyTable data={data} isLoading={isLoading} />;
    }
  };

  return (
    <>
      <table className="text-white w-full mx-auto">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            {/* <th>Pos</th>
            <th>Player</th>
            <th>Best Player Award</th>
            <th>Points</th> */}
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </>
  );
};
