"use client";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "@/components/ui/button";
import { pages } from "@/lib/dummy-data/pages";
import { motion } from "framer-motion"

export default function Peoples() {
  const itemsPerLoad = 5;

  const [visiblePages, setVisiblePages] = useState(pages.slice(0, itemsPerLoad));
  const [hasMore, setHasMore] = useState(pages.length > itemsPerLoad);

  const loadMore = () => {
    setTimeout(() => {
      const currentLength = visiblePages.length;
      const nextItems = pages.slice(currentLength, currentLength + itemsPerLoad);
      setVisiblePages((prev) => [...prev, ...nextItems]);

      if (currentLength + nextItems.length >= pages.length) {
        setHasMore(false);
      }
    }, 500); // optional delay to show loader
  };

  return (
    <motion.div
     initial={{ x:'-300vh'  }}
      animate={{ x:0 }}
      transition={{ duration: 2 }}
      id="scrollableDiv"
      className="px-10 lg:px-2 py-6  max-h-screen overflow-x-hidden overflow-y-auto scrollbar-hide max-w-full"
    >
      <h1 className=" font-bold p-6 text-3xl text-chart-2">Recomended People</h1>
      <InfiniteScroll
        dataLength={visiblePages.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<p className="text-white text-center py-2 text-sm">Loading more...</p>}
        endMessage={
          <p className="text-center text-sm text-white py-2">All users loaded</p>
        }
        scrollableTarget="scrollableDiv"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10  lg:gap-x-2">
          {visiblePages.map((page) => (
            <div key={page.id}>
              <img className="w-[400px]  h-36" src={page.bgImage} alt=" profile page" />
              <div className="w-[400px]  flex items-center justify-between">
                {/* Profile Data */}
                <div className="ml-6">
                  <img
                    src={page.image}
                    alt="Profile Image"
                    className="w-10 h-10 rounded-full object-cover -mt-5"
                  />
                  <h1 className="font-bold leading-none">{page.name}</h1>
                  <h4 className="text-sm text-muted-foreground">{page.email}</h4>
                </div>
                <Button className="rounded-full h-8 px-4 -ml-10 text-sm">Follow</Button>
              </div>
              {/* Bio */}
              <p className="text-primary font-medium w-[414px] my-2">{page.bio}</p>

              {/* Followers and Following */}
              <div className="flex w-48 space-x-4 py-2">
                <div className="flex space-x-1">
                  <h2 className="font-semibold">{page.following}</h2>
                  <h3 className="font-medium text-ring">Following</h3>
                </div>
                <div className="flex space-x-1">
                  <h2 className="font-semibold">{page.followers}</h2>
                  <h3 className="font-medium text-ring">Followers</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </motion.div>
  );
}

