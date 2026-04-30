import React from 'react'
import Navbar from './ui/Navbar'
import { FaApple } from 'react-icons/fa';
import Button from './ui/Button';
import MobileMockup from './MobileMockup';

const Hero = () => {
  return (
    <div className="relative w-full bg-[#F5FAF6] rounded-2xl border-2 border-olive-secondary flex flex-col items-center">
        <div className="relative w-full z-50">
          <Navbar />
        </div>
        <div className="relative w-full overflow-hidden flex flex-col items-center rounded-b-2xl">
          <main className="relative z-10 pt-15 w-full max-w-7xl px-4 md:px-6 flex flex-col items-center text-center">
            {/* Social Proof */}
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-15 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex -space-x-2 md:-space-x-3 transition-all duration-300 ease-out group cursor-pointer">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-white bg-zinc-200 shadow-sm relative transition-transform duration-300 hover:scale-105 hover:z-10"
                    style={{
                      backgroundImage: `url('https://i.pravatar.cc/100?u=${i}')`,
                      backgroundSize: 'cover'
                    }}
                  />
                ))}
                <div className="flex items-center justify-center h-8  md:h-10 md:w-10 rounded-full border-2 border-white bg-[#F3F4F1] text-[11px] md:text-[13px] font-semibold text-[#6B725E] shadow-sm relative hover:z-10">
                  3k+
                </div>
              </div>
              <div className="text-[#6B725E]  text-xs md:text-sm tracking-tight">
                Trusted by thousands of healthy families
              </div>
            </div>

            {/* Hero Content */}
            <div className="max-w-2xl space-y-6 md:space-y-8 mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
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
            <button 
              className="mb-8 md:mb-12 bg-olive-primary text-white px-5 py-3 rounded-full flex items-center gap-2 hover:bg-olive-primary/90 transition-colors cursor-pointer"
            >
              <FaApple className="w-4 h-4 md:w-6 md:h-6 " />
              Download for iOS
            </button>

            {/* Dynamic Mobile Mockup */}
            <div className="w-full flex justify-center mb-[-250px] md:mb-[-150px]">
              <MobileMockup />
            </div>
            
          </main>
        </div>
    </div>
  )
}

export default Hero