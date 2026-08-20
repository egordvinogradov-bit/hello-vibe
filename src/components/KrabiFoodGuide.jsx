import { useState } from 'react'
import FoodGuideDisclaimer from './FoodGuideDisclaimer'

function KrabiFoodGuide({ guide }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const visiblePlaces = guide.places.filter((place) => {
    if (activeFilter === 'All') return true
    return place.category === activeFilter || place.tags.includes(activeFilter)
  })

  return (
    <section className="food-place phuket-food-guide" id="food-krabi">
      <header className="food-place-header phuket-food-header">
        <p className="experiences-kicker">Krabi food guide</p>
        <h3>{guide.heading}</h3>
        <p>{guide.intro}</p>
      </header>

      <div className="phuket-food-filters" role="group" aria-label="Filter Krabi food places">
        {guide.filters.map((filter) => (
          <button
            className={`phuket-food-filter${activeFilter === filter ? ' is-active' : ''}`}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">
        Showing {visiblePlaces.length} {visiblePlaces.length === 1 ? 'place' : 'places'} for {activeFilter}
      </p>

      {visiblePlaces.length > 0 ? (
        <ul className="food-list phuket-food-list">
          {visiblePlaces.map((place) => (
            <li className="food-card phuket-food-card" key={place.name}>
              <div className="phuket-food-card-heading">
                <div>
                  <p className="food-location">{place.area}</p>
                  <h4>{place.name}</h4>
                </div>
              </div>

              <p className="phuket-food-category">{place.category}</p>
              <p className="phuket-food-address">{place.address}</p>
              <p>{place.description}</p>
              <p className="food-try">
                <span>What to try</span>
                {place.try}
              </p>

              <dl className="phuket-food-details">
                <div>
                  <dt>Price</dt>
                  <dd>{place.priceLevel}</dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{place.openingHours}</dd>
                </div>
              </dl>

              <a
                className="phuket-food-map"
                href={place.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="phuket-food-empty">No places are listed in this category.</p>
      )}
      <FoodGuideDisclaimer>{guide.disclaimer}</FoodGuideDisclaimer>
    </section>
  )
}

export default KrabiFoodGuide
