"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HiChevronDown, HiArrowRight, HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

const NAV_LINKS = ['Solutions', 'Features', 'Pricing', 'Blog', 'Restaurants', 'Food'];

const SOLUTIONS_ITEMS = [
  {
    icon: '🥜',
    bgColor: 'bg-orange-50',
    title: 'Allergy Scanning',
    description: 'Scan groceries and even bottled water to reveal hidden ingredients'
  },
  {
    icon: '🌾',
    bgColor: 'bg-yellow-50',
    title: 'Gluten Free Scanning',
    description: 'Wheat, barley, rye, or their derivatives, the scanner flags any gluten-containing ingredients'
  },
  {
    icon: '🥛',
    bgColor: 'bg-blue-50',
    title: 'Dairy and Lactose Scanning',
    description: 'Detect common dairy-derived ingredients like casein, whey, lactose, and more'
  },
  {
    icon: '✅',
    bgColor: 'bg-green-50',
    title: 'Ingredient Checking',
    description: 'Decode complex ingredient labels in seconds, with easy-to-understand alerts.'
  }
];

const BLOG_ITEMS = [
  {
    bgTheme: 'bg-[#4F7942]',
    bgOpacity: 'opacity-30',
    wrapperBg: 'bg-olive-primary/10',
    title: (
      <>
        Modern-Day Miracle in<br />Salinas, California
      </>
    ),
    description: "One author's journey from faith-based organic advocacy to witnessing a..."
  },
  {
    bgTheme: 'bg-amber-900',
    bgOpacity: 'opacity-20',
    wrapperBg: 'bg-amber-900/10',
    title: "We Bought Eggs From Every Store... What We Discovered About 'Pasture-Free,'...",
    description: "Not all eggs are created equal. We decoded the confusing labels on egg..."
  }
];

const FOOD_ITEMS = [
  { icon: '🥣', name: 'Breakfast Cereals' },
  { icon: '🥫', name: 'Sauces And Condiments' },
  { icon: '🥨', name: 'Snacks Salty' },
  { icon: '🍫', name: 'Snacks Sweet' },
  { icon: '🍨', name: 'Ice Cream And Frozen Dairy' },
  { icon: '👶', name: 'Baby And Infant Food' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative w-full h-16 md:h-20 bg-transparent px-2 flex items-center justify-between z-50 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Olive Logo"
            width={300}
            height={88}
            className="object-contain h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((item) => (
            <div key={item} className="relative group py-6">
              <div className="flex items-center cursor-pointer hover:text-olive-primary transition-colors font-medium text-sm md:text-sm">
                {item}
                {(item === 'Solutions' || item === 'Blog' || item === 'Food') && (
                  <HiChevronDown className="w-4 h-4 opacity-60 group-hover:rotate-180 transition-transform" />
                )}
              </div>

              {/* Solutions Dropdown */}
              {item === 'Solutions' && (
                <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[750px] bg-white rounded-3xl shadow-xl border border-black/5 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-50 flex gap-6 cursor-default">
                  <div className="flex-1 grid grid-cols-2 gap-x-3 gap-y-6">
                    {SOLUTIONS_ITEMS.map((sol, idx) => (
                      <div key={idx} className="flex gap-4 cursor-pointer group/item">
                        <div className={`text-3xl ${sol.bgColor} w-12 h-12 flex items-center justify-center rounded-xl shrink-0 transition-transform`}>
                          {sol.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 group-hover/item:text-olive-primary transition-colors">{sol.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed">{sol.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-[200px] relative rounded-3xl overflow-hidden shrink-0 group/card cursor-pointer bg-olive-primary/10">
                    <div className="absolute inset-0 bg-[#4F7942] opacity-20  transition-transform duration-500" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-5 right-5 flex justify-between items-end">
                      <h4 className="text-white font-bold text-xl leading-tight">Modern-Day Miracle in<br/>Salinas, California</h4>
                      <HiArrowRight className="text-white w-6 h-6 group-hover/card:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              )}

              {/* Blog Dropdown */}
              {item === 'Blog' && (
                <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[850px] bg-white rounded-3xl shadow-xl border border-black/5 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-50 flex gap-8 cursor-default">
                  {BLOG_ITEMS.map((blog, idx) => (
                    <div key={idx} className={`flex-1 flex gap-5 cursor-pointer group/blog${idx}`}>
                      <div className={`relative w-36 h-36 shrink-0 rounded-2xl overflow-hidden ${blog.wrapperBg}`}>
                        <div className={`absolute inset-0 ${blog.bgTheme} ${blog.bgOpacity} group-hover/blog${idx}:scale-105 transition-transform duration-500`} />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className={`font-semibold text-gray-900 mb-2 leading-tight text-lg group-hover/blog${idx}:text-olive-primary transition-colors`}>
                          {blog.title}
                        </h4>
                        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{blog.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Food Dropdown */}
              {item === 'Food' && (
                <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-3xl shadow-xl border border-black/5 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 z-50 grid grid-cols-2 gap-x-8 cursor-default">
                  {FOOD_ITEMS.map((food, idx) => (
                    <div key={idx} className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors group/food">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#FDF8F0] text-2xl rounded-xl  transition-transform">
                        {food.icon}
                      </div>
                      <span className="font-medium text-gray-900 group-hover/food:text-olive-primary transition-colors">{food.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Auth & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="#" className="hidden sm:block font-medium hover:text-olive-primary transition-colors text-sm md:text-base">Sign in</Link>
          <button className='bg-olive-primary text-white px-5 py-3 rounded-full flex items-center gap-2 hover:bg-olive-primary/90 transition-colors cursor-pointer'>
            <span>Get Olive</span>
            <HiArrowRight className="w-4 h-4" />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX className="w-6 h-6 text-olive-primary" /> : <HiMenu className="w-6 h-6 text-olive-primary" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-x-4 top-24 bg-white rounded-3xl border border-black/5 shadow-2xl z-40 lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col px-6 gap-4">
          {['Solutions', 'Features', 'Pricing', 'Blog', 'Restaurants', 'Food'].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-lg font-medium text-olive-primary hover:translate-x-2 transition-transform py-2 border-b border-black/5 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link href="#" className="sm:hidden text-lg font-medium text-olive-primary pt-4" onClick={() => setIsOpen(false)}>
            Sign in
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;