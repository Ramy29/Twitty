'use client'

import { pages } from '@/lib/dummy-data/pages'
import React from 'react'
import {Carousel,CarouselContent,CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function StoryPage() {

   const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
       stopOnLastSnap: false
    })
  );
  return (
   <>
  <div className="w-full p-3">
    <Carousel 
      plugins={[plugin.current]} 
      className="w-full mx-auto"
      opts={{
        align: "start",
        slidesToScroll: "auto"
      }}
    >
      <CarouselContent className="flex">
        {pages.map((story) => (
          <CarouselItem
            key={story.id}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-2"
          >
            <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden">
              <img 
                className="absolute inset-0 w-full h-full object-cover" 
                src={story.bgImage} 
                alt="Story Image" 
              />
              <img 
                className="absolute top-3 left-3 w-9 h-9 rounded-full border-2 border-white" 
                src={story.image} 
                alt="Profile Image" 
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
</>
  )
}
