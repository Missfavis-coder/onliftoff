"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NetworkHero() {
  return (
    <div className="absolute inset-0 z-60 overflow-hidden pointer-events-none pb-50">

      {/* BACKGROUND GLOWS */}
      <div className="absolute md:top-[20%]  top-18 md:-left-[18%]   -left-10 md:w-[400px] md:w-[300px] h-44 w-44 lg:h-[400px] md:h-[300px] rounded-full bg-[#988c47] lg:blur-3xl blur-xl opacity-90 z-20" />

      <div className="absolute lg:top-1/2 top-38 lg:left-1/2 md:hidden left-[50%] -translate-x-1/2 -translate-y-1/2 lg:w-[300px] lg:h-[300px] md:h-[300px] md:w-[300px] h-40 w-40 rounded-full bg-[#a3a0ff] lg:blur-3xl blur-xl opacity-90 -z-12" />

      <div className="absolute lg:bottom-[20%]  top-18 lg:-right-[19%] -right-12 md:-right-[22%] lg:w-[400px] lg:h-[400px] md:h-[300px] md:w-[300px] h-40 w-40 rounded-full bg-[#92bdeb] lg:blur-3xl blur-xl" />

<div className="relative md:top-[54%] top-[32%] max-w-7xl mx-auto">
{/* SVG CONNECTORS */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-60">

  <svg
    className="
      absolute
      lg:top-[45%]
      md:top-[40%]
      top-[26%]
      -translate-y-1/2
      w-[92%]
      md:w-[100%]
      lg:w-[68%]
      xl:w-[60%]
      max-w-[1050px]
      opacity-40
    "
    viewBox="0 0 1200 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <linearGradient id="lineGradient" x1="0" y1="0" x2="1200" y2="0">
        <stop offset="0%" stopColor="#FFF4C7" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#B8B5FF" stopOpacity="1" />
        <stop offset="100%" stopColor="#DDEBFF" stopOpacity="0.6" />
      </linearGradient>
    </defs>

    {/* LEFT → CENTER */}
    <motion.path
      d="M100 260 C250 120 430 390 560 250"
      stroke="url(#lineGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      filter="url(#glow)"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2 }}
    />

    {/* CENTER → RIGHT */}
    <motion.path
      d="M640 250 C790 130 930 420 1100 270"
      stroke="url(#lineGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      filter="url(#glow)"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
    />
  </svg>
</div>
      {/* NODES */}
      <div className=" z-100">

        {/* CENTER CARD */}
        <div className="absolute lg:top-[60%] md:top-[52%] top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-60">
          <div className="bg-white/90 backdrop-blur-xl lg:p-6 p-2 rounded-md shadow-[0_0_50px_rgba(163,160,255,0.3)] flex flex-col items-center text-center  lg:h-50 lg:w-47 md:w-40 md:h-36">

            <div className="md:w-16 md:h-16 lg:w-26 lg:h-26  h-10 rounded-full overflow-hidden lg:mb-3 mb-2 border-[4px] border-[#b7b4ff]">
              <img
                src="/user1.png"
                alt="Hiring"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-black font-bold md:text-xs text-[0.1px] tracking-tighter">
              You&apos;re hiring
            </p>

            <p className="text-gray-400 md:mt-1 flex items-center gap-1 md:text-[8px] text-[0.1rem]">
              at {""}
              <span className="bg-[#6366f1]  rounded-md md:text-[8px] text-[2px] text-white md:flex hidden">
                ▲
              </span>
              Acme Inc.
            </p>
          </div>
        </div>

        {/* AVATAR 1 */}
        <AvatarNode
          position="lg:top-[50%] md:top-[56%] z-20 top-[38%] md:left-[5%] lg:left-[8%] left-[8%] z-1000"
          src="/user5.png"
          delay={0}
          badge="👋"
          size="lg:w-12 lg:h-12 md:w-10 md:h-10 w5 h-5"
          ring=""
          glow
          glowColor=""
          glowSize="scale-[1.8]"
          containerClass=""
          imageClass="scale-110"
          badgeClass="bg-white"
        />

        {/* AVATAR 2 */}
        <AvatarNode
          position="md:top-[50%] lg:top-[52%] z-20 top-[32%] md:left-[17%] lg:left-[20%] left-[20%] z-1000"
          src="/user5.png"
          delay={1}

          size="lg:w-18 md:w-12 md:h-12 lg:h-18 w-8 h-8"

          ring="border border-white/40"

          glow
          glowColor="bg-white/20 "
          glowSize="md:scale-[1.8] scale-[1.6]"

          orbit
          orbitColor="lg:bg-[#a3a0ff]/20 lg:blur-[6px] bg-[#a3a0ff]/40 blur-[4px] "
          orbitSize="lg:w-[280px] lg:h-[280px] md:w-[175px] md:h-[175px] w-[90px] h-[90px] "

          orbitImages={[
            "/user3.png",
            "/user4.png",
          ]}

          containerClass=""
        />

        {/* AVATAR 3 */}
        <AvatarNode
          position="lg:top-[66%] md:top-[60%] top-[40%] lg:right-[22%] md:right-[24%] right-[26%] z-1000"
          src="/user2.png"
          delay={0.5}
          size="lg:w-18 md:w-12 md:h-12 lg:h-18 w-8 h-8"
          ring="border border-white/40"
          glow
          glowColor="bg-white/30 -z-20"
          orbit
          orbitColor="lg:bg-[#a3a0ff]/20 lg:blur-[6px] bg-[#a3a0ff]/40 blur-[4px] "
          orbitSize="lg:w-[280px] lg:h-[280px] md:w-[175px] md:h-[175px] w-[90px] h-[90px] "

          orbitImages={[
            "/user3.png",
            "/user4.png",
          ]}
          glowSize="md:scale-[1.8] scale-[1.6]"
          containerClass="opacity-100"
        />

        {/* AVATAR 4 */}
        <AvatarNode
          position="lg:top-[70%] md:top-[61%] top-[38%] lg:right-[12%] md:right-[10%] right-[10%] z-1000"
          src="/user4.png"
          delay={1.5}
          badge="👋"
          size="lg:w-12 lg:h-12 md:w-10 md:h-10 w-5 h-5"
          ring=""
          glow
          glowColor=""
          glowSize=""
          badgeClass=""
          containerClass=""
        />
      </div>
</div>

    </div>
  );
}

function AvatarNode({
  position,
  src,
  glow,
  glowColor = "bg-white/5",
  glowSize = "scale-[1.8]",
  badge,
  delay,

  orbit = false,
  orbitColor = "border-[#b7b4ff]/40",
  orbitSize = "w-[180px] h-[180px]",
  orbitImages = [],

  size = "md:w-12 md:h-12 w-10 h-10",
  ring = "border-2 border-white/20",
  containerClass = "",
  imageClass = "",
  badgeClass = "",
}: any) {
  return (
    <motion.div
      className={`absolute ${position}`}
      initial={{ y: 0 }}

      
    >
      <div className={`relative flex items-center justify-center ${containerClass}`}>

        {/* ORBIT */}
        {orbit && (
          <motion.div
            
            className={`absolute opacity-70 rounded-full border ${orbitColor} ${orbitSize}`}
          >

            {/* ORBIT IMAGE TOP */}
            {orbitImages[0] && (
              <div className="absolute md:-top-8 -top-6 left-1/2 -translate-x-1/2 lg:w-12 lg:h-12 w-7 h-7 rounded-full overflow-hidden  opacity-90 blur-[]  ">
                <img
                  src={orbitImages[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* ORBIT IMAGE BOTTOM */}
            {orbitImages[1] && (
              <div className="absolute -bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 w-7 h-7 lg:w-12 lg:h-14 rounded-full overflow-hidden opacity-90 blur-[] ">
                <img
                  src={orbitImages[1]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </motion.div>
        )}

        {/* GLOW */}
        {glow && (
          <div
            className={`
              absolute inset-0 rounded-full  
              ${glowColor}
              ${glowSize}
            `}
          />
        )}

        {/* AVATAR */}
        <div
          className={`relative ${size} rounded-full overflow-hidden bg-[#181229] ${ring}`}
        >
          <img
            src={src}
            alt="user"
            className={`w-full h-full object-cover ${imageClass}`}
          />
        </div>

        {/* BADGE */}
        {badge && (
          <div
            className={`absolute md:-top-1 -top-4 -right-2 md:-right-2 rounded shadow-md px-1 py-0.5 text-[10px] bg-white ${badgeClass}`}
          >
            {badge}
          </div>
        )}
      </div>
    </motion.div>
  );
}