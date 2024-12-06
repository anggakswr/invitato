"use client";

import Image from "next/image";
import Cover from "./Cover";
import WelcomingSection from "./WelcomingSection";
import { useCoverStore } from "@/store/useCoverStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Homepage() {
  const { opened } = useCoverStore();
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(".title", {
        y: 0,
        opacity: 1,
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      {/* big box */}
      <div className="fixed left-0 right-[500px] hidden min-h-screen md:block">
        {/* content */}
        <div className="relative z-10 min-h-screen bg-black/40 p-10 text-white">
          <p className="title mb-4 translate-y-20 font-bold tracking-widest opacity-0">
            WEDDING ANNOUNCEMENT
          </p>

          <p className="mb-4 text-7xl font-light uppercase">Tiffany & Jared</p>

          <div className="title translate-y-20 opacity-0">
            <p className="italic">
              &quot;Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
              sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
              mencintaimu dengan sederhana; dengan isyarat yang tak sempat
              disampaikan awan kepada hujan yang menjadikannya tiada.&quot;
            </p>

            <p className="italic">— Sapardi Djoko Damono</p>
          </div>

          <div className="absolute inset-y-0 right-0 h-full w-2 bg-black/40" />
        </div>

        {/* bg */}
        <Image src={`/home/big-box.jpg`} alt="" fill className="object-cover" />
      </div>

      {/* small box */}
      <div className="fixed right-0 min-h-screen w-full md:w-[500px] md:min-w-[500px]">
        <Cover />

        {opened ? (
          <div className="relative z-10 overflow-y-scroll">
            <WelcomingSection />
          </div>
        ) : null}
      </div>
    </div>
  );
}
