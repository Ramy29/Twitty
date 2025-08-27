"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Bell, Mail, Search, UserPen, CircleEllipsis, Activity, PersonStanding, Briefcase, LogOut, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/themes/toggle";
import { useRouter } from "next/navigation";
import { pages } from "@/lib/dummy-data/pages";
import PostTweet from "../profile/_components/PostTweet";
import Activelink from "@/lib/providers/active-link";
import { Logout } from "@/lib/apis/auth";

const navItems = [
  { label: "Profile", icon: <UserPen size={20} />, href: "/dashboard/profile" },
  { label: "Notifications", icon: <Bell size={20} />, href: "/dashboard/notifications" },
  { label: "Communites", icon: <PersonStanding  size={20} />, href: "/dashboard/communites" },
  { label: "About Us", icon: <Activity  size={20} />, href: "/dashboard/about-us" },
  { label: "Terms", icon: <UserPen size={20} />, href: "/dashboard/terms" },

];
export function Sidebar() {
   const router =useRouter()
    const logOut = () =>{
      Logout()
      router.push('/auth/login')
    }
  return (
    <div className=" relative w-full">
      {/* Mobile View */}
      <div className="lg:hidden fixed top-4 right-4 z-50 ">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">

              <div className="w-32 mt-3 ml-10">
           <img
            src={pages[0].image}
            alt="Profile Image"
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* Follower Data */}
           <h1 className="font-medium leading-none mt-3">{pages[0].name}</h1>
           <h4 className="text-sm text-muted-foreground">{pages[0].email}</h4>

           {/* Dollowing And Followers */}
            <div className=' flex py-2 space-x-2'>
             <div className='flex space-x-1'>
                <h2 className=''>{pages[0].following}</h2>
                <h3 className=' text-ring'>Follwing</h3>
             </div>
            <div className='flex space-x-1'>
                 <h2 className=''>{pages[0].followers}</h2>
                 <h3 className=' text-ring'>Followers</h3>
            </div>
           
           </div>

           
        </div>

           <div className="w-48 border-1 ml-10"></div>
            <nav className="flex flex-col space-y-4 mt-6 ml-10">
              {navItems.map((item) => (
                <Activelink
                  key={item.label}
                  href={item.href}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Activelink>
              ))}
            </nav>
            <p className="flex  ml-8 font-medium text-muted-foreground hover:text-primary cursor-pointer gap-2.5">
          <Plus /> <PostTweet/>
          </p>
             <Button onClick={logOut} className="absolute bottom-20 cursor-pointer text-destructive ml-10"><LogOut />Log Out</Button>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex lg:flex-col lg:w-56 lg:fixed lg:h-screen lg:border-r p-4  relative">

          {/* Profile Data */}
        <div className="w-32 mt-3 ">
           <img
            src={pages[0].image}
            alt="Profile Image"
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* Follower Data */}
           <h1 className="font-medium leading-none mt-3">{pages[0].name}</h1>
           <h4 className="text-sm text-muted-foreground">{pages[0].email}</h4>

           {/* Dollowing And Followers */}
            <div className=' flex py-2 space-x-2'>
             <div className='flex space-x-1'>
                <h2 className=''>{pages[0].following}</h2>
                <h3 className=' text-ring'>Follwing</h3>
             </div>
            <div className='flex space-x-1'>
                 <h2 className=''>{pages[0].followers}</h2>
                 <h3 className=' text-ring'>Followers</h3>
            </div>
           
           </div>

           
        </div>
         
         <div className="w-48 border-1"></div>

        <nav className="space-y-4 mt-10">
          {navItems.map((item) => (
            <Activelink
              key={item.label}
              href={item.href}
            >
              <div  className="flex items-center space-x-3 text-sm font-medium ">
              {item.icon}
              <span>{item.label}</span>
              </div>
            </Activelink>
          ))}
        </nav>
        <p className="flex my-6 font-medium text-muted-foreground hover:text-primary cursor-pointer gap-2.5">
          <Plus /> <PostTweet/>
          </p>
           <div className="w-48 border-1 my-8"></div>

        <div className="absolute top-4 right-4 ">
        <ModeToggle />
      </div>
      <Button variant='ghost' onClick={logOut} className="absolute bottom-20 cursor-pointer text-destructive"><LogOut />Log Out</Button>
      </div>
    </div>
  );
}
