export const site = {
  name: 'THAILAND',
  documentTitle: 'Thailand — Discover Beyond the Ordinary',
}

export const navLinks = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#itinerary', label: 'Itinerary' },
  { href: '#explore', label: 'Explore' },
]

export const hero = {
  kicker: 'Phuket & the Andaman Coast',
  headline: 'Discover Thailand Beyond the Ordinary.',
  supporting:
    'From vibrant cities and Phuket’s hidden beaches to unforgettable food and culture, begin exploring the journey waiting for you.',
  cta: 'Start Exploring →',
  ctaHref: '#destinations',
  image: {
    src: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=2400&q=80',
    alt: 'Turquoise water and limestone cliffs on the Andaman coast near Phuket, Thailand',
  },
}

export const destinations = {
  kicker: 'Destinations',
  heading: 'Where Will You Begin?',
  intro:
    'Six places. Six moods. Start with the city, the mountains, or the islands—and let the rest of Thailand unfold from there.',
  places: [
    {
      name: 'Bangkok',
      region: 'The Capital',
      description:
        'Temples at dusk, street kitchens at midnight, and a city that never quite sits still.',
      image: {
        src: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1600&q=80',
        alt: 'Wat Arun temple glowing beside the Chao Phraya River in Bangkok at dusk',
      },
    },
    {
      name: 'Chiang Mai',
      region: 'The North',
      description:
        'Mountain air, gilded rooftops, and a slower rhythm between forested hills.',
      image: {
        src: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1600&q=80',
        alt: 'Ornate temple rooftops against the hills of northern Thailand near Chiang Mai',
      },
    },
    {
      name: 'Phuket',
      region: 'Andaman Coast',
      description:
        'Long-tail boats, open beaches, and island-hopping along the Andaman Sea.',
      image: {
        src: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1600&q=80',
        alt: 'Traditional long-tail boats on turquoise water along the Andaman coast near Phuket',
      },
    },
    {
      name: 'Krabi',
      region: 'Limestone Shores',
      description:
        'Sheer cliffs, emerald coves, and water so still it invites you to linger.',
      image: {
        src: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1600&q=80',
        alt: 'Limestone karsts and tropical shoreline along the coast of Krabi',
      },
    },
    {
      name: 'Koh Phangan',
      region: 'Gulf Islands',
      description:
        'Barefoot beach days, warm nights, and an island current that stays a little electric.',
      image: {
        src: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1600&q=80',
        alt: 'Palm trees along a tropical beach on Koh Phangan in the Gulf of Thailand',
      },
    },
    {
      name: 'Koh Samui',
      region: 'Gulf Islands',
      description:
        'Palm-lined bays, quiet luxury, and a refined kind of island calm.',
      image: {
        src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80',
        alt: 'Overwater bungalows on calm tropical water at a refined island resort in Koh Samui',
      },
    },
  ],
}

export const experiences = {
  kicker: 'Experiences',
  heading: 'Feel Thailand, Not Just See It.',
  intro:
    'The places are only the beginning. Eat at a night market, cross the Andaman by long-tail, sit still in a temple, then let the day end in quiet water and warm stone.',
  items: [
    {
      name: 'Island Hopping',
      slug: 'island-hopping',
      pageTitle: 'Island Hopping',
      path: 'Adventure',
      description:
        'Skip between limestone islands, drop into hidden coves, and spend the day on the water.',
      image: {
        src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1600&q=80',
        alt: 'Long-tail boat moving across turquoise water between tropical islands in Thailand',
      },
    },
    {
      name: 'Street Food',
      slug: 'street-food',
      pageTitle: 'Street Food',
      path: 'Culture',
      description:
        'Follow the smoke and spice—from Bangkok stalls to island night markets.',
      image: {
        src: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pad Thai cooking in a wok at a Thai street food stall',
      },
    },
    {
      name: 'Temples & Culture',
      slug: 'temples-culture',
      pageTitle: 'Temples & Culture',
      path: 'Discovery',
      description:
        'Gold rooftops, quiet courtyards, and rituals that slow the whole day down.',
      image: {
        src: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Golden Buddhist temple overlooking forested hills in northern Thailand',
      },
    },
    {
      name: 'Nature & Beaches',
      slug: 'nature-adventure',
      pageTitle: 'Nature & Adventure',
      path: 'Adventure',
      description:
        'National parks, warm shallows, and outdoor days that run from jungle to sea.',
      image: {
        src: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=1400&q=80',
        alt: 'Aerial view of a tropical beach and turquoise sea in Thailand',
      },
    },
    {
      name: 'Wellness & Spa',
      slug: 'wellness',
      pageTitle: 'Wellness & Relaxation',
      path: 'Stillness',
      description:
        'Massage, slow mornings, and the kind of rest Thailand does with real care.',
      image: {
        src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80',
        alt: 'Calm spa treatment room with warm lighting and massage stones',
      },
    },
  ],
}

export function getExperienceBySlug(slug) {
  return experiences.items.find((item) => item.slug === slug)
}

export const itinerary = {
  kicker: 'Sample Journey',
  heading: '12 Days. One Unforgettable Journey.',
  intro:
    'A paced route from the capital to the mountains, then south to the Andaman and the Gulf—city first, stillness last.',
  stages: [
    {
      days: 'Days 1–2',
      place: 'Bangkok',
      mood: 'City',
      description:
        'Temples at sunrise, markets after dark, and street food that sets the tone for everything that follows.',
    },
    {
      days: 'Days 3–4',
      place: 'Chiang Mai',
      mood: 'Mountains',
      description:
        'Cooler air, gilded courtyards, and local days that trade the city’s rush for a northern pace.',
    },
    {
      days: 'Days 5–7',
      place: 'Phuket or Krabi',
      mood: 'Island Energy',
      description:
        'Three unhurried days on the Andaman coast—beaches, long-tail boats, and island-hopping between limestone shores.',
    },
    {
      days: 'Days 8–9',
      place: 'Koh Phangan',
      mood: 'Island Life',
      description:
        'Barefoot beaches and easy island wandering, with just enough energy to keep the journey alive.',
    },
    {
      days: 'Days 10–12',
      place: 'Koh Samui',
      mood: 'Nature & Relaxation',
      description:
        'A slower finish: wellness, warm water, and space to let the trip settle before you leave.',
    },
  ],
}

export const finalCta = {
  heading: 'Explore Thailand Your Way.',
  supporting:
    'Every journey is different. Discover the places, experiences, and adventures that make Thailand yours.',
  cta: 'Start Exploring →',
  ctaHref: '#destinations',
  image: {
    src: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc31?auto=format&fit=crop&w=2400&q=80',
    alt: 'Palm trees against a warm sunset sky on a tropical Thai beach',
  },
}
