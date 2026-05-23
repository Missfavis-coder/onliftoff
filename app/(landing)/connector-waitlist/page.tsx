"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, X, Check, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FlowStep = "FORM" | "OTP" | "SUCCESS";

export default function WaitlistFlow() {
  const [step, setStep] = useState<FlowStep>("FORM");
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const activeOtpIndex = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router= useRouter();

  // Focus the first OTP input on mount
  useEffect(() => {
    if (step === "OTP") {
      inputRef.current?.focus();
    }
  }, [step]);

  // Handle OTP Input Navigation
  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newOtp = [...otp];

    // Only take last entered character
    newOtp[index] = value.substring(value.length - 1);

    setOtp(newOtp);

    if (!value) {
      if (index > 0) activeOtpIndex.current = index - 1;
    } else {
      if (index < 5) activeOtpIndex.current = index + 1;
    }

    inputRef.current?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      activeOtpIndex.current = index - 1;
      inputRef.current?.focus();
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-tr from-[#ff9e7a] via-[#bca7f7] to-[#99d7ff] font-sans antialiased selection:bg-purple-200">
      
      {/* Top Navbar Header */}
      <header className="absolute top-0 left-0 z-10 w-full px-8 py-6">
        <Link href="/" className="text-2xl cursor-pointer font-extrabold tracking-tighter uppercase drop-shadow-sm">
          Liftoff
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex min-h-screen items-center justify-center p-4 pt-20">

        {/* --- STEP 1: FORM --- */}
        {step === "FORM" && (
          <div className="w-full max-w-xl rounded-md bg-white md:p-8 p-4 transition-all duration-300">
            {/**this arrow...i want it to redirect to the page that leads to this page, dyg */}
            <div onClick={()=>{router.back()}} className="mb-4 cursor-pointer"><ArrowLeft/></div>

            <h1 className="md:text-2xl text-xl font-semibold tracking-tight text-neutral-900">
              Request access to Liftoff
            </h1>

            {/* Partner Banner */}
            <div className="mt-5 border border-[#f5eae4] bg-[#fcf8f6] p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-block rounded bg-black px-1.5 py-0.5 text-[10px] font-bold tracking-tighter text-white">
                  AI
                </span>
                <span className="text-xs">🌀</span>
                <span className="text-xs">☁️</span>
                <span className="inline-block rounded bg-[#34a853] px-1 text-[10px] font-bold text-white">
                  S
                </span>
              </div>

              <p className="text-xs font-medium leading-relaxed text-neutral-600">
                Join leaders from{" "}
                <span className="font-semibold text-neutral-800">
                  Anthropic, OpenAI, Clay and Granola
                </span>{" "}
                using Liftoff to connect.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep("OTP");
              }}
              className="mt-6 space-y-6"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-neutral-900">
                  Full name
                </label>

                <input
                  type="text"
                  required
                  placeholder="e.g. Melanie Perkins"
                  className="mt-1.5 w-full rounded-md border border-neutral-200 px-4 py-3 text-sm placeholder-neutral-400 outline-none transition-all focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-neutral-900">
                  Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="e.g. melanie@liftoff.xyz"
                  className="mt-1.5 w-full rounded-md border border-neutral-200 px-4 py-3 text-sm placeholder-neutral-400 outline-none transition-all focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wide text-neutral-900">
                    LinkedIn Profile URL
                  </label>

                  <a
                    href="#"
                    className="inline-flex items-center gap-0.5 text-xs font-semibold text-neutral-500 underline hover:text-neutral-800"
                  >
                    Get from LinkedIn
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                <input
                  type="url"
                  required
                  placeholder="e.g. https://www.linkedin.com/in/melanie-perkins"
                  className="mt-1.5 w-full rounded-md border border-neutral-200 px-4 py-3 text-sm placeholder-neutral-400 outline-none transition-all focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-neutral-900">
                  Who referred you to Liftoff?{" "}
                  <span className="font-normal lowercase text-neutral-400">
                    (optional)
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="e.g. David Carder"
                  className="mt-1.5 w-full rounded-md border border-neutral-200 px-4 py-3 text-sm placeholder-neutral-400 outline-none transition-all focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              {/* Checkbox */}
              <label className="group relative mt-2 flex cursor-pointer items-start rounded-md border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 has-[:checked]:border-amber-200 has-[:checked]:bg-gradient-to-r has-[:checked]:from-white has-[:checked]:to-amber-[10px]/10">
                <input type="checkbox" className="peer sr-only" />

                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-white transition-all peer-checked:border-neutral-900 peer-checked:bg-neutral-900">
                  <Check
                    size={12}
                    className="text-white opacity-0 transition-opacity peer-checked:opacity-100"
                  />
                </div>

                <div className="ml-3 space-y-2">
                  <span className="block text-sm font-bold text-neutral-900">
                    I am interested in using Liftoff to hire
                  </span>

                  <span className="mt-0.5 block text-xs text-neutral-500">
                    Find exceptional talent through trusted recommendations.
                  </span>
                </div>
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-[#141414] py-4 text-sm font-semibold text-white transition-all hover:bg-black active:scale-[0.99]"
              >
                Continue
              </button>
            </form>
          </div>
        )}

        {/* --- STEP 2: OTP --- */}
        {step === "OTP" && (
          <div className="w-full max-w-xl rounded-md bg-white lg:p-10 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300">

            {/* Back Button */}
            <button
              onClick={() => setStep("FORM")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-100 bg-white text-neutral-500 shadow-sm transition-all hover:bg-neutral-50 hover:text-neutral-800"
            >
              <ArrowLeft size={18} />
            </button>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900">
              Confirm it's you
            </h1>

            <p className="mt-2 text-sm text-neutral-500">
              Enter the code we just sent to{" "}
              <span className="font-semibold text-neutral-800">
                ofavourmi55@gmail.com
              </span>{" "}
              to continue.
            </p>

            {/* OTP GRID */}
            <div className="mt-8 flex justify-between gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={index === activeOtpIndex.current ? inputRef : null}
                  type="number"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="h-16 w-full rounded-md border border-neutral-200 text-center text-xl font-medium text-neutral-800 placeholder-neutral-400 outline-none transition-all focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="0"
                />
              ))}
            </div>

            <button
              onClick={() => setStep("SUCCESS")}
              className="mt-6 w-full rounded-md bg-[#141414] py-4 text-sm font-semibold text-white transition-all hover:bg-black active:scale-[0.99]"
            >
              Confirm
            </button>

            <div className="mt-6 flex flex-col gap-3 text-xs font-medium text-neutral-400">
              <button className="self-start underline transition-colors hover:text-neutral-600">
                Resend email
              </button>

              <div className="my-1 h-px w-full bg-neutral-100" />

              <button className="self-start underline transition-colors hover:text-neutral-600">
                Use a different email address
              </button>
            </div>
          </div>
        )}

        {/* --- STEP 3: SUCCESS --- */}
        {step === "SUCCESS" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-md transition-all duration-300 animate-in fade-in">

            <div className="relative w-full max-w-xl scale-100 rounded-md bg-white p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all animate-in zoom-in-95 duration-200">

              {/* Close */}
              <button
                onClick={() => {router.push("/connection")}}
                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-50 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              >
                <X size={16} />
              </button>

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-50 text-2xl shadow-inner">
                🎉
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-neutral-900">
                You're all set!
              </h2>

              <p className="mt-3 px-4 text-sm leading-relaxed text-neutral-500">
                You're on the waitlist. We'll be in touch when Liftoff is
                ready for you.
              </p>

              <button
                onClick={() => {router.push("/connection")}}
                className="mt-8 w-32 rounded-md bg-[#141414] py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-black active:scale-[0.99]"
              >
                Got it
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}