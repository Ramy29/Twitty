'use client'

import { tweets } from '@/lib/dummy-data/tweets'
import { Heart, MessageCircle, Repeat2, Upload } from 'lucide-react'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { motion } from "framer-motion"

export default function CreateTweet() {
  const [displayedTweets, setDisplayedTweets] = useState(tweets.slice(0, 5)) // عرض 5 تغريدات أولاً
  const [hasMore, setHasMore] = useState(true)

  const fetchMoreTweets = () => {
    if (displayedTweets.length >= tweets.length) {
      setHasMore(false)
      return
    }

    // Simulate API fetch delay
    setTimeout(() => {
      setDisplayedTweets(prev => [
        ...prev,
        ...tweets.slice(prev.length, prev.length + 3) 
      ])
    }, 1000)
  }

  return (
    <motion.div
    initial={{ x:'300vh'  }}
        animate={{ x:0 }}
        transition={{ duration: 2 }}
    id="scrollableDiv" className='h-96 overflow-auto px-3 scrollbar-hide'>
      <InfiniteScroll
        dataLength={displayedTweets.length}
        next={fetchMoreTweets}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center py-4">
            <p className="text-ring">Loading...</p>
          </div>
        }
        endMessage={
          <p className="text-center text-ring py-4">
            No more..!
          </p>
        }
        scrollableTarget="scrollableDiv"
      >
        <div className='space-y-4'>
          {displayedTweets.map((tweet) => (
            <div key={tweet.id} className='w-full p-4 rounded-lg shadow'>
              <p className='flex items-center text-sm mb-2 text-ring'>
                <Repeat2 className='mr-2' size={20} /> {tweet.retweeter} Retweeted
              </p>
              
              <div className='flex gap-3'>
                <img
                  src={tweet.profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                
                <div className='flex-1'>
                  <div className='flex items-center gap-1'>
                    <h3 className='font-bold'>{tweet.name}</h3>
                    <span className='text-sm text-ring'>{tweet.username}</span>
                    <span className='text-sm text-ring'>· {tweet.time}</span>
                  </div>
                  
                  <p className='mt-2 mb-3 text-foreground'>{tweet.content}</p>
                  
                  <div className='flex gap-4 text-ring'>
                    <div className='flex items-center gap-1'>
                      <MessageCircle size={18} /> {tweet.stats.comments}
                    </div>
                    <div className='flex items-center gap-1'>
                      <Repeat2 size={18} /> {tweet.stats.retweets}
                    </div>
                    <div className='flex items-center gap-1'>
                      <Heart size={18} /> {tweet.stats.likes}
                    </div>
                    <div className='flex items-center gap-1'>
                      <Upload size={18} /> {tweet.stats.shares}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </motion.div>
  )
}
