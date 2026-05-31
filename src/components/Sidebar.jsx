import React from 'react'

export const Sidebar = () => {
  return (
    <>
    
      <div className='
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-2xl

        w-full
        md:w-64

        h-auto
        md:h-screen

        rounded-none
        md:rounded-3xl

        p-4
        md:m-4
      '>

        <ul className='flex md:block items-center justify-around md:space-y-6'>

          {/* Logo */}
          <li>
            <img
              src="/logo.png"
              alt="logo"
              className='w-16 md:w-24 mx-auto'
            />
          </li>

          {/* Menu Items */}
          <li className='font-bold text-sm md:text-lg cursor-pointer hover:text-cyan-400 transition'>
            Dashboard
          </li>

          <li className='font-bold text-sm md:text-lg cursor-pointer hover:text-cyan-400 transition'>
            Analytics
          </li>

          <li className='font-bold text-sm md:text-lg cursor-pointer hover:text-cyan-400 transition'>
            Transaction
          </li>

          <li className='font-bold text-sm md:text-lg cursor-pointer hover:text-cyan-400 transition'>
            Settings
          </li>

        </ul>

      </div>

    </>
  )
}