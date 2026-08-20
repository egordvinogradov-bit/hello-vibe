export const streetFoodGuide = {
  kicker: 'A tasting map',
  heading: 'Where to eat, city by city.',
  intro:
    'Six places, six palates. Use this as a starting list—add, swap, or skip stops as you go.',
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
      id: 'krabi',
      name: 'Krabi',
      heading: 'Street Food & Local Eats in Krabi',
      intro:
        'Discover Krabi through Southern Thai cooking, fresh seafood, local breakfast spots, traditional markets, and lively evening food stalls from Krabi Town to Ao Nang.',
      disclaimer:
        'Opening hours and schedules can change. Check current information before visiting.',
      filters: [
        'All',
        'Southern Thai',
        'Seafood',
        'Local Favorites',
        'Markets',
        'Breakfast',
        'Krabi Town',
        'Ao Nang',
      ],
      places: [
        {
          name: 'Nong Joke',
          area: 'Sai Thai / Krabi Town',
          address:
            '50/3 Mu 7, Sai Thai, Mueang Krabi, Krabi 81000',
          category: 'Southern Thai',
          tags: ['Seafood', 'Local Favorites', 'Krabi Town'],
          description:
            'A long-running local restaurant focused on bold Southern Thai cooking, seafood, curries, and dishes built around regional ingredients.',
          try:
            'Gaeng som, bai liang with egg, Southern-style curries, and fresh fish.',
          priceLevel: '฿฿',
          openingHours:
            'Daily 11:00–14:00 and 16:00–21:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Nong+Joke+Restaurant+Krabi',
          designation: null,
        },
        {
          name: 'Ruen Mai',
          area: 'Sai Thai',
          address:
            '117 Mu 3, Sai Thai, Mueang Krabi, Krabi',
          category: 'Southern Thai',
          tags: ['Local Favorites', 'Krabi Town'],
          description:
            'A garden-style restaurant specializing in traditional Southern Thai recipes and regional ingredients in a relaxed natural setting.',
          try:
            'Turmeric-fried fish, Southern-style shrimp chili dip, and regional curries.',
          priceLevel: '฿฿',
          openingHours:
            'Daily 10:30–15:00 and 17:00–21:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Ruen+Mai+Restaurant+Krabi',
          designation: null,
        },
        {
          name: 'Krua Thara',
          area: 'Nopparat Thara / Ao Nang',
          address:
            '82 Mu 5, Nopparat Thara Road, Ao Nang, Mueang Krabi, Krabi',
          category: 'Seafood',
          tags: ['Local Favorites', 'Ao Nang'],
          description:
            'A long-established seafood restaurant near Nopparat Thara known for fresh fish, shellfish, crab, and Thai seafood dishes.',
          try:
            'Choose from the fresh seafood selection and order several Thai-style preparations to share.',
          priceLevel: '฿฿',
          openingHours:
            'Current hours vary by source — verify before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Krua+Thara+Krabi',
          designation: null,
        },
        {
          name: 'KoDam Kitchen',
          area: 'Ao Nang',
          address:
            '155/7 Khlong Hang Road, Ao Nang, Mueang Krabi, Krabi',
          category: 'Southern Thai',
          tags: ['Seafood', 'Local Favorites', 'Ao Nang'],
          description:
            'A popular Ao Nang restaurant serving Thai dishes and seafood with an emphasis on fresh ingredients and approachable local flavors.',
          try:
            'Pad Thai with prawns, seafood with chili paste, Massaman chicken with roti, or garlic snapper.',
          priceLevel: '฿฿',
          openingHours:
            'Daily 11:00–22:30',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=KoDam+Kitchen+Ao+Nang+Krabi',
          designation: null,
        },
        {
          name: "May & Mark's House",
          area: 'Krabi Town',
          address:
            '34 Maharaj Road Soi 10, Pak Nam, Mueang Krabi, Krabi',
          category: 'Breakfast',
          tags: ['Krabi Town', 'Local Favorites'],
          description:
            'A casual Krabi Town café and restaurant that works particularly well for an early breakfast or relaxed meal before exploring town.',
          try:
            'Breakfast dishes, coffee, and the daily Thai and café-style options.',
          priceLevel: '฿–฿฿',
          openingHours:
            'Daily 07:00–21:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=May+and+Marks+House+Krabi',
          designation: null,
        },
        {
          name: 'Krabi Town Walking Street',
          area: 'Krabi Town',
          address:
            'Krabi Town, Pak Nam, Mueang Krabi, Krabi',
          category: 'Markets',
          tags: ['Krabi Town', 'Local Favorites'],
          description:
            'A weekend evening market bringing together Thai street food, local snacks, desserts, drinks, crafts, and live entertainment in central Krabi Town.',
          try:
            'Walk through the market first, then look for grilled seafood, Southern Thai snacks, desserts, fruit, and busy local stalls.',
          priceLevel: '฿',
          openingHours:
            'Weekend evenings — verify the current schedule before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Krabi+Town+Walking+Street',
          designation: null,
        },
        {
          name: 'Maharaj Market',
          area: 'Krabi Town',
          address:
            'Maharaj Road, Pak Nam, Mueang Krabi, Krabi',
          category: 'Markets',
          tags: ['Breakfast', 'Krabi Town', 'Local Favorites'],
          description:
            'A traditional fresh market best experienced early in the morning, when local shoppers arrive for produce, seafood, ingredients, and prepared breakfast foods.',
          try:
            'Explore the prepared-food stalls for Southern Thai breakfast dishes, snacks, fruit, and local ingredients.',
          priceLevel: '฿',
          openingHours:
            'Daily approximately 04:00–12:00; best visited early in the morning',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Maharaj+Market+Krabi',
          designation: null,
        },
        {
          name: 'Ao Nang Landmark Night Market',
          area: 'Ao Nang',
          address:
            'Ao Nang, Mueang Krabi, Krabi',
          category: 'Markets',
          tags: ['Ao Nang', 'Seafood'],
          description:
            'A lively evening market near the Ao Nang beachfront area with a broad mix of Thai street food, seafood, grilled dishes, desserts, drinks, and casual entertainment.',
          try:
            'Browse before ordering and look for grilled seafood, skewers, Thai dishes, fresh fruit, pancakes, and desserts.',
          priceLevel: '฿–฿฿',
          openingHours:
            'Daily around 17:00–23:00 — verify current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Ao+Nang+Landmark+Night+Market+Krabi',
          designation: null,
        },
      ],
    },
    {
      id: 'koh-phangan',
      name: 'Koh Phangan',
      heading: 'Street Food & Local Eats in Koh Phangan',
      intro:
        'Discover Koh Phangan beyond the beach parties through home-style Thai cooking, fresh island seafood, Southern flavors, fishing-village restaurants, and lively local markets.',
      disclaimer:
        'Opening hours and schedules can change. Check current information before visiting.',
      filters: [
        'All',
        'Thai Classics',
        'Southern Thai',
        'Seafood',
        'Local Favorites',
        'Markets',
        'Beachfront',
      ],
      places: [
        {
          name: 'Mama KOP',
          area: 'Hin Kong',
          address:
            '19 Hin Kong Road, Ko Pha-ngan, Surat Thani',
          category: 'Thai Classics',
          tags: ['Seafood', 'Local Favorites', 'Beachfront'],
          description:
            'A relaxed beachfront local restaurant in Hin Kong serving home-style Thai dishes and seafood with sunset views over the water.',
          try:
            'Choose several Thai dishes to share, ask about the available seafood, and time your visit for sunset.',
          priceLevel: '฿–฿฿',
          openingHours:
            'Current hours vary by source — verify before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Mama+KOP+Hin+Kong+Koh+Phangan',
          designation: null,
        },
        {
          name: "Fisherman's Restaurant & Bar",
          area: 'Ban Tai',
          address:
            '61/2 Soi Rak Sawat, Ban Tai, Ko Pha-ngan, Surat Thani 84280',
          category: 'Seafood',
          tags: ['Local Favorites'],
          description:
            'An established island seafood restaurant focused on fresh fish, shellfish, and Thai seafood dishes in a relaxed setting.',
          try:
            'Ask about the fresh catch and choose several seafood dishes to share.',
          priceLevel: '฿฿',
          openingHours:
            'Daily 13:00–22:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Fishermans+Restaurant+Bar+Ban+Tai+Koh+Phangan',
          designation: null,
        },
        {
          name: 'No Name Kitchen Phangan',
          area: 'Thong Sala',
          address:
            '99/105 area, Ko Pha-ngan, Surat Thani',
          category: 'Thai Classics',
          tags: ['Local Favorites'],
          description:
            'A small owner-run kitchen serving straightforward home-style Thai cooking away from the island’s more tourist-focused dining scene.',
          try:
            'Ask for the house recommendations and explore classic Thai dishes prepared to order.',
          priceLevel: '฿',
          openingHours:
            'Tue–Sat 14:00–23:30; Sunday and Monday closed',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=No+Name+Kitchen+Phangan',
          designation: null,
        },
        {
          name: 'Restaurant Sunshine',
          area: 'Sri Thanu',
          address:
            '26/14 Moo 8, Sri Thanu, Ko Pha-ngan, Surat Thani',
          category: 'Southern Thai',
          tags: ['Thai Classics', 'Local Favorites'],
          description:
            'A local Thai restaurant associated with traditional and Southern Thai flavors in the Sri Thanu area.',
          try:
            'Look for Southern Thai specialties and ask which dishes are available that day.',
          priceLevel: '฿–฿฿',
          openingHours:
            'Current operating status and hours should be verified before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Restaurant+Sunshine+Sri+Thanu+Koh+Phangan',
          designation: null,
        },
        {
          name: "Muai's Thai Traditional Cooking Academy & Restaurant",
          area: 'Thong Sala',
          address:
            '177/7 Moo 1, Thong Sala, Ko Pha-ngan, Surat Thani 84280',
          category: 'Thai Classics',
          tags: ['Local Favorites'],
          description:
            'A Thai cooking academy and restaurant offering travelers a more hands-on introduction to traditional Thai ingredients, dishes, and cooking techniques.',
          try:
            'Book a cooking session to prepare several Thai dishes rather than treating it only as a conventional restaurant stop.',
          priceLevel: '฿฿',
          openingHours:
            'Classes and restaurant hours vary — contact ahead before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Muais+Thai+Traditional+Cooking+Academy+Koh+Phangan',
          designation: null,
        },
        {
          name: 'Phantip Night Food Market',
          area: 'Thong Sala',
          address:
            'Thong Sala, Ko Pha-ngan, Surat Thani',
          category: 'Markets',
          tags: ['Thai Classics', 'Southern Thai', 'Local Favorites'],
          description:
            'One of Koh Phangan’s essential evening food stops, bringing together Thai curries, grilled food, seafood, snacks, sweets, fruit, and inexpensive local meals.',
          try:
            'Southern-style curries, grilled seafood, som tam, roti, Thai desserts, and whatever stalls are busiest.',
          priceLevel: '฿',
          openingHours:
            'Daily evening market; stalls generally set up around 16:00–17:00 and run until roughly 22:00 — verify current hours',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Phantip+Night+Food+Market+Koh+Phangan',
          designation: null,
        },
        {
          name: 'Thong Sala Saturday Walking Street',
          area: 'Thong Sala',
          address:
            'Chinese Street, Thong Sala, Ko Pha-ngan, Surat Thani',
          category: 'Markets',
          tags: ['Thai Classics', 'Local Favorites'],
          description:
            'A weekly walking street where central Thong Sala fills with food vendors, snacks, local products, crafts, and evening crowds.',
          try:
            'Walk the full street before choosing from grilled food, Thai snacks, desserts, drinks, and local specialties.',
          priceLevel: '฿',
          openingHours:
            'Saturday 16:00–22:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Thong+Sala+Saturday+Walking+Street+Koh+Phangan',
          designation: null,
        },
        {
          name: 'Phorn Restaurant',
          area: 'Chaloklum',
          address:
            '28/4 Moo 7, Chaloklum Pier, Ko Pha-ngan, Surat Thani',
          category: 'Seafood',
          tags: ['Thai Classics', 'Local Favorites'],
          description:
            'A casual seafood restaurant by Chaloklum Pier in the island’s traditional fishing village, with easy access to fresh local seafood.',
          try:
            'Fresh fish, prawns, calamari, and Thai seafood dishes based on what is available that day.',
          priceLevel: '฿–฿฿',
          openingHours:
            'Daily 09:00–22:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Phorn+Restaurant+Chaloklum+Koh+Phangan',
          designation: null,
        },
      ],
    },
    {
      id: 'koh-samui',
      name: 'Koh Samui',
      heading: 'Street Food & Local Eats in Koh Samui',
      intro:
        'Taste Koh Samui through Southern Thai cooking, fresh island seafood, family-run local restaurants, beachfront dining, and lively evening markets.',
      disclaimer:
        'Opening hours and MICHELIN recognition can change. Check current information before visiting.',
      filters: [
        'All',
        'Southern Thai',
        'Seafood',
        'Local Favorites',
        'Beachfront',
        'Markets',
        'Michelin',
      ],
      places: [
        {
          name: 'Jun Hom',
          area: 'Bang Por',
          address:
            '6/14 Mu 5, Mae Nam, Ko Samui, Surat Thani 84330',
          category: 'Seafood',
          tags: ['Southern Thai', 'Beachfront', 'Local Favorites'],
          description:
            'A relaxed beachfront restaurant serving Southern Thai cooking and fresh local seafood with views across the water.',
          try:
            'Ask about the fresh catch of the day and pair it with Southern Thai dishes to share.',
          priceLevel: '฿฿',
          openingHours: 'Daily 11:00–20:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Jun+Hom+Koh+Samui',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Baan Suan Lung Khai',
          area: 'Taling Ngam',
          address:
            'Koh Samui, Surat Thani',
          category: 'Southern Thai',
          tags: ['Local Favorites'],
          description:
            'A family-style Southern Thai dining experience surrounded by coconut trees, focused on local recipes and ingredients from the island.',
          try:
            'Choose the Southern Thai set meal and sample several dishes together rather than ordering a single specialty.',
          priceLevel: '฿฿',
          openingHours:
            'Tue–Sun 11:00–14:00 and 16:30–19:00; Monday closed',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Baan+Suan+Lung+Khai+Koh+Samui',
          designation: 'Bib Gourmand',
        },
        {
          name: 'Bang Por Seafood Takho',
          area: 'Bang Por / Mae Nam',
          address:
            '56/4 Mu 6, Mae Nam, Ko Samui, Surat Thani 84330',
          category: 'Seafood',
          tags: ['Southern Thai', 'Beachfront', 'Local Favorites'],
          description:
            'A casual seaside restaurant where fresh seafood and Southern Thai flavors come with an unfussy beachfront atmosphere.',
          try:
            'Fresh local seafood, especially fish and shellfish prepared in Southern Thai styles.',
          priceLevel: '฿฿',
          openingHours: 'Daily 10:00–22:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Bang+Por+Seafood+Takho+Koh+Samui',
          designation: 'Michelin Guide',
        },
        {
          name: 'Phensiri',
          area: 'Bo Phut',
          address:
            '80/30 Mu 3, Bo Phut, Ko Samui, Surat Thani 84320',
          category: 'Southern Thai',
          tags: ['Local Favorites'],
          description:
            'A welcoming restaurant specializing in Thai and Southern Thai cooking, with recipes built around bold spices and local ingredients.',
          try:
            'Explore the Southern Thai specialties and ask for recommendations based on the day’s ingredients.',
          priceLevel: '฿฿',
          openingHours: 'Daily 12:00–23:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Phensiri+Koh+Samui',
          designation: 'Michelin Guide',
        },
        {
          name: 'Kapi Sator',
          area: 'Chaweng',
          address:
            '25/236 Mu 6, Soi Had Chaweng 5, Bo Phut, Ko Samui, Surat Thani',
          category: 'Southern Thai',
          tags: ['Local Favorites'],
          description:
            'A Southern Thai restaurant built around the intense flavors of the region, including shrimp paste, herbs, chilies, and local produce.',
          try:
            'Southern Thai curries and dishes featuring kapi and sator.',
          priceLevel: '฿฿',
          openingHours: 'Daily 10:00–22:00',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Kapi+Sator+Koh+Samui',
          designation: 'Michelin Guide',
        },
        {
          name: 'Ko Seng',
          area: 'Mae Nam',
          address:
            'Mae Nam, Ko Samui, Surat Thani',
          category: 'Seafood',
          tags: ['Local Favorites', 'Southern Thai'],
          description:
            'An old-school local seafood restaurant with decades of history on Koh Samui, focused on uncomplicated seafood and traditional island flavors.',
          try:
            'Ask what seafood is freshest that day and choose several dishes to share.',
          priceLevel: '฿฿',
          openingHours:
            'Daily 10:00–21:00 — verify current hours before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Ko+Seng+Restaurant+Koh+Samui',
          designation: 'Michelin Guide',
        },
        {
          name: "Fisherman's Village Walking Street",
          area: 'Bo Phut',
          address:
            "Fisherman's Village, Bo Phut, Ko Samui, Surat Thani",
          category: 'Markets',
          tags: ['Local Favorites'],
          description:
            'A popular evening walking-street experience combining local food stalls, snacks, drinks, shopping, and the atmosphere of historic Bo Phut.',
          try:
            'Browse before choosing: look for grilled seafood, Thai snacks, curries, fresh fruit, desserts, and busy local stalls.',
          priceLevel: '฿–฿฿',
          openingHours:
            'Main market Friday around 17:00–23:00; smaller market nights may operate during the week — verify current schedule',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Fishermans+Village+Walking+Street+Koh+Samui',
          designation: null,
        },
        {
          name: 'Lamai Night Market',
          area: 'Lamai',
          address:
            'Lamai, Maret, Ko Samui, Surat Thani',
          category: 'Markets',
          tags: ['Local Favorites'],
          description:
            'An easygoing evening food stop in Lamai where visitors can sample Thai street food, grilled dishes, fruit, sweets, and casual market snacks.',
          try:
            'Walk the market first, then choose local snacks, grilled food, tropical fruit, and Thai desserts.',
          priceLevel: '฿',
          openingHours:
            'Evenings from around 17:00; Sunday is traditionally the main market night — verify current schedule before visiting',
          mapUrl:
            'https://www.google.com/maps/search/?api=1&query=Lamai+Night+Market+Koh+Samui',
          designation: null,
        },
      ],
    },
  ],
}
