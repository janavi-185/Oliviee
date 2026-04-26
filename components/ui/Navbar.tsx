"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HiChevronDown, HiArrowRight, HiMenu, HiX } from 'react-icons/hi';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" w-full h-16 md:h-20 bg-transparent px-2 flex items-center justify-between  z-50 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M16 28C21.5228 28 26 23.5228 26 18C26 12.4772 21.5228 8 16 8C10.4772 8 6 12.4772 6 18C6 23.5228 10.4772 28 16 28Z" fill="#A5C933" />
              <path d="M16 8C16 8 14 2 20 2" stroke="#4B662C" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="18" r="1.5" fill="#1A2410" />
              <circle cx="20" cy="18" r="1.5" fill="#1A2410" />
              <path d="M14 21C14 21 15 22 16 22C17 22 18 21 18 21" stroke="#1A2410" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-xl md:text-5xl font-bold tracking-tight text-[#A5C933]">olive</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {['Solutions', 'Features', 'Pricing', 'Blog', 'Restaurants', 'Food'].map((item) => (
            <div key={item} className="flex items-center gap-1 cursor-pointer hover:text-olive-primary transition-colors font-medium text-sm md:text-base">
              {item}
              {(item === 'Solutions' || item === 'Blog' || item === 'Food') && (
                <HiChevronDown className="w-4 h-4 opacity-60" />
              )}
            </div>
          ))}
        </div>

        {/* Auth & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-6">
          <Link href="#" className="hidden sm:block font-medium hover:text-olive-primary transition-colors text-sm md:text-base">Sign in</Link>
          <Button icon={<HiArrowRight className="w-4 h-4" />}>
            <span>Get Olive</span>
          </Button>
          
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