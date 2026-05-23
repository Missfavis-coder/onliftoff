"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CurveConnector } from "./curve";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const connectingSteps = [
  {
    id: 1,
    title: "Build your private network and profile.",
    description:
      "Build your private roster of the best people you know, and signal your interests.",
    image: "/card1.png",
    align: "right",
    button: null,
  },
  {
    id: 2,
    title:
      "Receive role searches from your network and from Liftoff's.",
    description:
      "Suggest people who might be a fit, or share with others.",
    image: "/card4.png ",
    align: "left",
    button: null,
  },
  {
    id: 3,
    title: "Share recommended people with your network.",
    description:
      "Share people discreetly and facilitate connections instantly.",
    image: "/card4.png",
    align: "left",
    button: null,
  },
  {
    id: 4,
    title:
      "Build relationships with people hiring that grow into future opportunities.",
    description:
      "Get intro'd to the right teams through people you actually trust.",
    image: "/card5.webp",
    align: "right",
    button: "Request Access",
  },
];

const hiringSteps = [
  {
    id: 1,
    title:
      "Create your search, add a Match Incentive, and get a shareable link to collect suggestions.",
    description:
      "Searches shared through Liftoff travel further to 2nd and 3rd degree connections.",
    image: "/card2.webp",
    align: "right",
    button: null,
  },
  {
    id: 2,
    title:
      "Share your search link with your network as broadly or discreetly as you’d like.",
    description:
      "Your search gets shared through highly curated professional circles.",
    image: "/card1.png",
    align: "left",
    button: null,
  },
  {
    id: 3,
    title: "Share your search to top connectors in the Liftoff network.",
    description:
      "Get introduced to exceptional people through mutual trust.",
    image: "/card4.png",
    align: "left",
    button: null,
  },
  {
    id: 4,
    title: "Make the first of many remarkable hires enabled by Liftoff.",
    description:
      "Request intros easily and hire smarter, faster, and for a fraction of the cost.",
    image: "/card4.png",
    align: "right",
    button: "Request Access",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("connecting");

  const router = useRouter();

  const steps =
    activeTab === "connecting"
      ? connectingSteps
      : hiringSteps;

  return (
    <motion.section
      layout
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden md:pt-32 md:pb-10 md:mb-20 py-10 md:mt-18 ${
        activeTab === "hiring"
          ? "bg-[#181229] border border-[#181229]"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-7xl md:px-6 px-4">
        
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto md:mb-28 mb-12 max-w-3xl text-center"
        >
          <motion.h2
            layout
            className={`md:text-5xl text-3xl font-bold tracking-tight ${
              activeTab === "hiring"
                ? "text-white"
                : "text-[#1A1A1A]"
            }`}
          >
            How Liftoff works
          </motion.h2>

          <motion.p
            layout
            className={`mt-6 text-lg md:flex hidden leading-relaxed ${
              activeTab === "hiring"
                ? "text-neutral-300"
                : "text-[#1A1A1A]"
            }`}
          >
            Liftoff connects incredible people to opportunities.
            It&apos;s for people hiring, connecting others, or even
            job-seeking themselves.
          </motion.p>

          {/* TOGGLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <div className="flex rounded-full border border-gray-200 bg-white p-3 shadow-sm gap-4">
              
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveTab("connecting")}
                className={`rounded-full px-6 py-4 text-sm font-medium transition-all duration-300 tracking-wide ${
                  activeTab === "connecting"
                    ? "bg-[#181229] text-white"
                    : "text-gray-500"
                }`}
              >
                For connecting
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveTab("hiring")}
                className={`rounded-full px-6 py-4 text-sm font-medium transition-all duration-300 tracking-wide ${
                  activeTab === "hiring"
                    ? "bg-[#181229] text-white"
                    : "text-gray-500"
                }`}
              >
                For hiring
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* TIMELINE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                {/* ROW */}
                <div
                  className={`md:mb-15 mb-8 flex flex-col gap-6 md:gap-15 md:flex-row ${
                    step.align === "left"
                      ? "md:flex-row-reverse"
                      : ""
                  }`}
                >
                  
                  {/* TEXT */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: step.align === "left" ? 60 : -60,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                    }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                  >
                    <div className="mx-auto max-w-md">
                      
                      {/* NUMBER */}
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 4,
                        }}
                        className="
                          mb-6
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#E5E1D8]
                          bg-white
                          text-sm
                          font-semibold
                          text-[#1A1A1A]
                          shadow-sm
                          md:flex hidden
                        "
                      >
                        {step.id}
                      </motion.div>

                      <h3
                        className={`
                          lg:text-4xl md:text-3xl text-[19px]
                          font-semibold
                          leading-tight
                          tracking-tight
                          text-center
                          md:text-left
                          ${
                            activeTab === "hiring"
                              ? "text-white"
                              : "text-[#1A1A1A]"
                          }
                        `}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`
                          mt-6 md:flex hidden
                          text-lg
                          leading-relaxed
                          ${
                            activeTab === "hiring"
                              ? "text-neutral-300"
                              : "text-[#1A1A1A]"
                          }
                        `}
                      >
                        {step.description}
                      </p>

                      {step.button && (
                        <motion.button
                          whileHover={{
                            scale: 1.03,
                            y: -2,
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            router.push("/connector-waitlist");
                          }}
                          className={`md:w-[200px] rounded-md py-3 px-6 hover:opacity-90 transition mt-3 w-full ${
                            activeTab === "hiring"
                              ? "bg-white text-[#1a1a1a]"
                              : "bg-[#181229] text-white"
                          }`}
                        >
                          {step.button}
                        </motion.button>
                      )}
                    </div>
                  </motion.div>

                  {/* IMAGE */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: step.align === "left" ? -60 : 60,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    className="flex w-full justify-center md:w-1/2"
                  >
                    <div
                      className="
                        relative
                        w-full
                        md:max-w-[520px]
                        max-w-[450px]
                        overflow-hidden
                        rounded-[32px]
                      "
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.35 }}
                        className="relative md:aspect-[1.4/1] aspect-[1.3/1]"
                      >
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}