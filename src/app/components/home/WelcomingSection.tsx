"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Icon } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCoverStore } from "@/store/useCoverStore";

gsap.registerPlugin(useGSAP);

export default function WelcomingSection() {
  const { opened } = useCoverStore();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".section", {
      y: 0,
      opacity: 1,
    });
  });

  const slides = [
    `/welcoming-section/1.jpg`,
    `/welcoming-section/2.jpg`,
    `/welcoming-section/3.jpg`,
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (opened) {
      setInterval(() => {
        setActiveSlide((prevSlide) => {
          if (prevSlide < slides.length - 1) {
            return prevSlide + 1;
          }

          return 0;
        });
      }, 3000);
    }
  }, []);

  return (
    <div
      className={`section relative translate-y-full overflow-hidden bg-black/40 text-white opacity-0`}
      // className={`relative overflow-x-hidden bg-black/40 text-white`}
    >
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-between p-10">
        <p className="mb-4 font-bold tracking-widest">WEDDING ANNOUNCEMENT</p>

        <div>
          <p className="mb-20 text-center text-4xl font-light">
            TIFFANY & JARED
            <br />
            #timetoshare
          </p>
        </div>

        <div className="flex w-full items-end justify-end">
          <button className="flex items-center gap-2 text-sm font-bold">
            SCROLL TO BEGIN
            <Icon fontSize="15px" color="white">
              <FaChevronDown />
            </Icon>
          </button>
        </div>
      </div>

      {slides.map((slide, i) => (
        <Image
          key={slide}
          src={slide}
          alt=""
          fill
          className={`object-cover ${activeSlide === i ? "scale-125 opacity-70" : "scale-100 opacity-0"}`}
        />
      ))}
    </div>
  );
}
