import React from 'react'
import AboutUs from './_components/About-us'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Twitty  | About-us",
  description: "Info about me",
};

export default function page() {
  return (
    <div><AboutUs/></div>
  )
}

