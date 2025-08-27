'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from 'react'
import { toast } from "sonner"


export default function PostTweet() {
  const [open,setOpen]= useState(false)
  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger onClick={() => setOpen(true)} className="cursor-pointer">Post</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-chart-1">What do Thinking About ?</DialogTitle>
      <DialogDescription>
       <Textarea placeholder="Whats happen" />
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="flex gap-5">
      <Button onClick={()=>{ toast.error('Changes disacrd'), setOpen(false)}} variant='destructive'>Discard</Button>
      <Button  onClick={()=>{ toast.success('Post has been published'),setOpen(false)}} variant='outline'>Post</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

    </>
  )
}
