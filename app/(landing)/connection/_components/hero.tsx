"use client"
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LiftoffLanding() {
    const router = useRouter()
  return (
    <div className="relative  w-full font-sans text-white overflow-x-hidden selection:bg-white/20">
      {/* Dynamic Mesh Gradient Background */}
      <div 
        className="absolute inset-0 -z-10 w-full h-full bg-[#93c5fd]" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 40%, rgba(255, 120, 70, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 15% 75%, rgba(249, 115, 22, 0.7) 0%, transparent 45%),
            radial-gradient(circle at 45% 65%, rgba(147, 100, 245, 0.85) 0%, transparent 55%),
            radial-gradient(circle at 75% 30%, rgba(165, 200, 255, 1) 0%, transparent 60%),
            radial-gradient(circle at 100% 70%, rgba(180, 215, 255, 1) 0%, transparent 50%),
            linear-gradient(135deg, #ff9e7a 0%, #b3c5ff 50%, #cce0ff 100%)
          `
        }}
      />

      {/* Header / Navbar */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6 w-full max-w-7xl mx-auto">
        <div onClick={() => {router.push("/")}} className="text-xl md:text-2xl cursor-pointer font-extrabold tracking-tight uppercase text-white">
          Liftoff
        </div>
        <Link 
          href="/login" 
          className="bg-white text-black font-medium px-5 py-2 rounded-md text-sm hover:bg-white/90 transition-colors"
        >
          Log in
        </Link>
      </header>

      {/* Main Content Container */}
      <main className=" flex flex-col  px-4 md:px-16 py-12 w-full max-w-6xl mx-auto z-10 ">
        
        {/* Toggle Switch Tabs */}
        <div className="inline-flex items-center bg-white rounded-full p-1 w-fit mb-8 text-sm">
          <button onClick={()=>{router.push("/connection")}}  className="bg-black text-white px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all">
            Connect using Liftoff
          </button>
          <button onClick={()=>{router.push("/hiring")}} className="bg-transparent text-gray-800 hover:text-black px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all">
            Hire using Liftoff
          </button>
        </div>

        {/* Hero Section */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-3xl md:text-[52px] font-serif tracking-tight text-white leading-[1.1] font-medium">
            Connect using Liftoff
          </h1>
          
          <h2 className="text-[16px] md:text-[18px] font-normal tracking-wide ">
            Full access to Liftoff is highly curated.
          </h2>

          {/* Feature List */}
          <ul className="space-y-4 pt-4 text-white/85 text-sm md:text-base font-normal tracking-wide max-w-xl">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 pt-0.5">🔥</span>
              <span>See breakout opportunities and talent from people you trust</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 pt-0.5">✌️</span>
              <span>Recommend great people</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 pt-0.5">🤝</span>
              <span>Connect people and be connected</span>
            </li>
          </ul>

          {/* Action Callouts */}
          <div className="pt-8 space-y-6">
            <button  onClick={()=>{router.push("/connector-waitlist")}} className="inline-flex items-center gap-2 bg-black/90 hover:bg-black text-white px-6 py-3 rounded-md text-sm font-semibold border border-white/10 shadow-lg tracking-wide group transition-all">
              Request access 
              <span className="transform group-hover:translate-x-1 transition-transform"><ArrowRight size={16}/></span>
            </button>
            
            <div className="text-xs md:text-sm text-white/70">
              Already signed up?{' '}
              <Link href="/login" className="underline underline-offset-4 font-medium hover:text-white transition-colors">
                Log in here
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}