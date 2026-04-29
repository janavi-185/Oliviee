"use client";

import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import { FaApple } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';

const FloatingTag = ({ text, isSafe }: { text: string; isSafe: boolean }) => (
  <div className={`flex items-center gap-2 px-5 py-1.5 rounded-2xl text-sm whitespace-nowrap bg-black/10 backdrop-blur-sm text-black`}>
    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${isSafe ? 'bg-none' : 'bg-black'}`}>
      {isSafe ? (
        <HiCheckCircle className="text-black w-5 h-5" />
      ) : (
        <span className="text-white  text-[8px] font-extrabold">✕</span>
      )}
    </div>
    {text}
  </div>
);

const TagRow = ({ tags, direction = 'left', speed = 40 }: { tags: { text: string; isSafe: boolean }[]; direction?: 'left' | 'right'; speed?: number }) => (
  <div className="flex overflow-hidden gap-4 py-2 w-full">
    <motion.div
      animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
      transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      className="flex gap-4 flex-nowrap"
    >
      {[...tags, ...tags, ...tags, ...tags].map((tag, i) => (
        <FloatingTag key={i} text={tag.text} isSafe={tag.isSafe} />
      ))}
    </motion.div>
  </div>
);

const bullets = [
  "Olive breaks down every ingredient into clear, actionable information.",
  "Olive scores products out of 100 based on additives, seed oils, processing level, and detected toxins.",
  "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.",
];
 
export default function Benifits() {

  return (
    <section className="w-full bg-[#F7FAF5] flex-col flex items-center justify-center  overflow-hidden my-4">
      {/* Dark Green Header */}
      <div
        className="w-full bg-[#3D633D] px-8 md:px-50 pt-16 pb-40 md:pt-47 md:pb-47 "
      >
        <div className='w-full flex flex-col md:flex-row items-start  gap-5 '>
        {/* Left: Title */}
        <div className="flex-1 px-5 min-w-0">
          <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight">
            Health Benefits of Using Olive
          </h2>
        </div>

        {/* Right: Description + CTA */}
        <div className="flex-1 max-w-sm px-2 flex flex-col items-start gap-6 min-w-0">
          <p className="text-[#F7FAF5] text-base md:text-lg leading-relaxed">
            Olive proactively flags harmful ingredients and offers personalized recommendations,
            empowering you to make better choices for your family&apos;s health.
          </p>
          <Button 
          variant='secondary'
          icon={<FaApple className="w-4 h-4" />} className="text-sm">
            Download for iOS
          </Button>
        </div>
        </div>
      </div>

      {/* Light Card Section */}
      <div className="w-full max-w-5xl  bg-white rounded-2xl -mt-20 md:-mt-32 relative z-10 flex flex-col md:flex-row items-stretch overflow-hidden ">
        {/* Left: Bullet List */}
        <div className="w-full md:w-1/2 p-2  flex flex-col justify-center">
          <div className="md:p-4 rounded-lg h-full flex flex-col justify-start">
            <h3 className="text-2xl md:text-3xl font-medium text-olive-primary mb-40">
              Achieve Nutritional Clarity
            </h3>
          <ul className="flex flex-col  gap-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <HiCheckCircle className="text-olive-primary w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-[#4d553e] text-lg md:text-lg leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          </div>
        </div>

        {/* Right: Product Card Design */}
        <div className="w-full md:w-1/2 m-3 bg-linear-to-b from-[#e0eade] to-[#cbf4d3] p-6 rounded-2xl  flex flex-col items-center justify-center gap-8 shadow-inner overflow-hidden">
          {/* Top: Product Fan Stack */}
          <div className="relative w-full  flex justify-center ">
            {/* Left Image */}
            <div className="absolute left-[0%] md:left-[15%] bottom-1 w-24 md:w-38 aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-xl -rotate-12 transform-gpu transition-all z-10">
              <Image
                src="/images/product_left.png"
                alt="Product Left"
                fill
                className="object-cover"
              />
            </div>
            {/* Right Image */}
            <div className="absolute right-[0%] md:right-[15%] bottom-1 w-24 md:w-38 aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-xl rotate-12 transform-gpu transition-all z-10">
              <Image
                src="/images/product_right.png"
                alt="Product Right"
                fill
                className="object-cover"
              />
            </div>
            {/* Center Image */}
            <div className="relative w-38 md:w-40 aspect-square rounded-3xl overflow-hidden border-2 border-white shadow-2xl z-20 transform-gpu transition-all ">
              <Image
                src="/images/product_center.png"
                alt="Product Center"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle: Straus Info Card */}
          <div className=" bg-white/60 px-2 py-1 mt-5 rounded-2xl flex items-center gap-3 ">
            <div className="w-20 h-20  rounded-2xl overflow-hidden p-2">
              <Image
                src="/images/ice_cream.png"
                alt="Straus Thumbnail"
                width={56}
                height={56}
                className="object-contain rounded-2xl w-full h-full"
              />
            </div>
            <div className="flex flex-col pr-10 gap-2">
              <h4 className="text-lg md:text-xl font-semibold text-[#0a1f0a] tracking-tight">Straus Ice Cream</h4>
              <div className="flex items-center gap-3">
                <span className="text-lg md:text-xl font-bold text-gray-500 ">96/100</span>
                <span className=" text-sm font-normal text-gray-500 ">Excellent</span>
              </div>
            </div>
          </div>

          {/* Bottom: Analysis Cards */}
          <div className="w-full bottom-3 grid grid-cols-2 gap-2">
            {/* Positives */}
            <div className="bg-white/40 backdrop-blur-sm rounded-[24px] p-4 md:p-6 flex flex-col gap-4 border border-white/30">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#316431] rounded-full flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg text-[#316431]">Positives</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-5 bg-white/60 rounded-full w-[85%] shadow-sm" />
                <div className="h-5 bg-white/60 rounded-full w-[65%] shadow-sm" />
                <div className="h-5 bg-white/60 rounded-full w-[95%] shadow-sm" />
              </div>
            </div>

            {/* Negatives */}
            <div className="bg-white/40 backdrop-blur-sm rounded-[24px] p-4 md:p-6 flex flex-col gap-4 border border-white/30">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#8b4513]/30 rounded-full flex items-center justify-center">
                  <span className="text-[#8b4513] text-xs font-black">✕</span>
                </div>
                <span className="font-bold text-lg text-[#8b4513]">Negatives</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-5 bg-white/60 rounded-full w-[75%] shadow-sm" />
                <div className="h-5 bg-white/60 rounded-full w-[55%] shadow-sm" />
                <div className="h-5 bg-white/60 rounded-full w-[90%] shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2: Proactive Ingredient Filtering */}
      <div className="w-full  max-w-5xl bg-white rounded-xl mt-8 relative z-10 overflow-hidden  flex flex-col md:flex-row min-h-full">
        {/* Left: Title at top, bullets towards bottom */}
        <div className="w-full md:w-1/2 p-2 flex flex-col justify-center">
          <div className="md:p-4 rounded-lg h-full flex flex-col justify-start">
            <h3 className="text-2xl md:text-3xl font-medium text-olive-primary mb-50">
              Proactive Ingredient Filtering
            </h3>
          <ul className="flex flex-col pr-15 gap-2">
            {[
              "Olive flags harmful additives and controversial ingredients before they become mainstream concerns.",
              "Keeps you ahead of potential food safety concerns.",
              "Gives busy parents the confidence to make safer food choices every time."
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <HiCheckCircle className="text-olive-primary w-6 h-6 mt-0.5 shrink-0" />
                <span className="text-[#4d553e] text-lg md:text-lg leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          </div>
        </div>

        {/* Right: Soft pink background panel with floating tags */}
        <div className="w-full m-3 md:w-1/2 rounded-2xl bg-linear-to-t from-[#FFC1CC] to-[#ffeef0] min-h-[340px] md:min-h-full relative overflow-hidden flex flex-col justify-center gap-2">
        <div className='p-60'>
          <div className="absolute inset-0 flex flex-col justify-center gap-2 scale-125 rotate-[-15deg] transform-gpu">
            <TagRow 
              direction="right"
              speed={40}
              tags={[
                { text: 'Cholesterol-Free', isSafe: true },
                { text: 'High Fibre', isSafe: true },
                { text: 'No MSG', isSafe: true },
                { text: 'Organic', isSafe: true }
              ]} 
            />
            <TagRow 
              direction="left"
              speed={35}
              tags={[
                { text: 'Gluten-Free', isSafe: true },
                { text: 'Non-GMO', isSafe: true },
                { text: 'Whole Grain', isSafe: true },
                { text: 'Organic Ingredients', isSafe: true }
              ]} 
            />
            <TagRow 
              direction="right"
              speed={45}
              tags={[
                { text: 'Sodium Nitrite', isSafe: false },
                { text: 'TBHQ', isSafe: false },
                { text: 'Monosodium Glutamate', isSafe: false },
                { text: 'Artificial Colors', isSafe: false }
              ]} 
            />
            <TagRow 
              direction="left"
              speed={38}
              tags={[
                { text: 'Aspartame', isSafe: false },
                { text: 'Saccharin', isSafe: false },
                { text: 'Palm Oil', isSafe: false },
                { text: 'Potassium Bromate', isSafe: false }
              ]} 
            />
            <TagRow 
              direction="right"
              speed={42}
              tags={[
                { text: 'Corn Syrup', isSafe: false },
                { text: 'High Fructose', isSafe: false },
                { text: 'BHT', isSafe: false },
                { text: 'Saccharin', isSafe: false }
              ]} 
            />
          </div>
          </div>
        </div>
      </div>

      {/* Section 3: Real Health Outcomes */}
      <div className="w-full max-w-5xl mt-8 mb-16 bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[420px]">
        {/* Left half: title top, bullets bottom */}
        <div className="w-full md:w-1/2 p-1 flex flex-col justify-center">
          <div className="md:p-4 rounded-lg h-full flex flex-col justify-start">
            <h3 className="text-2xl md:text-3xl p-2 font-medium text-olive-primary mb-50">
              Real Health Outcomes for Your Family
            </h3>
            <ul className="flex flex-col pl-3 pr-15 gap-2">
              {[
                "Empowers parents to feel more in control of their family's health.",
                "Delivers personalized suggestions for healthier food choices.",
                "Promotes long-term well-being through informed, balanced decisions."
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <HiCheckCircle className="text-olive-primary w-6 h-6 mt-0.5 shrink-0" />
                  <span className="text-[#4d553e] text-lg md:text-lg leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right half: avocadoFamily image, warm cream bg, rounded */}
        <div className="w-full md:w-1/2 relative min-h-[280px] md:min-h-full m-3 rounded-2xl overflow-hidden bg-[#f5edd8]">
          <Image
            src="/images/avocadoFamily.png"
            alt="Avocado Family"
            fill
            className="object-center rounded-2xl"
          />
        </div>
      </div>

    </section>
  );
}