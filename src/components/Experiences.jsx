import Link from '../Link'
import { experiences } from '../data/content'

function Experiences() {
  return (
    <section className="experiences" id="experiences" aria-labelledby="experiences-heading">
      <header className="experiences-intro">
        <p className="experiences-kicker">{experiences.kicker}</p>
        <h2 id="experiences-heading">{experiences.heading}</h2>
        <p className="experiences-lede">{experiences.intro}</p>
      </header>

      <ul className="experience-list">
        {experiences.items.map((item) => (
          <li className="experience-card" key={item.slug}>
            <Link
              className="experience-card-link"
              href={`/experiences/${item.slug}`}
              aria-label={`Open ${item.pageTitle} experience`}
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                width="1600"
                height="1200"
              />
              <div className="experience-copy">
                <p className="experiences-kicker">{item.path}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experiences