import { AboutMe } from "@/components/about-me"
import { Banner } from "@/components/banner"
import { Services } from "@/components/services"
import { Technologies } from "@/components/technologies"

export default function Home() {
  return (
    <div className="w-full">
     <Banner />
     <AboutMe />
     <Services />
     <Technologies />
    </div>
  )
}