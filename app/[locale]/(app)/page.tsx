import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import Events, { EventType } from "@/data/events"
import HeroImages from "@/data/images"
import { Locale } from "@/i18n.config"
import { BentoGrid } from "@/ui/bento-grid"
import { PiBellDuotone } from "react-icons/pi"

import { getDictionary } from "@/lib/dictionary"
import { cn } from "@/lib/utils"
import GallaryGrid from "@/components/gallary-grid"
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
                <Readmore
                  heading={"Shri Data Mote Shri Shyam Ji Mandir History"}
                >
                  <section className="relative container px-2.5 sm:px-10 py-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-rose-950 scrollbar-track-rose-900">
                    {/* <h2 className="relative text-2xl sm:text-3xl font-bold my-4 leading-tight">
                      Shri Data Mote Shri Shyam Ji Mandir
                      <h1
                        className={
                          "absolute -top-7 -left-1 text-xs px-1.5 py-0.5 sm:text-sm font-bold underline underline-offset-2 border-2 rounded-xl bg-rose-950 border-rose-950"
                        }
                      >
                        History
                      </h1>
                    </h2> */}

                    <div className="text-pretty text-center text-sm md:text-base">
                      <p>
                        🙏🙏🙏Jay Dada Mota 🙏🙏Jay Shri Shyam... Ham aapko Dada
                        Mota Shri Shyam Mandir Itihaas ke bare mein Jankari
                        Denge... Jo Hamen Gaon wale Bade bujurgon Apne
                        sahyogiyon dwara Hamen Mili Hai... Jankari is Prakar hai
                        baat bahut purane Samay Ki Hai.... bharthal Gaon bahut
                        hi khushhal AVN sampann Gaon tha .... mukhya vyavsay
                        kheti hone ke Karan Charon Taraf Hariyali hi Hariyali
                        thi ...Gaon Ke Log aapas mein bahut miljul kar Rahte the
                        aur Dukh Sukh Mein Ek dusre ka Sahyog Karte The gaon
                        gaon ki tarah Nahin Parivar Ki Tarah rahata tha. ...
                        Samay ki vidambna Ke Karan Gaon Mein Sukha Pada sukhe Ke
                        Karan Jameen sukhne Lag Gai mahvari fail Gai .... Jiske
                        Karan Gaon Walon Jeev jantuon ko bahut sari taklifo ka
                        samna karna Pada... ine sab se chhutkara pane ke liye
                        Gaon Walon Ne Havan Pujan Shuru Kiya. .... Havan Puja
                        paath se Kuchh fayda na hone ke Karan Gaon wale Pareshan
                        Rahane Lage Aur Gaon chhodkar Jaane per majbur ho rahe
                        the. ... UN Dinon Gaon Mein Ek Yuva Sadhu ka aagman hua.
                        ... vah sadhu baba gaon ke andar Bani Chaupal Mein
                        rahata Tha. ... sadhu baba ne Kuchh Samay bad apne
                        Swayam ke tap ke liye gaon ke bahar jakar Ek jhopadi
                        Banai... aur vahan Ekant mein rahe kar tab karne Lag
                        Gaye... Gaon wale unke tapasvi Jivan Ko Dekhkar unke
                        pass jakar baithane Lag Gaye aur thoda bahut Kuchh khane
                        ko le Jaane Lag Gaye. .. Samay Bita Gaya Baba Gaon walon
                        ki samasyaon ka Samadhan karne laagye..... Bujurg AVN
                        healthy hone ke Karan Gaon Walon Ne unko Dada Mota Naam
                        Diya. ...
                      </p>
                      <p>
                        Ek Bar Ki Baat Hai Dada Mota apni Tapasya Mein leen the
                        aur Virodhi tatvon Ne Unki jhopadi Mein Aag Lagadi.....
                        jhopadi Puri Jal Gai per Baba ko thodi si bhi Aanch
                        Nahin lagi..... is Prakar unhone Anek Chamatkar
                        dikhlaayen. ... UN Dinon Baba Khatu Shyam ji ka Bhavya
                        Mela aur kushtia hoti thi. ... Dada Mota ji ke Sahyog
                        aur Gaon Walon ke dwara Khatu Shyam Mela Jita gaya tha
                        .....barthal Gaon Mein Shyam Baba ki Murti Dada Ke
                        Sahyog se sthapit Ki Gai thi. .. Ek Bar Ki Baat Hai Gaon
                        Mein pashuon ke dudh ki jagah Khoon Ki Dhaar nikalne
                        Lagi.... Gaon WaleHai Dekh Kar bahut Pareshan ho gaye
                        aur Dada ke pass Aaye... Dada ke Samay Ek Jod ka Nirman
                        karaya gaya tha Jiska Naam Malah Jod tha ...... Dada ne
                        bataya yahan se Pani Le jakar pashuon per chhidak do sab
                        theek ho jaega. ... Aur Aisa Hi Hua Sab Pashu theek ho
                        gaye. ... Sabhi Gaon wale Khush hokar Dada ke pass bahut
                        dudh Lekar Aaye. .. Dada Ne UN sabka man rakhte Hue
                        thoda dudh apne pass Rakh liya aur Baki unko De Diya Aur
                        Kahan jakar Ke khir bnao Khatu Shyam baba Ko Bhog lagao
                        bacchon ko khilao aur aap bhi Khao... aur Aise Samay
                        Bitta Gaya Dada Samadhi lagakar Baithe baithe smadisht
                        ho gaye ... aur Jahan per Dada samadhisht Hue The vahin
                        per Aaj Baba ki Samadhi hai. .. aur Aaj Bhi Gaon Wale
                        Baba ko pura Man Se Puja paath Karte Hain aur Unki
                        manokamna purn hoti hai. ..Tab Se Hi Gaon Mein Bhavya
                        Mele ka aayojan hota hai yah Mela faagun Mass ki
                        Ekadashi Aur dvadashi Ko hota hai aur Yahan per
                        kushtiyon ka bhi aayojan kiya jata hai. .... aur
                        Ekadashi Wale Din gaon ki mahilayen Vrat aur Puja Karti
                        Hain aur yah Parampara Usi Samay se Chali a rahi hai aur
                        Aaj Bhi Ho Rahi Hai. .... Aaj Bhi dvadashi Wale Din khir
                        Ka Prasad Banaya aur Khilaya jata hai. .. aur itwar Wale
                        Din Dada Mota Mandi per gud ka Prasad chadhaya Jata aur
                        khaya jata hai. .. aur Aaj Bhi anekon tyohar Badi
                        dhumdham se Manaya Jaate Hain ....Gaon wale aur Gaon se
                        bahar se aane wale logon ke Prati is Mandir ko Lekar
                        bahut hi Shradha hai... aur Yahan per Aane walon ki
                        manokamnaen puri hoti hain
                      </p>
                    </div>
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
              <h1 className="text-4xl sm:text-5xl font-bold">Event Details</h1>
              <h2 className="">
                Join us for our upcoming or yearly events and celebrations at
                the temple.
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
            <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-rose-950 scrollbar-track-rose-900">
              <GallaryGrid />
            </div>
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
