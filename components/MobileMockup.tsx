"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiHeart } from 'react-icons/hi';
import { PiWarningCircleLight, PiFlaskLight, PiShieldCheckLight, PiDropLight, PiTrendUpLight } from 'react-icons/pi';

const MOCKUP_DATA = [
  {
    id: 1,
    image: "/images/1.png",
    title: "Strawberry Lemon Poppi Prebiotic Soda",
    subtitle: "Poppi",
    score: 85,
    scoreColor: "bg-green-500",
    attributes: [
      { label: "Contaminants", value: "0", icon: PiWarningCircleLight, status: "good" },
      { label: "Fluoride", value: "No", icon: PiFlaskLight, status: "good" },
      { label: "PFAS", value: "No", icon: PiShieldCheckLight, status: "good" },
      { label: "Microplastics", value: "None", icon: PiDropLight, status: "good" },
      { label: "pH Level", value: "3.5", icon: PiTrendUpLight, status: "neutral" },
    ],
    highlightTitle: "Ingredients",
    highlight: { title: "Added Sugar", value: "4g", badge: "Low", badgeColor: "text-green-600 bg-green-50" }
  },
  {
    id: 2,
    image: "/images/2.png",
    title: "Raincoast Crisps Fig and Olive",
    subtitle: "Lesley Stowe",
    score: 72,
    scoreColor: "bg-yellow-400",
    attributes: [
      { label: "Contaminants", value: "2", icon: PiWarningCircleLight, status: "warning" },
      { label: "Fluoride", value: "No", icon: PiFlaskLight, status: "good" },
      { label: "PFAS", value: "No", icon: PiShieldCheckLight, status: "good" },
      { label: "Microplastics", value: "Minimal", icon: PiDropLight, status: "good" },
      { label: "pH Level", value: "N/A", icon: PiTrendUpLight, status: "neutral" },
    ],
    oliverSays: "This product's moderate score is due to the presence of some processed ingredients and higher sodium levels. While it contains natural figs and olives, the added salts and preservatives may not align with a strict low-sodium diet. Consider moderation.",
    highlightTitle: "Nutrition",
    highlight: { title: "Sodium", value: "150mg", badge: "Moderate", badgeColor: "text-yellow-600 bg-yellow-50" }
  },
  {
    id: 3,
    image: "/images/3.png",
    title: "San Pellegrino Sparkling Natural Mineral Water",
    subtitle: "Sanpellegrino",
    score: 52,
    scoreColor: "bg-yellow-500",
    attributes: [
      { label: "Contaminants", value: "7", icon: PiWarningCircleLight, status: "bad" },
      { label: "Fluoride", value: "Yes", icon: PiFlaskLight, status: "bad" },
      { label: "PFAS", value: "No", icon: PiShieldCheckLight, status: "good" },
      { label: "Microplastics", value: "Minimal", icon: PiDropLight, status: "good" },
      { label: "pH Level", value: "5.7", icon: PiTrendUpLight, status: "neutral" },
    ],
    highlightTitle: "Contaminants",
    highlight: { title: "Nitrate", value: "0.75 mg/L", badge: "5x limit", badgeColor: "text-red-500 bg-red-50" }
  },
  {
    id: 4,
    image: "/images/newavacado.png",
    title: "The Good Crisp Company Sea Salt & Vinegar",
    subtitle: "The Good Crisp Company",
    score: 45,
    scoreColor: "bg-orange-500",
    attributes: [
      { label: "Contaminants", value: "4", icon: PiWarningCircleLight, status: "warning" },
      { label: "Fluoride", value: "No", icon: PiFlaskLight, status: "good" },
      { label: "PFAS", value: "No", icon: PiShieldCheckLight, status: "good" },
      { label: "Microplastics", value: "None", icon: PiDropLight, status: "good" },
      { label: "pH Level", value: "N/A", icon: PiTrendUpLight, status: "neutral" },
    ],
    oliverSays: "This snack's low score is mainly due to the presence of processed sugars like maltodextrin and several additives that can be harmful, which doesn't align with your goal of avoiding processed foods and additives for your family. It's best to look for healthier alternatives that are more kid-friendly and support better overall health.",
    highlightTitle: "Nutrition",
    highlight: { title: "Fat", value: "10g", badge: "High", badgeColor: "text-orange-600 bg-orange-50" }
  },
  {
    id: 5,
    image: "/images/product_center.jpeg",
    title: "Larabar Peanut Butter Chocolate Chip",
    subtitle: "Larabar",
    score: 90,
    scoreColor: "bg-green-500",
    attributes: [
      { label: "Contaminants", value: "0", icon: PiWarningCircleLight, status: "good" },
      { label: "Fluoride", value: "No", icon: PiFlaskLight, status: "good" },
      { label: "PFAS", value: "No", icon: PiShieldCheckLight, status: "good" },
      { label: "Microplastics", value: "None", icon: PiDropLight, status: "good" },
      { label: "pH Level", value: "N/A", icon: PiTrendUpLight, status: "neutral" },
    ],
    highlightTitle: "Nutrition",
    highlight: { title: "Protein", value: "5g", badge: "Good", badgeColor: "text-green-600 bg-green-50" }
  }
];

const MobileMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with San Pellegrino

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCKUP_DATA.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeData = MOCKUP_DATA[currentIndex];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'good': return 'bg-[#A7E6B9]';
      case 'bad': return 'bg-[#FCA5A5]';
      case 'warning': return 'bg-[#FCD34D]';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="relative w-full max-w-[340px] md:max-w-[320px] h-[600px] md:h-[750px] mx-auto mt-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
      {/* <div className="absolute inset-0 bg-olive-primary/5 blur-3xl rounded-[3rem] -z-10" /> */}
      
      {/* Phone Body */}
      <div className="relative w-full h-full bg-[#F5FAF6] rounded-[3rem] border-10 md:border-12 border-zinc-200 shadow-xl overflow-hidden flex flex-col">
        
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
          <div className="w-28 h-6 bg-black rounded-full relative mt-1 flex items-center justify-end px-2">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700/50" />
          </div>
        </div>

        {/* Top Status Bar (fake) */}
        <div className="h-10 w-full shrink-0" />

        {/* Carousel Area */}
        <div className="relative h-36 w-full flex items-center justify-center mt-2">
          <div className="absolute w-[200%] flex justify-center items-center gap-4 px-10">
            {MOCKUP_DATA.map((item, idx) => {
              // Calculate relative position (-2, -1, 0, 1, 2)
              let offset = idx - currentIndex;
              if (offset < -2) offset += MOCKUP_DATA.length;
              if (offset > 2) offset -= MOCKUP_DATA.length;

              const isActive = offset === 0;
              
              // Scale and Opacity logic
              let scale = 1;
              let opacity = 1;
              let zIndex = 30;
              let x = 0;

              if (offset === 0) {
                scale = 1;
                opacity = 1;
                zIndex = 40;
                x = 0;
              } else if (offset === -1) {
                scale = 0.8;
                opacity = 0.6;
                zIndex = 30;
                x = -80;
              } else if (offset === 1) {
                scale = 0.8;
                opacity = 0.6;
                zIndex = 30;
                x = 80;
              } else if (offset === -2) {
                scale = 0.6;
                opacity = 0.2;
                zIndex = 20;
                x = -140;
              } else if (offset === 2) {
                scale = 0.6;
                opacity = 0.2;
                zIndex = 20;
                x = 140;
              }

              return (
                <motion.div
                  key={item.id}
                  className="absolute w-30 h-30 rounded-3xl overflow-hidden shadow-lg bg-white flex items-center justify-center border border-black/5"
                  initial={false}
                  animate={{
                    x: x,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <div className="relative w-full h-full p-2">
                     <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-2xl"
                     />
                     {!isActive && <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-t-4xl pt-3 px-6 shadow-lg relative flex flex-col h-full overflow-hidden">
          
          {/* Pull pill */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-200 rounded-full" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full"
            >
              {/* Header Info */}
              <div className="flex gap-4 items-start mb-6">
                <div className="relative w-12 h-20 shrink-0">
                  <Image src={activeData.image} alt={activeData.title} fill className="object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-1 line-clamp-2">
                    {activeData.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">{activeData.subtitle}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${activeData.scoreColor}`} />
                      <div className="flex items-baseline gap-1">
                        <span className="font-bold text-gray-900">{activeData.score}</span>
                        <span className="text-gray-500 text-[10px]">/100 Limit</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <HiHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Conditional Layout: Oliver Says or Normal Highlight */}
              {activeData.oliverSays ? (
                <div className="flex-1 overflow-y-auto pb-4 [&::-webkit-scrollbar]:hidden">
                  <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] border border-black/5 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Image src="/images/avocadoFamily.png" alt="Oliver" width={32} height={32} className="object-contain" />
                      <span className="font-bold text-gray-900 text-lg">Oliver Says:</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">"{activeData.oliverSays}"</p>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Breakdown</h3>
                  
                  {/* Attributes Table */}
                  <div className="space-y-3">
                    {activeData.attributes.map((attr, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <attr.icon className="w-4 h-4 text-gray-400" />
                          <span>{attr.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{attr.value}</span>
                          <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(attr.status)}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col overflow-y-auto pb-4 [&::-webkit-scrollbar]:hidden">
                  {/* Attributes Table */}
                  <div className="space-y-3 mb-6">
                    {activeData.attributes.map((attr, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <attr.icon className="w-4 h-4 text-gray-400" />
                          <span>{attr.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{attr.value}</span>
                          <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(attr.status)}`} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Card */}
                  <div className="mt-auto">
                    <h4 className="font-bold text-gray-900 mb-3">{activeData.highlightTitle}</h4>
                    <div className="bg-gray-50/50 rounded-2xl p-4 border border-black/5 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">{activeData.highlight.title}</span>
                        <span className="text-gray-500 text-sm">{activeData.highlight.value}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${activeData.highlight.badgeColor}`}>
                        {activeData.highlight.badge}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default MobileMockup;
