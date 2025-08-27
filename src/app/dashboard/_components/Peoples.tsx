"use client";

import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "@/components/ui/button";
import { pages } from "@/lib/dummy-data/pages";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Peoples() {
  const itemsPerLoad = 5;
  const [visiblePages, setVisiblePages] = useState(pages.slice(0, itemsPerLoad));
  const [hasMore, setHasMore] = useState(pages.length > itemsPerLoad);

  const loadMore = () => {
    const currentLength = visiblePages.length;
    const nextItems = pages.slice(currentLength, currentLength + itemsPerLoad);
    setVisiblePages((prev) => [...prev, ...nextItems]);

    if (currentLength + nextItems.length >= pages.length) {
      setHasMore(false);
    }
  };

  return (
    <motion.div
      initial={{ x: "-300vh" }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
      id="scrollableDiv"
      className="px-4 lg:px-2 py-6 max-h-screen overflow-x-hidden overflow-y-auto scrollbar-hide max-w-full"
    >
      <h1 className="font-bold p-6 text-3xl text-chart-2">
        Recommended People
      </h1>

      <InfiniteScroll
        dataLength={visiblePages.length}
        next={loadMore}
        hasMore={hasMore}
        loader={
          <p className="text-center py-2 text-sm text-muted-foreground animate-pulse">
            Loading more...
          </p>
        }
        endMessage={
          <p className="text-center text-sm text-muted-foreground py-2">
            🎉 All users loaded
          </p>
        }
        scrollableTarget="scrollableDiv"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          {visiblePages.map((page) => (
            <div
              key={page.id}
              className="w-full max-w-md mx-auto border rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src={page.bgImage}
                width={1000}
                height={500}
                alt="Profile background"
                className="w-full h-36 object-cover"
              />

              <div className="flex items-center justify-between px-4">
                {/* Profile Data */}
                <div className="-mt-6 flex items-center gap-3">
                  <Image
                    src={page.image}
                    alt="Profile Image"
                    width={40}
                    height={40}
                    className="w-12 h-12 rounded-full border-2 border-background object-cover"
                  />
                  <div>
                    <h1 className="font-bold">{page.name}</h1>
                    <h4 className="text-sm text-muted-foreground">
                      {page.email}
                    </h4>
                  </div>
                </div>
                <Button className="rounded-full h-8 px-4 text-sm">Follow</Button>
              </div>

              {/* Bio */}
              <p className="text-primary font-medium px-4 my-3">{page.bio}</p>

              {/* Followers and Following */}
              <div className="flex space-x-6 px-4 pb-4">
                <div className="flex space-x-1">
                  <h2 className="font-semibold">{page.following}</h2>
                  <h3 className="text-ring">Following</h3>
                </div>
                <div className="flex space-x-1">
                  <h2 className="font-semibold">{page.followers}</h2>
                  <h3 className="text-ring">Followers</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </motion.div>
  );
}


