import { destinations } from '../data/content'

function Destinations() {
  return (
    <section className="destinations" id="destinations" aria-labelledby="destinations-heading">
      <header className="destinations-intro">
        <p className="destinations-kicker">{destinations.kicker}</p>
        <h2 id="destinations-heading">{destinations.heading}</h2>
        <p className="destinations-lede">{destinations.intro}</p>
      </header>

      <ul className="destination-list">
        {destinations.places.map((place) => (
          <li className="destination-card" key={place.name}>
            <article>
              <figure className="destination-media">
                <img
                  src={place.image.src}
                  alt={place.image.alt}
                  width="1600"
                  height="1200"
                />
              </figure>
              <div className="destination-copy">
                <p className="destinations-kicker">{place.region}</p>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Destinations
