import { Suspense } from "react"
import Events, { EventType } from "@/data/events"
import { Locale } from "@/i18n.config"
import { BentoGrid, BentoGridItem } from "@/ui/bento-grid"
import { PiBellDuotone, PiBellRingingDuotone } from "react-icons/pi"

import { getDictionary } from "@/lib/dictionary"
import ImageSlider from "@/components/hero-image"
import Readmore from "@/components/read-more"

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale) // en
  // return <button>{dict.products.cart}</button> // Add to Cart
  return (
    <>
      <div className="flex flex-col justify-center">
        <Suspense>
          <ImageSlider />
        </Suspense>

        <section id="about" className="w-full p-2 md:p-10">
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
                <Readmore content="The temple is a place of worship for thousands of devotees every month. The temple is known for its beautiful and peaceful environment. The temple is also known for its beautiful architecture and design.">
                  <button className="text-sm lg:text-base font-semibold text-foreground bg-background p-2 rounded-lg">
                    Read More
                  </button>
                </Readmore>
              </div>

              <div className="flex mt-2 lg:mt-4 flex-col items-start justify-start text-start gap-0.5 text-pretty">
                <p className="flex flex-row items-center gap-1 text-sm lg:text-base font-semibold text-pretty">
                  <PiBellRingingDuotone className="size-4" />{" "}
                  <b className="font-bold">Darshan Timing:</b>
                  <br />
                  <span className="text-sm lg:text-base font-semibold">
                    04:00 AM to 10:00 PM
                  </span>
                </p>

                <p className="flex flex-row items-center gap-1 text-sm lg:text-base font-semibold text-pretty">
                  <PiBellRingingDuotone className="size-4" />{" "}
                  <b className="font-bold">Morning Aarti Timing:</b>
                  <br />
                  <span className="text-sm lg:text-base font-semibold">
                    07:00 AM to 08:00 AM
                  </span>
                </p>

                <p className="flex flex-row items-center gap-1 text-sm lg:text-base font-semibold text-pretty">
                  <PiBellRingingDuotone className="size-4" />{" "}
                  <b className="font-bold">Evening Aarti Timing:</b>
                  <br />
                  <span className="text-sm lg:text-base font-semibold">
                    07:00 PM to 08:00 PM
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="w-full p-2 md:p-10">
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
                  key={i}
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

        <section id="events" className="w-full p-2 md:p-10">
          <div
            className="flex flex-col items-center justify mt-10
          -center container w-full gap-4"
          >
            <div className="flex flex-col items-start justify-start w-full">
              <h1 className="text-4xl sm:text-5xl font-bold">
                Donate for Development of Temple
              </h1>
              <h2 className="">
                Below Mentioned are the officail bank details of the temple for
                donations and contributions towards the development of the
                temple, events and activities.
              </h2>

              <div className="flex flex-col items-start justify-start gap-0.5 text-start text-pretty mt-2 lg:mt-4 w-full">
                <table>
                  <tr>
                    <th>Bank Name</th>
                    <th>Account Number</th>
                    <th>IFSC Code</th>
                  </tr>
                  <tr>
                    <td>State Bank of India</td>
                    <td>XXXXXXXXXXXXXX</td>
                    <td>XXXXXXXX</td>
                  </tr>
                  <tr>
                    <td>State Bank of India</td>
                    <td>XXXXXXXXXXXXXX</td>
                    <td>XXXXXXXX</td>
                  </tr>
                  <tr>
                    <td>State Bank of India</td>
                    <td>XXXXXXXXXXXXXX</td>
                    <td>XXXXXXXX</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
