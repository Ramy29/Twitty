'use client'

import { tweets as allTweets } from '@/lib/dummy-data/tweets'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"

type Tweet = {
  id: number;
  profileImage: string;
  message: string;
  statue: string;
  time: string;
};

export default function NotificationsPage() {
  const [displayed, setDisplayed] = useState<Tweet[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  // Fake fetch function with delay
  const fetchTweets = async (pageNum: number) => {
    setLoading(true)
    try {
      await new Promise((res) => setTimeout(res, 1000)) // simulate API
      const start = (pageNum - 1) * 5
      const end = start + 5
      const newTweets = allTweets.slice(start, end)

      setDisplayed(prev => [...prev, ...newTweets])

      if (newTweets.length === 0 || end >= allTweets.length) {
        setHasMore(false)
      }
    } finally {
      setLoading(false)
    }
  }

  // Initial fetch
  useEffect(() => {
    fetchTweets(1)
  }, [])

  // Infinite scroll observer
  useEffect(() => {
    if (!hasMore) return

    const target = loaderRef.current
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          setPage(prev => prev + 1)
        }
      },
      { threshold: 1 }
    )

    if (target) observer.observe(target)
    return () => {
      if (target) observer.unobserve(target)
    }
  }, [loading, hasMore])

  // Fetch when page changes
  useEffect(() => {
    if (page > 1) fetchTweets(page)
  }, [page])

  return (
    <motion.div
      initial={{ x: '-300vh' }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5 }}
      className='mx-auto max-w-3xl px-4 py-8'
    >
      <h1 className='text-2xl font-semibold text-ring text-center mb-6'>
        Your Notifications
      </h1>

      <div className='space-y-4'>
        {displayed.map((tweet, i) => (
          <motion.div
            key={tweet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className='flex items-center justify-between gap-4 p-4 rounded-xl border border-ring hover:bg-muted transition-colors'
          >
            <img
              src={tweet.profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />

            <div className='flex-1 min-w-0'>
              <p className='truncate'>{tweet.message}</p>
            </div>

            <div className='flex flex-col items-end gap-1 whitespace-nowrap'>
              <span
                className={`text-sm font-medium ${
                  tweet.statue === 'new'
                    ? 'text-chart-1'
                    : 'text-muted-foreground'
                }`}
              >
                {tweet.statue}
              </span>
              <span className='text-xs text-ring'>
                {tweet.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {loading && hasMore && (
        <div className="flex justify-center mt-4">
          <div className="w-5 h-5 border-2 border-ring border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {!hasMore && (
        <p className='text-center text-muted-foreground mt-4'>No more tweets</p>
      )}

      {/* Sentinel element for infinite scroll */}
      <div ref={loaderRef} className='h-4'></div>
    </motion.div>
  )
}
