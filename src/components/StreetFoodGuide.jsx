import { streetFoodGuide } from '../data/streetFood'
import BangkokFoodGuide from './BangkokFoodGuide'
import ChiangMaiFoodGuide from './ChiangMaiFoodGuide'
import KohSamuiFoodGuide from './KohSamuiFoodGuide'
import KrabiFoodGuide from './KrabiFoodGuide'
import PhuketFoodGuide from './PhuketFoodGuide'

function StreetFoodGuide() {
  return (
    <section className="food-guide" aria-labelledby="food-guide-heading">
      <header className="food-guide-intro">
        <p className="experiences-kicker">{streetFoodGuide.kicker}</p>
        <h2 id="food-guide-heading">{streetFoodGuide.heading}</h2>
        <p className="food-guide-lede">{streetFoodGuide.intro}</p>
        <nav className="food-guide-nav" aria-label="Street food by destination">
          {streetFoodGuide.locations.map((place) => (
            <a href={`#food-${place.id}`} key={place.id}>
              {place.name}
            </a>
          ))}
        </nav>
      </header>

      {streetFoodGuide.locations.map((place) => (
        place.id === 'bangkok' ? (
          <BangkokFoodGuide guide={place} key={place.id} />
        ) : place.id === 'chiang-mai' ? (
          <ChiangMaiFoodGuide guide={place} key={place.id} />
        ) : place.id === 'phuket' ? (
          <PhuketFoodGuide guide={place} key={place.id} />
        ) : place.id === 'krabi' ? (
          <KrabiFoodGuide guide={place} key={place.id} />
        ) : place.id === 'koh-samui' ? (
          <KohSamuiFoodGuide guide={place} key={place.id} />
        ) : (
          <section className="food-place" id={`food-${place.id}`} key={place.id}>
            <header className="food-place-header">
              <h3>{place.name}</h3>
              <p>{place.intro}</p>
            </header>
            <ul className="food-list">
              {place.recommendations.map((item) => (
                <li className="food-card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p className="food-location">{item.location}</p>
                  <p>{item.description}</p>
                  <p className="food-try">{item.try}</p>
                </li>
              ))}
            </ul>
          </section>
        )
      ))}
    </section>
  )
}

export default StreetFoodGuide
