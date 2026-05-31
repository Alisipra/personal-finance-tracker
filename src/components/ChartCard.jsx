import React from 'react'

export const ChartCard = (props) => {
  const card=props.chart;
  
  return (
    <>

      <div className='
        bg-white/10
        backdrop-blur-2xl
        border border-white/20
        shadow-xl
        rounded-3xl
        p-6
        min-h-[300px]
        w-full

        hover:scale-[1.02]
        transition
        duration-300
      '>

        {/* Heading */}
        <div className='flex justify-between items-center mb-6'>

          <h1 className='text-lg sm:text-2xl font-bold'>
            {card.title}
          </h1>

          <span className='text-sm opacity-70'>
            {card.title}
          </span>

        </div>

        {/* Fake Chart Area */}
        <div className='
          h-52
          rounded-2xl

          bg-gradient-to-br
          from-cyan-500/20
          to-blue-500/20

          flex
          items-center
          justify-center
        '>

          <p className='text-xl opacity-70'>
            Chart Here
          </p>

        </div>

      </div>

    </>
  )
}