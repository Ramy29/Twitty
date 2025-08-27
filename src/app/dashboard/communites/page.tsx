import React from 'react'
import Peoples from '../_components/Peoples'
import Trending from '../profile/_components/Trending'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Twitty  | Communites",
  description: "Follow other people!",
};

export default function community() {
  return (
    <>
       <div className='flex overflow-hidden'>
        <div className='min-h-screen min-w-full lg:min-w-2/4'><Peoples/></div>
        <div className='hidden lg:block max-h-screen pb-6  lg:min-w-1/4'><Trending/></div>
       </div>
    </>
  )
}
