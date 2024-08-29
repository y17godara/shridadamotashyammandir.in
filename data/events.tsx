import { PiBellDuotone, PiBellRingingDuotone } from "react-icons/pi"

import ekadashi from "../public/images/carousel/7.webp"
// @ts-ignore
import Mela from "../public/images/vps/bg6.JPG"
import src from "../public/images/y17/bg1.jpeg"
import Jan from "../public/images/y17/bg2.jpeg"
import Birthday from "../public/images/y17/bg3.jpeg"
import kawad from "../public/images/y17/bg4.jpeg"

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

export type EventType = {
  title: string
  header: React.ReactNode
  icon: React.ReactNode
  date: string
  image: string
}

const Events: EventType[] = [
  {
    title: "Shri Shyam Birthday 2024",
    date: "November 12, 2024",
    image: Birthday.src,
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mandir Mela 2025",
    header: <Skeleton />,
    date: "March 10, 2025",
    image: Mela.src,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Navratri 2025",
    date: "March 30, 2025",
    image: src.src,
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Nirjala Ekadashi 2025",
    date: "June 6, 2025",
    image: ekadashi.src,
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Maha Shivratri Kawad 2025",
    date: "July 11, 2025",
    image: kawad.src,
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kirshan Janmashtami 2025",
    date: "August 16, 2025",
    image: Jan.src,
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
]

export default Events
