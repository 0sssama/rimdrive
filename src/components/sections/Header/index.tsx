"use client";

import { syncopate } from "@/fonts";
import classNames from "classnames";
import Router from "next/router";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) setScrolled(true);
      else setScrolled(false);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 w-full p-3 z-[1337] flex items-center justify-center transition-all duration-600",
        {
          "bg-gray-50/90 backdrop-blur-sm saturate-180 drop-shadow-lg":
            scrolled,
        }
      )}
    >
      <h1
        className={classNames(
          "text-gray-50 text-lg font-bold transition-all duration-600 cursor-pointer",
          syncopate.className,
          {
            "!text-gray-900": scrolled,
          }
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        RIMDRIVE
      </h1>
    </header>
  );
}

export default Header;
