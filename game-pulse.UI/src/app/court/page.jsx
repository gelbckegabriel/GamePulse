"use client";

import { useEffect, useState } from "react";

export default function CourtPage() {
  const [courtName, setCourtName] = useState("");
  const [courtCity, setCourtCity] = useState("");

  useEffect(() => {
    // SET QUERY PARAMETERS
    const urlString = window.location.href;
    const url = new URL(urlString);
    const params = new URLSearchParams(url.search);

    setCourtName(params.get("name"));
    setCourtCity(params.get("city"));
  }, []);

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-4">Court</h1>
        <p className="text-lg text-gray-700 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p className="text-lg text-gray-700">
          Labore pariatur ipsam debitis! Odit expedita tempora, officiis incidunt tenetur officia eius quas, omnis enim a voluptatibus in nobis
          molestias at sapiente?
        </p>
      </div>
    </>
  );
}
