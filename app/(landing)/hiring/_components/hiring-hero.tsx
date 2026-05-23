"use client"
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HiringHero() {
  const router = useRouter();
  const AnimatedText = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex flex-wrap justify-center leading-tight">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            delay: i * 0.03,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};
  const companies = [
    { name: 'summer health', isCustomLayout: true },
    { name: 'Sydecar', isCustomLayout: false },
    { name: 'ohai.ai', isCustomLayout: false },
    { name: 'bioRender', isCustomLayout: false },
    { name: 'RESORTPASS', isCustomLayout: false },
    { name: 'Parsley Health', isCustomLayout: true },
    { name: 'Village', isCustomLayout: false },
    { name: 'BERO', isCustomLayout: false },
    { name: 'Liner', isCustomLayout: false },
  ];

  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-x-hidden selection:bg-white/20 flex flex-col justify-between">
      {/* Deep Dark Mesh Gradient Background */}
      <div 
        className="absolute inset-0 -z-10 w-full h-full bg-[#0b0813]" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 100% 50%, rgba(132, 145, 95, 0.45) 0%, transparent 50%),
            radial-gradient(circle at 80% 100%, rgba(90, 115, 142, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 35% 90%, rgba(76, 29, 149, 0.35) 0%, transparent 60%),
            radial-gradient(circle at 0% 0%, rgba(15, 12, 30, 1) 0%, transparent 50%)
          `
        }}
      />

      {/* Header / Navbar */}
      <header className="flex items-center justify-between px-6 md:px-16 py-7 w-full max-w-7xl mx-auto z-10">
        <div onClick={()=>{router.push("/")}} className="text-2xl font-black tracking-tighter uppercase text-white font-sans cursor-pointer">
          Liftoff
        </div>
        <Link 
          href="/login" 
          className="bg-white text-black font-medium px-5 py-2 rounded-md text-sm hover:bg-white/90 transition-all shadow-sm"
        >
          Log in
        </Link>
      </header>

      {/* Main Content Container */}
      <main className=" flex flex-col lg:flex-row lg:items-center justify-between px-4 lg:px-16 md:px-4 py-12  lg:max-w-8xl mx-auto z-10 gap-20">
        
        {/* Left Side: Content Column */}
        <div className="max-w-xl w-full space-y-6">
          
          {/* Toggle Switch Tabs (Hire Active) */}
          <div className="inline-flex items-center bg-white rounded-full p-1 w-fit mb-8 shadow-sm">
            <button onClick={()=>{router.push("/connection")}} className="bg-transparent text-[#444444] hover:text-black px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all">
              Connect using Liftoff
            </button>
            <button onClick={()=>{router.push("/hiring")}}  className="bg-[#1c1917] text-white px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all">
              Hire using Liftoff
            </button>
          </div>

          {/* Hero Section */}
          <h1 className="text-3xl md:text-[52px] font-serif tracking-tight text-white leading-[1.1] font-medium">
            Hire using Liftoff
          </h1>
          
          <h2 className="text-[16px] md:text-[18px] font-normal tracking-wide pt-1">
            Find exceptional talent through trusted recommendations.
          </h2>

          {/* Feature List */}
          <ul className="space-y-4 pt-4 text-sm md:text-[15px] font-normal tracking-wide max-w-lg">
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 text-base pt-0.5">✨</span>
              <span>Five perfect fits through trusted people vs. 500 resumes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 text-base pt-0.5">🙌</span>
              <span>No upfront fees, no risk</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 text-base pt-0.5">💜</span>
              <span>Access the best candidates who aren&apos;t yet &ldquo;looking&rdquo;</span>
            </li>
          </ul>

          {/* Action Callouts */}
          <div className="pt-6 space-y-5">
            <button onClick={()=>{router.push("/connector-waitlist")}} className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black px-6 py-3 rounded-md text-sm font-semibold shadow-md tracking-wide group transition-all">
              Request access 
              <span className="text-xs transform group-hover:translate-x-0.5 transition-transform"><ArrowRight size={16}/></span>
            </button>
            
            <div className="text-xs md:text-sm text-white/60">
              Already signed up?{' '}
              <Link href="/login" className="underline underline-offset-4 font-normal hover:text-white/80 transition-colors">
                Log in here
              </Link>
            </div>
          </div>
        </div>

{/* Right Side: Grid Showcase Column */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="md:w-full lg:max-w-md space-y-4"
>
  <p className="text-xs md:text-sm text-white/30 font-medium tracking-wide text-left lg:text-left">
    Join incredible companies that have used Liftoff to hire
  </p>

  <div className="grid grid-cols-3 lg:gap-3 gap-2 space-y-2">
    {companies.map((company, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.4,
          delay: index * 0.05,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.05 }}
        className="md:aspect-[4/3] md:w-[130px] w-[110px] h-[80px] rounded-xl flex flex-col items-center justify-center p-3 text-center bg-white/20 border border-white/[0.06] backdrop-blur-md transition-all hover:bg-white/[0.07]"
      >
        {company.name === "summer health" ? (
          <div className="text-white/80 font-sans tracking-tight leading-none text-xs md:text-sm font-semibold">
            summer <br />
            <span className="font-light text-[10px] opacity-70">
              health 🌿
            </span>
          </div>
        ) : company.name === "Parsley Health" ? (
          <div className="text-white/80 font-serif tracking-tight leading-none text-xs md:text-sm">
            Parsley <br />
            <span className="text-[10px] font-sans opacity-70">
              Health
            </span>
          </div>
        ) : company.name === "Sydecar" ? (
          <span className="text-white/80 font-sans font-bold tracking-tight text-xs md:text-sm">
            ⚡ Sydecar
          </span>
        ) : company.name === "bioRender" ? (
          <span className="text-white/80 font-sans font-medium text-xs md:text-sm">
            bio<span className="font-bold">Render</span>
          </span>
        ) : company.name === "RESORTPASS" ? (
          <span className="text-white/70 font-sans tracking-widest text-[9px] font-bold">
            RESORTPASS
          </span>
        ) : company.name === "BERO" ? (
          <span className="text-white/80 font-sans tracking-wider text-xs md:text-sm font-semibold">
            BERO
          </span>
        ) : company.name === "Liner" ? (
          <span className="text-white/80 font-sans text-xs md:text-sm font-medium">
            ✨ Liner
          </span>
        ) : (
          <span className="text-white/80 font-sans text-xs md:text-sm tracking-wide">
            {company.name}
          </span>
        )}
      </motion.div>
    ))}
  </div>
</motion.div>

      </main>

      {/* Footer spacer */}
      <div className="h-12 w-full"></div>
    </div>
  );
}