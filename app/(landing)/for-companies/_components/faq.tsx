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
    question: "How does hiring on Liftoff work?",
    answer:
      "Liftoff allows you to leverage your network – and your network’s network – to find the best person for the job. It enables you to create and share a role search with your network, and facilitates your extended network in suggesting great candidates to you.You can also share your search with Liftoff's network of Top Connectors. These are leaders at top companies like OpenAI, Anthropic, Notion, Clay, and Granola who have built teams at hyper-growth companies and continue to bring their networks onto Liftoff.All of this results in you finding high quality candidates, at a fraction of the time and cost of other methods..",
  },
  {
    question: "What roles is this best for?",
    answer:
      "We really appreciate when great people recommend great people. Feel free to direct them to request access to hire on Liftoff. If you're already on Liftoff, they can list you as the referrer and get priority access.",
  },
  {
    question: "What is the cost?",
    answer:
      "We really appreciate when great people recommend great people. Feel free to direct them to request access to hire on Liftoff. If you're already on Liftoff, they can list you as the referrer and get priority access.",
  },
  {
    question: "How are recruiting teams using this?",
    answer:
      "We really appreciate when great people recommend great people. Feel free to direct them to request access to hire on Liftoff. If you're already on Liftoff, they can list you as the referrer and get priority access.",
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
    <section className="w-full md:py-20 py-14 px-6 md:px-12 lg:px-24 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side - Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <h2 className="lg:text-3xl text-[28px] leading-tight sticky tracking-tighter font-semibold md:text-left text-center">
            Frequently <br className="lg:flex hidden" /> asked questions
          </h2>
        </motion.div>

        {/* Right Side - Accordion */}
        <div className="lg:w-2/3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="not-last:border-b border-black/10"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full md:py-6 py-4 flex items-center justify-between text-left group"
                >
                  <motion.span
                    animate={{
                      color: isOpen
                        ? "rgb(15 23 42)"
                        : "rgba(30,41,59,0.8)",
                    }}
                    className="lg:text-xl text-[16px] font-semibold tracking-tighter"
                  >
                    {faq.question}
                  </motion.span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-center w-6 h-6 font-light"
                  >
                    {isOpen ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </motion.span>
                </button>

                {/* Animated Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
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
                        className="lg:text-lg text-[15px] text-slate-600 leading-relaxed whitespace-pre-line pr-10 pb-8"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;