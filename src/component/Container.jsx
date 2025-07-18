import { ReactNode } from 'react'

 

const Container = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto  md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container