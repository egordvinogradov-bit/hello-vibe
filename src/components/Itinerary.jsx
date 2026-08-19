import { itinerary } from '../data/content'

function Itinerary() {
  return (
    <section className="itinerary" id="itinerary" aria-labelledby="itinerary-heading">
      <header className="itinerary-intro">
        <p className="itinerary-kicker">{itinerary.kicker}</p>
        <h2 id="itinerary-heading">{itinerary.heading}</h2>
        <p className="itinerary-lede">{itinerary.intro}</p>
      </header>

      <ol className="itinerary-list">
        {itinerary.stages.map((stage, index) => (
          <li className="itinerary-stage" key={stage.days}>
            <p className="itinerary-days">{stage.days}</p>
            <div className="itinerary-marker" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <article className="itinerary-copy">
              <p className="itinerary-kicker">{stage.mood}</p>
              <h3>{stage.place}</h3>
              <p>{stage.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Itinerary
