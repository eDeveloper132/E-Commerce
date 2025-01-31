"use client";
import React, { useState, useEffect } from "react";

const RealTimeDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());

  // Update the date every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date().toISOString());
    }, 1000); // Update every 1000ms (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="font-[Josefin Sans] font-bold text-2xl text-[#0D0E43]">
      {currentDate}
    </p>
  );
};

export default RealTimeDate;