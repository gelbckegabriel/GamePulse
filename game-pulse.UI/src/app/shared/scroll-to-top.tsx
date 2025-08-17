"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // When the user scrolls down 20px from the top of the document, show the button
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className="hidden fixed bottom-5 right-7 z-[99] border-none outline-none bg-white/40 cursor-pointer p-4 rounded-full text-lg transition duration-300 ease-in-out hover:bg-white/70 hover:scale-110"
      onClick={scrollToTop}
      style={{ display: showButton ? "block" : "none" }}
      title="Go to top"
    >
      <FaChevronUp className="h-4 w-4 text-gray-900" />
    </button>
  );
};
