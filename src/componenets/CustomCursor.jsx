import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const moveMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const addHover = () => setActive(true);
    const removeHover = () => setActive(false);

    document.addEventListener("mousemove", moveMouse);
    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveMouse);
      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  // Dot follow (fast)
  useEffect(() => {
    const animateDot = () => {
      setDotPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.35, // fast
        y: prev.y + (mousePos.y - prev.y) * 0.35,
      }));
      requestAnimationFrame(animateDot);
    };
    animateDot();
  }, [mousePos]);

  // Circle follow (slow)
  useEffect(() => {
    const animateCircle = () => {
      setCirclePos((prev) => ({
        x: prev.x + (dotPos.x - prev.x) * 0.08, // slow, trailing effect
        y: prev.y + (dotPos.y - prev.y) * 0.08,
      }));
      requestAnimationFrame(animateCircle);
    };
    animateCircle();
  }, [dotPos]);

  return (
    <div>
      <div
        className={`custom-cursor ${active ? "active" : ""}`}
        style={{
          left: circlePos.x,
          top: circlePos.y,
        }}
      >
        <div
          className="custom-cursor-dot"
          style={{
            left: dotPos.x - circlePos.x,
            top: dotPos.y - circlePos.y,
          }}
        ></div>
      </div>
    </div>
  );
}
