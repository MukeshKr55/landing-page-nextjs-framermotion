"use client";

import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div
      className="bg-black text-white text-center py-[72px] sm:py-24"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }} drag dragSnapToOrigin>
          <Image
            src={helixImage}
            alt="helix-image"
            className="absolute top-6 left-[calc(100%+36px)]"
            draggable="false"
          />
        </motion.div>
        <motion.div style={{ translateY }} drag dragSnapToOrigin>
          <Image
            src={emojiStarImage}
            alt="emojistar-image"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
            draggable="false"
          />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
