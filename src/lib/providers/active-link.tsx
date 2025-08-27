'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Activelinkprops = {
    children:React.ReactNode
    href:string
}

export default function Activelink({children,href}:Activelinkprops) {
    const pathname = usePathname()
    const isActive = pathname===href
  return (
    <>
  <Link
  href={href}
  className={`flex items-center  text-sm font-medium  rounded-md transition-colors
    ${isActive ? "text-pink-900 bg-primary p-2" : "text-muted-foreground hover:text-primary"}
  `}
>
  {children}
</Link>
    </>
  )
}
