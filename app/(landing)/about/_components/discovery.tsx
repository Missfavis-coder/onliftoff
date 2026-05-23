"use client";

import React from "react";
import { motion } from "framer-motion";

interface JobPosting {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  teamPhotos: string[];
  postedBy: string;
  location: string;
  incentive: string;
}

const jobData: JobPosting[] = [
  {
    id: "1",
    title: "GTM Lead",
    company: "Liftoff",
    companyLogo: "L",
    teamPhotos: [
      "/user10.png",
      "/user11.png",
    ],
    postedBy: "Eleanor Morgan & Emma Frane",
    location: "New York, NY",
    incentive: "$10,000 Match Incentive",
  },
  {
    id: "2",
    title: "Product Engineer",
    company: "Liftoff",
    companyLogo: "L",
    teamPhotos: [
      "/user7.png",
      "/user4.png",
    ],
    postedBy: "Jeremy Chen & Eleanor Morgan",
    location: "New York, NY",
    incentive: "$10,000 Match Incentive",
  },
  {
    id: "3",
    title: "AI/ML Engineer",
    company: "Liftoff",
    companyLogo: "L",
    teamPhotos: [
      "/user9.png",
      "/user11.png",
    ],
    postedBy: "Jeremy Chen & Eleanor Morgan",
    location: "New York, NY",
    incentive: "$10,000 Match Incentive",
  },
  {
    id: "4",
    title: "Design Lead / Principal Designer",
    company: "Liftoff",
    companyLogo: "L",
    teamPhotos: [
      "user8.png",
    ],
    postedBy: "Eleanor Morgan",
    location: "New York, NY",
    incentive: "$10,000 Match Incentive",
  },
  {
    id: "5",
    title: "Customer Success Lead",
    company: "Liftoff",
    companyLogo: "L",
    teamPhotos: [
      "/user9.png",
    ],
    postedBy: "Eleanor Morgan",
    location: "New York, NY",
    incentive: "$5,000 Match Incentive",
  },
];

export default function Discovery() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0A0A0C] font-sans antialiased px-4 py-16 sm:py-24">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl tracking-tighter font-semibold text-[#0F0F14] mb-4">
          Find your fit with us.
        </h1>
        <p className="text-[16px] text-[#707078] max-w-xl mx-auto leading-relaxed">
          We're a passionate and driven team that's building a better future for hiring and networking.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {jobData.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white border border-[#EBEAE6] rounded-xl p-6 sm:p-7 flex md:flex-row flex-col justify-between items-start relative shadow-[4px]"
          >
            {/* LEFT */}
            <div className="flex flex-col justify-between">
              
              {/* TITLE */}
              <h2 className="text-xl sm:text-3xl font-serif text-[#0F0F14] font-bold tracking-tight leading-tight mb-4">
                {job.title}
              </h2>

              {/* COMPANY */}
              <div className="flex items-center gap-1.5 text-sm text-[#52525B] font-medium mb-5">
                <span className="text-[#A1A1AA]">at</span>
                <div className="flex items-center gap-1 bg-black text-white px-1.5 py-0.5 rounded text-[11px] font-bold tracking-wider scale-90 origin-left">
                  <span className="text-[9px] bg-white text-black rounded-sm w-4 h-4 flex items-center justify-center font-black">
                    {job.companyLogo}
                  </span>
                  {job.company.toUpperCase()}
                </div>
              </div>

              {/* META */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] sm:text-[15px] text-[#52525B]">
                <span className="text-[#A1A1AA]">from</span>

                <div className="flex -space-x-1.5 items-center mr-1">
                  {job.teamPhotos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo}
                      className="w-4 h-4 rounded-full border border-white object-cover"
                    />
                  ))}
                </div>

                <span className="font-medium text-[#27272A]">
                  {job.postedBy}
                </span>

                <span className="text-[#D4D4D8] text-xs">•</span>

                <span>{job.location}</span>

                <span className="text-[#D4D4D8] text-xs">•</span>

                <span className="font-medium">{job.incentive}</span>
              </div>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white bg-[#181229] text-xs font-medium px-6 py-2 rounded-[4px] flex items-center gap-1.5 shrink-0 mt-6 md:mt-0"
            >
              <span className="text-[10px]">↗</span> View
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}