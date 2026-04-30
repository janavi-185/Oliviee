"use client";

import React from 'react';
import Image from 'next/image';
import { HiCheckCircle } from 'react-icons/hi';
import Button from './ui/Button';
import { BsFlower1 } from "react-icons/bs";


const monthlyFeatures = [
  'Unlimited Scans',
  'Unlimited Database Searches',
  'Comprehensive Lab-Testing Data',
];

const yearlyFeatures = [
  'Everything in monthly plan',
  'Get 7 months free',
  '60% Savings',
];

export default function Pricing() {
  return (
    <section className="w-full mx-auto px-4 md:px-8 py-16 md:py-40 relative overflow-hidden">

      {/* Decorative flower shape (Icon) */}
      <div className="absolute right-[-5%] top-1/4 w-64 md:w-[500px] h-64 md:h-[500px] opacity-20 pointer-events-none -z-10 text-[#4e7155]">
        <BsFlower1 className="w-full h-full" />
      </div>

      {/* Heading */}
      <div className="flex items-center justify-center mb-10">
        <h2 className="text-4xl max-w-lg md:text-5xl font-normal text-olive-primary text-center mb-16 leading-tight">
          Healthy Choices Honest Pricing
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch max-w-4xl mx-auto">

        {/* Monthly Card */}
        <div className="flex-1 bg-[#F0F7F2] rounded-3xl p-8 flex flex-col gap-6 relative">
          {/* Olive avatar */}
          <div className="absolute -top-14 left-[-5%] w-30 h-30">
            <Image
              src="/images/pricing.png"
              alt="Olive mascot"
              width={90}
              height={90}
              className="object-contain rounded-full"
            />
          </div>

          <div>
            <p className="text-md text-black mb-2">Monthly</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-olive-primary">$14.99</span>
              <span className="text-sm text-[#4d553e]">/monthly</span>
            </div>
          </div>

          <ul className="flex flex-col gap-5 flex-1">
            {monthlyFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <HiCheckCircle className="text-[#386641] w-6 h-6 shrink-0" />
                <span className="text-black text-md">{f}</span>
              </li>
            ))}
          </ul>

          <Button variant="primary" className="w-full justify-center rounded-full">
            Subscribe
          </Button>
        </div>

        {/* Yearly Card */}
        <div className="flex-1 bg-[#386641] rounded-3xl p-8 flex flex-col gap-6 relative">
          <div>
            <p className="text-md text-white mb-2">Yearly</p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-4xl font-semibold text-white">$69.99</span>
              <span className="text-lg text-white/50 line-through">$179.88</span>
              <span className="text-md text-white/70">/yearly</span>
            </div>
          </div>

          <ul className="flex flex-col gap-5 flex-1">
            {yearlyFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <HiCheckCircle className="text-white w-6 h-6 shrink-0" />
                <span className="text-white text-md">{f}</span>
              </li>
            ))}
          </ul>

          <Button variant="white" className="w-full  justify-center rounded-full">
            Subscribe
          </Button>
        </div>

      </div>
    </section>
  );
}