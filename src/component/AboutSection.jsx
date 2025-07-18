'use client'

import { useState } from 'react'
import { Play, Section } from 'lucide-react'
import SectionHeader from './SectionHeader'

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="w-full bg-background py-20 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
        {/* Left: Video Section */}
        <div className="relative order-2 lg:order-1 w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          {!isPlaying ? (
            <>
              {/* Thumbnail (you can replace with any image or iframe thumbnail) */}
              <img
                src="/images/videothumb.jpg"
                alt="University Video"
                className="object-cover w-full h-full"
              />
              {/* Play Icon Overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
                onClick={() => setIsPlaying(true)}
              >
                <span className="bg-white text-primary p-4 rounded-full shadow-lg">
                  <Play size={48}/>
                </span>
              </button>
            </>
          ) : (
            // Replace with your video URL or embed iframe
            <iframe
             src="https://www.youtube.com/embed/nUeg_8_L0Bk?si=Z1eyD3m5ilaOSwes"
              title="University Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>

        {/* Right: Text Section */}
        <div className='order-1 lg:order-2'>
          {/* <p className="text-primary font-semibold uppercase tracking-wide text-sm mb-2">
            About University
          </p>
          <h2 className="text-3xl line-clamp-2 md:text-4xl font-bold mb-4">
            Nurturing Tomorrow&apos;s <br/>Leaders Today
          </h2> */}

          <SectionHeader 
          subheading=" About University" 
          heading={
            <>
                Nurturing Tomorrow&apos;s <br /> Leaders Today
            </>
          }  
          align='left' />

          <p className="text-base text-gray-600 leading-relaxed">
            At EduCorp University, we are committed to providing transformative education that
            shapes the future of our students. With world-class faculty, state-of-the-art facilities,
            and a passion for innovation, we foster a culture of excellence and global citizenship.
            Our mission is to empower individuals with the knowledge and skills to make a meaningful impact.
          </p>
          <p className="text-base mt-2 text-gray-600 leading-relaxed">
            At EduCorp University, we are committed to providing transformative education that
            shapes the future of our students. With world-class faculty, state-of-the-art facilities,
            and a passion for innovation, we foster a culture of excellence and global citizenship.
            Our mission is to empower individuals with the knowledge and skills to make a meaningful impact.
          </p>
        </div>
      </div>
    </section>
  )
}
