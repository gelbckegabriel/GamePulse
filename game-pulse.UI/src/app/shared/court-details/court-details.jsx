"use client";

import { IconButton } from "@material-tailwind/react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import Link from "next/link";

import "./court-details.scss";

export const CourtDetails = ({ name, city, distance, address, web_address, gps_assist, sports, redirect_link, favorite, onFavoriteToggle }) => {
  return (
    <>
      <div className="court-card h-[200px] my-[20px]">
        <div className="court-preview bg-backgroundContrast flex flex-col justify-between text-white p-[10px] md:p-[30px] w-[30%] max-w-[30%]">
          <h6 className="">Court</h6>
          <div className="flex flex-row flex-wrap gap-4 py-4">
            {sports.map((sport, index) => (
              <img key={index} src={`/logos/${sport}.webp`} alt={sport} className="w-[20px] md:w-[40px]" />
            ))}
          </div>
          <div>
            <a href={web_address}>View more</a>
          </div>
        </div>
        <div className="court-info flex flex-col justify-between p-[10px] md:p-[30px]">
          <div className="progress-container top-[10px] md:top-[30px] right-[10px] md:right-[30px]">
            <IconButton variant="text" onClick={onFavoriteToggle}>
              {favorite ? <FaHeart className="text-[30px] text-red-900" /> : <FaHeartBroken className="text-[30px] text-darkGray" />}
            </IconButton>
          </div>
          <div className="text-xs md:text-sm lg:text-base">
            <h6>
              {name} (~{distance}km)
            </h6>
            <h2>{city}</h2>
            <h4>{address}</h4>
          </div>
          <div className="absolute bottom-[10px] md:bottom-[30px]">
            <a href={gps_assist}>How to get there?</a>
          </div>
          <Link href={redirect_link}>
            <button className="btn bg-backgroundContrast bottom-[10px] md:bottom-[30px] right-[10px] md:right-[30px] hover:scale-110 transition duration-500 ease-in-out">
              Access
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
