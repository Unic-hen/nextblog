"use client";
import Link from "next/link";
import { settings } from "@/app/settings";
import clsx from "clsx";
import { useState } from "react";
const Header = () => {
  const [current, setCurrent] = useState(settings.lis[0].name);
  return (
    <header className="w-full z-9 fixed top-0 left-0 backdrop-blur-md flex justify-center ">
      <nav className="lg:pt-6 sm:pt-4 md:pt-4 flex justify-between items-center lg:w-3/4 md:w-4/5">
        <ul className="flex gap-4 text-xl sm:gap-2">
          {settings.lis.map((item, index) => (
            <li
              key={index}
              // className={clsx("", {
              //   "border-b-2 border-b-green-500 animate-underline":
              //     current == item.name,
              // })}
              className="lg:w-24 h-10 sm:w-20 md:w-20"
              onClick={() => setCurrent(item.name)}
            >
              <Link href={item.url}>
                <span className="lg:mx-2 sm:mx-1 md::mx-1">{item.icon}</span>
                <span
                  className={clsx(
                    "lg:text-2xl hover:font-bold sm:text-lg md:text-lg",
                    {
                      "font-bold": current == item.name,
                    }
                  )}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
