"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 
      bg-gradient-to-br from-gray-100 via-white to-gray-200 
      dark:from-slate-900 dark:via-black dark:to-slate-950 
      text-gray-800 dark:text-gray-100">
      
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-blue-500 dark:text-blue-400 mb-6"
      >
        Terms & Conditions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl text-center"
      >
        Welcome to <span className="text-blue-500 dark:text-blue-400">Twitty</span> 🐦 — your social hub for ideas, connections, 
        and creativity. Please read these terms carefully before flying with us.
      </motion.p>

      {/* Content */}
      <ScrollArea className="w-full max-w-3xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md 
        rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-slate-700 h-[70vh]">
        
        <div className="space-y-8">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-300">1. Respect & Kindness</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              By using Twitty, you agree to treat others with respect. Hate speech, harassment, and
              abusive behavior are strictly forbidden. Let's keep our community creative & safe.
            </p>
          </motion.div>

          <Separator className="bg-gray-300 dark:bg-slate-600" />

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-300">2. Content Ownership</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              You own your tweets 🎉 but by posting them, you give us permission to display and share
              them on Twitty. Make sure you have rights to any media you upload.
            </p>
          </motion.div>

          <Separator className="bg-gray-300 dark:bg-slate-600" />

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-300">3. Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              We care about your privacy 💙. Your data is stored securely and will never be sold to
              third parties. Read our privacy policy for more details.
            </p>
          </motion.div>

          <Separator className="bg-gray-300 dark:bg-slate-600" />

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-300">4. Termination</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Breaking the rules may result in suspension or permanent removal of your account. Play
              fair, and keep the bird flying high 🕊️.
            </p>
          </motion.div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center"
      >
        © {new Date().getFullYear()} Twitty. All rights reserved.
      </motion.p>
    </div>
  );
}

