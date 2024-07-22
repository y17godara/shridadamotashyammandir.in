import Image from "next/image"

import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  date,
  image,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  date: string
  image: string
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "group overflow-hidden relative row-span-1 rounded-xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-background border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <Image
        src={image}
        fill
        alt="A beautiful waterfall"
        className="rounded-xl absolute top-0 left-0 w-full object-cover object-center"
      />
      <p
        className="absolute top-0 left-2 font-sans font-bold text-neutral-600 text-xs dark:text-neutral-300"
        style={{ fontSize: "0.825rem" }}
      >
        {date}
      </p>
      {header}
      <div className="group-hover:translate-x-2 translate-x-0 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  )
}
