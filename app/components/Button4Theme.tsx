"use client";
import { useEffect, useState } from "react";
const Button4Theme = () => {
  const [theme, setTheme] = useState("🌙");
  useEffect(() => {
    // 获取html的属性
    if (theme === "🌙") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      className="text-xl mx-2 hover:bg-green-400 rounded-md fixed z-10 p-1 
      sm:top-3 sm:right-3 sm:text-lg
      md:top-3 md:right-3 md:text-xl
      lg:top-3 lg:right-6 lg:text-2xl
      "
      onClick={() => {
        if (theme === "🌙") {
          setTheme("🌞");
        } else setTheme("🌙");
      }}
    >
      {theme}
    </button>
  );
};
export default Button4Theme;
