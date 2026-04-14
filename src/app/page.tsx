import Header from "./components/Header/Header";
import Directions from "./components/sections/Directions/Directions";
import Hero from "./components/sections/Hero/Hero";
import Motivation from "./components/sections/Motivation/Motivation";
import Partners from "./components/sections/Partners/Partners";
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
    </>
  )
}
