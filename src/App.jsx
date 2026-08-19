import ExperienceDetail from './components/ExperienceDetail'
import Destinations from './components/Destinations'
import Experiences from './components/Experiences'
import FinalCta from './components/FinalCta'
import Hero from './components/Hero'
import Itinerary from './components/Itinerary'
import Navbar from './components/Navbar'
import { usePath } from './usePath'
import './App.css'

function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Navbar />
      </header>
      <main id="main" className="site-main">
        <Hero />
        <Destinations />
        <Experiences />
        <Itinerary />
        <FinalCta />
      </main>
      <footer className="site-footer" />
    </>
  )
}

function App() {
  const pathname = usePath()
  const experienceMatch = pathname.match(/^\/experiences\/([^/]+)\/?$/)

  if (experienceMatch) {
    return <ExperienceDetail slug={experienceMatch[1]} />
  }

  return <HomePage />
}

export default App