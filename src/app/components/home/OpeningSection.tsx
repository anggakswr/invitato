"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function OpeningSection() {
  return (
    <div className="relative z-20 overflow-x-hidden bg-white pb-20 text-center text-black">
      <div className="p-10">
        <p className="mb-6 text-sm font-bold uppercase">
          DEAR MR-MRS-MS,
          <br />
          Family & Friends
        </p>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mb-6 text-3xl"
        >
          Welcome to
          <br />
          Tiffany & Jared’s
          <br />
          Wedding Website
        </motion.p>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="italic"
        >
          Together with joyful hearts and the grace of God, we joyfully announce
          the upcoming of our marriage.
        </motion.p>
      </div>

      <div className="-mx-56 mb-6">
        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides
          initialSlide={1}
          spaceBetween={50}
          slidesPerView={3}
          modules={[EffectCoverflow, Navigation]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          <SwiperSlide>
            <img src="/welcoming-section/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/welcoming-section/2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/welcoming-section/3.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex items-end justify-end gap-2 px-10">
        <Button
          size={"xs"}
          className="custom-prev rounded-none border border-black bg-yellow-50 px-6 text-3xl"
        >
          &larr;
        </Button>

        <Button
          size={"xs"}
          className="custom-next rounded-none border border-black bg-yellow-50 px-6 text-3xl"
        >
          &rarr;
        </Button>
      </div>
    </div>
  );
}
