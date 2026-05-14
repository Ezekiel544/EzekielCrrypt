import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Landingpages } from "@/components/portfolio/landingpages"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import Preloader from "@/components/portfolio/preloader";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />  
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Landingpages />
      <Contact />
      <Footer />
    </main>
  )
}
