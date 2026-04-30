"use client";

import React from 'react';
import Image from 'next/image';
import { HiCheckCircle } from 'react-icons/hi';
import { PiStarFourFill } from 'react-icons/pi';
import { motion } from 'framer-motion';

const Woking = () => {
  const steps = [
    {
      title: "Scan & Detect",
      description: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center bg-[#F5FAF6] rounded-3xl p-4 overflow-hidden">
          <div className="relative md:h-40 w-full flex items-center justify-center">
            {/* Corner Borders (Viewfinder) */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#C8D1C0] rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#C8D1C0] rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#C8D1C0] rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#C8D1C0] rounded-br-2xl" />

            {/* Avocado Image */}
            <div className="relative w-32 h-32 md:w-40 md:h-35 z-10">
              <Image 
                src="/images/newavacado.png" 
                alt="Scan" 
                fill 
                className="object-contain"
              />
            </div>

            {/* Scanning Line */}
            <div className="absolute top-1/4  w-[90%] h-1 bg-[#253612] shadow-lg z-20 animate-scan-line-slow" />

            {/* Decorative Stars */}
            <div className="absolute top-2 left-10 text-[#929C85] z-30 animate-pulse">
              <PiStarFourFill size={18} />
            </div>
            <div className="absolute top-8 left-4 text-[#929C85]/60 z-30 flex gap-1">
              <PiStarFourFill size={8} />
              <PiStarFourFill size={10} className="mt-2" />
            </div>
            <div className="absolute bottom-12 left-10 text-[#929C85] z-30 delay-700 animate-pulse">
              <PiStarFourFill size={20} />
            </div>
            <div className="absolute bottom-8 right-16 text-[#929C85]/70 z-30 delay-1000 animate-bounce-subtle">
              <PiStarFourFill size={14} />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Data Analysis & Validation",
      description: "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center bg-[#F5FAF6] rounded-3xl overflow-hidden p-6">
          <div className="relative w-full h-full flex items-center justify-center">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.div
                key={i}
                animate={{
                  x: [500, -500],
                  scale: [0.85, 1, 1.1, 1, 0.85],
                  opacity: [0.3, 0.9, 1, 0.9, 0.3],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -i * 2,
                }}
                className="absolute w-24 h-24 md:w-28 md:h-28 bg-white rounded-4xl shadow-sm overflow-hidden border border-black/5"
              >
                {(() => {
                  const images = [
                    "/images/ice_cream.png",
                    "/images/avocado.png",
                    "/images/avocadoFamily.png",
                    "/images/product_scan.png",
                    "/images/product_center.png"
                  ];
                  return (
                    <Image 
                      src={images[i % images.length]} 
                      alt="Product" 
                      fill 
                      className="object-cover" 
                    />
                  );
                })()}
              </motion.div>
            ))}
          </div>
          {/* Safe to consume badge */}
          <div className="absolute bottom-0 z-20 flex items-center gap-2 bg-linear-to-r from-[#D4E8D8]/20 via-[#D4E8D8] to-[#D4E8D8]/20 px-4 py-2 rounded-full shadow-sm border border-[#386641]/5 backdrop-blur-sm">
            <HiCheckCircle className="text-[#386641] w-4 h-4" />
            <span className="text-[#386641] font-medium text-sm">Safe to consume</span>
          </div>

          {/* Fading Gradients on sides */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#F5FAF6] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#F5FAF6] to-transparent z-10" />
        </div>
      )
    },
    {
      title: "Actionable Insights & Recommendations",
      description: "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center bg-[#F5FAF6] rounded-3xl overflow-hidden p-4">
          {/* Vertical Scrolling Background Pills */}
          <div className="absolute inset-0 flex flex-col items-center opacity-100">
            <motion.div
              animate={{ y: [0, -300] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-3 items-center mt-4"
            >
              {[...Array(3)].map((_, j) => (
                <React.Fragment key={j}>
                  {[
                    "Veggie Spaghetti Squash",
                    "Lentil and Whole Chickpea",
                    "Stuffed Bell Peppers",
                    "Mediterranean Quinoa Salad",
                    "Organic Baby Spinach",
                    "Gluten-Free Oats",
                    "Chhole (Chickpea Curry)",

                  ].map((text, i) => (
                    <div key={`${j}-${i}`} className="bg-[#38664126] px-6 py-2.5 rounded-xl font-medium text-sm text-center w-[280px] truncate shadow-sm">
                      {text}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Foreground Image Stack */}
          <div className="relative w-full h-full flex justify-center items-center z-10">
             {/* Left Image */}
             <div className="absolute left-[15%] md:left-[17%] top-1/2 -translate-y-1/2 w-15 h-20 md:w-20 md:h-30 rounded-2xl overflow-hidden border-[3px] border-white shadow-xl -rotate-12">
               <Image src="/images/product_left.png" alt="Product Left" fill className="object-cover" />
             </div>
             {/* Right Image */}
             <div className="absolute right-[15%] md:right-[17%] top-1/2 -translate-y-1/2 w-15 h-20 md:w-20 md:h-30 rounded-2xl overflow-hidden border-[3px] border-white shadow-xl rotate-12">
               <Image src="/images/product_right.png" alt="Product Right" fill className="object-cover" />
             </div>
             {/* Center Image */}
             <div className="relative w-18 h-28 md:w-25 md:h-35 rounded-2xl overflow-hidden border-[3px] border-white shadow-2xl z-20">
               <Image src="/images/product_center.png" alt="Product Center" fill className="object-cover" />
             </div>
          </div>

          {/* Fading Gradients for vertical scroll */}
          <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#F5FAF6] to-transparent z-0 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#F5FAF6] to-transparent z-0 pointer-events-none" />
        </div>
      )
    }
  ];

  return (
    <section className="w-full max-w-7xl flex flex-col items-center justify-center mx-auto py-30 px-4 md:px-4">
      <div className="flex p-5 max-w-3xl  flex-row items-center justify-center mb-20">
        <h2 className="text-4xl text-center md:text-5xl font-normal text-olive-primary max-w-4xl leading-tight">
          How the Olive Food Scanner App Works
        </h2>
        <div className="shrink-0 ">
          <Image 
            src="/images/image.png" 
            alt="Avocado" 
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>

      <div className="grid max-w-6xl w-full grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-4 py-8 p-6 rounded-2xl bg-[#F5FAF6] transition-all duration-300 group">
            <h3 className="text-sm font-bold ">
              {step.title}
            </h3>
            <div className="w-full h-52">
              {step.visual}
            </div>
            <p className="text-[#6B725E] text-sm font-medium leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Woking;