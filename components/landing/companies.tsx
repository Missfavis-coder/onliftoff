"use client";

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

function Companies() {
  return (
    <section className="md:px-6 px-3 md:mt-6 -mt-18 overflow-hidden">
      
      {/* CONTENT */}
      <div className="z-10 mx-auto w-full flex-col items-center">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:max-w-4xl max-w-5xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl leading-[1.05] tracking-tight text-[#181229] md:text-4xl lg:text-5xl font-semibold"
          >
            Exceptional leaders are
            <br />
            using Liftoff to connect.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto md:mt-8 mt-4 md:max-w-2xl max-w-3xl text-[16px] leading-relaxed text-neutral-700 md:text-[18px] lg:text-xl"
          >
            Leaders using Liftoff have built teams at hyper-growth companies and
            are connecting the best people in their networks.
          </motion.p>
        </motion.div>

        {/* SLIDING BRANDS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
          viewport={{ once: true }}
          className="relative flex flex-col lg:gap-12 gap-6 overflow-hidden lg:py-8 md:py-6 py-4 text-[#080d18]"
        >
          
          {/* FADE LEFT */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 pointer-events-none bg-gradient-to-r from-white to-transparent" />

          {/* FADE RIGHT */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 pointer-events-none bg-gradient-to-l from-white to-transparent" />

          {/* ROW 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group flex overflow-hidden text-[#080d18]"
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
                    y: -3,
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center md:mx-12 mx-5 lg:text-3xl text-xl font-semibold whitespace-nowrap"
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group flex overflow-hidden text-[#080d18]"
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
                    y: -3,
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center md:mx-12 mx-5 lg:text-3xl text-xl font-semibold whitespace-nowrap"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ROW 3 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="group flex overflow-hidden text-[#080d18]"
          >
            <div className="flex min-w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[
                ...BACKED_BY,
                ...BACKED_BY,
                ...BACKED_BY,
                ...BACKED_BY,
                ...BACKED_BY,
                ...BACKED_BY,
                ...BACKED_BY,
              ].map((brand, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center md:mx-12 mx-5 lg:text-2xl text-xl font-semibold whitespace-nowrap"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Companies;