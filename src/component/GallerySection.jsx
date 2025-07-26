// 'use client'

// import SectionHeader from './SectionHeader'
// import Image from 'next/image'
// import { ArrowRight } from 'lucide-react'

// const imageList = [
//   '/images/campus1.jpg',
//   '/images/campus2.jpg',
//   '/images/campus3.jpg',
//   '/images/campus4.jpg',
// ]

// export default function GallerySection() {
//   return (
//     <section className="w-full bg-background py-20 px-4 md:px-10 lg:px-20">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <SectionHeader
//           subheading="Campus Tour"
//           heading={
//             <>
//               Explore Our Beautiful <br /> University Spaces
//             </>
//           }
//         />

//         {/* Image Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           {imageList.map((src, idx) => (
//             <div key={idx} className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-md">
//               <Image
//                 src={src}
//                 alt={`Campus ${idx + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="text-center">
//           <button className="btn btn-primary gap-2">
//             See More Here <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// 'use client'

// import SectionHeader from './SectionHeader'
// import Image from 'next/image'
// import { ArrowRight } from 'lucide-react'

// const imageList = [
//   '/images/campus1.jpg',
//   '/images/campus2.jpg',
//   '/images/campus3.jpg',
//   '/images/campus4.jpg',
// ]

// export default function ImageRowSection() {
//   return (
//     <section className="w-full bg-background py-16 px-4 md:px-10 lg:px-20">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <SectionHeader
//           subheading="Campus Tour"
//           heading={
//             <>
//               Explore Our Beautiful <br /> University Spaces
//             </>
//           }
//         />

//         {/* Image Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
//           {imageList.map((src, idx) => (
//             <div
//               key={idx}
//               className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-md"
//             >
//               <Image
//                 src={src}
//                 alt={`Campus ${idx + 1}`}
//                 fill
//                 className="object-cover transition-transform hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="text-center">
//           <button className="btn btn-primary gap-2">
//             See More Here <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import SectionHeader from './SectionHeader'
import Image from 'next/image'
 
import { ArrowRight, MoveRight } from 'lucide-react'
import Button from './Button'

const imageList = [
  '/images/campus1.jpg',
  '/images/campus2.jpg',
  '/images/campus3.jpg',
  '/images/campus4.jpg',
]

export default function GallerySection() {
  return (
    <section className="w-full bg-background py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionHeader
          subheading="Gallery"
          heading={
            <>
              Campus Photos
            </>
          }
        />

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {imageList.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                fill
                priority={false}
                placeholder='blur'
                blurDataURL=' '
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <Button label="See more here" className='bg-primary' size='lg' icon={<MoveRight size={20}  strokeWidth={1}  />} />
        </div>
      </div>
    </section>
  )
}

