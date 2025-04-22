"use client"
import Navbar from '@/components/navbar'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ContainerScroll } from '@/components/container-scroll-animation'
import { motion } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/aurora-background'
// import { Box, Text, Button } from 'shadcn-ui'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        {/* <div className="absolute inset-0  h-full w-full items-center px-5 py-24 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#442f54_100%)] [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <h1 className="text-6xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">Convert Documents, Video, Images, and Audio Across all files formats</h1>
            }>
          </ContainerScroll>
        </div> */}
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <h1 className="text-4xl text-center md:text-6xl px-12 md:px-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">Convert Documents, Video, Images, and Audio Across all files formats</h1>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              the better way.
            </div>
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Make a Change
            </button>
          </motion.div>
        </AuroraBackground>

      </section>
    </main>
  )
}


6606869