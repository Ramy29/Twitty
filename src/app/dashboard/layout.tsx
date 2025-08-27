import { ModeToggle } from '@/components/themes/toggle'
import React from 'react'
import { Sidebar } from './_components/side-bar'

export default function layout({children}) {
  return (
    <div className='flex mx-auto'>
        <div className='lg:w-56 min-h-screen '><Sidebar/></div>
         <div className=' flex-1'>{children} </div>
    </div>
  )
}
