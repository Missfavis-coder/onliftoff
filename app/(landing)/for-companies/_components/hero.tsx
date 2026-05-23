"use client";

import Image from "next/image";
import NetworkHero from "./connector";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      data-navbar="hero"
      className="relative overflow-hidden px-6 md:pt-42 pt-30 z-20"
    >
      <section>
        {/* BACKGROUND IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute lg:top-0 md:top-0 -top-70 inset-0 z-30"
        >
          <Image
            src="/company1.webp"
            alt="Background"
            fill
            priority
            className="md:object-cover md:object-center object-contain lg:opacity-70 opacity-90"
          />
        </motion.div>


          <NetworkHero />


        {/* CONTENT */}
        <div className="relative z-20 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center md:pt-70">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif lg:text-5xl text-3xl leading-[1.05] tracking-tighter text-white font-semibold"
            >
              Win the hiring lottery
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto md:mt-8 mt-4 max-w-2xl text-[14px] leading-relaxed text-white/70 md:text-xl"
            >
              Find exceptional talent through trusted recommendations.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => {
                router.push("/connector-waitlist");
              }}
              className="md:mt-10 mt-6 rounded-lg bg-white md:px-10 px-8 py-4 lg:text-[16px] text-[14px] font-semibold text-black cursor-pointer"
            >
              Request access to hire
            </motion.button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}