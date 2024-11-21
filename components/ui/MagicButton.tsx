
import React from 'react'

 const MagicButton = ({title,hancleClick}:
  { title: string;
    hancleClick?: () => void}
 ) => {
  return (
    <div>        
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6">
            {title}
        </button>
    </div>
  )
}

export default MagicButton


        
  
      