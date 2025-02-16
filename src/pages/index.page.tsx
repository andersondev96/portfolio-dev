import { AboutMe } from "@/components/about-me"
import { Banner } from "@/components/banner"
import { Services } from "@/components/services"

export default function Home() {
  return (
    <div className="">
     <Banner />
     <AboutMe />
     <Services />
    </div>
  )
}