import React from 'react'
import TermsPage from './_components/terms'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Twitty  | Terms",
  description: "Terms of app!",
};

export default function page() {
  return (
    <div><TermsPage/></div>
  )
}
