import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GoogleAuthButton } from '@/components/shared/auth/goggle-button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
      
      {/* LEFT COLUMN: Login Form */}
      <div className="w-full lg:w-[65%] min-h-screen flex flex-col justify-center p-8 md:p-12 lg:p-16 relative">
        
        {/* Logo */}
        <Link
          href="/connection"
          className="absolute top-8 cursor-pointer left-8 md:top-12 md:left-12 lg:top-16 lg:left-16 text-2xl font-black tracking-tighter text-black uppercase select-none"
        >
          Liftoff
        </Link>

        {/* Card Container */}
        <div className="w-full max-w-xl mx-auto py-12 flex flex-col justify-center">
          
          <div className="lg:bg-white rounded-3xl border border-gray-100 p-2 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-8">
              Log in to Liftoff
            </h1>

            <GoogleAuthButton
              text="Continue with Google"
            />

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>

              <span className="relative px-3 mx-2 text-xs font-semibold tracking-wider uppercase bg-white">
                OR
              </span>
            </div>

            {/* Email Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your personal email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A1513] text-white py-3.5 rounded-md font-medium text-sm hover:bg-black transition-colors duration-200 shadow-sm"
              >
                Continue with email
              </button>
            </form>
          </div>

          {/* Mobile Footer Link */}
          <div className="pt-4 mt-8 lg:hidden flex items-center justify-center">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold border-b border-black/20 pb-0.5 hover:border-black transition-colors duration-200"
            >
              Learn more about Liftoff
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-[35%] relative overflow-hidden lg:flex hidden flex-col justify-center px-8 py-16 md:p-10 lg:p-14 text-white bg-gradient-to-br from-[#E26841] via-[#9B77E3] to-[#8CA3F7]">
        
        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />

        <div className="relative max-w-4xl z-10 space-y-8">
          
          <h2 className="text-[24px] font-semibold tracking-tight leading-tight">
            Liftoff connects incredible people to the best opportunities.
          </h2>

          {/* Feature List */}
          <ul className="space-y-5 text-[15px] sm:text-base font-medium text-white/90">
            <li className="flex items-start gap-3">
              <span className="text-xl leading-none">🔥</span>
              <span>See breakout opportunities from people you trust</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl leading-none">✌️</span>
              <span>Recommend great people</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl leading-none">🤝</span>
              <span>Connect people and be connected</span>
            </li>
          </ul>

          {/* Footer Link */}
          <div className="pt-4">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold border-b border-white/40 pb-0.5 hover:border-white transition-colors duration-200"
            >
              Learn more about Liftoff
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}