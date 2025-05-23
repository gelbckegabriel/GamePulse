"use client";

import { Typography } from "@material-tailwind/react";
import { GlowingEffect } from "./glowing-effect";
import { FaCalendarCheck, FaInfo, FaLocationArrow, FaLock, FaRunning } from "react-icons/fa";

export function GridCardsGlows({ court, sports, isLoading }) {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<FaLocationArrow className="h-4 w-4 text-gray-700" />}
        title={court.city + ", " + court.state}
        description={court.name + "."}
        hover={false}
        isLoading={isLoading}
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<FaRunning className="h-4 w-4 text-gray-700" />}
        title="What you can play"
        description={sports != undefined ? sports.join(", ") : "Loading, loading, loading..."}
        hover={false}
        isLoading={isLoading}
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<FaCalendarCheck className="h-4 w-4 text-gray-700" />}
        title="Get in the game!"
        description="Your crew's waiting. Pick a time, hit the court."
        hover={!isLoading}
        isLoading={isLoading}
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<FaLock className="h-4 w-4 text-gray-700" />}
        title="Creativity is dead now"
        description="I'm not even kidding. Ask my mom if you don't believe me."
        hover={false}
        isLoading={isLoading}
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<FaInfo className="h-4 w-4 text-gray-700" />}
        title="Find your way"
        description="Use Google Maps to point out the best route for you!"
        hover={!isLoading}
        link={court.gMaps}
        isLoading={isLoading}
      />
    </ul>
  );
}

const GridItem = ({ area, icon, title, description, hover, link = "", isLoading }) => {
  return (
    <>
      <li className={`min-h-[14rem] list-none ${area}`}>
        <a href={link != "" ? link : undefined} target="_blank">
          <div
            className={`relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 ${
              hover ? "cursor-pointer transition-all ease-in-out duration-300 hover:scale-105" : ""
            }`}
          >
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
                <div className="space-y-3">
                  {isLoading ? (
                    <>
                      <Typography as="div" variant="paragraph" className="mt-2 h-6 w-[80%] rounded-sm bg-gray-700 animate-pulse-strong">
                        &nbsp;
                      </Typography>
                      <Typography as="div" variant="paragraph" className="mt-2 h-3 w-[45%] rounded-sm bg-gray-700 animate-pulse-strong">
                        &nbsp;
                      </Typography>
                    </>
                  ) : (
                    <>
                      <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white">
                        {title}
                      </h3>
                      <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-700 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                        {description}
                      </h2>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </>
  );
};
