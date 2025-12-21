import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

import { Banner } from "@/components/banner";

// ✅ Projects SEM ssr: false (mantém ID no HTML)
const Projects = dynamic(() =>
  import("@/components/projects").then((mod) => mod.Projects)
);

// Demais componentes iguais...
const AboutMe = dynamic(() =>
  import("@/components/about").then((mod) => mod.About)
);
const Experiences = dynamic(() =>
  import("@/components/experiences").then((mod) => mod.Experiences)
);
const Services = dynamic(() =>
  import("@/components/services").then((mod) => mod.Services)
);
const Technologies = dynamic(() =>
  import("@/components/technologies").then((mod) => mod.Technologies)
);
const Contact = dynamic(() =>
  import("@/components/contact").then((mod) => mod.Contact)
);
const EducationalBackground = dynamic(() =>
  import("@/components/educational-background").then(
    (mod) => mod.EducationalBackground
  )
);
const Footer = dynamic(() =>
  import("@/components/footer").then((mod) => mod.Footer)
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Anderson Fernandes</title>
        <meta
          name="description"
          content="Portfolio de Anderson Fernandes, desenvolvedor Web Full Stack especializado em React, TypeScript e Node.js"
        />
      </Head>

      <main className="w-full">
        <Banner />

        <Suspense fallback={null}>
          <AboutMe />
        </Suspense>

        <Suspense fallback={null}>
          <Experiences />
        </Suspense>

        <Suspense fallback={null}>
          <EducationalBackground />
        </Suspense>

        <Suspense fallback={null}>
          <Services />
        </Suspense>

        <Suspense fallback={null}>
          <Technologies />
        </Suspense>

        {/* ✅ Projects SEM ssr: false = ID visível! */}
        <Suspense fallback={null}>
          <Projects />
        </Suspense>

        <Suspense fallback={null}>
          <Contact />
        </Suspense>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
