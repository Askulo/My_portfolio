"use client";
import { motion, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  // Spring-based smooth movement
  const cursorX = useSpring(0, { stiffness: 100, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 100, damping: 20 });

  // State for cursor symbol
  const [cursorSymbol, setCursorSymbol] = useState("<>");

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setCursorSymbol("→");
    const handleMouseLeave = () => setCursorSymbol("<>");

    // Detect when hovering over the navbar
    const navbarLinks = document.querySelectorAll("nav a");
    navbarLinks.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      navbarLinks.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed text-3xl text-white pointer-events-none mix-blend-difference"
      style={{
        transform: "translate(-50%, -50%)",
        x: cursorX,
        y: cursorY,
      }}
    >
      {cursorSymbol} {/* Dynamic Cursor Symbol */}
    </motion.div>
  );
};

export default Cursor;
