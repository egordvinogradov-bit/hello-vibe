import { finalCta } from '../data/content'

function FinalCta() {
  return (
    <section className="final-cta" id="explore" aria-labelledby="final-cta-heading">
      <img
        className="final-cta-image"
        src={finalCta.image.src}
        alt={finalCta.image.alt}
        width="2400"
        height="1600"
      />
      <div className="final-cta-overlay" aria-hidden="true" />
      <div className="final-cta-content">
        <h2 id="final-cta-heading">{finalCta.heading}</h2>
        <p>{finalCta.supporting}</p>
        <a className="final-cta-button" href={finalCta.ctaHref}>
          {finalCta.cta}
        </a>
      </div>
    </section>
  )
}

export default FinalCta
