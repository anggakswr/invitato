"use client";

import { Button } from "@/components/ui/button";
import { useCoverStore } from "@/store/useCoverStore";
import { Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cover() {
  const [hidden, setHidden] = useState(false);
  const { opened, setOpened } = useCoverStore();
  const [loading, setLoading] = useState(false);

  const openIvt = async () => {
    setOpened(true);
    setLoading(true);

    // play song
    const audio = new Audio("/songs/pamungkas-only-one.mp3");
    await audio.play();

    setLoading(false);
  };

  useEffect(() => {
    if (opened) {
      setTimeout(() => {
        setHidden(true);
      }, 1000);
    }
  }, [opened]);

  return (
    <>
      {/* content */}
      <div
        className={`relative z-10 bg-black/40 text-white ${opened ? "-translate-y-full" : ""} ${hidden ? "hidden" : ""}`}
      >
        <div className="flex min-h-screen flex-col items-center justify-between p-10">
          <p className="mb-4 font-bold tracking-widest">WEDDING ANNOUNCEMENT</p>

          <div>
            <p className="mb-20 text-center text-4xl font-light">
              TIFFANY & JARED
              <br />
              #timetoshare
            </p>

            <div className="flex items-center justify-center">
              <Button
                color={"black"}
                background={"white"}
                className="animate-bounce rounded-none px-8 text-sm italic hover:opacity-80"
                size={"xs"}
                onClick={openIvt}
              >
                {loading ? (
                  <Spinner
                    borderRightColor={"black"}
                    color="black"
                    borderWidth="4px"
                  />
                ) : (
                  "Open"
                )}
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
        className={`object-cover ${opened ? "-translate-y-full" : ""}`}
      />
    </>
  );
}
