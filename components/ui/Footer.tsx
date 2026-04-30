"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiCheckCircle } from 'react-icons/hi';
import { FaApple } from 'react-icons/fa';
import Button from './Button';

import { PiFlowerLotusLight } from 'react-icons/pi';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-8 pb-8">
      {/* CTA Section */}
      <div className="w-full max-w-7xl mx-auto rounded-[48px] overflow-hidden relative mb-8 min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Background Image */}
        <Image 
          src="/Users/janavi/.gemini/antigravity/brain/aeac2f3e-46a2-4391-8867-72d5c632ce96/family_eating_restaurant_1777470117528.png"
          alt="Family eating together"
          fill
          className="object-cover brightness-[0.7]"
        />
        
        {/* Decorative Icons (Replaced SVGs) */}
        <div className="absolute top-[-5%] left-[-5%] w-64 h-64 opacity-30 text-white pointer-events-none">
          <HiOutlinePlusCircle className="w-full h-full rotate-12" />
        </div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 opacity-30 text-white pointer-events-none">
          <PiFlowerLotusLight className="w-full h-full rotate-45" />
        </div>

        <div className="relative z-10 p-8 md:p-20 flex flex-col gap-8 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Keep your family<br />safe with Olive
          </h2>
          
          <ul className="flex flex-col gap-4">
            {[
              "Effortless food scanning",
              "Peace of mind for parents",
              "Healthy product recommendations"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-white">
                <HiCheckCircle className="w-6 h-6 shrink-0" />
                <span className="text-lg md:text-xl font-medium">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Button variant="white" icon={<FaApple />} className="!px-8 !py-4">
              Download for iOS
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto bg-[#386641] rounded-[48px] p-8 md:p-16 text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Links Column 1 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-semibold text-lg">Explore More Olive Tools</h4>
            <ul className="flex flex-col gap-3 text-white/80 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Explore Foods</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Allergy Scanner App</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Gluten Free Scanner</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Dairy Free App</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Food Ingredient Checker</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-semibold text-lg">About</h4>
            <ul className="flex flex-col gap-3 text-white/80 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Email us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact us</Link></li>
            </ul>
          </div>

          {/* Spacer for desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Newsletter Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image 
                src="/images/footer.png" 
                alt="Olive Logo" 
                width={100} 
                height={40} 
                className="brightness-0 invert h-auto w-auto" 
              />
            </div>
            <p className="text-white/90 max-w-sm leading-relaxed">
              Get the latest lab testing data sent directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative w-full">
                <input 
                  type="email" 
                  placeholder="Enter Email address" 
                  className="w-full bg-[#4a7a53] border-none rounded-full px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <Button variant="white" className="w-full sm:w-auto px-10 py-4 !rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-white/70">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Medical Consent</Link>
            <Link href="#" className="hover:text-white transition-colors">Sign in</Link>
          </div>
          <p className="text-sm text-white/70">
            © 2026 Olive Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;