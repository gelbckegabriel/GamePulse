"use client";

import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { Container } from "../shared/utilities/container";
import { GridItem, GridItemColored } from "../shared/grid-card-glows/grid-cards";
import { FaCalendarCheck, FaInfo, FaLocationArrow, FaRunning } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { userService } from "../services/cache/user-info";
import { Button } from "../shared/utilities/button";
import { SwalConfirmTrigger } from "../shared/utilities/swal-trigger";

export default function CourtPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(userService.getCurrentUser());
  const [game, setGame] = useState({});
  const [gamePlayers, setGamePlayers] = useState();
  const [isUserSubscribed, setIsUserSubscribed] = useState(false);

  // GET USER DETAILS
  useEffect(() => {
    const subscription = userService.user$.subscribe((result) => {
      setUser(result);
    });

    return () => subscription.unsubscribe(); // Clean up on unmount
  }, []);

  // GET GAME DETAILS
  useEffect(() => {
    // SET SCROLL TO ACTIVE AGAIN
    document.body.style.overflow = "auto";

    // SET QUERY PARAMETERS
    const urlString = window.location.href;
    const url = new URL(urlString);
    const params = new URLSearchParams(url.search);

    apiClient(`Games/GetGameInfo?id=${params.get("id")}`)
      .then((response) => {
        let playersText = "";

        response.players.forEach((player, index) => {
          if (index < 12) {
            playersText += `${player.name} (${player.nickname}) - ${player.xp}xp\n`;
          }

          if (player.id === user.id) {
            setIsUserSubscribed(true);
          }
        });

        if (response.players.length > 12) {
          playersText += "...";
        }

        setGamePlayers(playersText);
        setGame(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  const handlePresenceToggle = () => {
    if (isUserSubscribed) {
      SwalConfirmTrigger("Confirmation", "Are you sure you want to cancel your presence?").then((result) => {
        if (!result.isConfirmed) return;

        apiClient("Games/UnsubscribeFromGame", "POST", { gameId: game.id, userId: user.id }).finally(() => {
          console.log("User unsubscribed from game");
          window.location.reload(); // Reload the page to reflect changes
        });
      });
    } else {
      SwalConfirmTrigger("Confirmation", "Are you sure you want to confirm your presence?").then((result) => {
        if (!result.isConfirmed) return;

        apiClient("Games/SubscribeToGame", "POST", { gameId: game.id, userId: user.id }).finally(() => {
          window.location.reload(); // Reload the page to reflect changes
        });
      });
    }
  };

  return (
    <>
      <Container>
        <div className="mt-20">
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<FaLocationArrow className="h-4 w-4 text-gray-700" />}
              title={game.courtName}
              description={game.city}
              isLoading={isLoading}
            />
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<FaCalendarCheck className="h-4 w-4 text-gray-700" />}
              title="Date & Time"
              description={`${game.date} at ${game.time} - ${game.dayOfWeek}`}
              isLoading={isLoading}
            />
            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/5/3/10]"
              icon={<FaPeopleRoof className="h-4 w-4 text-gray-700" />}
              title="Players"
              description={gamePlayers ? gamePlayers.slice(0, -1) : "No players yet!"}
              hover={!isLoading}
              isLoading={isLoading}
            />
            <GridItemColored
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/10/3/13]"
              icon={<FaInfo className="h-4 w-4 text-gray-700" />}
              title="Find your way"
              description="Click here and use Google Maps to point out the best route for you!"
              hover={!isLoading}
              link={game.googleMaps}
              isLoading={isLoading}
            />
          </ul>
        </div>

        {new Date(game.dateTime) > new Date() && (
          <div className="mt-20 mb-32 flex justify-center">
            <Button size="large" onClick={handlePresenceToggle}>
              {isUserSubscribed ? "Cancel Presence" : "Confirm Presence"}
            </Button>
          </div>
        )}
      </Container>
    </>
  );
}
