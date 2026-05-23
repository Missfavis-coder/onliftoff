"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Footer = () => {
  const router = useRouter();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative w-full pt-6 pb-10 flex flex-col items-center"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/bg6.webp"
          alt="Background gradient"
          fill
          priority
          className="object-contain md:object-cover opacity-120"
        />
      </div>

      {/* HERO TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-25 flex flex-col items-center justify-center text-center mb-2"
      >
        <div className="relative z-10 mt-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6"
          >
            Get in touch
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("connector-waitlist")}
            className="bg-[#1A1625] text-white px-8 py-4 rounded-md font-semibold"
          >
            Request access
          </motion.button>
        </div>
      </motion.div>

      {/* MIDDLE SECTION */}
      <div className="w-full mt-8 max-w-6xl md:flex space-y-6 lg:space-y-0 z-10 px-3 mb-4">
        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 -mt-20 md:mt-0"
        >
          <span className="text-4xl font-black tracking-tighter mb-2">
            LIFTOFF
          </span>

          <div className="flex flex-col items-center">
            <p className="font-bold text-sm uppercase tracking-wider text-slate-800">
              Get in touch
            </p>
            <a href="mailto:support@liftoff.xyz">support@liftoff.xyz</a>
          </div>
        </motion.div>

        {/* SUBSTACK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-3xl md:ml-auto"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-neutral-800/10 backdrop-blur-md md:p-8 p-4 rounded-xl flex flex-col justify-center items-center gap-4"
          >
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-orange-400" />
              <div className="w-3 h-3 rounded-full bg-indigo-400" />
            </div>

            <div className="flex justify-between pt-6 pb-4">
              <div>
                <h4 className="font-semibold md:text-[24px] text-[20px] text-center md:text-left">
                  Subscribe to our Substack, Warm Intro
                </h4>
                <p className="md:text-[16px] text-sm mt-1 text-neutral-600 leading-relaxed text-center md:text-left">
                  Hear from leaders we admire on building phenomenal teams and how to find an incredible fit.
                </p>
              </div>

              <span className="text-xl pl-4 md:flex hidden">
                <ArrowRight />
              </span>
            </div>

            <button className="md:hidden bg-[#181229] flex primary-button text-sm">
              Subscribe
            </button>
          </motion.div>

          {/* FOOTER BOTTOM */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-7xl md:mt-10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-[#2f274a]"
          >
            <p>Liftoff Platform Inc 2026 © All Rights Reserved</p>

            <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;