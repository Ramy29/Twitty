"use client";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { trendingData } from "@/lib/dummy-data/trending";
import { motion } from "framer-motion"

export default function Trending() {
  const itemsPerLoad = 8;

  const [visibleTrends, setVisibleTrends] = useState(trendingData.slice(0, itemsPerLoad));
  const [hasMore, setHasMore] = useState(trendingData.length > itemsPerLoad);

  const loadMore = () => {
    setTimeout(() => {
      const currentLength = visibleTrends.length;
      const moreItems = trendingData.slice(currentLength, currentLength + itemsPerLoad);
      setVisibleTrends((prev) => [...prev, ...moreItems]);

      if (currentLength + moreItems.length >= trendingData.length) {
        setHasMore(false);
      }
    }, 400); // delay to show loading
  };

  return (
    <motion.div
        initial={{ x:'300vh'  }}
        animate={{ x:0 }}
        transition={{ duration: 2 }}
      id="scrollableTrending"
      className="max-h-full overflow-y-auto p-4 scrollbar-hide rounded-2xl m-4 "
    >
      <h1 className="font-bold text-center mb-4">What is Happening</h1>

      <InfiniteScroll
        dataLength={visibleTrends.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<p className="text-xs text-center text-muted-foreground py-2">Loading...</p>}
        endMessage={
          <p className="text-xs text-center text-muted-foreground py-2">All trends loaded</p>
        }
        scrollableTarget="scrollableTrending"
      >
        {visibleTrends.map((trend) => (
          <div key={trend.id} className="w-44 my-4">
            <h3 className="text-ring text-xs">{trend.category}</h3>
            <h1 className="font-bold">{trend.title}</h1>
            <h3 className="text-ring text-xs">{trend.posts}</h3>
          </div>
        ))}
      </InfiniteScroll>
    </motion.div>
  );
}
