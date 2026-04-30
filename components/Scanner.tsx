"use client";

import React from 'react';
import { FaApple } from 'react-icons/fa';
import { HiCheck, HiX } from 'react-icons/hi';
import Button from './ui/Button';

const features = [
  { label: 'Detailed Product Breakdown', olive: true,  comp1: true,  comp2: true  },
  { label: 'Comprehensive Water Data',   olive: true,  comp1: false, comp2: false },
  { label: 'Seed Oil Free Dining Map',   olive: true,  comp1: false, comp2: false },
  { label: 'Seed Oil Flagging',          olive: true,  comp1: false, comp2: true  },
  { label: 'Certified Lab-Testing Data', olive: true,  comp1: false, comp2: false },
];

const Check = () => (
  <span className="inline-flex w-8 h-8 rounded-full bg-[#AEB93E] items-center justify-center">
    <HiCheck className="w-5 h-5 text-black" />
  </span>
);

const Cross = () => (
  <span className="inline-flex w-8 h-8 rounded-full items-center justify-center">
    <HiX className="w-6 h-6 font-extrabold text-red-500" />
  </span>
);

export default function Scanner() {
  return (
    <section className="w-full  flex items-center justify-center px-4 py-8 my-10 max-w-6xl md:px-8 mx-auto">
      <div className="w-full h-full max-w-6xl bg-[#386641] rounded-3xl px-8 md:px-10 py-12 md:py-16">

        {/* Header */}
        <div className="flex flex-col items-center gap-12 mb-15">
          <h2 className="text-3xl max-w-xl md:text-5xl  text-white text-center leading-snug">
            Olive Food Scanner App vs. The Rest
          </h2>
          <Button 
           variant="white"
           className=''
           icon={<FaApple />}>
            Download for iOS
          </Button>
        </div>

        {/* Table */}
        <div className="w-full">
          {/* Column Headers */}
          <div className="grid grid-cols-6 gap-4 py-4 md:py-15">
            <div className='col-span-3' /> {/* empty label column */}
            {/* Olive */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-15 h-15 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                🫒
              </div>
            </div>
            {/* Competitor 1 - Carrot */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-15 h-15 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                🥕
              </div>
            </div>
            {/* Competitor 2 - B */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-15 h-15 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                🅱️
              </div>
            </div>
          </div>

          {/* Feature Rows */}
          <div className="flex flex-col">
            {features.map((f, i) => (
              <div
                key={i}
                className="grid grid-cols-6 gap-4 items-center py-10 border-b border-black last:border-0"
              >
                <span className="col-span-3 text-white/90 text-sm md:text-lg">
                  {f.label}
                </span>
                <div className="flex justify-center">
                  {f.olive  ? <Check /> : <Cross />}
                </div>
                <div className="flex justify-center">
                  {f.comp1  ? <Check /> : <Cross />}
                </div>
                <div className="flex justify-center">
                  {f.comp2  ? <Check /> : <Cross />}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}