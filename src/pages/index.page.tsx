import { AboutMe } from "@/components/about-me"
import { Banner } from "@/components/banner"
import { Contact } from "@/components/contact"
import { EducationalBackground } from "@/components/educational-background"
import { Experiences } from "@/components/experiences"
import { Footer } from "@/components/Footer"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Technologies } from "@/components/technologies"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Anderson Fernandes</title>
        <meta name="description" content="Portfolio de Anderson Fernandes, desenvolvedor Web Full Stack especializado em React, TypeScript e Node.js" />
      </Head>
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
    </>
  )
}
