"use client";

import { CurveConnector } from "@/components/landing/curve";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const hiringSteps = [
  {
    id: 1,
    title:
      "Create your search, add a Match Incentive, and get a shareable link to collect suggestions.",
    description:
      "Searches shared through Liftoff travel further to 2nd and 3rd degree connections.",
    image: "/card2.webp",
    align: "right",
  },
  {
    id: 2,
    title:
      "Share your search to top connectors in the Liftoff network.",
    description: null,
    image: "/card3.webp",
    align: "left",
  },
  {
    id: 3,
    title: "Make the first of many remarkable hires enabled by Liftoff.",
    description: null,
    image: "/card5.webp",
    align: "left",
  },
  {
    id: 4,
    title: "Make the first of many remarkable hires enabled by Liftoff.",
    description:
      "Request intros easily and hire smarter, faster, and for a fraction of the cost.",
    image: "/card5.webp",
    align: "right",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-7xl md:px-6 px-4 md:py-20 py-14">
        
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto lg:mb-28 md:mb-16 mb-8 max-w-3xl text-center"
        >
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold tracking-tighter text-white">
            How hiring works on Liftoff
          </h2>

          <p className="mt-6 text-lg leading-relaxed lg:flex hidden text-neutral-300">
            Liftoff connects incredible people to opportunities. It's for people
            hiring, connecting others, or even job-seeking themselves.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="relative">
          {hiringSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* row */}
              <div
                className={`lg:mb-30 mb-15 flex items-center flex-col lg:gap-16 gap-4 lg:flex-row ${
                  step.align === "left" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* text */}
                <motion.div
                  initial={{ opacity: 0, x: step.align === "left" ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="mx-auto max-w-[400px]">
                    {/* number */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border lg:flex hidden border-[#E5E1D8] bg-white text-sm font-semibold text-[#181229] shadow-sm"
                    >
                      {step.id}
                    </motion.div>

                    <h3 className="lg:text-3xl text-[19px] font-semibold leading-tight tracking-tighter text-white text-center lg:text-left">
                      {step.title}
                    </h3>

                    {step.description && (
                      <p className="mt-6 lg:flex hidden text-lg leading-relaxed text-white/80">
                        {step.description}
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex w-full justify-center lg:w-1/2"
                >
                  <div className="relative w-full lg:max-w-[520px] md:max-w-[600px] md:h-[300px] lg:h-full max-w-[420px] overflow-hidden rounded-[32px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                    <div className="relative lg:aspect-[1.4/1] aspect-[1.6/1]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}