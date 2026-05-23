"use client";

import React from "react";
import { motion } from "framer-motion";

const BRANDS_ROW_1 = [
  "Summer Health",
  "BERO",
  "Ramp",
  "Loom",
  "Fay",
  "Substack",
  "Seed Health",
];

const BRANDS_ROW_2 = [
  "Songfinch",
  "Sydecar",
  "Liner",
  "Attio",
  "Graphite",
  "BioRender",
  "Sully AI",
];

const BACKED_BY = [
  "Y Combinator",
  "Sequoia",
  "Accel",
  "Forerunner",
];

export default function Companies() {
  return (
    <main className="md:mt-25 -mt-18 text-white font-sans overflow-hidden">
      {/* Hero Content */}
      <section className="pt-0 pb-12 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-white font-bold tracking-tight max-w-3xl mx-auto leading-[1.1]"
        >
          Incredible companies <br /> are using Liftoff to hire
        </motion.h1>
      </section>

      {/* Sliding Brands */}
      <div className="relative flex flex-col lg:gap-12 gap-6 overflow-hidden lg:py-8 md:py-6 py-4">
        {/* FADE LEFT */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#181229] to-transparent pointer-events-none" />

        {/* FADE RIGHT */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#181229] to-transparent pointer-events-none" />

        {/* ROW 1 */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group flex overflow-hidden"
        >
          <div className="flex min-w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[
              ...BRANDS_ROW_1,
              ...BRANDS_ROW_1,
              ...BRANDS_ROW_1,
              ...BRANDS_ROW_1,
              ...BRANDS_ROW_1,
              ...BRANDS_ROW_1,
            ].map((brand, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center md:mx-12 mx-5 lg:text-3xl text-xl font-semibold text-white/80 hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROW 2 */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="group flex overflow-hidden"
        >
          <div className="flex min-w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {[
              ...BRANDS_ROW_2,
              ...BRANDS_ROW_2,
              ...BRANDS_ROW_2,
              ...BRANDS_ROW_2,
              ...BRANDS_ROW_2,
              ...BRANDS_ROW_2,
              ...BRANDS_ROW_2,
            ].map((brand, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center md:mx-12 mx-5 lg:text-2xl text-xl font-medium text-white/70 hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BACKED BY */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-gray-200 font-bold mb-8"
        >
          Companies backed by
        </motion.p>

        <div className="md:flex hidden min-w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[
            ...BACKED_BY,
            ...BACKED_BY,
            ...BRANDS_ROW_1,
            ...BACKED_BY,
            ...BRANDS_ROW_1,
            ...BRANDS_ROW_1,
            ...BRANDS_ROW_1,
          ].map((vc, i) => (
            <motion.span
              key={i}
              whileHover={{
                scale: 1.05,
                color: "#fff",
              }}
              transition={{ duration: 0.2 }}
              className="text-sm flex items-center justify-center md:mx-12 mx-5 font-medium text-white/70 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              {vc}
            </motion.span>
          ))}
        </div>

        <div className="flex md:hidden justify-center items-center gap-6 px-4 opacity-80 grayscale">
          {BACKED_BY.slice(0, 3).map((vc, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest"
            >
              {vc}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </main>
  );
}