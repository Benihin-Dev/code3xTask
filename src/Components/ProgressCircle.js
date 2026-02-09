import React, { useEffect, useState } from "react";

export default function ProgressCircle() {
  const MIN = 65;
  const MAX = 84;

  const [progress, setProgress] = useState(MIN);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= MAX ? MIN : prev + 1));
    }, 300); // slower = smoother

    return () => clearInterval(interval);
  }, []);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center scale-x-90">
      <svg width="60" height="60">
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#010101"
          strokeWidth="5"
          fill="none"
        />

        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#9fd094"
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-linear"
        />
      </svg>

      <div className="absolute text-xs scale-90 font-medium">{progress}%</div>
    </div>
  );
}
