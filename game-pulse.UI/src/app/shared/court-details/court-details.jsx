"use client";

import { IconButton } from "@material-tailwind/react";
import "./court-details.scss";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { useState } from "react";

export const CourtDetails = () => {
  const [loved, setLoved] = useState(false);
  const [distance, setDistance] = useState(13);

  return (
    <>
      <div className="court-card h-[200px]">
        <div className="court-preview flex flex-col justify-between bg-[#2a265f] text-white p-[10px] md:p-[30px] w-[30%] max-w-[30%]">
          <h6>Court</h6>
          <div className="flex flex-row flex-wrap gap-4 py-4">
            <img src="/logos/basketball.webp" alt="basketball" className="w-[20px] md:w-[40px]" />
            <img src="/logos/football.webp" alt="football" className="w-[20px] md:w-[40px]" />
          </div>
          <div>
            <a href="https://www.curitiba.pr.gov.br/conteudo/parque-municipal-atuba/288">View more</a>
          </div>
        </div>
        <div className="court-info flex flex-col justify-between p-[10px] md:p-[30px]">
          <div className="progress-container">
            {/* <div className="progress"></div>
            <span className="progress-text">6/9 Challenges</span> */}
            <IconButton variant="text" onClick={() => setLoved(!loved)}>
              {loved ? <FaHeart className="text-[30px] text-red-900" /> : <FaHeartBroken className="text-[30px] text-darkGray" />}
            </IconButton>
          </div>
          <div>
            <h6>Parque Atuba (~{distance}km)</h6>
            <h2>Curitiba, PR</h2>
            <h4>R. Pintor Ricardo Krieger, 550 - Atuba, Curitiba - PR, 82630-143</h4>
          </div>
          <div>
            <a href="">How to get there?</a>
          </div>
          <button className="btn bottom-[10px] md:bottom-[30px] right-[10px] md:right-[30px] ">Access</button>
        </div>
      </div>
    </>
  );
};
