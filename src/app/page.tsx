import Header from "./components/Header/Header";
import Directions from "./components/sections/Directions/Directions";
import DonationDetails from "./components/sections/DonationDetails/DonationDetails";
import DonationStats from "./components/sections/DonationStats/DonationStats";
import Hero from "./components/sections/Hero/Hero";
import Motivation from "./components/sections/Motivation/Motivation";
import News from "./components/sections/News/News";
import Partners from "./components/sections/Partners/Partners";
import ProjectsSection from "./components/sections/ProjectSection/ProjectSection";
import "./globals.css"
export default function Home() {
  return (
    <>
    <div className="page-bg">
      <Header />
      <Hero />
    </div>
    <Motivation />
    <Partners />
    <Directions />
    <ProjectsSection />
    <DonationStats />
    <News />
    <DonationDetails />
    </>
  )
}
