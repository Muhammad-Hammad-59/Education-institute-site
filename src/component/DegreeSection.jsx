'use client'

import DegreeCard from './DegreeCard'
import degreePrograms from '@/data/degree'
import SectionHeader from './SectionHeader'

export default function DegreeSection() {
  return (
    <section className="w-full bg-background py-12 px-4 md:px-10 lg:px-20">
      {/* Section Header */}
      {/* <div className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-wide text-md">
          Our Program
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          What We Offer
        </h2>
      </div> */}

      <SectionHeader subheading="Our Program" heading="What We Offer" />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {degreePrograms.map((program) => (
          <DegreeCard
            key={program.id}
            title={program.title}
            description={program.description}
            imageSrc={program.imageSrc}
          />
        ))}
      </div>
    </section>
  )
}
