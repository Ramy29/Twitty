"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Bell, UserPen, Activity, PersonStanding, LogOut, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/themes/toggle";
import { useRouter } from "next/navigation";
import { pages } from "@/lib/dummy-data/pages";
import PostTweet from "../profile/_components/PostTweet";
import Activelink from "@/lib/providers/active-link";
import { Logout } from "@/lib/apis/auth";
import { motion } from "framer-motion";

const navItems = [
  { label: "Profile", icon: <UserPen size={18} />, href: "/dashboard/profile" },
  { label: "Notifications", icon: <Bell size={18} />, href: "/dashboard/notifications" },
  { label: "Communities", icon: <PersonStanding size={18} />, href: "/dashboard/communites" },
  { label: "About Us", icon: <Activity size={18} />, href: "/dashboard/about-us" },
  { label: "Terms", icon: <UserPen size={18} />, href: "/dashboard/terms" },
];

export function Sidebar() {
  const router = useRouter();
  const logOut = () => {
    Logout();
    router.push("/auth/login");
  };

  return (
    <div className="relative w-full">
      {/* Mobile View */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-xl shadow-md">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background/60 backdrop-blur-md shadow-lg border-none">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile */}
              <div className="flex flex-col items-center text-center my-6 space-y-2">
                <img
                  src={pages[0].image}
                  alt="Profile"
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
                <h1 className="font-semibold">{pages[0].name}</h1>
                <h4 className="text-xs text-muted-foreground">{pages[0].email}</h4>
                <div className="flex space-x-4 mt-2 text-sm">
                  <span>{pages[0].following} <span className="text-ring">Following</span></span>
                  <span>{pages[0].followers} <span className="text-ring">Followers</span></span>
                </div>
              </div>

              <div className="border-t my-4 opacity-40"></div>

              {/* Nav */}
              <nav className="flex flex-col space-y-3 ml-4">
                {navItems.map((item) => (
                  <Activelink key={item.label} href={item.href}>
                    <div className="flex items-center space-x-3 text-sm font-medium px-3 py-2 rounded-xl hover:bg-primary/10 transition-all">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  </Activelink>
                ))}
              </nav>

              <p className="flex items-center ml-6 mt-6 text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer gap-2.5">
                <Plus size={18} /> <PostTweet />
              </p>
           
              <div className="flex items-center justify-between">
                 <Button
                onClick={logOut}
                className="w-48 mt-10 ml-20 bg-destructive/80 hover:bg-destructive text-white rounded-xl shadow-md"
              >
                <LogOut size={18} /> Log Out
              </Button>
             </div>
             <div className="absolute top-2 left-2"><ModeToggle/></div>
              
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex lg:flex-col lg:w-60 lg:fixed lg:h-screen p-5 bg-background/60 backdrop-blur-lg border-r shadow-lg">
        {/* Profile */}
        <div className="flex flex-col items-center text-center mt-6 space-y-2">
          <img
            src={pages[0].image}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover shadow-md"
          />
          <h1 className="font-semibold">{pages[0].name}</h1>
          <h4 className="text-xs text-muted-foreground">{pages[0].email}</h4>
          <div className="flex space-x-4 mt-2 text-sm">
            <span>{pages[0].following} <span className="text-ring">Following</span></span>
            <span>{pages[0].followers} <span className="text-ring">Followers</span></span>
          </div>
        </div>

        <div className="border-t my-6 opacity-40"></div>

        {/* Nav */}
        <nav className="space-y-3 mt-4">
          {navItems.map((item) => (
            <Activelink key={item.label} href={item.href}>
              <div className="flex items-center space-x-3 text-sm font-medium px-3 py-2 rounded-xl hover:bg-primary/10 transition-all">
                {item.icon}
                <span>{item.label}</span>
              </div>
            </Activelink>
          ))}
        </nav>

        <p className="flex items-center ml-2 mt-6 text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer gap-2.5">
          <Plus size={18} /> <PostTweet />
        </p>

        <div className="border-t my-6 opacity-40"></div>

        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>

        <Button
          variant="ghost"
          onClick={logOut}
          className="absolute bottom-10 w-[80%] left-1/2 -translate-x-1/2 bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-xl"
        >
          <LogOut size={18} /> Log Out
        </Button>
      </div>
    </div>
  );
}

