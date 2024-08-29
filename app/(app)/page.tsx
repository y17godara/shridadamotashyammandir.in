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
                    <div className="flex flex-col text-pretty text-cente gap-4 text-sm md:text-base">
                      <p>
                        Gaanv ke bujurgon aur sahayogiyon dvaara dee gaee
                        jaanakaaree ke anusaar daada mota shree shyaam mandir ka
                        itihaas kaaphee samrddh hai. ve kahate hain ki
                      </p>
                      <p>
                        Baat bahut purane samay ki hai. Bharthal gaon bahut hi
                        khushhal aur sampann gaon tha. Mukhya vyavsay kheti hone
                        ke karan, charon taraf hariyali hi hariyali thi. Gaon ke
                        log aapas mein bahut miljul kar rahte the aur dukh sukh
                        mein ek dusre ka sahyog karte the. Gaon gaon ki tarah
                        nahin, parivar ki tarah rahata tha.
                      </p>
                      <p>
                        Samay ki vidambna ke karan, gaon mein sukha pada. Sukhe
                        ke karan zameen sukhne lag gai aur mahaamari fail gai,
                        jiske karan gaon walon aur jeev jantuon ko bahut sari
                        taklifo ka samna karna pada. In sab se chhutkara pane ke
                        liye gaon walon ne havan-pujan shuru kiya. Havan puja se
                        kuchh fayda na hone ke karan gaon wale pareshan rahane
                        lage aur gaon chhodkar jaane per majbur ho rahe the.
                      </p>
                      <p>
                        Un dino gaon mein ek yuva sadhu ka aagman hua. Vah sadhu
                        baba gaon ke andar bani chaupal mein rahata tha. Sadhu
                        baba ne kuchh samay baad apne swayam ke tap ke liye gaon
                        ke bahar jakar ek jhopadi banai aur wahan ekant mein reh
                        kar tap karne lag gaye. Gaon wale unke tapasvi jivan ko
                        dekhkar unke paas jakar baithne lage aur thoda bahut
                        kuchh khane ko le jane lage. Samay bita gaya aur baba
                        gaon walon ki samasyaon ka samadhan karne lage. Bujurg
                        aur swasth hone ke karan gaon walon ne unko "Dada Mota"
                        naam diya.
                      </p>
                      <p>
                        Ek baar ki baat hai, Dada Mota apni tapasya mein leen
                        the aur virodhi tatvon ne unki jhopadi mein aag laga di.
                        Jhopadi puri jal gai, par baba ko thodi si bhi aanch
                        nahin lagi. Is prakar unhone anek chamatkar dikhlaaye.
                      </p>
                      <p>
                        Un dino baba Khatu Shyam ji ka bhavya mela aur kushti
                        hoti thi. Dada Mota ji ke sahyog aur gaon walon ke dwara
                        Khatu Shyam mela jeeta gaya tha. Bharthal gaon mein
                        Shyam Baba ki murti Dada ke sahyog se sthapit ki gai
                        thi.
                      </p>
                      <p>
                        Ek baar gaon mein pashuon ke doodh ki jagah khoon ki
                        dhaar nikalne lagi. Gaon wale yeh dekh kar bahut
                        pareshan ho gaye aur Dada ke paas aaye. Dada ke samay ek
                        jod ka nirmaan karaya gaya tha, jiska naam "Malah Jod"
                        tha. Dada ne bataya ki yahan se paani le jakar pashuon
                        par chhidak do, sab theek ho jaayega. Aur aisa hi hua,
                        sab pashu theek ho gaye.
                      </p>
                      <p>
                        Sabhi gaon wale khush hokar Dada ke paas bahut doodh
                        lekar aaye. Dada ne un sabka man rakhte hue thoda doodh
                        apne paas rakh liya aur baaki unko de diya. Dada ne
                        kaha, "Jao khir banao, Khatu Shyam Baba ko bhog lagao,
                        bachchon ko khilao aur aap bhi khao."
                      </p>
                      <p>
                        Samay bitta gaya, Dada samadhi lagakar baithe baithe
                        smadisht ho gaye, aur jahan per Dada samadhisht hue the,
                        vahin per aaj Dada ki samadhi hai. Aaj bhi gaon wale
                        Dada ko pura man se puja paath karte hain aur unki
                        manokamna purn hoti hai. Tab se hi gaon mein bhavya mele
                        ka aayojan hota hai. Yah mela faagun maas ki Ekadashi
                        aur Dvadashi ko hota hai aur yahan per kushtiyon ka bhi
                        aayojan kiya jata hai.
                      </p>
                      <p>
                        Ekadashi wale din gaon ki mahilayen vrat aur puja karti
                        hain aur yah parampara usi samay se chali aa rahi hai
                        aur aaj bhi ho rahi hai. Aaj bhi Dvadashi wale din khir
                        ka prasad banaya aur khilaya jata hai. Itwar wale din
                        Dada Mota mandir per gud ka prasad chadhaya jata aur
                        khaya jata hai.
                      </p>
                      <p>
                        Aaj bhi anekon tyohar badi dhumdham se manaya jaate
                        hain. Gaon wale aur gaon se bahar se aane wale logon ke
                        mann mai mandir ke prati bhott shradha hai, aur yaahapar
                        akar sache mann se kuch mangoo to apki manokamna jarur
                        puri hoti hai.
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
              <h2 className="text-4xl sm:text-5xl font-bold">
                Mandir Darshan Timings
              </h2>
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
              <h2 className="text-4xl sm:text-5xl font-bold">Event Details</h2>
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
                  header={item.header}
                  icon={item.icon}
                  date={item.date}
                  image={item.image}
                  className={i === 3 || i === 6 ? "md:col-span-1" : ""}
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        <section className="relative w-full p-2 md:p-10">
          <span id="donate" className="absolute -top-10"></span>
          <div className="flex flex-col items-center justify-center container w-full gap-4 mt-10">
            <div className="flex flex-col items-start justify-start w-full">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Donate for Development of Temple
              </h2>
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
              <h2 className="text-4xl sm:text-5xl font-bold">Gallery</h2>
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
  header,
  date,
  image,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
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
        loading="lazy"
        quality={20}
        alt="A beautiful waterfall"
        className="rounded-xl absolute top-0 left-0 w-full object-cover object-center"
      />
      {/* <div className="absolute backdrop-blur-[1px] left-0 top-0 bottom-0 w-1/2 group-hover:backdrop-blur-none" /> */}
      <p
        className="absolute top-0 after:backdrop-blur-sm left-2 font-sans font-bold text-neutral-600 text-xs dark:text-neutral-300"
        style={{ fontSize: "0.825rem" }}
      >
        {date}
      </p>
      {header}
      <div className="group-hover:translate-x-2 translate-x-0 transition duration-200">
        <div className="flex flex-row gap-1 items-center font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {icon} {title}
        </div>
      </div>
    </div>
  )
}
