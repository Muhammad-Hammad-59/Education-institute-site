"use client";

import { GraduationCap } from "lucide-react";

export default function DegreeCard({
  imageSrc,
  title,
  description,
  icon = <GraduationCap size={48} />,
}) {
  return (
    <div className="relative w-full h-72 overflow-hidden rounded-xl shadow-md group cursor-pointer transition-transform duration-300 hover:scale-[1.01]">
      {/* Image */}
      <img src={imageSrc} alt={title} className="object-cover w-full h-full" />

      {/* Overlay Content */}
      <div
        className="absolute inset-0 bg-blue-700/40 flex flex-col items-center justify-center text-white px-4 text-center 
                      translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
      >
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}
