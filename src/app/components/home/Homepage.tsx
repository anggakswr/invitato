"use client";

import { Button } from "@chakra-ui/react";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="flex">
      {/* big box */}
      <div className="relative min-h-screen w-full">
        {/* content */}
        <div className="relative z-10 min-h-screen bg-black/40 p-10 text-white">
          <p className="mb-4 font-bold tracking-widest">WEDDING ANNOUNCEMENT</p>
          <p className="mb-4 text-7xl font-light uppercase">Tiffany & Jared</p>

          <p className="italic">
            &quot;Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
            sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
            mencintaimu dengan sederhana; dengan isyarat yang tak sempat
            disampaikan awan kepada hujan yang menjadikannya tiada.&quot;
          </p>

          <p className="italic">— Sapardi Djoko Damono</p>

          <div className="absolute inset-y-0 right-0 h-full w-2 bg-black/40" />
        </div>

        {/* bg */}
        <Image src={`/home/big-box.jpg`} alt="" fill className="object-cover" />
      </div>

      {/* small box */}
      <div className="relative min-h-screen min-w-[500px]">
        {/* content */}
        <div className="relative z-10 bg-black/40 text-white">
          <div className="flex min-h-screen flex-col items-center justify-between p-20">
            <p className="mb-4 font-bold tracking-widest">
              WEDDING ANNOUNCEMENT
            </p>

            <div>
              <p className="mb-20 text-center text-4xl font-light">
                Tiffany & Jared
                <br />
                #timetoshare
              </p>

              <div className="flex items-center justify-center">
                <Button
                  color={"black"}
                  background={"white"}
                  className="animate-bounce rounded-none px-8 text-sm italic hover:opacity-80"
                  size={"xs"}
                >
                  Open
                </Button>
              </div>
            </div>

            <div></div>
          </div>
        </div>

        {/* bg */}
        <Image
          src={`/home/small-box.jpg`}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
