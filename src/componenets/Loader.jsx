import React, { useEffect, useState } from "react";

function Loader({ onFinish }) {
  const name = "Shazan_";
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setActiveIndex(index);
      index++;
      if (index >= name.length) {
        index = 0;
      }
    }, 300); // letter animation speed

    const timeout = setTimeout(() => {
      onFinish(); //
    }, name.length * 300 + 800); // 

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [name.length, onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
      <h1 className="text-7xl font-extrabold flex space-x-2">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            className={`relative transition-all duration-500 ease-in-out ${
              index === activeIndex ? "text-fill" : "text-outline"
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
