import React from 'react'
import NotificationsPage from './_components/notifications'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Twitty  | Notifications",
  description: "Discover what people interact with you!",
};

export default function page() {
  return (
    <div><NotificationsPage/></div>
  )
}

