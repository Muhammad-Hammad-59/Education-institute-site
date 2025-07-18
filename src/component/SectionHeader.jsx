'use client'

export default function SectionHeader({ subheading, heading, align = 'center', className = '' }) {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={`${alignment[align]} mb-16 ${className}`}>
      <p className="text-primary font-semibold uppercase tracking-wide text-md">
        {subheading}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        {heading}
      </h2>
    </div>
  )
}
