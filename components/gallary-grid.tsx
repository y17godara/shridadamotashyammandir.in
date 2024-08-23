"use client"
"use memo"

import { useState } from "react"
import Image from "next/image"
import HeroImages from "@/data/images"
import { AnimatePresence, motion } from "framer-motion"

type Image = { id: number; src: string; alt: string }

export default function GalleryGrid() {
  const [selected, setSelected] = useState<Image | null>(null)
  const [lastSelected, setLastSelected] = useState<Image | null>(null)

  const handleClick = (card: Image) => {
    setLastSelected(selected === card ? null : selected)
    setSelected(card === selected ? null : card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {HeroImages.map((image, index: number) => (
          <motion.div
            onClick={() => handleClick(image)}
            key={index + image.alt}
            className="group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              alt={image.alt}
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              placeholder="blur"
              blurDataURL={image.src}
              src={image.src}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1280px) 50vw,
                     (max-width: 1536px) 33vw,
                     25vw"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-40"
          />
        )}
        {selected && (
          <motion.div
            key="selected-card"
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed top-0 bottom-0 right-0 left-0 z-[100] flex items-center justify-center"
            onClick={() => handleOutsideClick()}
          >
            <SelectedCard selected={selected} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const SelectedCard = ({ selected }: { selected: Image }) => {
  return (
    <>
      <Image
        alt={selected.alt}
        className="transform md:rounded-lg transition will-change-auto brightness-110"
        style={{ transform: "translate3d(0, 0, 0)" }}
        placeholder="blur"
        blurDataURL={selected.src}
        src={selected.src}
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
           (max-width: 1280px) 50vw,
           (max-width: 1536px) 33vw,
           25vw"
      />
    </>
  )
}
