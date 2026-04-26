"use client";

import React from 'react';
import Image from 'next/image';
import { HiCheckCircle } from 'react-icons/hi';

const Woking = () => {
  const steps = [
    {
      title: "Scan & Detect",
      description: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-white/50">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image 
              src="/images/product_scan.png" 
              alt="Scan" 
              fill 
              className="object-contain"
            />
            {/* Scanning Line Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-olive-primary/40 shadow-[0_0_15px_rgba(37,54,18,0.5)] animate-scan-line" />
            
            {/* Barcode Frame */}
            <div className="absolute inset-4 border-2 border-olive-primary/20 rounded-xl" />
          </div>
        </div>
      )
    },
    {
      title: "Data Analysis & Validation",
      description: "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 bg-white/50 rounded-2xl overflow-hidden p-4">
          <div className="relative w-full h-32 md:h-40 overflow-hidden">
             <div className="flex gap-4 animate-carousel-scroll items-center">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden">
                    <Image src="/images/products_carousel.png" alt="Product" fill className="object-cover" />
                  </div>
                ))}
             </div>
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-md border border-olive-secondary flex items-center gap-2 animate-bounce-subtle">
             <HiCheckCircle className="text-olive-primary w-5 h-5" />
             <span className="text-olive-primary font-bold text-sm">Safe to consume</span>
          </div>
        </div>
      )
    },
    {
      title: "Actionable Insights & Recommendations",
      description: "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center bg-white/50 rounded-2xl overflow-hidden p-4">
          <div className="relative w-full h-full max-w-[280px]">
            <Image 
              src="/images/insights_stack.png" 
              alt="Insights" 
              fill 
              className="object-contain transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-30 px-4 md:px-4">
      <div className="flex flex-col items-center text-center mb-30 relative">
        <h2 className="text-4xl md:text-6xl font-normal text-olive-primary max-w-2xl leading-tight">
          How the Olive Food <br /> Scanner App Works
        </h2>
        <div className="absolute right-0 top-0 md:right-17 md:top-6 w-15 h-15 md:w-32 md:h-32 animate-float">
          <Image 
            src="/images/avocado.png" 
            alt="Avocado" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-6 p-8 rounded-2xl bg-[#f5f9f0]  transition-all duration-300 group">
            <h3 className="text-lg font-bold text-olive-primary">
              {step.title}
            </h3>
            <div className=" w-full">
              {step.visual}
            </div>
            <p className="text-[#6B725E]  text-sm md:text-sm font-medium">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scan-line {
          0% { top: 10%; }
          50% { top: 90%; }
          100% { top: 10%; }
        }
        @keyframes carousel-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-scan-line {
          animation: scan-line 3s ease-in-out infinite;
        }
        .animate-carousel-scroll {
          animation: carousel-scroll 20s linear infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Woking;