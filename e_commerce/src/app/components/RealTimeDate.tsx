"use client";
import React, { useState, useEffect } from "react";

const RealTimeDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every 1 second

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format date to a concise, readable string
  const formattedDate = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <p className="font-[Josefin Sans] font-bold text-lg md:text-2xl text-white">
      {formattedDate}
    </p>
  );
};

export default RealTimeDate;