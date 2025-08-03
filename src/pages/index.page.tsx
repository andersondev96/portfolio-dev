import { AboutMe } from "@/components/about-me"
import { Banner } from "@/components/banner"
import { Contact } from "@/components/Contact"
import { EducationalBackground } from "@/components/educational-background"
import { Experiences } from "@/components/experiences"
import { Footer } from "@/components/Footer"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Technologies } from "@/components/technologies"

export default function Home() {
  return (
    <main className="w-full">
     <Banner />
     <AboutMe />
     <Experiences />
     <EducationalBackground />
     <Services />
     <Technologies />
     <Projects />
     <Contact />
     <Footer />
    </main>
  )
}