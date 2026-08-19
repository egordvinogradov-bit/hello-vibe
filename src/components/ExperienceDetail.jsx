import { useEffect } from 'react'
import Link from '../Link'
import { getExperienceBySlug, site } from '../data/content'
import StreetFoodGuide from './StreetFoodGuide'

function ExperienceDetail({ slug }) {
  const experience = getExperienceBySlug(slug)

  useEffect(() => {
    const previousTitle = document.title
    document.title = experience
      ? `${experience.pageTitle} — ${site.name}`
      : `Experience — ${site.name}`
    return () => {
      document.title = previousTitle
    }
  }, [experience])

  if (!experience) {
    return (
      <div className="experience-page">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="experience-page-header">
          <Link className="navbar-logo" href="/">
            {site.name}
          </Link>
          <Link className="experience-back" href="/#experiences">
            ← Experiences
          </Link>
        </header>
        <main id="main" className="experience-page-main">
          <h1>Experience not found</h1>
          <p>This experience page does not exist yet.</p>
          <Link className="experience-back" href="/#experiences">
            ← Back to Experiences
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="experience-page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="experience-page-header">
        <Link className="navbar-logo" href="/">
          {site.name}
        </Link>
        <Link className="experience-back" href="/#experiences">
          ← Experiences
        </Link>
      </header>
      <main id="main" className="experience-page-main">
        <section className="experience-hero" aria-labelledby="experience-heading">
          <img
            src={experience.image.src}
            alt={experience.image.alt}
            width="1600"
            height="1200"
          />
          <div className="experience-hero-copy">
            <p className="experiences-kicker">{experience.path}</p>
            <h1 id="experience-heading">{experience.pageTitle}</h1>
            <p>{experience.description}</p>
          </div>
        </section>
        {slug === 'street-food' ? <StreetFoodGuide /> : null}
      </main>
    </div>
  )
}

export default ExperienceDetail