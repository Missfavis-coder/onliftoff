"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-full md:pt-0 pt-6 pb-10 flex flex-col items-center overflow-hidden">
      
      {/* FINAL CTA */}
      <div className="relative w-full md:min-h-[690px] min-h-[390px] flex flex-col items-center justify-center text-center mb-7">
        
        {/* BACKGROUND IMAGE */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full -bottom-60"
        >
          <Image
            src="/bg6.webp"
            alt="Background gradient"
            fill
            priority
            className="opacity-120"
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 mb-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-7xl md:text-4xl font-serif leading-tight font-semibold tracking-tight mb-8"
          >
            Networking <br className="lg:flex hidden" />
            without the noise.
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              router.push("/connector-waitlist");
            }}
            className="bg-[#1A1625] text-white px-8 py-4 rounded-md font-semibold"
          >
            Request access
          </motion.button>
        </motion.div>
      </div>

      {/* MIDDLE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-6xl lg:flex space-y-6 z-10 px-3 mb-4"
      >
        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 -mt-20 md:-mt-50 lg:mt-0"
        >
          <motion.span
            whileHover={{ scale: 1.03 }}
            className="text-4xl font-black tracking-tighter mb-2"
          >
            LIFTOFF
          </motion.span>

          <div className="flex flex-col items-center">
            <p className="font-bold text-sm uppercase tracking-wider text-slate-800">
              Get in touch
            </p>

            <a
              href="mailto:support@liftoff.xyz"
              className="transition-colors"
            >
              support@liftoff.xyz
            </a>
          </div>
        </motion.div>

        {/* SUBSTACK CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="lg:max-w-3xl lg:ml-auto"
        >
          <div className="bg-neutral-800/10 backdrop-blur-md md:p-8 p-4 rounded-xl flex flex-col justify-center items-center gap-4">
            
            {/* DOTS */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex gap-1"
            >
              <div className="w-3 h-3 rounded-full bg-orange-400" />
              <div className="w-3 h-3 rounded-full bg-indigo-400" />
            </motion.div>

            {/* CONTENT */}
            <div className="flex justify-between pt-6 pb-4">
              <div>
                <h4 className="font-semibold lg:text-[24px] text-[20px] md:text-left text-center">
                  Subscribe to our Substack, Warm Intro
                </h4>

                <p className="md:text-[16px] text-sm mt-1 text-neutral-600 leading-relaxed text-center md:text-left">
                  Hear from leaders we admire on building phenomenal teams and
                  how to find an incredible fit.
                </p>
              </div>

              <motion.span
                whileHover={{ x: 5 }}
                className="text-xl pl-4 lg:flex hidden"
              >
                <ArrowRight />
              </motion.span>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="lg:hidden bg-[#181229] flex primary-button text-sm"
            >
              Subscribe
            </motion.button>
          </div>

          {/* BOTTOM */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-7xl md:mt-10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-[#2f274a]"
          >
            <p>Liftoff Platform Inc 2026 © All Rights Reserved</p>

            <div className="flex gap-6 text-[#2f274a]">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;