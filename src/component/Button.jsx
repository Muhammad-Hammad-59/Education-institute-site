'use client'

import { MoveRight } from 'lucide-react'
import clsx from 'clsx'

export default function Button({ label = 'Explore more', size = 'md', className = '', icon ={MoveRight} , ...props }) {
  const sizeClasses = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
  }

  return (
    <button
      className={clsx(
        'btn text-black font-normal border-none rounded-3xl gap-2',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {label}
      {/* {icon && <MoveRight size={20} strokeWidth={1} />} */}
      {icon}
    </button>
  )
}
