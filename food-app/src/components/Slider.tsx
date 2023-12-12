"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //     }, 2000);
  //     return () => clearInterval(interval);
  //   }, [currentSlide]);

  return (
    <>
      <div className="flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)]">
        <div className="h-1/2 flex flex-col gap-8 justify-center items-center text-rose-600 font-bold">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center p-4 md:10 uppercase">{data[currentSlide].title}</h1>
          <button className="text-rose-600 px-4 py-2 rounded border-rose-600 border-2 hover:text-white hover:bg-rose-600 transition-all duration-500">Order Now</button>
        </div>
        <div className="w-full h-1/2 relative">
          <Image src={data[currentSlide].image} alt="hero" fill className="object-cover" />
        </div>
      </div>
    </>
  );
}
