"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import { FaApple } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

const bullets = [
  "Olive breaks down every ingredient into clear, actionable information.",
  "Olive scores products out of 100 based on additives, seed oils, processing level, and detected toxins.",
  "Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.",
];

const positives = ["Organic Milk", "No Artificial Flavors", "Non-GMO", "Fair Trade Cocoa"];
const negatives = ["High Sugar", "High Saturated Fat"];

export default function Benifits() {
  const [activeTab, setActiveTab] = useState<'positives' | 'negatives'>('positives');

  return (
    <section className="w-full flex-col flex items-center justify-center  overflow-hidden my-4">
      {/* Dark Green Header */}
      <div
        className="w-full bg-[#316431] px-8 md:px-70 pt-16 pb-32 md:pt-60 md:pb-60 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20"
      >
        {/* Left: Title */}
        <div className="flex-1 min-w-0">
          <h2 className="text-4xl md:text-6xl font-normal text-white leading-tight">
            Health Benefits<br />of Using Olive
          </h2>
        </div>

        {/* Right: Description + CTA */}
        <div className="flex-1 flex flex-col items-start gap-6 min-w-0">
          <p className="text-[#c4d8a0] text-base md:text-lg leading-relaxed">
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

      {/* Light Card Section */}
      <div className="w-full max-w-6xl bg-[#f7faf5] rounded-3xl -mt-20 md:-mt-32 relative z-10 px-2 md:px-3 border-2  py-12 md:py-4 flex flex-col md:flex-row gap-12 md:gap-20 items-start shadow-xl">
        {/* Left: Bullet List */}
        <div className="flex-1 p-5 min-w-0">
          <h3 className="text-2xl md:text-3xl font-medium text-olive-primary mb-8">
            Achieve Nutritional Clarity
          </h3>
          <ul className="flex flex-col gap-5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <HiCheckCircle className="text-olive-primary w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-[#6B725E] text-sm md:text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Product Card */}
        <div className="flex-1 border-2 min-w-0 flex justify-center md:justify-end">
          <div className="w-full max-w-sm bg-white rounded-2xl border border-[#eef3eb] shadow-sm overflow-hidden">
            {/* Product Image Banner */}
            <div className="relative w-full h-44 bg-[#e8f0e2] flex items-center justify-center overflow-hidden">
              <div className="relative w-36 h-36">
                <Image
                  src="/images/ice_cream.png"
                  alt="Straus Ice Cream"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-15 h-15 rounded-full overflow-hidden bg-[#e8f0e2] shrink-0">
                  <Image src="/images/ice_cream.png" alt="Straus" fill className="object-contain p-1" />
                </div>
                <div>
                  <p className="font-semibold text-olive-primary text-lg">Straus Ice Cream</p>
                  <p className="text-sm text-[#6B725E]">
                    <span className="font-bold text-olive-primary">96/100</span>{' '}
                    <span className="text-[#A5C933] font-medium">Excellent</span>
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 border-b border-[#eef3eb] pb-3">
                <button
                  onClick={() => setActiveTab('positives')}
                  className={`flex-1 py-2 rounded-full text-md font-semibold transition-all ${
                    activeTab === 'positives'
                      ? 'bg-olive-primary text-white'
                      : 'bg-[#f0f5ec] text-[#6B725E]'
                  }`}
                >
                  ✓ Positives
                </button>
                <button
                  onClick={() => setActiveTab('negatives')}
                  className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeTab === 'negatives'
                      ? 'bg-red-500 text-white'
                      : 'bg-[#f0f5ec] text-[#6B725E]'
                  }`}
                >
                  ✗ Negatives
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex flex-col gap-2 min-h-[80px]">
                {(activeTab === 'positives' ? positives : negatives).map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium ${
                      activeTab === 'positives'
                        ? 'bg-[#eef6e6] text-olive-primary'
                        : 'bg-red-50 text-red-600'
                    }`}
                  >
                    <span>{activeTab === 'positives' ? '✓' : '✗'}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2: Seed Oils */}
      <div className="w-full max-w-6xl bg-white rounded-[32px] mt-8 relative z-10 px-8 md:px-16 py-12 md:py-16 flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-center shadow-sm border border-[#eef3eb]">
        {/* Right: Bullet List (Reversed on desktop for alternating look) */}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl md:text-3xl font-medium text-olive-primary mb-8">
            Avoid Harmful Seed Oils
          </h3>
          <ul className="flex flex-col gap-5">
            {[
              "Instantly identify inflammatory seed oils like soybean, canola, and corn oil.",
              "Learn why these oils can be harmful to your metabolic health and heart.",
              "Get suggestions for products made with healthier fats like avocado, olive, and coconut oil."
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <HiCheckCircle className="text-olive-primary w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-[#6B725E] text-sm md:text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Left: Gradient Placeholder */}
        <div className="flex-1 min-w-0 w-full h-[300px] md:h-[400px] rounded-[24px] bg-linear-to-br from-olive-secondary to-olive-primary/20 animate-pulse" />
      </div>

      {/* Section 3: Cleaner Alternatives */}
      <div className="w-full max-w-6xl bg-[#f7faf5] rounded-[32px] mt-8 mb-16 relative z-10 px-8 md:px-16 py-12 md:py-16 flex flex-col md:flex-row gap-12 md:gap-20 items-center shadow-sm border border-[#eef3eb]">
        {/* Left: Bullet List */}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl md:text-3xl font-medium text-olive-primary mb-8">
            Cleaner Alternatives
          </h3>
          <ul className="flex flex-col gap-5">
            {[
              "Olive's database contains over 100,000 clean-label products.",
              "Get real-time 'Swaps' for items you scan that contain questionable additives.",
              "Filter your shopping experience by your specific dietary needs and health goals."
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <HiCheckCircle className="text-olive-primary w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-[#6B725E] text-sm md:text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Gradient Placeholder */}
        <div className="flex-1 min-w-0 w-full h-[300px] md:h-[400px] rounded-[24px] bg-linear-to-tr from-olive-primary/10 to-olive-secondary animate-pulse" />
      </div>
    </section>
  );
}