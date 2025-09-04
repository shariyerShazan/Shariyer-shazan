import React, { useEffect, useState } from "react";

function Loader() {
  const name = "Shazan";
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setActiveIndex(index);
      index++;
      if (index >= name.length) {
        index = 0;
      }
    }, 300); 

    return () => clearInterval(interval);
  }, [name.length]);

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-950">
      <h1 className="text-7xl font-extrabold flex space-x-2">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            className={`relative transition-all duration-500 ease-in-out 
              ${index === activeIndex ? "text-fill" : "text-outline"}`}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Loader;
