"use client";

import React from 'react';
import Image from 'next/image';
import { HiStar, HiArrowRight } from 'react-icons/hi';

const Reviews = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-24 md:py-32 px-4 md:px-6 relative">
      {/* Background Flower Shape (SVG) */}
      <div className="absolute left-[-5%] top-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] opacity-10 pointer-events-none -z-10">
        <svg viewBox="0 0 200 200" fill="#A5C933" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C110.8 30.8 139.2 30.8 150 0C160.8 30.8 189.2 30.8 200 0C189.2 30.8 189.2 59.2 200 70C189.2 80.8 189.2 109.2 200 120C189.2 130.8 189.2 159.2 200 170C189.2 180.8 160.8 180.8 150 200C139.2 180.8 110.8 180.8 100 200C89.2 180.8 60.8 180.8 50 200C39.2 180.8 10.8 180.8 0 200C10.8 180.8 10.8 150.8 0 140C10.8 129.2 10.8 100.8 0 90C10.8 79.2 10.8 50.8 0 40C10.8 29.2 39.2 29.2 50 0C60.8 29.2 89.2 29.2 100 0Z" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Main Photo & Floating Cards Container */}
        <div className="relative order-2 lg:order-1">
          {/* Main Photo Container */}
          <div className="relative w-full aspect-[4/5] md:aspect-square max-w-lg mx-auto rounded-[48px] overflow-hidden shadow-2xl border-8 border-white/50">
            <Image 
              src="/images/reviews_main.png" 
              alt="Real Mothers" 
              fill 
              className="object-cover grayscale"
            />
          </div>

          {/* Megan L. Card (Top Right) */}
          <div className="absolute -top-12 -right-4 md:-right-20 w-[240px] md:w-[320px] bg-white p-5 md:p-7 rounded-[32px] shadow-2xl z-20 animate-float">
            <p className="text-[#6B725E] text-[13px] md:text-[15px] leading-relaxed mb-4">
              "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry."
            </p>
            <div>
              <p className="font-bold text-olive-primary text-sm">Megan L.</p>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <HiStar key={s} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>
            </div>
          </div>

          {/* Lila M. Card (Bottom Left - Overlapping) */}
          <div className="absolute -bottom-16 left-4 md:-left-8 w-[240px] md:w-[320px] bg-white p-5 md:p-7 rounded-[32px] shadow-2xl z-30 animate-float delay-700">
            <p className="text-[#6B725E] text-[13px] md:text-[15px] leading-relaxed mb-4">
              "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly."
            </p>
            <div>
              <p className="font-bold text-olive-primary text-sm">Lila M.</p>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <HiStar key={s} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>
            </div>
          </div>

          {/* Avatars */}
          <div className="absolute top-1/4 -right-8 w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden z-10">
            <Image src="https://i.pravatar.cc/100?u=mom1" alt="Avatar" fill className="object-cover" />
          </div>
          <div className="absolute bottom-1/4 -left-6 w-10 h-10 rounded-full border-4 border-white shadow-lg overflow-hidden z-10">
            <Image src="https://i.pravatar.cc/100?u=mom2" alt="Avatar" fill className="object-cover" />
          </div>
        </div>

        {/* Right Side: Header & Tina B. Card */}
        <div className="flex flex-col items-start gap-12 order-1 lg:order-2">
          <div className="max-w-md">
            <h2 className="text-6xl md:text-8xl font-normal text-olive-primary leading-[0.9] mb-8">
              Real Mothers<br />
              <span className="font-normal italic">Real Results</span>
            </h2>
            <button className="flex items-center gap-2 text-olive-primary/80 font-medium hover:text-olive-primary transition-all text-xl group">
              read all 3,147+ reviews
              <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Tina B. Card (Bottom Right of Header) */}
          <div className="relative w-[240px] md:w-[320px] bg-white p-5 md:p-7 rounded-[32px] shadow-2xl animate-float delay-300">
            <p className="text-[#6B725E] text-[13px] md:text-[15px] leading-relaxed mb-4">
              "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy."
            </p>
            <div>
              <p className="font-bold text-olive-primary text-sm">Tina B.</p>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <HiStar key={s} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>
            </div>
            {/* Avatar Orb next to Tina */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-white shadow-lg overflow-hidden">
               <Image src="https://i.pravatar.cc/100?u=mom3" alt="Avatar" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Reviews;