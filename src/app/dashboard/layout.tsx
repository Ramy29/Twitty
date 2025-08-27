import React, { ReactNode } from 'react'
import { Sidebar } from './_components/side-bar'

interface AuthLayoutProps {
  children: ReactNode;
}

export default function layout({children}:AuthLayoutProps ) {
  return (
    <div className='flex mx-auto'>
        <div className='lg:w-56 min-h-screen '><Sidebar/></div>
         <div className=' flex-1'>{children} </div>
    </div>
  )
}
