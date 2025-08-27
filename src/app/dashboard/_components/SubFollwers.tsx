'use client';

import { Button } from '@/components/ui/button';
import { pages } from '@/lib/dummy-data/pages';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

// SubFollowers component: display a small list of recommended people
export default function SubFollowers() {
  return (
    <motion.div
      initial={{ x: '300vh' }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
      className="rounded-2xl w-full -mt-2"
    >
      <div className="p-4 space-y-4">
        {pages.slice(0, 3).map((page) => (
          <div key={page.id} className="flex items-center justify-between">
            {/* Profile image and info */}
            <div className="flex items-center gap-3">
              <img
                src={page.image}
                alt="Profile Image"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h1 className="font-medium leading-none">{page.name}</h1>
                <h4 className="text-sm text-muted-foreground">{page.email}</h4>
              </div>
            </div>

            <Button className="rounded-full h-8 px-4 text-sm">Follow</Button>
          </div>
        ))}
      </div>

      {/* Show more link */}
      <Link href="/dashboard/communites">
        <p className="cursor-pointer text-sm text-chart-1 px-4 hover:underline">
          Show More
        </p>
      </Link>
    </motion.div>
  );
}

