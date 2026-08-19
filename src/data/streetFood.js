export const streetFoodGuide = {
  kicker: 'A tasting map',
  heading: 'Where to eat, city by city.',
  intro:
    'Four places, four palates. Use this as a starting list—add, swap, or skip stops as you go.',
  locations: [
    {
      id: 'bangkok',
      name: 'Bangkok',
      intro: 'Night markets, Chinatown alleys, and a few stalls that have earned their reputation.',
      recommendations: [
        {
          name: 'Yaowarat (Chinatown)',
          location: 'Yaowarat Road, Samphanthawong',
          description:
            'Bangkok’s most famous night-eating street: packed, bright, and built for grazing rather than a single sit-down meal.',
          try: 'Try hoy tod (oyster omelette), roasted duck, and fishball noodles after dark.',
        },
        {
          name: 'Thip Samai',
          location: 'Maha Chai Road, Phra Nakhon',
          description:
            'A long-running Pad Thai shop in the old city, still the reference point for many visitors.',
          try: 'Order Pad Thai with fresh prawns, or the wrapped egg version if you want the house classic.',
        },
        {
          name: 'Or Tor Kor Market',
          location: 'Kamphaeng Phet Road, beside Chatuchak',
          description:
            'One of the city’s cleanest, most carefully stocked food markets—fruit, curries, and northern snacks under one roof.',
          try: 'Go for som tam, coconut ice cream, and a box of still-warm Thai desserts to take away.',
        },
        {
          name: 'Wang Lang Market',
          location: 'Taksin Road, Bangkok Noi (Thonburi)',
          description:
            'A tight local market across the river from the Grand Palace, with less spectacle and more everyday eating.',
          try: 'Look for boat noodles, grilled pork skewers, and whatever the longest queue is for.',
        },
      ],
    },
    {
      id: 'chiang-mai',
      name: 'Chiang Mai',
      intro: 'Northern curries, grilled chicken, and night streets that are as much culture as dinner.',
      recommendations: [
        {
          name: 'Sunday Walking Street',
          location: 'Ratchadamnoen Road, inside the old city',
          description:
            'The weekly night market that turns the old moat streets into a slow crawl of northern snacks and crafts.',
          try: 'Sai ua (herb sausage), khao soi cups, and roti with banana if you want something sweet.',
        },
        {
          name: 'Warorot Market (Kad Luang)',
          location: 'Wichayanon Road, by the Ping River',
          description:
            'Chiang Mai’s working market: spices, fruit, and cheap, excellent food from early morning.',
          try: 'Nam prik noom with sticky rice, fresh coconut, and a bag of crispy pork crackling.',
        },
        {
          name: 'Khao Soi Mae Sai',
          location: 'Faham Road, near Nakorn Ping Bridge',
          description:
            'A no-frills bowl shop dedicated to Chiang Mai’s signature curry noodles.',
          try: 'Khao soi with chicken, extra pickled mustard greens, and a squeeze of lime.',
        },
        {
          name: 'SP Chicken',
          location: 'Moon Muang Soi 2, old city',
          description:
            'A small grilled-chicken stall that locals still rate above most tourist restaurants nearby.',
          try: 'Gai yang with sticky rice and nam jim jaew—simple, smoky, and worth the wait.',
        },
      ],
    },
    {
      id: 'phuket',
      name: 'Phuket',
      intro: 'Peranakan-Chinese town cooking, Hokkien noodles, and markets that still feed the island’s everyday life.',
      recommendations: [
        {
          name: 'Phuket Old Town Walking Street',
          location: 'Thalang, Dibuk and Krabi Roads',
          description:
            'Sino-Portuguese shophouses and a weekend night market that is the easiest introduction to Phuket food.',
          try: 'Mee hokkien, o-aew (grass jelly), and local coconut ice cream as you walk.',
        },
        {
          name: 'Mee Ton Poe',
          location: 'Phang Nga Road, Phuket Town',
          description:
            'A decades-old Hokkien noodle house and a local landmark for Phuket’s Chinese-Thai cooking.',
          try: 'Hokkien mee with pork and squid, plus a side of the house dumplings if they have them.',
        },
        {
          name: 'Go Ang',
          location: 'Phang Nga Road, Phuket Town',
          description:
            'An old-school breakfast and dim sum room that still fills with families on weekends.',
          try: 'Steamed buns, pork stew rice, and local coffee to start the day like Phuket Town does.',
        },
        {
          name: 'Banzaan Fresh Market',
          location: 'Patak Road, near Jungceylon, Patong',
          description:
            'A modern wet market with a food court upstairs—useful if you are staying on the west coast rather than in town.',
          try: 'Southern-style curries, grilled seafood, and mango sticky rice from the stall counters.',
        },
      ],
    },
    {
      id: 'koh-samui',
      name: 'Koh Samui',
      intro: 'Night markets, fishing-village seafood, and a few island stalls that stay local even in high season.',
      recommendations: [
        {
          name: 'Fisherman’s Village Walking Street',
          location: 'Bophut, Thursday evenings',
          description:
            'Samui’s most walkable night market: street stalls, seafood, and a waterfront that is easy to linger on.',
          try: 'Grilled prawns, som tam, and a coconut pancake (khanom krok) as you wander.',
        },
        {
          name: 'Lamai Food Center & Night Market',
          location: 'Lamai Beach Road',
          description:
            'A practical, less dressed-up cluster of stalls—good for a casual dinner without crossing the island.',
          try: 'Pad see ew, satay, and fresh fruit shakes after a beach day.',
        },
        {
          name: 'Hua Thanon',
          location: 'Muslim fishing village, south of Lamai',
          description:
            'A working village with excellent seafood and a slower, more local feel than Chaweng.',
          try: 'Grilled fish with seafood sauce, khao yum, and whatever the day’s catch board lists.',
        },
        {
          name: 'Khao Kha Moo 57',
          location: 'Near Tesco Lotus, Nathon / Maenam area (island favourite)',
          description:
            'A simple pork-leg rice shop that islanders recommend when they want something hearty and unfussy.',
          try: 'Khao kha moo with a boiled egg and plenty of pickled greens and chili vinegar.',
        },
      ],
    },
  ],
}
