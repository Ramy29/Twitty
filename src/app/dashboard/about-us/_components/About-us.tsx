'use client'

import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <>
     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r  p-6 overflow-hidden"
     style={{ background: "linear-gradient(135deg,  #6b7280  50%, #000000 50%)" }}
     >
  {/* Card */}
  <div className=" rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-10 p-10 w-full max-w-4xl">
    
    {/* Image */}
    <motion.div
    initial={{ x:'-100vh'  }}
    animate={{ x:0 }}
    transition={{ duration: 2 }}
    className="flex-shrink-0">
      <Image
        src="/aboutus.png"
        alt="About Us Image"
        width={250}
        height={250}
        className="rounded-xl"
      />
    </motion.div>

    {/* Contact Us */}
    <motion.div
    initial={{ x:'200vh'  }}
        animate={{ x:0 }}
        transition={{ duration: 2 }}
    className="flex flex-col gap-6 text-zinc-300">
      <div>
        <h1 className="font-bold text-3xl text-primary mb-2">Contact Us</h1>
        <p className="">We are happy to help you anytime ✨</p>
      </div>

      <div className="flex flex-col gap-4 text-lg">
        <p className="flex items-center gap-3">
          <Mail className="text-primary" /> ramyesam701@gmail.com
        </p>
          <p className="flex items-center gap-3">
          <Github className="text-primary" /> Ramy29
        </p>
        <p className="flex items-center gap-3">
          <Linkedin className="text-primary" /> Ramy Esam
        </p>
        <p className="flex items-center gap-3">
          <Instagram className="text-primary" /> ramy-e-16
        </p>
        <p className="flex items-center gap-3">
          <Phone className="text-primary" /> +201554472917
        </p>
      </div>
    </motion.div>
  </div>
     </div>

    </>
  )
}