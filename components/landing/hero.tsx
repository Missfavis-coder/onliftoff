"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Forward, Sparkle } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden lg:px-6 px-4 md:pt-42 pt-36">
      
      {/* BG */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 -z-10 h-[80vh] lg:h-[100vh] lg:max-w-9xl mx-auto w-full"
      >
        <Image
          src="/bg1.webp"
          alt="Background gradient"
          fill
          priority
          className="lg:object-contain object-cover opacity-100"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center lg:justify-center">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif md:text-4xl text-3xl leading-[1.05] tracking-tight text-[#181229] lg:text-6xl font-semibold"
          >
            Find incredible people,
            <br />
            through people you trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mx-auto md:mt-8 mt-6 max-w-4xl text-[15px] leading-relaxed text-neutral-600 md:text-lg"
          >
            A hiring and networking platform where exceptional people
            connect — and start working together.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => {
              router.push("/connector-waitlist");
            }}
            className="primary-button lg:mt-10 mt-8 rounded-md px-8 md:py-5 py-3 lg:text-lg text-[15px]"
          >
            Request access
          </motion.button>
        </motion.div>

        {/* FLOATING UI */}
        <div className="relative mt-10 h-[400px] w-full max-w-5xl">
          
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -6 }}
            className="absolute lg:left-[2%] lg:top-12 md:top-10 top-0 lg:w-64 md:w-42 w-39 rounded-md border border-white/40 bg-white lg:p-5 md:p-3 p-2 shadow-2xl shadow-black/5 -space-y-1"
          >
            <div className="flex items-center lg:gap-4 gap-2">
              <div className="relative lg:h-14 lg:w-14 h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="/user1.png"
                  alt="Amber"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="-space-y-1">
                <h1 className="lg:text-lg text-xs font-semibold text-[#181229]">
                  Amber
                </h1>

                <p className="lg:text-sm text-[10px] text-[#2f274a]/70">
                  CEO at AI Startup
                </p>
              </div>
            </div>

            <p className="lg:mt-3 md:mt-2 mt-1 lg:text-base text-[10px] font-medium text-[#181229]">
              Hiring a Head of Marketing
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            whileHover={{ y: -6 }}
            className="absolute right-[2%] lg:top-20 md:top-50 top-40 lg:w-64 md:w-42 w-40 rounded-md border border-white/40 bg-white lg:py-5 md:py-3 lg:px-6 md:px-2 p-2 shadow-2xl shadow-black/5 -space-y-1"
          >
            <div className="flex items-center lg:gap-4 gap-2">
              <div className="relative lg:h-14 lg:w-14 h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="/user2.png"
                  alt="Daniel"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="-space-y-1">
                <h1 className="lg:text-lg text-xs font-semibold text-[#181229]">
                  Daniel
                </h1>

                <p className="lg:text-sm text-[10px] text-[#2f274a]/70">
                  Marketing leader
                </p>
              </div>
            </div>

            <p className="mt-2 lg:mt-3 lg:text-base text-[10px] font-medium text-[#181229]">
              Interested in Early stage AI
            </p>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative md:h-80 md:w-50 w-55">
              
              {/* FLOATING AVATARS */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute md:h-10 md:w-10 h-8 w-8 lg:-top-8 lg:-left-10 md:-left-[50%] -left-8 lg:opacity-100 opacity-30 blur-[3px] lg:blur-[0px] rounded-full border-2 border-white"
              >
                <Image
                  src="/user4.png"
                  alt="Amber"
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute lg:left-42 md:-left-40 -left-22 lg:-top-4 md:top-28 -top-20 md:h-10 md:w-10 h-8 w-8 rounded-full border-2 border-white lg:opacity-100 opacity-30 blur-[3px] lg:blur-[0px]"
              >
                <Image
                  src="/user6.png"
                  alt="Amber"
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute lg:-right-9 lg:top-1/2 md:top-[34%] -top-19 lg:h-14 lg:w-14 h-8 w-8 lg:-translate-x-1/2 translate-x-16 lg:-translate-y-1/2 rounded-full border-2 border-white bg-slate-100"
              >
                <Image
                  src="/user9.png"
                  alt="Amber"
                  fill
                  className="object-cover rounded-full"
                />

                {/* RECOMMENDED */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute lg:-right-28 lg:top-8 md:-top-10 lg:left-1/2 left-[97%] md:left-4 -top-14 lg:-translate-x-1/2 lg:translate-x-0 z-50 bg-white/70 px-3 py-2 flex gap-3 items-center rounded-md backdrop-blur-xl shadow-lg border border-white/40 whitespace-nowrap"
                >
                  <Sparkle size={14} fill="#000" className="text-black" />

                  <div className="-space-y-1 text-[#181229]">
                    <div className="text-[10px] font-semibold">
                      Recommended
                    </div>

                    <div className="text-[11px] font-medium">
                      Daniel
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute lg:h-12 lg:w-12 h-8 w-8 md:top-20 -top-40 lg:left-2 left-78 rounded-full border-2 border-white text-black lg:opacity-100 opacity-60 blur-[2px] lg:blur-[0px]"
              >
                <Image
                  src="/user3.png"
                  alt="Amber"
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute lg:-left-15 md:-left-20 left-[20%] lg:h-12 h-8 w-8 lg:w-12 md:top-42 -top-50 rounded-full border-2 border-white md:opacity-100 opacity-30 blur-[3px] lg:blur-[0px]"
              >
                <Image
                  src="/user7.png"
                  alt="Amber"
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}