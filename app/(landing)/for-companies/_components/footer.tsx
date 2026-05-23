"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Footer = () => {
  const router = useRouter();

  return (
    <section
      data-navbar="footer"
      className="w-full relative pt-6 flex flex-col items-center overflow-hidden bg-[#F9F7F2] z-10"
    >
      {/* 1. Final CTA Section */}
      <div className="relative w-full min-h-[690px] flex flex-col items-center justify-center text-center">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/company1.webp"
            alt="Background gradient"
            fill
            priority
            className="object-cover rotate-180"
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 lg:mb-20 mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl md:text-4xl font-serif leading-tight mb-8 font-semibold text-[#181229]"
          >
            Stop searching, start <br /> connecting.
          </motion.h2>

          <motion.button
            onClick={() => {
              router.push("/connector-waitlist");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#181229] text-white px-8 py-4 rounded-md font-semibold text-sm lg:text-[18px] md:text-[16px]"
          >
            Request access to hire
          </motion.button>
        </motion.div>

        {/* 2. Middle Info Section */}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-46 z-10 px-4 mb-4">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left text-white shrink-0"
          >
            <span className="text-4xl font-black tracking-tighter mb-6">
              LIFTOFF
            </span>

            <div className="flex flex-col items-center lg:items-start">
              <p className="font-bold text-sm uppercase tracking-tight mb-1">
                Get in touch
              </p>

              <a
                href="mailto:support@liftoff.xyz"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                support@liftoff.xyz
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 max-w-3xl"
          >
            {/* CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#181229]/70 backdrop-blur-md rounded-2xl md:p-8 p-3"
            >
              {/* TOP DOTS */}
              <div className="flex gap-2 lg:mb-8 mb-6 pt-2 px-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-3 h-3 rounded-full bg-orange-400"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2.3 }}
                  className="w-3 h-3 rounded-full bg-indigo-400"
                />
              </div>

              {/* CONTENT */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="font-semibold text-white lg:text-[24px] text-[20px] leading-tight text-center lg:text-left"
                  >
                    Subscribe to our Substack, Warm Intro
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="md:text-[15px] text-sm mt-3 text-neutral-300 leading-relaxed text-center lg:text-left"
                  >
                    Hear from leaders we admire on building phenomenal teams and
                    how to find an incredible fit.
                  </motion.p>
                </div>

                <motion.span
                  whileHover={{ x: 5 }}
                  className="text-xl hidden lg:flex text-white mt-1"
                >
                  <ArrowRight />
                </motion.span>
              </div>

              {/* MOBILE BUTTON */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="lg:hidden bg-white text-black font-semibold px-8 py-3 text-sm rounded-lg mt-6 mx-auto block"
              >
                Subscribe
              </motion.button>
            </motion.div>

            {/* FOOTER */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full md:mt-8 mt-4 pt-4 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-white/80"
            >
              <p className="text-center lg:text-left">
                Liftoff Platform Inc 2026 © All Rights Reserved
              </p>

              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>

                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BACKGROUND GLOWS */}
      <section className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -left-24 bottom-38 md:w-[400px] h-[500px] w-[200px] md:h-[400px] rounded-full bg-[#8a34b5] md:blur-3xl blur-2xl opacity-40"
        />

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute md:-bottom-[2800px] md:-left-[800px] -bottom-60 w-full h-full md:w-[3000px] md:h-[3000px] h-[650px] rounded-full bg-[#15051c] md:blur-2xl blur-2xl md:opacity-70 opacity-90"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute md:-bottom-[2500px] md:-left-[800px] -bottom-60 w-full md:w-[3000px] md:h-[3000px] h-[850px] -z-10 rounded-full bg-[#a3a0ff] md:blur-3xl blur-2xl opacity-65"
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute md:bottom-[20%] top-36 md:-right-[19%] -right-40 md:w-[400px] md:h-[400px] h-60 w-80 -z-12 rounded-full bg-[#b5a755] md:blur-3xl blur-2xl"
        />
      </section>
    </section>
  );
};

export default Footer;