'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import FeedbackCard from './FeedbackCard';

const feedbackData = [
  {
    name: 'John Doe',
    title: 'Web Development Student',
    message: 'This platform has transformed the way I learn. The mentors are supportive and the content is top-notch.',
       avatar: '/images/image1.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'UI/UX Design Student',
    message: 'The courses are well-structured and easy to follow. I feel more confident in my skills now.',
       avatar: '/images/image1.jpg',
  },
  {
    name: 'Ali Khan',
    title: 'Data Science Student',
    message: 'The hands-on projects and peer feedback made a huge difference in my learning journey.',
        avatar: '/images/image1.jpg',
  },
  {
    name: 'Sara Lee',
    title: 'Frontend Developer',
    message: 'I got my first job after completing the program. The portfolio reviews really helped.',
    avatar: '/images/image1.jpg',
  },
];

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    handleResize(); // Set on first load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? feedbackData.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= feedbackData.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleFeedbacks = feedbackData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="w-full bg-background py-20 px-8 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subheading="Student Voices"
          heading={
            <>
              Hear What Our <br /> Students Say
            </>
          }
        />

        <div className="relative mt-10 flex  items-center justify-center">
          {/* Left Arrow */}
          <button
            className="absolute -left-3 btn-sm sm:btn-md md:-left-10 z-10 btn btn-circle border-none bg-primary text-white hover:bg-blue-500"
            onClick={handlePrev}
          >
            <ArrowLeft />
          </button>

          {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 sm:px-4 transition-all duration-500 ease-in-out w-full">
            {visibleFeedbacks.map((feedback, index) => (
              <FeedbackCard
                key={index}
                name={feedback.name}
                title={feedback.title}
                message={feedback.message}
                avatar={feedback.avatar}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute  -right-3 btn-sm sm:btn-md  md:-right-10 z-10 btn btn-circle border-none bg-primary text-white hover:bg-blue-500"
            onClick={handleNext}
          >
            <ArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}



// import { ArrowLeft, ArrowRight } from 'lucide-react';

// const FeedbackSection = () => {
//     return (
//         <section className="w-full   py-16 px-4 md:px-10 lg:px-20 bg-amber-300">

//             <div>
//                 <SectionHeader subheading="Student Feedback" heading="What our student say" />
//             </div>
//             <div className="relative w-full flex gap-2 mx-4 justify-center bg-blue-500 py-4">
//                 <FeedbackCard feedback={{ text: "This is a sample feedback text.", author: "John Doe", position: "Student" }} /> 
//                 <FeedbackCard feedback={{ text: "This is a sample feedback text.", author: "John Doe", position: "Student" }} />
//                  <button className="btn btn-circle btn-sm md:btn-md absolute left-4 top-1/2 z-10 "> R </button>
//                  <button className="btn btn-circle btn-sm md:btn-md absolute right-4 top-1/2 z-10 "> R </button>
//             </div>

//         </section>
//     )
// }

// export default FeedbackSection;