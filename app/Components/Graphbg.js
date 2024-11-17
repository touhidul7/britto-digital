import React from 'react'
import cardbg from '@/public/images/bg/Card-bg.webp'

export default function Graphbg({content, className}) {
    const bg = {
        backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), 
        url(${cardbg.src})
        `,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };  
  return (
    <div style={bg} className={`${className}`}>
      {content}
    </div>
  )
}
