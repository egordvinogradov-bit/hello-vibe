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
      heading: 'Street Food & Local Eats in Phuket',
      intro:
        'Explore Phuket through its food, from Old Town institutions and local breakfast spots to seafood by the coast and dishes found almost nowhere else in Thailand.',
      filters: [
        'All',
        'Local Classics',
        'Breakfast',
        'Noodles',
        'Seafood',
        'Southern Thai',
        'Michelin',
      ],
      places: [
        {
          name: 'One Chun',
          area: 'Phuket Old Town',
          address:
            '48/1 Thep Krasatti Road, Talat Yai, Mueang Phuket, Phuket 83000',
          category: 'Southern Thai',
          description:
            'A character-filled restaurant in a historic Old Town building serving family recipes and classic Phuket and Southern Thai cooking.',
          try:
            'Mu Hong — slow-braised pork belly with rich Phuket-style flavors.',
          priceLevel: '฿฿',
          openingHours: 'Check current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=One+Chun+Phuket',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Go Benz',
          area: 'Phuket Town',
          address:
            '163 Krabi Road, Talat Nuea, Mueang Phuket, Phuket 83000',
          category: 'Local Classics',
          description:
            'A hugely popular local institution known for late-night bowls of peppery pork broth and rich rice-noodle dishes.',
          try:
            'Rolled rice noodles with pork in peppery broth, or dry rice with crispy pork and pork offal.',
          priceLevel: '฿',
          openingHours: 'Check current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Go+Benz+Phuket',
          designation: 'Bib Gourmand',
        },
        {
          name: 'O Tao Bang Niao',
          area: 'Phuket Town',
          address:
            '362 Phuket Road, Talat Yai, Mueang Phuket, Phuket 83000',
          category: 'Local Classics',
          description:
            'A family-run Phuket favorite serving O Tao, a smoky local specialty cooked over charcoal with seafood, egg, and battered taro.',
          try:
            'O Tao — one of Phuket’s most distinctive local dishes.',
          priceLevel: '฿',
          openingHours: 'Check current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=O+Tao+Bang+Niao+Phuket',
          designation: 'Michelin Guide',
        },
        {
          name: 'Roti Chaofa',
          area: 'Phuket Town',
          address:
            '44 Chaofa Road, Talat Nuea, Mueang Phuket, Phuket 83000',
          category: 'Breakfast',
          description:
            'A long-running Thai-Muslim breakfast spot where crisp rotis are served alongside curries, biryani, and savory breakfast dishes.',
          try:
            'Fresh roti with beef Massaman curry.',
          priceLevel: '฿',
          openingHours: 'Check current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Roti+Chaofa+Phuket',
          designation: 'Bib Gourmand',
        },
        {
          name: 'O Cha Rot',
          area: 'Phuket Old Town',
          address:
            '72/1 Yaowarat Road, Talat Yai, Mueang Phuket, Phuket 83000',
          category: 'Noodles',
          description:
            'A straightforward Old Town noodle shop known for aromatic beef broth, tender beef, and flavorful homemade beef balls.',
          try:
            'Beef noodle soup with beef balls.',
          priceLevel: '฿',
          openingHours: 'Check current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=O+Cha+Rot+Yaowarat+Phuket',
          designation: 'Michelin Guide',
        },
        {
          name: 'Loba Bang Niao',
          area: 'Phuket Town',
          address:
            '18/61 Mae Luan Road, Mueang Phuket, Phuket',
          category: 'Local Classics',
          description:
            'A local spot preserving Phuket’s Hokkien-influenced snack culture, best known for loba and a variety of fried small plates.',
          try:
            'Mixed loba and Kien with sweet chili and crushed peanut sauce.',
          priceLevel: '฿',
          openingHours: 'Check current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Loba+Bang+Niao+Phuket',
          designation: 'Michelin Guide',
        },
        {
          name: 'Mor Mu Dong',
          area: 'Chalong',
          address:
            '9/4 Mu 3 Soi Pa Lai, Chao Fa Road, Chalong, Mueang Phuket, Phuket 83130',
          category: 'Southern Thai',
          description:
            'Rustic pavilions set beside a mangrove canal provide the setting for bold Southern Thai flavors and very fresh seafood.',
          try:
            'Choose several Southern Thai dishes to share and ask about the day’s seafood.',
          priceLevel: '฿฿',
          openingHours: 'Check current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Mor+Mu+Dong+Phuket',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Mook Manee',
          area: 'Rawai',
          address:
            '1120 Wiset Road, Rawai, Mueang Phuket, Phuket 83100',
          category: 'Seafood',
          description:
            'A Rawai seafood restaurant centered on fresh shellfish, fish, crab, prawns, and other coastal favorites.',
          try:
            'Fresh seafood and stir-fried clams with chili paste.',
          priceLevel: '฿฿',
          openingHours: 'Check current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Mook+Manee+Phuket',
          designation: 'Michelin Guide',
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
