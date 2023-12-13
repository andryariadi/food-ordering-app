"use client";
import Countdown from "react-countdown";

const endingDate = new Date("2023-12-14");

export default function CountDown() {
  return (
    <>
      <Countdown date={endingDate} className="text-amber-500 text-5xl font-bold" />
    </>
  );
}
