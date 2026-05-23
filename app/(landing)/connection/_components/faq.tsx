"use client";
import { ArrowRight, ArrowRightCircle, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

const faqData = [
  {
    question: "What is Liftoff?",
    answer: "Liftoff is a hiring and networking platform that helps you find an incredible fit, through people you trust.\n\nThe future of hiring is social, so we've built a product that makes it easy for you to share role opportunities and people with your network – and for your network to make the right connections happen.\n\nThis means better fits, less noise, and more warmth."
  },
  {
    question: "Who uses Liftoff?",
    answer: "Liftoff users are people in tech startups who are hiring, connecting others, or even job-seeking themselves – sometimes all at the same time.\n\nWe have a community of leaders on Liftoff that we call Top Connectors. These are leaders from top companies like OpenAI, Anthropic, Seed, Clay, Granola, and NYT."
  },
  {
    question: "I know someone who's hiring. How can I help them?",
    answer: "We really appreciate when great people recommend great people. Feel free to direct them to request access to hire on Liftoff. If you're already on Liftoff, they can list you as the referrer and get priority access."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

  return (
    <section className="w-full  md:py-20 py-15  px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row lg:gap-10 gap-4">
        
        {/* Left Side - Title */}
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-3xl leading-tight sticky  font-semibold text-left ">
            FAQs
          </h2>
        </div>

        {/* Right Side - Accordion */}
        <div className='md:w-2/3 md:mt-0 mt-4'>
        <div className=" ">
          {faqData.map((faq, index) => (
            <div key={index} className="not-last:border-b border-black/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full md:pb-6 py-4 flex items-center justify-between text-left group"
              >
                <span className="md:text-[17px] text-[16px] font-bold  transition-colors text-[#2f274a]/90">
                  {faq.question}
                </span>
                <span className="flex items-center justify-center w-6 h-6 font-light text-[#2f274a] bg-[#f7f1f0] rounded-full">
                  {openIndex === index ? <Minus size={16}/> : <Plus size={16}/>}
                </span>
              </button>
              
              {/* Animated Answer Container */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] pb-8' : 'max-h-0'
                }`}
              >
                <div className="md:text-[17px] text-[16px] text-slate-600 leading-relaxed whitespace-pre-line pr-10">
                  {faq.answer}
                </div>
              </div>

            </div>
          ))}
                        <div className='flex gap-2 text-sm items-center font-bold mt-8'>Learn more <ArrowRight size={16} /></div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default FAQ;