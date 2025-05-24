import { Typography } from "@material-tailwind/react";
import React from "react";

export const RankBodyTable = ({ data, isLoading }) => {
  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // COLORS
  const colors = {
    gold: "#ffd700",
    bronze: "#cd7f32",
    silver: "#9b9b9b",
    green: "#0f6e03",
    yellow: "#FFF500",
    orange: "#FF8700",
    red: "#9B0000",
    turquoise: "#00D2BE",
  };

  return (
    <>
      {data.map((row, index) => (
        <React.Fragment key={index}>
          <tr className="row">
            <td className="position">{index + 1}</td>
            <td
              className="row text-[0.875rem] md:text-[1.1rem] px-4 py-2 text-left border-l-4"
              style={isLoading ? { borderColor: "#616161" } : { borderColor: colors[row.color] }}
            >
              <div className="flex items-center">
                {(() => {
                  const nameParts = row.name.split(" ");
                  const firstName = nameParts[0];
                  const lastName = nameParts[nameParts.length - 1];
                  return (
                    <>
                      {isLoading ? (
                        <>
                          <Typography
                            as="div"
                            variant="paragraph"
                            className="min-w-[7rem] md:min-w-[12rem] h-4 rounded-sm bg-gray-700 animate-pulse-strong"
                          >
                            &nbsp;
                          </Typography>
                        </>
                      ) : (
                        <>
                          <p>
                            {firstName} <strong>{lastName}</strong>
                          </p>
                        </>
                      )}
                    </>
                  );
                })()}
                {isLoading ? (
                  <>
                    <Typography as="div" variant="span" className="ml-3 min-w-[3rem] md:min-w-[4rem] h-2 rounded-sm bg-gray-700 animate-pulse-strong">
                      &nbsp;
                    </Typography>
                  </>
                ) : (
                  <>
                    <span className="text-[0.65rem] md:text-[0.8rem]">{capitalize(row.nickname)}</span>
                  </>
                )}
              </div>
            </td>
            <td className="score">
              {isLoading ? (
                <>
                  <Typography
                    as="div"
                    variant="span"
                    className=" mx-auto w-[1.5rem] md:w-[1.5rem] h-[1.5rem] rounded-[100%] bg-gray-700 animate-pulse-strong"
                  >
                    &nbsp;
                  </Typography>
                </>
              ) : (
                <>
                  <span className="text-[0.65rem] md:text-[0.8rem]">{row.sport}</span>
                </>
              )}
            </td>
            <td className="score">
              {isLoading ? (
                <>
                  <Typography
                    as="div"
                    variant="span"
                    className="mx-auto w-[1.5rem] md:w-[1.5rem] h-[1.5rem] rounded-[100%] bg-gray-700 animate-pulse-strong"
                  >
                    &nbsp;
                  </Typography>
                </>
              ) : (
                <>
                  <span className="text-[0.65rem] md:text-[0.8rem]">{row.grade}</span>
                </>
              )}
            </td>
          </tr>
          {index < data.length - 1 ? <tr className="h-[20px]"></tr> : null}
        </React.Fragment>
      ))}
    </>
  );
};
