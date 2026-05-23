"use client";

import { Heart, Sparkles, Smile } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

function Benefits() {
  const features = [
    {
      title: "Better fits",
      description:
        "Authentic recommendations to find the right people and opportunities.",
      icon: (
        <Sparkles
          className="md:w-8 md:h-8 h-6 w-6 text-black"
          strokeWidth={1.5}
        />
      ),
      bgImage: "/bg2.png",
    },
    {
      title: "Less noise",
      description:
        "No public broadcasts or noisy feeds. Quality over quantity, always.",
      icon: (
        <Heart
          className="md:w-8 md:h-8 h-6 w-6 text-black"
          strokeWidth={1.5}
        />
      ),
      bgImage: "/bg3.png",
    },
    {
      title: "More warmth",
      description:
        "Warm intros that lead to relationships vs. transactions.",
      icon: (
        <Smile
          className="md:w-8 md:h-8 h-6 w-6 text-black"
          strokeWidth={1.5}
        />
      ),
      bgImage: "/bg4.png",
    },
  ];

  return (
    <section className="md:px-6 px-2 pt-30 overflow-hidden">
      {/* CONTENT */}
      <div className="z-10 mx-auto max-w-6xl flex-col items-center">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl leading-[1.05] tracking-tighter text-[#181229] md:text-5xl font-semibold">
            Hiring and networking{" "}
            <br className="md:flex hidden" />
            that feels human.
          </h1>

          <p className="mx-auto md:mt-8 mt-4 lg:max-w-2xl text-[16px] leading-relaxed text-neutral-600 lg:text-xl md:text-[18px]">
            Liftoff combines AI and human insight to help people find the work
            and people that truly fit.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 -space-y-8 md:space-y-0 max-w-6xl w-full mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="flex md:flex-col items-center md:text-center group"
            >
              {/* Icon Container */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
                className="relative flex items-center justify-center md:w-45 md:h-45 w-30 h-30 mb-6"
              >
                {/* Glow */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 4 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={feature.bgImage}
                    alt=""
                    fill
                    className="object-contain opacity-90"
                  />
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10"
                >
                  {feature.icon}
                </motion.div>
              </motion.div>

              {/* Text */}
              <div>
                <h3 className="md:text-2xl text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-neutral-600 text-[15px] leading-relaxed max-w-[280px]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;