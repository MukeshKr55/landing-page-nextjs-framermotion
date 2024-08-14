"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["0.5 1", "1 1"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] sm:py-24 py-[72px]">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress,motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
          style={{ opacity, rotateX, transformPerspective: "2000px" }}
        >
          <Image
            src={appScreen}
            alt="product screenshot"
            className="mt-14 mx-auto"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};
