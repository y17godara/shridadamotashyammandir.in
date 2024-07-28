import { Suspense } from "react"
import Image from "next/image"
import Events, { EventType } from "@/data/events"
import { Locale } from "@/i18n.config"
import { BentoGrid } from "@/ui/bento-grid"
import { PiBellDuotone } from "react-icons/pi"

import { getDictionary } from "@/lib/dictionary"
import { cn } from "@/lib/utils"
import ImageSlider from "@/components/hero-image"
import Readmore from "@/components/read-more"

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src=""
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        )
      })}
    </>
  )
}

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale) // en
  // return <button>{dict.products.cart}</button> // Add to Cart

  return (
    <>
      <div className="flex flex-col justify-center">
        <Suspense>
          <ImageSlider />
        </Suspense>

        <section className="relative w-full p-2 md:p-10">
          <span id="about" className="absolute -top-10"></span>
          <div
            className="flex flex-col items-center justify mt-10
          -center container w-full"
          >
            <div className="grid grid-cols-1 gap-4 w-full">
              <div className="flex flex-col items-start justify-start text-start gap-0.5 text-pretty">
                <h6
                  className="text-sm lg:text-lg font-bold
              text-foreground uppercase min-w-max flex flex-row gap-1 items-center"
                >
                  Welcome To <PiBellDuotone className="size-4" />
                </h6>
                <div className="flex flex-col items-start justify-start">
                  <h1 className="text-4xl sm:text-5xl font-bold">
                    Shri Data Mote Shri Shyam Ji Mandir
                  </h1>
                  <h2 className="">
                    Best Place for you to Seek Blessings and Peace
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start gap-0.5 text-start text-pretty mt-2 lg:mt-4 w-full">
                <p className="text-sm lg:text-base font-semibold">
                  Shri Data Mote Shri Shyam Ji Mandir is a Hindu Temple Since
                  1800's and is primaryly dedicated to Shri Khatu Shyam Ji. The
                  temple is{" "}
                  <b className="font-bold">
                    located at the Bharthal village in Dwarka, New Delhi.
                  </b>
                </p>
                <p>
                  The temple is a place of worship for thousands of devotees
                  every month. The temple is known for its beautiful and
                  peaceful environment. The temple is also known for its
                  beautiful architecture and design.
                </p>
                <Readmore>
                  <section className="container px-2.5 sm:px-10 py-5 ">
                    The temple is a place of worship for thousands of devotees
                    every month. The temple is known for its beautiful and
                    peaceful environment. The temple is also known for its
                    beautiful architecture and design.
                  </section>
                </Readmore>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full p-2 md:p-10">
          <span id="timing" className="absolute -top-10"></span>
          <div
            className="flex flex-col items-center justify mt-10
          -center container w-full gap-4"
          >
            <div className="flex flex-col items-start justify-start w-full">
              <h1 className="text-4xl sm:text-5xl font-bold">
                Mandir Darshan Timings
              </h1>
              <h2 className="">
                Below mentioned are the darshan timings and aarti timings of the
                temple this could be subject to change during special or festive
                days.
              </h2>
            </div>
            <div className="overflow-x-scroll md:overflow-x-hidden container scrollbar-thin scrollbar-thumb-rose-950 scrollbar-track-rose-900">
              <table className="w-full text-sm lg:text-base">
                <thead>
                  <tr className="border-b border-rose-950 whitespace-nowrap">
                    <th className="px-4 py-3 text-left">Season</th>
                    <th className="px-4 py-3 text-left">Darshan Timing</th>
                    <th className="px-4 py-3 text-left">Opening</th>
                    <th className="px-4 py-3 text-left">Closing</th>
                    <th className="px-4 py-3 text-left">Aarti Timing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-rose-950 whitespace-nowrap">
                    <td rowSpan={2} className="px-4 py-3 font-semibold">
                      Summer
                    </td>
                    <td className="px-4 py-3 font-semibold">Morning</td>
                    <td className="px-4 py-3">05:00 AM</td>
                    <td className="px-4 py-3">11:00 AM</td>
                    <td className="px-4 py-3">07:00 AM to 08:00 AM</td>
                  </tr>
                  <tr className="border-b border-rose-950 whitespace-nowrap">
                    <td className="px-4 py-3 font-semibold">Evening</td>
                    <td className="px-4 py-3">05:00 AM</td>
                    <td className="px-4 py-3">09:00 PM</td>
                    <td className="px-4 py-3">07:00 PM to 08:00 PM</td>
                  </tr>
                  <tr className="border-b border-rose-950 whitespace-nowrap">
                    <td rowSpan={2} className="px-4 py-3 font-semibold">
                      Winter
                    </td>
                    <td className="px-4 py-3 font-semibold">Morning</td>
                    <td className="px-4 py-3">06:00 AM</td>
                    <td className="px-4 py-3">10:00 AM</td>
                    <td className="px-4 py-3">07:30 AM to 08:30 AM</td>
                  </tr>
                  <tr className="border-b border-rose-950 whitespace-nowrap">
                    <td className="px-4 py-3 font-semibold">Evening</td>
                    <td className="px-4 py-3">04:00 PM</td>
                    <td className="px-4 py-3">08:00 PM</td>
                    <td className="px-4 py-3">06:30 PM to 07:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative w-full p-2 md:p-10">
          <span id="events" className="absolute -top-10"></span>
          <div
            className="flex flex-col items-center justify mt-10
          -center container w-full gap-4"
          >
            <div className="flex flex-col items-start justify-start w-full">
              <h1 className="text-4xl sm:text-5xl font-bold">
                Upcoming Event Details
              </h1>
              <h2 className="">
                Join us for our upcoming events and celebrations
              </h2>
            </div>

            <BentoGrid className="mx-auto">
              {Events.map((item: EventType, i: number) => (
                <BentoGridItem
                  key={i + item.title}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  date={item.date}
                  image={item.image}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        <section className="relative w-full p-2 md:p-10">
          <span id="donate" className="absolute -top-10"></span>
          <div className="flex flex-col items-center justify-center container w-full gap-4 mt-10">
            <div className="flex flex-col items-start justify-start w-full">
              <h1 className="text-4xl sm:text-5xl font-bold">
                Donate for Development of Temple
              </h1>
              <h2 className="mt-2 text-lg">
                Below are the official bank details of the temple for direct
                donations and contributions towards the development of the
                temple, events, and activities.
              </h2>
            </div>
            <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-rose-950 scrollbar-track-rose-900">
              <table className="w-full text-sm lg:text-base">
                <thead>
                  <tr className="border-b border-rose-950">
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-rose-950">
                    <td className="px-4 py-3 font-semibold">UPI Transfer</td>
                    <td className="px-4 py-3">
                      <p>
                        <span className="font-semibold">UPI ID:</span>{" "}
                        9888886974@cnrb
                      </p>
                    </td>
                  </tr>
                  <tr className="border-b border-rose-950">
                    <td className="px-4 py-3 font-semibold">Bank Transfer</td>
                    <td className="px-4 py-3">
                      <p>
                        <span className="font-semibold">Bank Name:</span> Canara
                        Bank
                      </p>
                      <p>
                        <span className="font-semibold">IFSC Code:</span>{" "}
                        CNRB0019143
                      </p>
                      <p>
                        <span className="font-semibold">Account Name:</span>{" "}
                        Shri Data Mota Shri Shyamji Mandir Samiti
                      </p>
                      <p>
                        <span className="font-semibold">Account Number:</span>{" "}
                        91432010020229
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative w-full p-2 md:p-10">
          <span id="gallery" className="absolute -top-10"></span>
          <div className="flex flex-col items-center justify-center container w-full gap-4 mt-10">
            <div className="flex flex-col items-start justify-start w-full">
              <h1 className="text-4xl sm:text-5xl font-bold">Gallery</h1>
              <h2 className="mt-2 text-lg">
                Some of the beautiful memories and moments captured at the
                temple
              </h2>
            </div>
            <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-rose-950 scrollbar-track-rose-900"></div>
          </div>
        </section>
      </div>
    </>
  )
}

const BentoGridItem = ({
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
