import { PiBellDuotone, PiBellRingingDuotone } from "react-icons/pi"

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

export type EventType = {
  title: string
  description: string
  header: React.ReactNode
  icon: React.ReactNode
  date: string
  image: string
}

const Events: EventType[] = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    date: "2022-01-01",
    image:
      "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    date: "2022-01-01",
    image:
      "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    date: "2022-01-01",
    image:
      "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    date: "2022-01-01",
    image:
      "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    date: "2022-01-01",
    image:
      "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    date: "2022-01-01",
    image:
      "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    date: "2022-01-01",
    image:
      "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    header: <Skeleton />,
    icon: <PiBellDuotone className="h-4 w-4 text-neutral-500" />,
  },
]

export default Events
