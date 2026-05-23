"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";

const testimonials = [
  {
    quote:
      "We made an incredible hire for a fraction of the cost and in a fraction of the time.",
    name: "Julie Bain-Kim",
    role: "VP Marketing at Atticus",
  },
  {
    quote:
      "I've used Liftoff for 3 roles. I can't imagine going back to hiring without having access to this incredible tool.",
    name: "Carter Cleveland",
    role: "Founder of Artsy",
  },
  {
    quote:
      "What makes Liftoff unique is that there’s a direct connection with the hiring manager and the candidate.",
    name: "Christina Nguyen White",
    role: "VP of Design at Loom",
  },
  {
    quote:
      "We found candidates we never would have discovered through traditional hiring channels.",
    name: "Daniel Lee",
    role: "CEO at Northstar",
  },
  {
    quote:
      "The quality of talent here is just on another level entirely.",
    name: "Amanda Cruz",
    role: "Head of Talent at Verve",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const looped = [...testimonials, ...testimonials];

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };
  
  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  // MOBILE SWIPE
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };
  useEffect(() => {
    if (index === testimonials.length) {
      setTimeout(() => {
        setIndex(0);
      }, 300);
    }
  
    if (index < 0) {
      setTimeout(() => {
        setIndex(testimonials.length - 1);
      }, 300);
    }
  }, [index]);

  return (
    <section className="relative overflow-hidden lg:py-6 pb-16 pt-6 mt-8">
      <div className="relative mx-auto max-w-[2000px] mb-4">
        {/* DESKTOP BUTTONS */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#F3EFEA] text-black shadow-lg transition hover:scale-105 lg:flex"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#F3EFEA] text-black shadow-lg transition hover:scale-105 lg:flex"
        >
          <ChevronRight size={20} />
        </button>

        {/* MOBILE (swipe) */}
        <div
          className="overflow-hidden px-4 lg:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex gap-6 px-4"
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            {looped.map((item) => (
              <div key={item.name}>
                <div className="flex w-[300px] flex-col rounded-[28px] bg-[#F3EFEA] px-6 py-10 text-center shadow-xl min-h-[250px]">
                  <p className="md:text-lg text-[15px] font-serif text-[#241B33]">
                    “{item.quote}”
                  </p>

                  <div className="mt-6">
                    <h3 className="font-semibold text-[#241B33]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#6E6678]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DESKTOP (NOW DRAGGABLE 👇) */}
        <div className="hidden lg:block overflow-hidden px-0">
          <motion.div
            className="flex gap-5 cursor-grab active:cursor-grabbing"
            drag="x"
            dragElastic={0.15}
            dragConstraints={{ left: -800, right: 0 }}
            onDragEnd={(_, info) => {
              const offset = info.offset.x;

              if (offset < -80) nextSlide();
              if (offset > 80) prevSlide();
            }}
            animate={{
              x: `calc(-${index} * 20.333% )`,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 28,
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
              <div key={`${item.name}-${i}`} className="min-w-[20.333%]">
                <div className="flex min-h-[260px] flex-col justify-between rounded-[28px] bg-[#F3EFEA] px-8 py-10 text-center shadow-xl">
                  <p className="text-[16px] font-serif text-[#241B33]">
                    “{item.quote}”
                  </p>

                  <div>
                    <h3 className="text-[15px] font-semibold text-[#241B33]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-[15px] text-[#6E6678]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}