"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaApple } from 'react-icons/fa';
import { HiPlus, HiMinus } from 'react-icons/hi';
import Button from './ui/Button';

const faqs = [
  {
    question: 'What is the Food Scanner App and how does it work?',
    answer: 'Olive is a comprehensive tool designed to help busy parents make informed food choices. By scanning product barcodes, it quickly identifies harmful ingredients and suggests safer alternatives, ensuring that you always stay ahead of potential health risks.',
  },
  {
    question: 'How does Olive ensure the accuracy of the Food Scanner App results?',
    answer: 'Olive leverages an extensive, up-to-date food database and expert nutritional guidelines to offer precise feedback. The Food Scanner App cross-references real-world data with independent analyses to deliver reliable, actionable insights tailored for your familys needs',
  },
  {
    question: 'Which products can I scan with the Food Scanner App?',
    answer: 'Olive is versatile, allowing you to scan a wide range of food and bottled water products. Olives technology is designed to pinpoint nutritional details and detect potential contaminants, making it easier than ever to keep your family safe.',
  },
  {
    question: "Can the Food Scanner App be customized to my family's dietary needs?",
    answer: 'Absolutely. With Olives fully customizable filters, the food scanner app lets you set dietary preferences and allergies. This personalization ensures that every recommendation, from ingredient filtering to healthier product suggestions, aligns perfectly with your familys unique needs.',
  },
  {
    question: 'Is my data secure when I use the Olive?',
    answer: 'Yes, your privacy is our top priority. Olives food scanner app employs robust security protocols to safeguard your personal information while delivering transparent and accurate nutritional insights, allowing you to rest easy with every scan.',
  },
  {
    question: 'When will the Android version of the Food Scanner App be available?',
    answer: 'Olive is currently available on iOS, with plans to launch the Android version soon. We understand how crucial it is for every parent to access reliable nutritional data, and the food scanner app is constantly evolving to meet that need.',
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#c8c4a8] last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#253612] text-sm md:text-base font-normal">{question}</span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-[#253612] flex items-center justify-center">
          {open
            ? <HiMinus className="w-4 h-4 text-white" />
            : <HiPlus className="w-4 h-4 text-white" />
          }
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-[#5a6347] leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="w-full px-4 md:px-8 mx-auto">
      <div className='w-full'>

      {/* Independence Section */}
      <div className="flex pl-15 py-10 flex-col mb-24">
        <div className="w-full">
          <h2 className="text-6xl xl:text-9xl font-semibold text-[#FF9DB4] leading-[0.98]">
            100%Independent.
          </h2>
        </div>
        <div className="flex gap-12 ">
          <h3 className="text-6xl xl:text-9xl font-semibold text-[#FF9DB4] leading-[0.98]">
            Always.
          </h3>
          <p className="text-[#386641] pt-5 text-lg md:text-base xl:text-3xl max-w-4xl font-bold">
            We <span className="text-[#AEB93E]">never monetize</span> through brand deals, affiliate links, or ads — so you can trust our <span className="text-[#AEB93E]">recommendations</span> are always aligned with our users.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-[#FFF9EB] rounded-3xl px-8 md:px-16 py-14 md:py-20 relative overflow-hidden">

        {/* Header */}
        <div className="flex flex-col items-center mb-12 relative">
          {/* Mascot positioned top-right of heading */}
          <div className="flex items-start gap-4 justify-center w-full">
            <h2 className="text-3xl md:text-5xl font-normal text-[#253612] text-center leading-snug">
              Frequently Asked<br />Questions by Parents
            </h2>
            <div className="w-25 h-25 shrink-0 mt-2">
              <Image
                src="/images/faq.png"
                alt="Olive mascot"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-8">
            <Button variant="primary" icon={<FaApple />}>
              Download for iOS
            </Button>
          </div>
        </div>

        {/* FAQ List */}
        <div className="w-full">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
      </div>

    </section>
  );
}