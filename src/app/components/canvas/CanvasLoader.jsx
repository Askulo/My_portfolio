import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-8 bg-black bg-opacity-75 rounded-xl shadow-2xl space-y-4">
        {/* Glowing Circle with Pulsating Animation */}
        <div className="relative flex items-center justify-center w-32 h-32 border-8 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse">
          <div
            className="absolute inset-0 w-full h-full border-8 border-t-8 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin"
            style={{
              transform: `rotate(${progress * 3.6}deg)`,
            }}
          ></div>
          <div className="absolute text-white text-3xl font-bold">
            {progress.toFixed(0)}%
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-white text-xl font-medium">Just a Moment...</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
