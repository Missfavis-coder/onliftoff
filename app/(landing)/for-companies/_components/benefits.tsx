"use client";

import { Heart, Sparkles, Smile } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

function Benefits() {
  const features = [
    {
      title: "Only pay for results",
      description: "No upfront fees, no risk",
      icon: <Sparkles className="w-8 h-8 text-black" strokeWidth={1.5} />,
      bgImage: "/blur8.png",
    },
    {
      title: "Quality over quantity",
      description:
        "Five perfect fits through trusted people, versus 500+ resumes.",
      icon: <Heart className="w-8 h-8 text-black" strokeWidth={1.5} />,
      bgImage: "/blur3.png",
    },
    {
      title: "Access hidden gems",
      description:
        "Connect with the best candidates, not just the available ones.",
      icon: <Smile className="w-8 h-8 text-black" strokeWidth={1.5} />,
      bgImage: "/bg3.png",
    },
  ];

  return (
    <section className="md:px-6 px-2 md:pt-30 py-10 bg-[#F9F7F2] md:pb-20">
      {/* CONTENT */}
      <div className="z-10 mx-auto max-w-6xl flex-col items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl leading-[1.05] tracking-tight text-[#181229] lg:text-5xl font-bold">
            Quality without the noise
          </h1>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 max-w-6xl w-full lg:mt-10 mt-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="flex lg:flex-col items-center lg:text-center group"
            >
              {/* Icon Container with Glow Background */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="relative flex items-center justify-center lg:w-45 lg:h-45 md:w-35 md:h-35 w-30 h-30 lg:mb-6"
              >
                {/* Glow Assets */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 2 }}
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
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  {feature.icon}
                </motion.div>
              </motion.div>

              <div>
                {/* Text Content */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="lg:text-xl md:text-xl text-[18px] font-semibold text-gray-900 mb-3 tracking-tight"
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-500 leading-relaxed max-w-[280px]"
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;