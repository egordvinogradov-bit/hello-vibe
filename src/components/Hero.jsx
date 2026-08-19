import { hero } from '../data/content'

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <img
        className="hero-image"
        src={hero.image.src}
        alt={hero.image.alt}
        width="2400"
        height="1600"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-kicker">{hero.kicker}</p>
        <h1>{hero.headline}</h1>
        <p className="hero-copy">{hero.supporting}</p>
        <a className="hero-cta" href={hero.ctaHref}>
          {hero.cta}
        </a>
      </div>
    </section>
  )
}

export default Hero
