"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#f4f2ed]" />

        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-70%] left-[60%] -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#8f7cff] opacity-60 blur-[100px]"
        />

        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-12%] right-[-20%] rounded-full w-[600px] h-[400px] lg:flex hidden bg-[#ff9966] blur-[80px]"
        />

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-25%] w-[700px] h-[400px] bg-[#ff9966] blur-[150px] opacity-40"
        />

        <motion.div
          animate={{ x: [0, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#dbe8ff]/60 blur-[120px]"
        />

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-white/40 blur-[120px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-34 md:pt-38 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-[#17122b] font-semibold leading-[0.95] tracking-tighter text-3xl md:text-5xl"
        >
          We’re building the future of how incredible people connect.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 max-w-2xl space-y-7 text-[#2d243d]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] md:text-[17px] leading-relaxed"
          >
            The job ecosystem is collapsing: it’s overwhelming, transactional,
            and noisier than ever — and current AI tools are just making it
            worse.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] md:text-[17px] leading-relaxed"
          >
            Liftoff is a hiring and networking platform that helps people find
            an incredible fit, through people they trust. We combine AI and
            human insight to facilitate connections, so exceptional people and
            job opportunities find each other faster.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[16px] md:text-[17px] leading-relaxed"
          >
            On Liftoff you can open doors for others, and nurture your real
            professional network, without the noise. Our product transforms how
            people connect to opportunities — so people find better fits, and
            unlock exponential growth on all sides.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}