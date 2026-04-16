import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Directions from "./components/sections/Directions/Directions";
import DonationDetails from "./components/sections/DonationDetails/DonationDetails";
import DonationStats from "./components/sections/DonationStats/DonationStats";
import Gallery from "./components/sections/Gallery/Gallery";
import Hero from "./components/sections/Hero/Hero";
import Humanitarian from "./components/sections/Humanitarian/Humanitarian";
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
    <Humanitarian />
    <Gallery />
    <Footer />
    </>
  )
}
