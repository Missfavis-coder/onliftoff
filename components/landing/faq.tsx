"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Liftoff?",
    answer:
      "Liftoff is a hiring and networking platform that helps you find an incredible fit, through people you trust.\n\nThe future of hiring is social, so we've built a product that makes it easy for you to share role opportunities and people with your network – and for your network to make the right connections happen.\n\nThis means better fits, less noise, and more warmth.",
  },
  {
    question: "Who uses Liftoff?",
    answer:
      "Liftoff users are people in tech startups who are hiring, connecting others, or even job-seeking themselves – sometimes all at the same time.\n\nWe have a community of leaders on Liftoff that we call Top Connectors. These are leaders from top companies like OpenAI, Anthropic, Seed, Clay, Granola, and NYT.",
  },
  {
    question: "I know someone who's hiring. How can I help them?",
    answer:
      "We really appreciate when great people recommend great people. Feel free to direct them to request access to hire on Liftoff. If you're already on Liftoff, they can list you as the referrer and get priority access.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full lg:py-20 pt-8 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-10 gap-4">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/3"
        >
          <h2 className="text-2xl md:text-3xl leading-tight sticky font-semibold md:text-left text-center">
            Frequently <br className="lg:flex hidden" /> asked questions
          </h2>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:w-2/3 lg:mt-0 mt-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="not-last:border-b border-black/10"
            >
              <motion.button
                whileHover={{ x: 4 }}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full md:pb-6 py-4 flex items-center justify-between text-left group"
              >
                <span className="md:text-[17px] text-[16px] font-bold transition-colors text-[#2f274a]/90">
                  {faq.question}
                </span>

                <motion.span
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center w-6 h-6 font-light text-[#2f274a] bg-[#f7f1f0] rounded-full"
                >
                  {openIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </motion.span>
              </motion.button>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="md:text-[17px] text-[16px] text-slate-600 leading-relaxed whitespace-pre-line pr-10 pb-8"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;