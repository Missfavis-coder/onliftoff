"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="w-full   md:py-6 pb-16 lg:px-10">
     
      <div 
        className="relative w-full max-w-6xl mx-auto min-h-[400px] lg:rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-8 lg:p-20 "
        style={{
          backgroundImage: `url('/bg5.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tighter font-semibold">
            Access exceptional <br className='md:flex hidden' /> 
            talent with Liftoff.
          </h1>

          {/* Social Proof / Trusted By */}
          <div className="md:mt-10 mt-4 flex flex-col items-center justify-center gap-4 text-white">
            <div className="flex gap-2">
              {/* Replace with your actual icon components or SVGs */}
              <div className="w-9 h-9 rounded-md bg-yellow-400 flex items-center justify-center text-xs">🍋</div>
              <div className="w-9 h-9 rounded-md bg-indigo-500 flex items-center justify-center text-xs">☀️</div>
              <div className="w-9 h-9 rounded-md bg-orange-500 flex items-center justify-center text-xs">📖</div>
            </div>
            <p className=" text-[17px] font-medium text-neutral-200">
              Trusted by fast-growing teams like Ramp, <br className='md:hidden flex'/> Loom, and Substack
            </p>
          </div>

          {/* Call to Action Button */}
          <button onClick={()=>{router.push("/for-companies")}} className="mt-12 bg-white  md:px-8 px-2 py-5 rounded-md lg:text-lg md:text-[16px] text-sm font-semibold hover:bg-opacity-90 tracking-tight transition-all duration-200  w-full md:w-[400px]">
            Learn more about using Liftoff to hire
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;