export const streetFoodGuide = {
  kicker: 'A tasting map',
  heading: 'Where to eat, city by city.',
  intro:
    'Four places, four palates. Use this as a starting list—add, swap, or skip stops as you go.',
  locations: [
    {
      id: 'bangkok',
      name: 'Bangkok',
      heading: 'Street Food & Local Eats in Bangkok',
      intro:
        'Explore Bangkok through noodle shops, Thai-Chinese classics, seafood, historic markets, and the after-dark energy of Chinatown.',
      disclaimer:
        'Opening hours and MICHELIN recognition can change. Check current information before visiting.',
      filters: [
        'All',
        'Noodles',
        'Thai Classics',
        'Chinatown',
        'Seafood',
        'Markets',
        'Late Night',
        'Michelin',
      ],
      places: [
        {
          name: 'Lim Lao Ngow',
          area: 'Chinatown / Samphanthawong',
          address:
            '299-301 Song Sawat Road, Samphanthawong, Bangkok 10100',
          category: 'Noodles',
          tags: ['Chinatown', 'Late Night'],
          description:
            'The original Chinatown branch of a long-running family noodle shop, best known for springy fish balls made without flour.',
          try:
            'Egg noodles with fish balls and wontons.',
          priceLevel: '฿',
          openingHours: 'Daily 16:30–21:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Lim+Lao+Ngow+299+Song+Sawat+Road+Bangkok',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Rung Rueang Tung Pork Noodle',
          area: 'Phrom Phong / Sukhumvit 26',
          address:
            '21/2 Soi Sukhumvit 26, Khlong Tan, Khlong Toei, Bangkok 10110',
          category: 'Noodles',
          tags: ['Thai Classics'],
          description:
            'A compact local noodle shop serving clear pork soup and punchy tom yum broth with minced pork, homemade fish balls, and optional crispy fish skin.',
          try:
            'Tom yum pork noodles with minced pork balls and crispy fish skin.',
          priceLevel: '฿',
          openingHours: 'Daily 08:00–17:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Rung+Rueang+Tung+Pork+Noodle+Bangkok',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Here Hai',
          area: 'Ekkamai',
          address:
            '112/1 Soi Sukhumvit 63, Khlong Tan Nuea, Vadhana, Bangkok 10110',
          category: 'Seafood',
          tags: ['Thai Classics'],
          description:
            'A busy seafood specialist known for generous portions, fresh seafood from Surat Thani, and bold wok-fired Thai flavors.',
          try:
            'Crab meat fried rice.',
          priceLevel: '฿฿',
          openingHours:
            'Tue–Sun 10:00–14:30 and 16:00–17:30; Monday closed',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Here+Hai+Ekkamai+Bangkok',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Tang Sui Heng',
          area: 'Banthat Thong',
          address:
            '649 Banthat Thong Road, Wang Mai, Pathum Wan, Bangkok 10330',
          category: 'Thai Classics',
          tags: ['Late Night'],
          description:
            'A family-run Bangkok institution serving Thai-Chinese comfort food for more than half a century.',
          try:
            'Claypot stewed duck with intestines, blood jelly, and duck feet.',
          priceLevel: '฿',
          openingHours: 'Daily 10:30–19:30',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Tang+Sui+Heng+649+Banthat+Thong+Bangkok',
          designation: 'Michelin Guide',
        },
        {
          name: 'Nai Ek Roll Noodles',
          area: 'Yaowarat / Chinatown',
          address:
            'Yaowarat Road, Samphanthawong, Bangkok',
          category: 'Chinatown',
          tags: ['Noodles', 'Late Night'],
          description:
            'A famous Chinatown shop built around guay jub: rolled rice noodles in a strongly peppered broth with crispy pork and pork offal.',
          try:
            'Guay jub with crispy pork.',
          priceLevel: '฿',
          openingHours:
            'Reported around 08:00–00:00; verify current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Nai+Ek+Roll+Noodles+Yaowarat+Bangkok',
          designation: null,
        },
        {
          name: 'Polo Fried Chicken',
          area: 'Lumphini',
          address:
            '137/1-3 Sanam Khli Alley (Soi Polo), Lumphini, Pathum Wan, Bangkok 10330',
          category: 'Thai Classics',
          tags: [],
          description:
            'A long-running Bangkok favorite serving crisp fried chicken piled with fragrant fried garlic alongside classic Isan dishes.',
          try:
            'Fried chicken with crispy garlic, som tam, and larb.',
          priceLevel: '฿',
          openingHours: 'Daily 07:00–21:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Polo+Fried+Chicken+Bangkok',
          designation: null,
        },
        {
          name: 'Yaowarat Road',
          area: 'Chinatown',
          address:
            'Yaowarat Road, Samphanthawong, Bangkok',
          category: 'Chinatown',
          tags: ['Markets', 'Late Night', 'Seafood'],
          description:
            'Bangkok’s Chinatown becomes one of the city’s great food experiences after dark, when street stalls fill Yaowarat and the surrounding lanes.',
          try:
            'Guay jub, grilled seafood, Chinese-Thai noodles, desserts, and whatever looks busiest with locals.',
          priceLevel: '฿–฿฿',
          openingHours:
            'Best visited in the evening and at night; individual vendor hours vary',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Yaowarat+Road+Bangkok',
          designation: null,
        },
        {
          name: 'Nang Loeng Market',
          area: 'Pom Prap Sattru Phai',
          address:
            'Nang Loeng, Pom Prap Sattru Phai, Bangkok',
          category: 'Markets',
          tags: ['Thai Classics'],
          description:
            'One of Bangkok’s older neighborhood markets, combining everyday local commerce with traditional prepared foods and Thai snacks.',
          try:
            'Explore the prepared-food stalls for noodles, dumplings, sweets, and classic Bangkok market dishes.',
          priceLevel: '฿',
          openingHours:
            'Hours vary by vendor — verify current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Nang+Loeng+Market+Bangkok',
          designation: null,
        },
      ],
    },
    {
      id: 'chiang-mai',
      name: 'Chiang Mai',
      heading: 'Street Food & Northern Thai Eats in Chiang Mai',
      intro:
        'Taste Chiang Mai through khao soi, fiery northern dips, laab, market snacks, and family-run restaurants rooted in Lanna food culture.',
      filters: [
        'All',
        'Khao Soi',
        'Northern Thai',
        'Street Food',
        'Markets',
        'Breakfast',
        'Michelin',
      ],
      places: [
        {
          name: 'Khao Soi Mae Sai',
          area: 'Chang Phueak',
          address:
            '29/1 Ratchaphruek Road, Chang Phueak, Mueang Chiang Mai, Chiang Mai 50300',
          category: 'Khao Soi',
          description:
            'A beloved local shop focused on rich, slightly spicy khao soi with a choice of meat toppings.',
          try:
            'Khao soi, with chicken or another available meat topping.',
          priceLevel: '฿',
          openingHours:
            'Mon–Sat 08:00–16:00; Sunday closed',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Khao+Soi+Mae+Sai+Chiang+Mai',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Huen Muan Jai',
          area: 'Chang Phueak',
          address:
            '24 Ratchaphruek Road, Chang Phueak, Mueang Chiang Mai, Chiang Mai 50300',
          category: 'Northern Thai',
          description:
            'A Lanna-style restaurant serving a broad range of traditional Northern Thai dishes in a relaxed garden setting.',
          try:
            'Northern Thai dips, herby soups, and seasonal local dishes.',
          priceLevel: '฿฿',
          openingHours:
            'Mon–Tue, Thu–Sun 11:00–15:00 and 17:00–21:00; Wednesday closed',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Huen+Muan+Jai+Chiang+Mai',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Lung Khajohn Wat Ket',
          area: 'Wat Ket',
          address:
            '109 Charoen Rajd Road, Chang Moi, Mueang Chiang Mai, Chiang Mai 50000',
          category: 'Street Food',
          description:
            'A humble local favorite opposite Wat Ket Karam, known for delicate steamed rice-skin dumplings and tapioca snacks.',
          try:
            'Khao kriap pak mo and tapioca dumplings filled with pork and peanuts.',
          priceLevel: '฿',
          openingHours:
            'Mon–Sat 06:00–15:00; Sunday closed',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Lung+Khajohn+Wat+Ket+Chiang+Mai',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Krua Lawng Khao',
          area: 'Mae Rim',
          address:
            '18 Mu 2, Soi Sukhaphiban Mae Rim, Ban Duang Di 1, Rim Tai, Mae Rim, Chiang Mai 50180',
          category: 'Northern Thai',
          description:
            'A relaxed wooden pavilion overlooking rice fields, serving fresh and affordable Northern Thai cooking.',
          try:
            'Northern Thai spicy pork salad and hot-and-spicy fish soup with morning glory.',
          priceLevel: '฿',
          openingHours:
            'Tue–Sun 11:00–19:00; Monday closed',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Krua+Lawng+Khao+Chiang+Mai',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Lumdee Te Khuadang',
          area: 'San Sai',
          address:
            'V Community, 345/9 Mu 3, Wongwaen Rop 2 Road, San Phra Net, San Sai, Chiang Mai 50210',
          category: 'Northern Thai',
          description:
            'A spacious local restaurant specializing in home-style Northern Thai dishes served hot and made to order.',
          try:
            'Saep pork rib, nam phrik num, and seasonal Northern Thai dishes.',
          priceLevel: '฿฿',
          openingHours:
            'Daily 10:30–21:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Lumdee+Te+Khuadang+Chiang+Mai',
          designation: 'Michelin Guide',
        },
        {
          name: 'Withee Laab',
          area: 'Wat Ket',
          address:
            '94-120 Charoen Muang Road, Wat Ket, Mueang Chiang Mai, Chiang Mai 50000',
          category: 'Northern Thai',
          description:
            'A small wooden restaurant known for bold Northern-style laab and affordable local cooking.',
          try:
            'Spicy minced buffalo laab or cooked minced pork laab.',
          priceLevel: '฿',
          openingHours:
            'Check current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Withee+Laab+Chiang+Mai',
          designation: 'Michelin Guide',
        },
        {
          name: 'Jing Jai Weekend Market',
          area: 'Chang Phueak',
          address:
            'Jing Jai Central, Atsadathorn Road, Chiang Mai',
          category: 'Markets',
          description:
            'A relaxed weekend market combining local food, seasonal produce, crafts, cafés, and Chiang Mai creative culture.',
          try:
            'Local produce, northern snacks, homemade food, and seasonal specialties.',
          priceLevel: '฿',
          openingHours:
            'Saturday and Sunday mornings',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Jing+Jai+Market+Chiang+Mai',
          designation: null,
        },
        {
          name: 'Tha Phae Sunday Walking Street',
          area: 'Old City',
          address:
            'Ratchadamnoen Road, Chiang Mai Old City',
          category: 'Markets',
          description:
            'Chiang Mai’s famous Sunday walking street, filled with market stalls, snacks, desserts, and local specialties.',
          try:
            'Khai pam, northern snacks, fruit drinks, sweets, and market-style street food.',
          priceLevel: '฿',
          openingHours:
            'Sunday from around 17:00 onward',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Tha+Phae+Sunday+Walking+Street+Chiang+Mai',
          designation: null,
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
