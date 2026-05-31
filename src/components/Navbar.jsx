import React from 'react'

export const Navbar = () => {
  return (
    <>
    
      <div className='
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-xl
        rounded-2xl

        flex
        flex-col
        md:flex-row

        items-center
        justify-between

        gap-4

        p-4
      '>

        {/* Title */}
        <h1 className='
          text-lg
          sm:text-2xl
          font-bold
          text-center
          md:text-left
        '>
          Personal Finance Dashboard
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder='Search...'
          className='
            w-full
            md:w-72

            px-5
            py-2

            bg-white/10
            border border-white/20
            rounded-2xl

            outline-none
          '
        />

        {/* Right Section */}
        <div className='flex items-center gap-4'>

          <button className='
            px-4 py-2
            bg-white/10
            rounded-xl
            hover:bg-white/20
            transition
          '>
            Bell
          </button>

          <button className='
            px-4 py-2
            bg-cyan-500
            rounded-xl
            hover:scale-105
            transition
          '>
            Profile
          </button>

        </div>

      </div>

    </>
  )
}