"use client";
import Countdown from "react-countdown";

// const currentDate = new Date();

// const endingDate = new Date(currentDate);
// endingDate.setHours(13, 55, 0, 0);

const endingDate = new Date("2023-12-31");

export default function CountDown() {
  return (
    <>
      <Countdown date={endingDate} className="text-amber-500 text-5xl font-bold" />
    </>
  );
}
