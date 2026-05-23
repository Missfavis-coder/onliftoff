import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
 
export default function ReadMore() {
  return (
    <section className="relative  flex flex-col justify-center items-center px-6 text-center overflow-hidden mb-4 pt-12">


      {/* Main Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl tracking-tighter font-semibold text-[#0F0F14] mb-4" >
        Read more about <br/> why we started Liftoff
        </h1>
<div  className='w-full h-full mt-4'>
<Image
        src="/card2.webp"
        height={400}
        width={900}
        alt=''
        className=''
        />
</div>


        <button className='primary-button mt-8'>
          <Link href="https://liftoff.substack.com/p/hiring-is-broken-and-todays-ai-tools">View on Substack</Link></button>

      </div>
    </section>
  );
}