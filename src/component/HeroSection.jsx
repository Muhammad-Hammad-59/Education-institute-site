"use client";

import { MoveRight } from "lucide-react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-gradient-to-t from-[#08003a]/50 to-[#08003acc]/50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-3/4">
          <h1 className="mb-5 text-3xl text-white   font-extrabold font-stretch-100% md:line-clamp-2 md:text-4xl lg:text-6xl ">We Ensure better education for a better world</h1>
          <p className="mb-5 text-base font-normal font-stretch-100%">
        Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education
          </p>
        

          <Button label="Explor more" size="lg" className="bg-white text-black" icon={<MoveRight  size={20} strokeWidth={1}  />}  />
        </div>
      </div>
    </div>
  );
};


export default HeroSection;
