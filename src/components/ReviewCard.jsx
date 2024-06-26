import React from 'react'

function ReviewCard() {
  return (
     <div className={`bg-white border border-gray-300 rounded-lg p-4 text-center shadow transition-transform transform hover:scale-105 ${!item.available ? 'opacity-50' : ''} h-96 md:h-100`}>
        <div className='flex justify-center'>
          <img src="/images/use.png"/>
        
          <p>lorem fjijij efijef rurur vnbvb rfrfjr</p>

          </div>
        </div>
  
  )
}

export default ReviewCard