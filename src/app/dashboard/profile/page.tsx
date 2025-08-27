import React from 'react'
import SubFollwers from '../_components/SubFollwers'
import StoryPage from './_components/StoryPage'
import Trending from './_components/Trending'
import CreateTweet from './_components/createTweet'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Twitty  | Profile",
  description: "Explore what Happen!",
};

export default function page() {
  return (
    <div className='flex'>
        <div className=' min-h-screen min-w-full lg:min-w-3/4 '>
           <div className=''><StoryPage/></div> 
           <div className=''><CreateTweet/></div>
        
        </div>
        <div className='hidden lg:block  lg:min-w-1/4'> 
            <div className=' h-[410px] '><Trending/></div>
            <div className='mt-3 min-h-1/3'> <SubFollwers/></div>
        </div>
    </div>
  )
}
