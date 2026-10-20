import { Preloader } from "./components/Preloader"
import { Nav } from "./components/Nav"
import { Hero } from "./components/sections/Hero"
import { Ticker, QuoteBand } from "./components/sections/Bands"
import { Collections } from "./components/sections/Collections"
import { Story } from "./components/sections/Story"
import { Owner } from "./components/sections/Owner"
import { Visit } from "./components/sections/Visit"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Collections />
        <QuoteBand />
        <Story />
        <Owner />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
