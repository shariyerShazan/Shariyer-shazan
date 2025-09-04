
import React, { useEffect, useState } from "react";

function Loader() {
  const name = "Shazan";
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev < name.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 200); 

    return () => clearInterval(interval);
  }, [name.length]);

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-950">
      <h1 className="text-5xl font-bold flex space-x-1">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            className={`transition-colors duration-500 ${
              index < visibleLetters
                ? "text-[var(--color-primary)]"
                : "text-gray-400"
            }`}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Loader;
