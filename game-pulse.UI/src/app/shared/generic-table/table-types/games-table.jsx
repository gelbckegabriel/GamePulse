import { Typography } from "@material-tailwind/react";
import React from "react";

export const GamesBodyTable = ({ data, isLoading }) => {
  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // COLORS
  const sportColors = {
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
      {data.map((row, index) => (
        <React.Fragment key={index}>
          <tr className="row">
            <td className="position">{index + 1}</td>
            <td
              className="row text-[0.875rem] md:text-[1.1rem] px-4 py-2 text-left border-l-4"
              style={isLoading ? { borderColor: "#616161" } : { borderColor: sportColors[row.sport.toLowerCase()] }}
            >
              <div className="flex items-center">
                {(() => {
                  const nameParts = row.court_name.split(" ");
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
                    <span className="text-[0.65rem] md:text-[0.8rem]">{capitalize(row.sport)}</span>
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
                  <span className="text-[0.65rem] md:text-[0.8rem]">{row.date}</span>
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
                  <span className="text-[0.65rem] md:text-[0.8rem]">{row.time}</span>
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
                  <span className="text-[0.65rem] md:text-[0.8rem] !bg-teal-600 cursor-pointer">{row.players}</span>
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
