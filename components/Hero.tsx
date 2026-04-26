import React from 'react'
import Navbar from './ui/Navbar'
import { FaApple } from 'react-icons/fa';
import Button from './ui/Button';

const Hero = () => {
  return (
    <div className="w-full bg-olive-secondaryyy rounded-2xl border-2 border-olive-secondary flex flex-col items-center">
        <Navbar />
        <main className="pt-15 pb-10 md:pb-20 w-full max-w-7xl px-4 md:px-6 flex flex-col items-center text-center">
        {/* Social Proof */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-15 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex -space-x-2 md:-space-x-3 overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="inline-block h-8 w-8 md:h-10 rounded-full border-2 border-white bg-zinc-200 shadow-sm"
                style={{
                  backgroundImage: `url('https://i.pravatar.cc/100?u=${i}')`,
                  backgroundSize: 'cover'
                }}
              />
            ))}
            <div className="flex items-center justify-center h-8 px-3 md:h-10 md:px-4 rounded-full border-2 border-white bg-[#F3F4F1] text-[11px] md:text-[13px] font-semibold text-[#6B725E] shadow-sm">
              3k+
            </div>
          </div>
          <div className="text-[#6B725E]  text-xs md:text-sm tracking-tight">
            Trusted by thousands of healthy families
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-2xl space-y-6 md:space-y-8 mb-10 md:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-[-0.03em] text-olive-primary ">
            The Safest Way to <br className="hidden xs:block" /> Shop for Groceries
          </h1>
          <p className="text-lg md:text-xl text-[#6B725E] max-w-2xl mx-auto  px-4">
            Use the Olive Food Scanner App to Instantly Eliminate <br className="hidden md:block" /> 
            Harmful Ingredients from Your Family&apos;s Diet and Get <br className="hidden md:block" /> 
            Expert-Backed Food Insights
          </p>
        </div>

        {/* Action Button */}
        <Button 
          icon={<FaApple className="w-4 h-4 md:w-6 md:h-6" />}
          className="mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
        >
          Download for iOS
        </Button>

        {/* Mockup Placeholder - Commented out as requested */}
        {/* 
        <div className="relative w-full max-w-5xl aspect-4/3 md:aspect-video bg-linear-to-b from-transparent to-white rounded-3xl overflow-hidden animate-in fade-in zoom-in duration-1000 delay-500">
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
             <div className="w-56 sm:w-72 md:w-80 h-[400px] sm:h-[500px] md:h-[600px] bg-zinc-900 rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-zinc-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-6 md:h-8 bg-zinc-800 flex justify-center items-end pb-1">
                   <div className="w-12 md:w-20 h-3 md:h-4 bg-black rounded-full" />
                </div>
                {/* Simulated Screen Content */}
                {/*
                <div className="p-4 md:p-6 pt-10 md:pt-12 space-y-3 md:space-y-4">
                   <div className="w-full h-32 md:h-40 bg-olive-secondary/30 rounded-xl md:rounded-2xl animate-pulse" />
                   <div className="w-3/4 h-5 md:h-6 bg-olive-secondary/50 rounded-md md:rounded-lg" />
                   <div className="w-full h-3 md:h-4 bg-zinc-100 rounded-md md:rounded-lg" />
                   <div className="w-full h-3 md:h-4 bg-zinc-100 rounded-md md:rounded-lg" />
                </div>
             </div>
          </div>
          {/* Side Floating Elements - Hidden on small mobile */}
          {/*
          <div className="hidden sm:block absolute left-4 md:left-10 bottom-10 md:bottom-20 w-24 md:w-32 h-24 md:h-32 bg-white rounded-xl md:rounded-2xl shadow-lg border border-black/5 rotate-[-6deg]" />
          <div className="hidden sm:block absolute right-4 md:right-10 bottom-10 md:bottom-20 w-24 md:w-32 h-24 md:h-32 bg-white rounded-xl md:rounded-2xl shadow-lg border border-black/5 rotate-[6deg]" />
        </div>
        */}
      </main>
    </div>
  )
}

export default Hero