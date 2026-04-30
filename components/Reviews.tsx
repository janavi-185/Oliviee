"use client";

// import React from 'react';
import Image from 'next/image';
import { HiStar, HiArrowRight } from 'react-icons/hi';
import { PiFlower } from 'react-icons/pi';

const Reviews = () => {
  return (
    <section className="w-full mx-auto py-24 flex justify-center items-center md:py-40  relative overflow-hidden">
      {/* Background Flower Shape (Icon) */}
      <div className="absolute left-[-15%] top-[5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] opacity-10 pointer-events-none -z-10 text-[#A5C933]">
        <PiFlower className="w-full h-full"  />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-3/4 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative w-full aspect-4/5 md:aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50">
            <Image 
              src="/images/reviews_main.png" 
              alt="Real Mothers" 
              fill 
              className="object-cover grayscale"
            />
          </div>

          <div className="absolute -top-20 -right-8 md:-right-90 z-20">
            <div className="relative flex justify-between">
              <div className="bg-white rounded-xl p-6 shadow-xl w-[280px] md:w-[430px]">
                <p className="text-[#6B725E] text-xs md:text-sm leading-relaxed mb-4">
                  "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry."
                </p>
                <div>
                  <p className="font-bold text-olive-primary text-sm">Megan L.</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <HiStar key={s} className="text-yellow-400 w-3 h-3" />
                    ))}
                  </div>
                </div>
              </div>
              {/* Avatar at Top Right Corner */}
              <div className="absolute bottom-0 -right-13 w-10 h-10 rounded-full shadow-lg overflow-hidden">
                <Image src="https://i.pravatar.cc/100?u=mom1" alt="Megan L." width={56} height={56} className="object-cover" />
              </div>
            </div>
          </div>

          {/* Lila M. Card (Bottom Left) */}
          <div className="absolute -bottom-29 md:right-[-12%] z-30">
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-xl w-[280px] md:w-[430px]">
                <p className="text-[#6B725E] text-xs md:text-sm leading-relaxed mb-4">
                  "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly."
                </p>
                <div>
                  <p className="font-bold text-olive-primary text-sm">Lila M.</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <HiStar key={s} className="text-yellow-400 w-3 h-3" />
                    ))}
                  </div>
                </div>
              </div>
              {/* Avatar at Bottom Right Corner */}
              <div className="absolute bottom-0 -right-13 w-10 h-10 rounded-full  shadow-lg overflow-hidden">
                <Image src="https://i.pravatar.cc/100?u=mom2" alt="Lila M." width={56} height={56} className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Header & Tina B. Card */}
        <div className="flex flex-col mt-20 items-start order-1 lg:order-2 lg:pl-7">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-normal text-olive-primary leading-[0.9] mb-8">
              Real Mothers Real Results
            </h2>
            <button className="flex items-center gap-2 text-[#386641] hover:text-olive-primary transition-all text-md cursor-pointer group">
              read all 3,147+ reviews
              <HiArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tina B. Card (Middle Right */}
          <div className="relative left-[20%]">
            <div className="bg-white rounded-xl p-6 shadow-xl w-[280px] md:w-[430px]">
              <p className="text-[#6B725E] text-xs md:text-sm leading-relaxed mb-4">
                "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy."
              </p>
              <div>
                <p className="font-bold text-olive-primary text-sm">Tina B.</p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <HiStar key={s} className="text-yellow-400 w-3 h-3" />
                  ))}
                </div>
              </div>
            </div>
            {/* Avatar at Center Left */}
            <div className="absolute bottom-0 -left-13  w-10 h-10 rounded-full shadow-lg overflow-hidden">
              <Image src="https://i.pravatar.cc/100?u=mom3" alt="Tina B." width={56} height={56} className="object-cover" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Reviews;


// import React from 'react'

// const Reviews = () => {
//   return (
//     <section className='w-full border mx-auto py-24 md:py-32 px-4 md:px-6 relative overflow-hidden'>
//       <div className="absolute left-[-15%] top-[5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] opacity-10 pointer-events-none -z-10 text-[#A5C933]">
//         <PiFlowerLotusLight className="w-full h-full" />
//       </div>
      

//     </section>
//   )
// }

// export default Reviews