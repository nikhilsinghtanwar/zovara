export type Difficulty = 'Easy' | 'Easy–Moderate' | 'Moderate' | 'Challenging';
export type TripType = 'Eco Retreat' | 'Cultural + Adventure' | 'Luxury + Adventure' | 'Trekking' | 'Luxury + Cultural' | 'Cultural + Nature' | 'Adventure + Luxury';
export type DestinationRegion = 'Himalayan' | 'Cultural & Heritage' | 'Adventure' | 'Eco & Nature' | 'Weekend';

export interface Destination {
  id: string;
  name: string;
  state: string;
  tagline: string;
  region: DestinationRegion[];
  image: string;
  heroImage: string;
  description: string[];
  highlights: { icon: string; title: string; description: string }[];
  stats: { label: string; value: string }[];
  travelTips: { title: string; content: string }[];
}

export interface PackageItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface PackageData {
  id: string;
  title: string;
  destinationId: string;
  duration: string;
  price: number;
  difficulty: Difficulty;
  type: TripType;
  image: string;
  heroImage: string;
  description: string[];
  itinerary: PackageItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  packingList: string[];
  groupSize: string;
  nextDate: string;
  galleryImages: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  trip: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: string;
  date: string;
  content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const destinations: Destination[] = [
  {
    id: 'dharamshala',
    name: 'Dharamshala & McLeod Ganj',
    state: 'Himachal Pradesh',
    tagline: 'Monasteries, mountains & mindful trekking',
    region: ['Himalayan', 'Eco & Nature', 'Weekend'],
    image: 'https://images.pexels.com/photos/669912/pexels-photo-669912.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/669912/pexels-photo-669912.jpeg?w=1600&fit=crop',
    description: [
      'Nestled in the shadow of the Dhauladhar range, Dharamshala and its upper twin McLeod Ganj form a world where Tibetan spirituality meets Himalayan grandeur. Prayer flags flutter between cedar forests, and the air carries the sound of monastery bells mixed with mountain wind.',
      'Home to the Dalai Lama and the Tibetan government-in-exile, McLeod Ganj offers a cultural depth rare in the Himalayas. From the crimson-robed monks of Namgyal Monastery to the waterfalls of Bhagsu Nag, every corner tells a story of resilience and reverence.',
      'For trekkers, Dharamshala is the gateway to Triund — one of India\'s most rewarding ridge walks — and the deeper trails toward Snowline and Indrahar Pass. For seekers, it\'s a place of meditation, yoga, and quiet reflection amid extraordinary beauty.',
    ],
    highlights: [
      { icon: 'mountain', title: 'Triund Trek', description: '9km ridge walk to 2,875m with panoramic Dhauladhar views' },
      { icon: 'temple', title: 'Dalai Lama Temple', description: 'Spiritual heart of Tibetan Buddhism in exile' },
      { icon: 'droplets', title: 'Bhagsu Waterfall', description: 'Sacred waterfall and ancient Shiva temple' },
      { icon: 'book-open', title: 'Namgyal Monastery', description: 'Personal monastery of the Dalai Lama' },
      { icon: 'trees', title: 'Cedar Forests', description: 'Ancient deodar forests perfect for mindful walking' },
      { icon: 'coffee', title: 'Café Culture', description: 'Vibrant international café scene in McLeod Ganj' },
    ],
    stats: [
      { label: 'Best Season', value: 'Mar–Jun, Sep–Nov' },
      { label: 'Altitude', value: '1,475m–2,875m' },
      { label: 'Base Town', value: 'Dharamshala' },
      { label: 'Culture', value: 'Tibetan & Himachali' },
    ],
    travelTips: [
      { title: 'Best time to visit', content: 'March to June for pleasant weather and clear trekking trails. September to November for crisp mountain views and fewer crowds. Avoid July-August monsoon.' },
      { title: 'What to pack', content: 'Layered clothing (temperatures vary 5-25°C), sturdy trekking shoes, rain jacket, reusable water bottle, sunscreen, and warm layers for evening.' },
      { title: 'Local customs to respect', content: 'Walk clockwise around Buddhist stupas and prayer wheels. Ask permission before photographing monks or inside monasteries. Remove shoes before entering temples.' },
      { title: 'Getting there', content: 'Nearest airport: Gaggal (DHM), 13km. Overnight Volvo buses from Delhi (10-12hrs). Pathankot is the nearest railhead (90km).' },
    ],
  },
  {
    id: 'spiti',
    name: 'Spiti Valley',
    state: 'Himachal Pradesh',
    tagline: 'High-altitude desert & ancient monasteries',
    region: ['Himalayan', 'Adventure', 'Cultural & Heritage'],
    image: 'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?w=1600&fit=crop',
    description: [
      'Spiti Valley — the "Middle Land" between India and Tibet — is a high-altitude cold desert where ancient monasteries perch on eroded cliffs and the night sky blazes with more stars than you\'ve ever seen. At 3,800m above sea level, this is a landscape that strips everything to its essence.',
      'The 1,000-year-old Tabo Monastery, the dramatic Key Gomsette perched on a conical hill, and the fossil-rich Langza village are just the beginning. Spiti is home to snow leopards, Himalayan wolves, and blue sheep — a living ecosystem of rare wildlife.',
      'Travelling through Spiti is a lesson in patience and presence. Roads are rough, distances are vast, and mobile signal is scarce. But that\'s exactly the point — this is a place that demands you slow down and pay attention.',
    ],
    highlights: [
      { icon: 'landmark', title: 'Tabo Monastery', description: '1,000-year-old monastery with ancient murals and caves' },
      { icon: 'mountain', title: 'Key Monastery', description: 'Dramatic hilltop monastery at 4,166m' },
      { icon: 'star', title: 'Stargazing', description: 'Some of the clearest night skies on Earth' },
      { icon: 'paw-print', title: 'Snow Leopards', description: 'Winter sightings of the ghost of the mountains' },
      { icon: 'fossil', title: 'Langza Fossils', description: 'Marine fossils from when Spiti was under the ocean' },
      { icon: 'camera', title: 'Pin Valley', description: 'Untouched valley with dramatic badlands scenery' },
    ],
    stats: [
      { label: 'Best Season', value: 'Jun–Sep (summer), Jan–Mar (snow leopard)' },
      { label: 'Altitude', value: '3,800m–4,580m' },
      { label: 'Base Town', value: 'Kaza' },
      { label: 'Culture', value: 'Tibetan Buddhist' },
    ],
    travelTips: [
      { title: 'Best time to visit', content: 'June to September for summer access via Shimla or Manali routes. January to March for snow leopard tracking in Kibber. Roads close October–May.' },
      { title: 'What to pack', content: 'Heavy winter clothing even in summer (nights drop below 0°C), UV protection sunglasses, high-SPF sunscreen, altitude sickness medication, thermals.' },
      { title: 'Local customs to respect', content: 'Circumambulate monasteries clockwise. Don\'t touch religious artifacts. Photography may be restricted inside certain monastery rooms — always ask.' },
      { title: 'Getting there', content: 'From Shimla via Kinnaur (2 days, open year-round) or from Manali via Rohtang/Kunzum Pass (1 day, June–Oct only). No airport in Spiti.' },
    ],
  },
  {
    id: 'ladakh',
    name: 'Ladakh & Zanskar',
    state: 'Jammu & Kashmir',
    tagline: 'The roof of the world',
    region: ['Himalayan', 'Adventure', 'Cultural & Heritage'],
    image: 'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=1600&fit=crop',
    description: [
      'Ladakh is where the Himalayas meet the Karakoram — a vast, high-altitude desert of impossible colour and scale. Pangong Tso shifts between turquoise and cobalt, the Nubra Valley hides sand dunes with Bactrian camels, and ancient monasteries like Thiksey and Hemis guard centuries of Buddhist wisdom.',
      'The Zanskar region, accessible only by a gruelling road or the frozen river in winter, is one of the last truly remote places in India. Its gompas, villages, and the legendary Chadar Trek on the frozen Zanskar River are the stuff of expedition dreams.',
      'Ladakh demands acclimatisation and respect. At 3,500m+, the altitude is a constant companion. But for those who make the journey, it offers something increasingly rare: a landscape that hasn\'t been tamed.',
    ],
    highlights: [
      { icon: 'waves', title: 'Pangong Tso', description: '135km lake that changes colour through the day' },
      { icon: 'landmark', title: 'Thiksey Monastery', description: 'Mini Potala Palace with 15m Maitreya Buddha' },
      { icon: 'mountain', title: 'Khardung La', description: 'One of the world\'s highest motorable passes at 5,359m' },
      { icon: 'sun', title: 'Nubra Valley', description: 'Sand dunes and double-humped Bactrian camels' },
      { icon: 'snowflake', title: 'Chadar Trek', description: 'Walk on the frozen Zanskar River in winter' },
      { icon: 'star', title: 'Hemis Festival', description: 'Vibrant masked dance festival each July' },
    ],
    stats: [
      { label: 'Best Season', value: 'Jun–Sep (summer), Jan–Feb (Chadar)' },
      { label: 'Altitude', value: '3,500m–5,359m' },
      { label: 'Base Town', value: 'Leh' },
      { label: 'Culture', value: 'Tibetan Buddhist & Shia Muslim' },
    ],
    travelTips: [
      { title: 'Best time to visit', content: 'June to September for summer travel. January-February for the Chadar Trek. Acclimatise for 2 days minimum in Leh before any activity.' },
      { title: 'What to pack', content: 'Multiple warm layers, windproof jacket, UV sunglasses, sunscreen SPF50+, hydration salts, Diamox for altitude, down sleeping bag for treks.' },
      { title: 'Local customs to respect', content: 'Respect prayer flags — don\'t step on them. Walk clockwise around religious sites. Don\'t photograph military installations. Ask before entering mosques.' },
      { title: 'Getting there', content: 'Leh airport (IXL) has direct flights from Delhi. Manali-Leh highway (June–Oct, 2 days). Srinagar-Leh highway (May–Oct, 2 days).' },
    ],
  },
  {
    id: 'kedarkantha',
    name: 'Kedarkantha',
    state: 'Uttarakhand',
    tagline: "India's most beautiful winter trek",
    region: ['Himalayan', 'Adventure', 'Weekend'],
    image: 'https://images.pexels.com/photos/1435761/pexels-photo-1435761.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/1435761/pexels-photo-1435761.jpeg?w=1600&fit=crop',
    description: [
      'Kedarkantha is the trek that converts first-timers into lifelong trekkers. Rising to 3,810m in the Govind Pashu Vihar National Park, this trail through pine forests and snow-covered meadows delivers one of the most stunning summit sunrises in the Indian Himalayas.',
      'The trek begins from Sankri, a tiny village in the Uttarkashi district, and winds through ancient oak and pine forests before opening up to vast, snow-draped meadows. Each campsite — Juda ka Talab, Hargaon, and the summit camp — is more beautiful than the last.',
      'What makes Kedarkantha special is its accessibility. It\'s a moderate trek that doesn\'t require technical skills, making it perfect for beginners who want a real Himalayan summit experience. In winter, the entire trail is blanketed in snow, creating a landscape of pure white magic.',
    ],
    highlights: [
      { icon: 'mountain', title: 'Summit Sunrise', description: '360° views from 3,810m at dawn' },
      { icon: 'snowflake', title: 'Snow Trails', description: 'Pristine snow from December to April' },
      { icon: 'trees', title: 'Pine Forests', description: 'Ancient oak and pine canopy trails' },
      { icon: 'droplets', title: 'Juda ka Talab', description: 'Frozen high-altitude lake campsite' },
      { icon: 'bird', title: 'Wildlife', description: 'Himalayan monal, fox, and musk deer sightings' },
      { icon: 'campfire', title: 'Camp Life', description: 'Bonfire nights under star-filled skies' },
    ],
    stats: [
      { label: 'Best Season', value: 'Dec–Apr (snow), May–Jun (meadows)' },
      { label: 'Altitude', value: '2,590m–3,810m' },
      { label: 'Base Town', value: 'Sankri, Uttarkashi' },
      { label: 'Culture', value: 'Garhwali & Jaunsari' },
    ],
    travelTips: [
      { title: 'Best time to visit', content: 'December to April for the classic snow trek experience. May-June for green meadows and wildflowers. Avoid monsoon (July-August).' },
      { title: 'What to pack', content: 'Waterproof trekking boots, 4-season sleeping bag, thermal layers, down jacket, gaiters, trekking poles, headlamp, and hand warmers for winter.' },
      { title: 'Local customs to respect', content: 'The region is deeply spiritual. Don\'t litter on trails. Respect forest department rules. The summit has a small temple — maintain decorum.' },
      { title: 'Getting there', content: 'Drive from Dehradun to Sankri (200km, 7-8hrs). Dehradun is connected by air (Jolly Grant airport) and rail. Zovara arranges transport from Dehradun.' },
    ],
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    state: 'Rajasthan',
    tagline: 'Royal forts, desert dunes & living culture',
    region: ['Cultural & Heritage', 'Weekend'],
    image: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?w=1600&fit=crop',
    description: [
      'Rajasthan is India at its most vivid — a land of amber forts rising from the desert, blue cities cascading down hillsides, and palaces that make you believe in fairy tales. From the pink city of Jaipur to the golden dunes of Jaisalmer, every corner is saturated with colour and story.',
      'This is where Rajput warriors built impregnable forts on craggy hilltops, where Mughal artisans created the most intricate havelis, and where desert communities have preserved traditions that predate written history. The living culture here is not in museums — it\'s in the bazaars, the folk songs, and the daily rituals.',
      'Zovara\'s Rajasthan experience goes beyond the tourist trail. We take you into the Thar Desert with nomadic communities, into private havelis for home-cooked Rajasthani feasts, and into the stories that make this the most culturally rich state in India.',
    ],
    highlights: [
      { icon: 'landmark', title: 'Amber Fort', description: 'Stunning hilltop fort with mirror palace' },
      { icon: 'sun', title: 'Thar Desert', description: 'Camel safaris and dune camping under stars' },
      { icon: 'palette', title: 'Blue City', description: 'Jodhpur\'s indigo-washed old city' },
      { icon: 'utensils', title: 'Rajasthani Cuisine', description: 'Dal Baati Churma, Laal Maas, and more' },
      { icon: 'music', title: 'Folk Music', description: 'Desert musicians and Manganiyar traditions' },
      { icon: 'shopping-bag', title: 'Craft Bazaars', description: 'Block printing, blue pottery, and jewellery' },
    ],
    stats: [
      { label: 'Best Season', value: 'Oct–Mar' },
      { label: 'Elevation', value: '200m–500m' },
      { label: 'Base Town', value: 'Jaipur' },
      { label: 'Culture', value: 'Rajput & Marwari' },
    ],
    travelTips: [
      { title: 'Best time to visit', content: 'October to March for pleasant weather. November-February is peak season with cool days perfect for sightseeing. Avoid April-June extreme heat.' },
      { title: 'What to pack', content: 'Light cotton clothing, sun hat, sunglasses, sunscreen, comfortable walking shoes for forts, light shawl for evenings and temple visits.' },
      { title: 'Local customs to respect', content: 'Remove shoes before entering temples and homes. Dress modestly at religious sites. Ask before photographing people. Bargaining is expected in bazaars.' },
      { title: 'Getting there', content: 'Jaipur International Airport (JAI) connects to all major Indian cities. Excellent rail and road connections. Zovara arranges all inter-city transport.' },
    ],
  },
  {
    id: 'northeast',
    name: 'Northeast India',
    state: 'Meghalaya / Assam / Nagaland',
    tagline: 'Living root bridges & untouched tribes',
    region: ['Eco & Nature', 'Cultural & Heritage', 'Adventure'],
    image: 'https://images.pexels.com/photos/2442496/pexels-photo-2442496.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/2442496/pexels-photo-2442496.jpeg?w=1600&fit=crop',
    description: [
      'Northeast India is the country\'s best-kept secret — a region of living root bridges, the wettest place on Earth, headhunter tribes who\'ve preserved their culture for millennia, and tea gardens that stretch to the horizon. It\'s India, but not as you know it.',
      'In Meghalaya, the Khasi people have spent centuries training rubber tree roots across rivers to create living bridges that grow stronger with age. In Nagaland, the Ao and Konyak tribes maintain traditions that predate recorded history. In Assam, the one-horned rhinoceros roams Kaziranga\'s grasslands.',
      'This is a region that rewards the curious. Infrastructure is basic, permits are sometimes needed, and the pace of life is gloriously slow. But for those who make the journey, Northeast India offers an authenticity that has vanished from most of the subcontinent.',
    ],
    highlights: [
      { icon: 'trees', title: 'Living Root Bridges', description: 'Centuries-old bio-engineering marvels of the Khasi' },
      { icon: 'droplets', title: 'Cherrapunji', description: 'One of the wettest places on Earth' },
      { icon: 'bird', title: 'Kaziranga', description: 'Home to 2/3 of the world\'s one-horned rhinos' },
      { icon: 'users', title: 'Naga Tribes', description: 'Ancient tribal cultures and Hornbill Festival' },
      { icon: 'coffee', title: 'Assam Tea Gardens', description: 'World-famous tea estates and tasting sessions' },
      { icon: 'mountain', title: 'Dzukou Valley', description: 'Valley of flowers on the Nagaland-Manipur border' },
    ],
    stats: [
      { label: 'Best Season', value: 'Oct–May' },
      { label: 'Altitude', value: '50m–1,968m' },
      { label: 'Base Town', value: 'Guwahati / Shillong' },
      { label: 'Culture', value: 'Khasi, Ao, Konyak, Assamese' },
    ],
    travelTips: [
      { title: 'Best time to visit', content: 'October to May for dry weather. November-December for the Hornbill Festival in Nagaland. March-May for Dzukou Valley lilies. Avoid June-September monsoon.' },
      { title: 'What to pack', content: 'Rain gear (essential year-round in Meghalaya), comfortable walking shoes, modest clothing for tribal villages, camera, insect repellent, warm layers for hills.' },
      { title: 'Local customs to respect', content: 'Always ask before photographing tribal people. Some areas require Inner Line Permits (Arunachal, Nagaland, Manipur). Respect local traditions and community rules.' },
      { title: 'Getting there', content: 'Guwahati airport (GAU) is the main hub. Shillong is 100km from Guwahati. Zovara arranges all permits and internal transport.' },
    ],
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    state: 'Sikkim',
    tagline: 'Himalayan kingdom of monasteries and rhododendrons',
    region: ['Himalayan', 'Eco & Nature', 'Cultural & Heritage'],
    image: 'https://images.pexels.com/photos/2166583/pexels-photo-2166583.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/2166583/pexels-photo-2166583.jpeg?w=1600&fit=crop',
    description: [
      'Sikkim is India\'s most serene state — a tiny Himalayan kingdom where Buddhist monasteries cling to misty hillsides, rhododendron forests paint the mountains in crimson and gold, and Kanchenjunga, the world\'s third-highest peak, watches over everything.',
      'From the ancient Rumtek Monastery to the high-altitude Gurudongmar Lake, Sikkim packs extraordinary diversity into a small area. The state is India\'s first fully organic state, and its commitment to sustainability is visible in every farm, forest, and community.',
      'Zovara\'s Sikkim experience takes you through the monastery trail — from Pemayangtse to Tashiding to Rumtek — with stops at hidden villages, organic tea gardens, and viewpoints that will leave you speechless. This is slow travel at its finest.',
    ],
    highlights: [
      { icon: 'mountain', title: 'Kanchenjunga Views', description: 'World\'s 3rd highest peak from Pelling and Gangtok' },
      { icon: 'landmark', title: 'Rumtek Monastery', description: 'Seat of the Karmapa and Tibetan Buddhist learning' },
      { icon: 'flower', title: 'Rhododendron Trails', description: 'Spring blooms across Varsey and Yumthang' },
      { icon: 'droplets', title: 'Gurudongmar Lake', description: 'Sacred high-altitude lake at 5,430m' },
      { icon: 'leaf', title: 'Organic Farms', description: 'India\'s first 100% organic state' },
      { icon: 'bridge', title: 'Buddha Park', description: '130ft Buddha statue at Ravangla' },
    ],
    stats: [
      { label: 'Best Season', value: 'Mar–Jun, Oct–Dec' },
      { label: 'Altitude', value: '300m–5,430m' },
      { label: 'Base Town', value: 'Gangtok' },
      { label: 'Culture', value: 'Bhutia, Lepcha, Nepali' },
    ],
    travelTips: [
      { title: 'Best time to visit', content: 'March to June for rhododendrons and clear views. October to December for crisp weather and mountain visibility. Avoid July-September monsoon.' },
      { title: 'What to pack', content: 'Warm layers (Gangtok is cool year-round), rain jacket, comfortable walking shoes, modest clothing for monasteries, camera for incredible landscapes.' },
      { title: 'Local customs to respect', content: 'Sikkim requires a permit for foreigners. Walk clockwise around monasteries. Don\'t touch prayer wheels with dirty hands. Photography restricted in some military areas.' },
      { title: 'Getting there', content: 'Bagdogra airport (IXB) is 124km from Gangtok. New Jalpaiguri railway station (NJP) is the nearest railhead. Zovara arranges all transfers.' },
    ],
  },
  {
    id: 'chopta',
    name: 'Chopta & Tungnath',
    state: 'Uttarakhand',
    tagline: 'The meadows of Uttarakhand',
    region: ['Himalayan', 'Eco & Nature', 'Weekend'],
    image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=1600&fit=crop',
    description: [
      'Chopta is a tiny Himalayan meadow at 2,680m that serves as the base for the trek to Tungnath — the world\'s highest Shiva temple at 3,680m. The 3.5km trail from Chopta to Tungnath is one of the most beautiful short treks in India, passing through rhododendron forests and open meadows.',
      'Beyond Tungnath, the trail continues to Chandrashila peak (4,000m), offering a 360-degree panorama that includes Nanda Devi, Trishul, Kedarnath, and Chaukhamba — some of the most sacred and dramatic peaks in the Himalayas.',
      'Chopta is also the gateway to Deoria Tal, a pristine lake reflecting Chaukhamba peaks in its still waters. This is Uttarakhand at its purest — no crowds, no commercialisation, just meadows, forests, and the kind of silence that heals.',
    ],
    highlights: [
      { icon: 'mountain', title: 'Chandrashila Summit', description: '360° Himalayan panorama at 4,000m' },
      { icon: 'landmark', title: 'Tungnath Temple', description: 'World\'s highest Shiva temple at 3,680m' },
      { icon: 'droplets', title: 'Deoria Tal', description: 'Sacred lake reflecting Chaukhamba peaks' },
      { icon: 'flower', title: 'Rhododendron Bloom', description: 'Crimson forests in spring' },
      { icon: 'trees', title: 'Bugyals', description: 'High-altitude alpine meadows' },
      { icon: 'bird', title: 'Birdwatching', description: 'Himalayan monal and musk deer sanctuary' },
    ],
    stats: [
      { label: 'Best Season', value: 'Apr–Jun, Sep–Nov' },
      { label: 'Altitude', value: '2,680m–4,000m' },
      { label: 'Base Town', value: 'Chopta / Ukhimath' },
      { label: 'Culture', value: 'Garhwali' },
    ],
    travelTips: [
      { title: 'Best time to visit', content: 'April to June for rhododendron blooms and pleasant trekking. September to November for clear mountain views. Winter trek possible with snow gear.' },
      { title: 'What to pack', content: 'Warm layers, trekking shoes, rain protection, sunscreen, reusable bottle, headlamp for early summit starts, and a small daypack.' },
      { title: 'Local customs to respect', content: 'Tungnath is a sacred pilgrimage site. Maintain silence near the temple. Don\'t litter on the trail. Respect the forest and wildlife.' },
      { title: 'Getting there', content: 'Drive from Rishikesh/Haridwar to Chopta (6-7hrs). Nearest rail: Haridwar. Nearest airport: Dehradun (Jolly Grant). Zovara arranges all transport.' },
    ],
  },
];

export const packages: PackageData[] = [
  {
    id: 'dharamshala-eco-retreat',
    title: 'Dharamshala Eco-Retreat',
    destinationId: 'dharamshala',
    duration: '5D/6N',
    price: 18999,
    difficulty: 'Easy–Moderate',
    type: 'Eco Retreat',
    image: 'https://images.pexels.com/photos/669912/pexels-photo-669912.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/669912/pexels-photo-669912.jpeg?w=1600&fit=crop',
    description: [
      'The Dharamshala Eco-Retreat is Zovara\'s signature journey — a 6-day immersion into mindful Himalayan travel. Based in eco-homestays with zero single-use plastic, this trip combines cultural exploration, trekking, and community engagement in one transformative experience.',
      'From the Dalai Lama Temple Complex to the ridge-top views of Triund, every day is designed to connect you with the landscape and its people. You\'ll visit Himalayan hamlets, learn about local ecology, practice yoga by the river, and share meals with families who\'ve lived in these mountains for generations.',
      'This is travel that gives back. A portion of every booking goes to mountain community funds, all guides are locally certified, and our zero-plastic policy means you\'ll leave no trace — only positive impact.',
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Eco-Orientation', description: 'Evening arrival, pickup from Dharamshala bus stand, check-in to eco-homestay, welcome circle & eco-policy session, McLeod market walk, dinner.' },
      { day: 2, title: 'Culture Day', description: 'Dalai Lama Temple Complex, Namgyal Monastery, Bhagsu Nag Waterfall, Bhagsu Road cafés, Himalayan ecology talk, free evening, dinner.' },
      { day: 3, title: 'Trek Choice Day', description: 'Morning choice between Thatharana Eco-View Trek (5km, easy-moderate, pine forest & meadows) OR Triund Trek (9km, 2875m, panoramic ridge views), guided, vegetarian packed lunch, return by evening.' },
      { day: 4, title: 'Eco-Village & Reflection', description: 'Visit Himalayan hamlet, local farming & water practices, riverside journaling/yoga, group eco-reflection circle, traditional Himachali dinner.' },
      { day: 5, title: 'Flex & Farewell', description: 'Optional trail revisit or monastery, local market, group farewell tea ceremony, pack-it-back final check.' },
      { day: 6, title: 'Departure', description: 'Eco-pledge, farewell from guides, drop at Dharamshala bus stand.' },
    ],
    inclusions: [
      'Eco-homestay accommodation (5 nights)',
      'All vegetarian meals (breakfast, lunch, dinner)',
      'Local transport (pickup, drop, all transfers)',
      'Certified local trekking guides',
      'All monastery and site entrance fees',
      'Reusable water bottle and eco-pouch',
      'Himalayan ecology talk session',
      'Village visit and community interaction',
      'Yoga and journaling sessions',
      'Group eco-reflection circle',
    ],
    exclusions: [
      'Flights or trains to Dharamshala',
      'Personal expenses and shopping',
      'Travel insurance',
      'Tips for guides and staff',
      'Single-use plastic items (not permitted)',
      'Unscheduled activities or excursions',
      'Medical expenses',
    ],
    packingList: [
      'Sturdy trekking shoes',
      'Rain jacket / windbreaker',
      'Warm layers for evenings',
      'Sunscreen SPF 50+',
      'Reusable water bottle',
      'Daypack (20-30L)',
      'Personal medications',
      'Headlamp or torch',
      'Comfortable walking shoes for town',
      'Notebook for journaling',
    ],
    groupSize: 'Max 16 guests',
    nextDate: 'March 15, 2025',
    galleryImages: [
      'https://images.pexels.com/photos/669912/pexels-photo-669912.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1435761/pexels-photo-1435761.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1680431/pexels-photo-1680431.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/159291/camel-caravan-desert-sand-159291.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=600&fit=crop',
    ],
  },
  {
    id: 'spiti-valley-explorer',
    title: 'Spiti Valley Explorer',
    destinationId: 'spiti',
    duration: '7D/8N',
    price: 32999,
    difficulty: 'Moderate',
    type: 'Cultural + Adventure',
    image: 'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?w=1600&fit=crop',
    description: [
      'The Spiti Valley Explorer is an 8-day journey through one of the most extraordinary landscapes on Earth. From the ancient murals of Tabo Monastery to the dramatic heights of Key Gomsette, this trip combines cultural immersion with high-altitude adventure.',
      'You\'ll drive through some of the most spectacular roads in the Himalayas, visit 1,000-year-old monasteries, search for fossils in Langza, and spend nights under the clearest skies you\'ve ever seen. Every day brings a new landscape more dramatic than the last.',
      'Zovara\'s Spiti experience is designed for acclimatisation — we build in rest days, use comfortable local guesthouses, and ensure our guides are trained in altitude awareness. This is adventure travel done right.',
    ],
    itinerary: [
      { day: 1, title: 'Shimla to Narkanda', description: 'Drive from Shimla, visit Hatu Peak, acclimatisation walk, evening at Narkanda guesthouse.' },
      { day: 2, title: 'Narkanda to Sarahan', description: 'Drive via Rampur, visit Bhimakali Temple, Sarahan village walk, evening cultural session.' },
      { day: 3, title: 'Sarahan to Kalpa', description: 'Enter Kinnaur district, stunning gorge drive, Kalpa village and apple orchards, Kinner Kailash views.' },
      { day: 4, title: 'Kalpa to Nako', description: 'Drive to Nako village, Nako Lake visit, ancient monastery, high-altitude acclimatisation walk.' },
      { day: 5, title: 'Nako to Tabo to Kaza', description: 'Visit Tabo Monastery (1,000 years old), drive to Kaza, evening market walk.' },
      { day: 6, title: 'Kaza Exploration', description: 'Key Monastery, Kibber village, Langza fossil hunt, Hikkim (world\'s highest post office).' },
      { day: 7, title: 'Pin Valley & Dhankar', description: 'Dhankar Monastery and lake, Pin Valley exploration, Gungri village visit.' },
      { day: 8, title: 'Departure', description: 'Early departure from Kaza, farewell from guides, onward journey.' },
    ],
    inclusions: [
      'Guesthouse and homestay accommodation (7 nights)',
      'All meals (breakfast, lunch, dinner)',
      'All transport from Shimla to Kaza and return',
      'Certified local Spiti guides',
      'All monastery entrance fees',
      'Inner Line Permit arrangements',
      'Reusable water bottle and eco-pouch',
      'Fossil hunting excursion in Langza',
      'Stargazing session',
      'Cultural interaction sessions',
    ],
    exclusions: [
      'Flights or trains to Shimla',
      'Personal expenses and shopping',
      'Travel insurance',
      'Tips for guides and drivers',
      'Single-use plastic items',
      'Unscheduled activities',
      'Medical expenses and emergency evacuation',
    ],
    packingList: [
      'Heavy winter jacket',
      'Thermal base layers',
      'UV protection sunglasses',
      'Sunscreen SPF 50+',
      'Sturdy walking shoes',
      'Warm sleeping layers',
      'Personal medications including Diamox',
      'Headlamp',
      'Camera with extra batteries',
      'Reusable water bottle',
    ],
    groupSize: 'Max 12 guests',
    nextDate: 'June 20, 2025',
    galleryImages: [
      'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1680431/pexels-photo-1680431.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/159291/camel-caravan-desert-sand-159291.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=600&fit=crop',
    ],
  },
  {
    id: 'ladakh-grand-circuit',
    title: 'Ladakh Grand Circuit',
    destinationId: 'ladakh',
    duration: '9D/10N',
    price: 54999,
    difficulty: 'Moderate',
    type: 'Luxury + Adventure',
    image: 'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=1600&fit=crop',
    description: [
      'The Ladakh Grand Circuit is Zovara\'s most comprehensive Himalayan journey — 10 days covering Leh, Nubra Valley, Pangong Tso, and the ancient monasteries of the Indus Valley. This is luxury adventure travel at its finest.',
      'You\'ll cross the world\'s highest motorable passes, camp beside the colour-shifting Pangong Lake, ride Bactrian camels in the Nubra sand dunes, and witness sunrise prayers at Thiksey Monastery. Every accommodation is handpicked for comfort and character.',
      'With 2 dedicated acclimatisation days, certified altitude-trained guides, and a support vehicle on standby, this is Ladakh done safely and in style. The Grand Circuit is the trip that most travellers dream of — we just make it real.',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Leh', description: 'Airport pickup, check-in to premium hotel, complete rest day for acclimatisation, evening orientation.' },
      { day: 2, title: 'Leh Acclimatisation', description: 'Gentle walk to Shanti Stupa and Leh Palace, local market visit, medical check, evening briefing.' },
      { day: 3, title: 'Leh to Nubra Valley', description: 'Cross Khardung La (5,359m), descend to Nubra, Hunder sand dunes and Bactrian camel ride, camp by the dunes.' },
      { day: 4, title: 'Nubra Exploration', description: 'Diskit Monastery, Turtuk village (last Indian village), local Balti culture, evening at camp.' },
      { day: 5, title: 'Nubra to Pangong Tso', description: 'Drive via Shyok route to Pangong Lake, lakeside camping, sunset over the turquoise waters.' },
      { day: 6, title: 'Pangong to Leh', description: 'Sunrise at Pangong, drive back via Chang La, afternoon at leisure in Leh.' },
      { day: 7, title: 'Monastery Trail', description: 'Thiksey Monastery sunrise, Hemis Monastery, Stok Palace Museum, evening cultural performance.' },
      { day: 8, title: 'Indus Valley & Rafting', description: 'Morning rafting on the Indus (Grade II-III), visit Spituk Gompa, Hall of Fame, evening free.' },
      { day: 9, title: 'Leh Free Day', description: 'Optional: local workshops, shopping, cooking class, or simply relax. Farewell dinner.' },
      { day: 10, title: 'Departure', description: 'Airport drop, farewell from the Zovara team.' },
    ],
    inclusions: [
      'Premium hotel and luxury camp accommodation (9 nights)',
      'All meals (breakfast, lunch, dinner)',
      'All transport including 4x4 vehicles',
      'Certified local Ladakhi guides',
      'All monastery and site entrance fees',
      'Inner Line Permit for Pangong and Nubra',
      'Bactrian camel ride in Nubra',
      'Indus River rafting session',
      'Cultural performance evening',
      'Airport pickup and drop',
    ],
    exclusions: [
      'Flights to Leh',
      'Personal expenses and shopping',
      'Travel insurance',
      'Tips for guides and drivers',
      'Single-use plastic items',
      'Unscheduled activities',
      'Medical and emergency evacuation costs',
    ],
    packingList: [
      'Down jacket and thermal layers',
      'UV protection sunglasses',
      'Sunscreen SPF 50+',
      'Sturdy walking shoes',
      'Windproof shell jacket',
      'Personal medications including Diamox',
      'Camera with extra batteries (cold drains them)',
      'Headlamp',
      'Reusable water bottle',
      'Daypack for excursions',
    ],
    groupSize: 'Max 12 guests',
    nextDate: 'July 5, 2025',
    galleryImages: [
      'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1680431/pexels-photo-1680431.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/159291/camel-caravan-desert-sand-159291.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=600&fit=crop',
    ],
  },
  {
    id: 'kedarkantha-winter-trek',
    title: 'Kedarkantha Winter Trek',
    destinationId: 'kedarkantha',
    duration: '6D/7N',
    price: 15999,
    difficulty: 'Moderate',
    type: 'Trekking',
    image: 'https://images.pexels.com/photos/1435761/pexels-photo-1435761.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/1435761/pexels-photo-1435761.jpeg?w=1600&fit=crop',
    description: [
      'The Kedarkantha Winter Trek is India\'s most beautiful snow trek — a 6-day journey through pine forests and snow-draped meadows to a 3,810m summit with a sunrise that will stay with you forever. This is the trek that turns beginners into trekkers.',
      'From the base camp at Sankri, you\'ll trek through ancient oak and pine forests, camp beside the frozen Juda ka Talab lake, and push through knee-deep snow to a summit that rewards with 360-degree views of the Garhwal Himalayas. Every campsite is a postcard.',
      'Zovara\'s Kedarkantha experience includes certified mountain guides, 4-season tents, hot meals at every camp, and a support system that makes this challenging trek accessible to anyone with reasonable fitness. No technical skills required — just determination and wonder.',
    ],
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri', description: 'Drive from Dehradun to Sankri (7-8hrs), check-in to guesthouse, evening briefing and gear check.' },
      { day: 2, title: 'Sankri to Juda ka Talab', description: 'Trek 4km through pine forests to the frozen lake campsite (2,770m), bonfire evening.' },
      { day: 3, title: 'Juda ka Talab to Kedarkantha Base', description: 'Trek 4km through snow meadows to base camp (3,380m), acclimatisation walk, early dinner.' },
      { day: 4, title: 'Summit Day', description: 'Pre-dawn start, 3km push to Kedarkantha summit (3,810m), sunrise views, descend to Hargaon camp.' },
      { day: 5, title: 'Hargaon to Sankri', description: 'Descend 6km through forests to Sankri, hot lunch at guesthouse, evening celebration.' },
      { day: 6, title: 'Sankri to Dehradun', description: 'Drive back to Dehradun, farewell from guides.' },
      { day: 7, title: 'Buffer Day', description: 'Buffer day for weather delays (used if needed on Day 4 or 5).' },
    ],
    inclusions: [
      'Guesthouse and tented accommodation (6 nights)',
      'All meals from Day 1 dinner to Day 6 lunch',
      'Transport from Dehradun to Sankri and return',
      'Certified mountain trekking guides (1:6 ratio)',
      '4-season tents and sleeping mats',
      'Camping equipment and first aid',
      'Forest department permits and fees',
      'Bonfire at campsites',
      'Hot water at camps',
      'Summit certificate',
    ],
    exclusions: [
      'Flights or trains to Dehradun',
      'Personal trekking gear (shoes, clothing)',
      'Travel insurance',
      'Tips for guides and support staff',
      'Single-use plastic items',
      'Off-itinerary meals or activities',
      'Medical and emergency evacuation costs',
    ],
    packingList: [
      'Waterproof trekking boots (well broken-in)',
      '4-season sleeping bag (rental available)',
      'Down jacket',
      'Thermal base layers (top and bottom)',
      'Fleece jacket',
      'Waterproof shell jacket and pants',
      'Gaiters',
      'Trekking poles',
      'Headlamp with extra batteries',
      'Sunglasses (UV protection, Category 4)',
    ],
    groupSize: 'Max 16 guests',
    nextDate: 'December 21, 2024',
    galleryImages: [
      'https://images.pexels.com/photos/1435761/pexels-photo-1435761.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1680431/pexels-photo-1680431.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/159291/camel-caravan-desert-sand-159291.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=600&fit=crop',
    ],
  },
  {
    id: 'rajasthan-royal-heritage',
    title: 'Rajasthan Royal Heritage',
    destinationId: 'rajasthan',
    duration: '6D/7N',
    price: 28999,
    difficulty: 'Easy',
    type: 'Luxury + Cultural',
    image: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?w=1600&fit=crop',
    description: [
      'The Rajasthan Royal Heritage tour is a 7-day immersion into India\'s most regal state. From the pink city of Jaipur to the blue city of Jodhpur and the golden city of Jaisalmer, this journey weaves through forts, palaces, and desert communities with the luxury and attention to detail that Rajputana deserves.',
      'You\'ll stay in heritage havelis, dine on royal Rajasthani cuisine, explore bustling bazaars with local experts, and spend a night under the stars in the Thar Desert. Every experience is curated — from private fort tours to intimate folk music performances.',
      'This is Zovara\'s most accessible trip — no trekking, no altitude, just pure cultural immersion with comfortable accommodations and warm Rajasthani hospitality throughout.',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', description: 'Airport pickup, check-in to heritage hotel, evening walk through old city, welcome dinner.' },
      { day: 2, title: 'Jaipur Exploration', description: 'Amber Fort, City Palace, Jantar Mantar, Hawa Mahal, block printing workshop, evening at Nahargarh.' },
      { day: 3, title: 'Jaipur to Jodhpur', description: 'Drive to Jodhpur, Mehrangarh Fort, Jaswant Thada, clock tower market, blue city walk.' },
      { day: 4, title: 'Jodhpur to Jaisalmer', description: 'Drive to Jaisalmer, Jaisalmer Fort, Patwon Ki Haveli, sunset at Vyas Chhatri.' },
      { day: 5, title: 'Desert Experience', description: 'Camel safari into the Thar, desert camp under stars, Rajasthani folk music and dinner.' },
      { day: 6, title: 'Jaisalmer & Return', description: 'Morning at Sam Sand Dunes, Gadisar Lake, drive back, farewell dinner.' },
      { day: 7, title: 'Departure', description: 'Transfer to Jaisalmer airport or railway station.' },
    ],
    inclusions: [
      'Heritage hotel and desert camp accommodation (6 nights)',
      'All meals (breakfast, lunch, dinner)',
      'All inter-city transport in AC vehicle',
      'Certified local heritage guides',
      'All fort and monument entrance fees',
      'Camel safari and desert camp experience',
      'Block printing workshop',
      'Folk music performance evening',
      'Airport/railway transfers',
      'Welcome and farewell dinners',
    ],
    exclusions: [
      'Flights or trains to Jaipur/from Jaisalmer',
      'Personal expenses and shopping',
      'Travel insurance',
      'Tips for guides and drivers',
      'Camera fees at monuments',
      'Unscheduled activities',
      'Alcoholic beverages',
    ],
    packingList: [
      'Light cotton clothing',
      'Sun hat or cap',
      'Sunglasses',
      'Sunscreen SPF 50+',
      'Comfortable walking shoes',
      'Light shawl for evenings and temples',
      'Camera',
      'Modest clothing for religious sites',
      'Light jacket for desert nights',
      'Personal medications',
    ],
    groupSize: 'Max 14 guests',
    nextDate: 'October 10, 2025',
    galleryImages: [
      'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1680431/pexels-photo-1680431.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/159291/camel-caravan-desert-sand-159291.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=600&fit=crop',
    ],
  },
  {
    id: 'northeast-discovery',
    title: 'Northeast Discovery',
    destinationId: 'northeast',
    duration: '8D/9N',
    price: 38999,
    difficulty: 'Easy–Moderate',
    type: 'Cultural + Nature',
    image: 'https://images.pexels.com/photos/2442496/pexels-photo-2442496.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/2442496/pexels-photo-2442496.jpeg?w=1600&fit=crop',
    description: [
      'The Northeast Discovery is a 9-day journey through India\'s most mysterious and untouched region. From the living root bridges of Meghalaya to the tribal villages of Nagaland and the tea gardens of Assam, this trip reveals a side of India that most travellers never see.',
      'You\'ll walk across bridges grown from living tree roots, explore the wettest place on Earth, visit one-horned rhinoceros in Kaziranga, and share meals with Naga tribal families. Every day is a revelation — a reminder that India\'s diversity extends far beyond what we see in mainstream travel.',
      'Zovara handles all permits, logistics, and cultural sensitivities. Our local Khasi and Naga guides ensure that your presence is welcomed and respectful. This is travel that bridges cultures, literally and figuratively.',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Guwahati', description: 'Airport pickup, drive to Shillong, evening walk through Police Bazaar, welcome dinner.' },
      { day: 2, title: 'Shillong & Cherrapunji', description: 'Ward\'s Lake, Don Bosco Museum, drive to Cherrapunji, Nohkalikai Falls, Mawsmai Cave.' },
      { day: 3, title: 'Living Root Bridges', description: 'Trek to Double Decker Root Bridge, natural swimming pools, Rainbow Falls, village homestay.' },
      { day: 4, title: 'Dawki & Mawlynnong', description: 'Drive to Dawki (crystal clear river), Asia\'s cleanest village Mawlynnong, sky walk viewpoint.' },
      { day: 5, title: 'Shillong to Kaziranga', description: 'Drive to Kaziranga, afternoon jeep safari, one-horned rhino sighting, resort evening.' },
      { day: 6, title: 'Kaziranga to Jorhat', description: 'Morning elephant safari, drive to Jorhat, visit tea garden, Assamese dinner.' },
      { day: 7, title: 'Jorhat to Kohima', description: 'Drive to Kohima, Naga Heritage Village, World War II cemetery, tribal village visit.' },
      { day: 8, title: 'Kohima Exploration', description: 'Local Naga market, tribal craft centre, Angami village walk, farewell dinner with Naga family.' },
      { day: 9, title: 'Departure', description: 'Drive to Dimapur airport, farewell from guides.' },
    ],
    inclusions: [
      'Hotel, homestay, and resort accommodation (8 nights)',
      'All meals (breakfast, lunch, dinner)',
      'All transport in AC vehicle',
      'Certified local guides (Khasi, Assamese, Naga)',
      'Kaziranga jeep and elephant safari fees',
      'All entrance fees and permits',
      'Living root bridge trek guide',
      'Tea garden visit and tasting',
      'Tribal village interaction sessions',
      'Airport pickup and drop',
    ],
    exclusions: [
      'Flights to Guwahati/from Dimapur',
      'Personal expenses and shopping',
      'Travel insurance',
      'Tips for guides and drivers',
      'Inner Line Permit fees (if applicable)',
      'Unscheduled activities',
      'Alcoholic beverages',
    ],
    packingList: [
      'Rain jacket (essential year-round)',
      'Comfortable walking shoes',
      'Modest clothing for tribal villages',
      'Insect repellent',
      'Camera',
      'Warm layers for Shillong evenings',
      'Sunscreen',
      'Personal medications',
      'Daypack for excursions',
      'Reusable water bottle',
    ],
    groupSize: 'Max 12 guests',
    nextDate: 'November 1, 2025',
    galleryImages: [
      'https://images.pexels.com/photos/2442496/pexels-photo-2442496.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1680431/pexels-photo-1680431.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/159291/camel-caravan-desert-sand-159291.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=600&fit=crop',
    ],
  },
  {
    id: 'sikkim-monastery-trail',
    title: 'Sikkim Monastery Trail',
    destinationId: 'sikkim',
    duration: '7D/8N',
    price: 29999,
    difficulty: 'Easy',
    type: 'Cultural + Nature',
    image: 'https://images.pexels.com/photos/2166583/pexels-photo-2166583.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/2166583/pexels-photo-2166583.jpeg?w=1600&fit=crop',
    description: [
      'The Sikkim Monastery Trail is a serene 8-day journey through India\'s most peaceful state. Following the ancient Buddhist pilgrimage route, you\'ll visit the most significant monasteries in the Eastern Himalayas while surrounded by rhododendron forests and Kanchenjunga views.',
      'From the magnificent Rumtek Monastery to the clifftop Pemayangtse, from the hidden Tashiding to the dramatic Buddha Park at Ravangla, each monastery tells a story of faith, art, and resilience. Between monasteries, you\'ll visit organic tea gardens, walk through cardamom fields, and share meals with Sikkimese families.',
      'This is slow travel at its finest — no rushing, no ticking boxes. Just presence, beauty, and the kind of peace that only the Himalayas can offer.',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Gangtok', description: 'Pickup from Bagdogra/NJP, drive to Gangtok, evening MG Marg walk, welcome dinner.' },
      { day: 2, title: 'Gangtok & Rumtek', description: 'Rumtek Monastery, Do Drul Chorten, Institute of Tibetology, Enchey Monastery.' },
      { day: 3, title: 'Gangtok to Ravangla', description: 'Drive to Ravangla, Buddha Park, Tathagata Tsal, evening meditation session.' },
      { day: 4, title: 'Ravangla to Pelling', description: 'Visit Borong hot springs, drive to Pelling, Pemayangtse Monastery, Rabdentse ruins.' },
      { day: 5, title: 'Pelling Exploration', description: 'Kanchenjunga sunrise, Sanga Choeling Monastery trek, Khecheopalri Lake, local village.' },
      { day: 6, title: 'Pelling to Yuksom', description: 'Drive to Yuksom, Dubdi Monastery (Sikkim\'s oldest), Coronation Throne, Norbugang.' },
      { day: 7, title: 'Yuksom & Tashiding', description: 'Trek to Tashiding Monastery, cardamom farm visit, organic tea tasting, farewell dinner.' },
      { day: 8, title: 'Departure', description: 'Drive to Bagdogra/NJP, farewell from guides.' },
    ],
    inclusions: [
      'Hotel and homestay accommodation (7 nights)',
      'All meals (breakfast, lunch, dinner)',
      'All transport in comfortable vehicle',
      'Certified local Sikkimese guides',
      'All monastery and site entrance fees',
      'Permit arrangements',
      'Meditation session at monastery',
      'Organic tea garden visit and tasting',
      'Cardamom farm visit',
      'Airport/railway transfers',
    ],
    exclusions: [
      'Flights or trains to Bagdogra/NJP',
      'Personal expenses and shopping',
      'Travel insurance',
      'Tips for guides and drivers',
      'Single-use plastic items',
      'Unscheduled activities',
      'Medical expenses',
    ],
    packingList: [
      'Warm layers (Gangtok is cool year-round)',
      'Rain jacket',
      'Comfortable walking shoes',
      'Modest clothing for monasteries',
      'Camera',
      'Sunscreen',
      'Personal medications',
      'Daypack',
      'Reusable water bottle',
      'Notebook for reflections',
    ],
    groupSize: 'Max 14 guests',
    nextDate: 'April 5, 2025',
    galleryImages: [
      'https://images.pexels.com/photos/2166583/pexels-photo-2166583.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1680431/pexels-photo-1680431.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/159291/camel-caravan-desert-sand-159291.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=600&fit=crop',
    ],
  },
  {
    id: 'zanskar-river-expedition',
    title: 'Zanskar River Expedition',
    destinationId: 'ladakh',
    duration: '10D/11N',
    price: 62999,
    difficulty: 'Challenging',
    type: 'Adventure + Luxury',
    image: 'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=800&fit=crop',
    heroImage: 'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=1600&fit=crop',
    description: [
      'The Zanskar River Expedition is Zovara\'s most ambitious journey — an 11-day adventure through one of the last truly remote regions in the Himalayas. Combining the legendary Chadar Trek experience with luxury basecamp comfort, this is expedition travel at its finest.',
      'You\'ll traverse the frozen Zanskar River (in winter) or raft its rapids (in summer), visit ancient gompas accessible only by foot, and spend nights in communities that have seen fewer outsiders than almost anywhere on Earth. The landscape is raw, dramatic, and utterly unforgettable.',
      'This trip requires excellent fitness and a spirit of adventure. Zovara provides expedition-grade equipment, certified mountaineering guides, satellite communication, and a support team that ensures safety without compromising the wildness of the experience.',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Leh', description: 'Airport pickup, check-in to premium hotel, complete rest for acclimatisation, evening briefing.' },
      { day: 2, title: 'Acclimatisation Day', description: 'Gentle walks around Leh, Shanti Stupa, gear check and fitting, medical assessment.' },
      { day: 3, title: 'Leh to Chilling', description: 'Drive to Chilling (starting point), riverside camp setup, safety briefing and river assessment.' },
      { day: 4, title: 'Chilling to Tibb Cave', description: 'Begin river journey, frozen river walking or rafting (season dependent), camp at Tibb Cave.' },
      { day: 5, title: 'Tibb to Nerak', description: 'Continue along the Zanskar, dramatic canyon walls, frozen waterfalls, camp near Nerak.' },
      { day: 6, title: 'Nerak Waterfall & Village', description: 'Visit the legendary frozen Nerak waterfall, Nerak village visit, hot lunch, return to camp.' },
      { day: 7, title: 'Nerak to Tibb', description: 'Begin return journey, different perspective on the canyon, camp at Tibb.' },
      { day: 8, title: 'Tibb to Chilling', description: 'Complete river journey, return to Chilling, celebration dinner at basecamp.' },
      { day: 9, title: 'Chilling to Leh', description: 'Drive back to Leh, hot shower, free afternoon, farewell dinner.' },
      { day: 10, title: 'Leh Free Day', description: 'Optional monastery visits, shopping, or rest. Celebration evening.' },
      { day: 11, title: 'Departure', description: 'Airport drop, farewell from the Zovara expedition team.' },
    ],
    inclusions: [
      'Premium hotel and expedition camp accommodation (10 nights)',
      'All meals (breakfast, lunch, dinner)',
      'All transport including 4x4 support vehicles',
      'Certified mountaineering and river guides',
      'Expedition-grade tents and sleeping bags',
      'Satellite phone for emergencies',
      'All permits and fees',
      'Comprehensive first aid and oxygen',
      'Airport pickup and drop',
      'Expedition certificate',
    ],
    exclusions: [
      'Flights to Leh',
      'Personal expedition gear (clothing, boots)',
      'Travel insurance (mandatory, must cover adventure sports)',
      'Tips for expedition team',
      'Single-use plastic items',
      'Unscheduled activities',
      'Medical and emergency evacuation costs',
    ],
    packingList: [
      'Expedition-grade down jacket (-20°C rated)',
      'Mountaineering boots (insulated)',
      'Crampons (for winter Chadar Trek)',
      'Multiple thermal base layers',
      'Expedition-grade sleeping bag (-15°C)',
      'Waterproof dry bags',
      'Headlamp with extra batteries',
      'Personal medications and Diamox',
      'UV sunglasses (Category 4)',
      'Thermos flask for hot drinks',
    ],
    groupSize: 'Max 10 guests',
    nextDate: 'January 15, 2025',
    galleryImages: [
      'https://images.pexels.com/photos/2905950/pexels-photo-2905950.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2404342/pexels-photo-2404342.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1680431/pexels-photo-1680431.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/159291/camel-caravan-desert-sand-159291.jpeg?w=600&fit=crop',
      'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=600&fit=crop',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Zovara changed everything about how I see travel. The Dharamshala retreat was unlike anything I\'ve experienced.',
    name: 'Priya S.',
    location: 'Mumbai',
    trip: 'Dharamshala Eco-Retreat',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Our guide\'s knowledge of Ladakhi culture and ecology was extraordinary. Every detail was perfect.',
    name: 'Arjun M.',
    location: 'Bangalore',
    trip: 'Ladakh Grand Circuit',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Triund at sunrise with 14 strangers who became lifelong friends. That\'s Zovara.',
    name: 'Kavya R.',
    location: 'Pune',
    trip: 'Dharamshala Eco-Retreat',
    rating: 5,
  },
  {
    id: '4',
    quote: 'The Rajasthan Heritage tour had the most incredible attention to detail. Pure luxury.',
    name: 'Rishi T.',
    location: 'Delhi',
    trip: 'Rajasthan Royal Heritage',
    rating: 5,
  },
  {
    id: '5',
    quote: 'Finally a travel company that actually lives its sustainability values, not just talks about them.',
    name: 'Meera L.',
    location: 'Chennai',
    trip: 'Spiti Valley Explorer',
    rating: 5,
  },
  {
    id: '6',
    quote: 'The Kedarkantha snow trek with Zovara was the highlight of my year. Flawless organisation.',
    name: 'Anand P.',
    location: 'Hyderabad',
    trip: 'Kedarkantha Winter Trek',
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Triund is Still India\'s Most Rewarding Day Trek',
    slug: 'triund-most-rewarding-day-trek',
    category: 'Trekking',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/674735/pexels-photo-674735.jpeg?w=800&fit=crop',
    excerpt: 'Despite its popularity, Triund remains one of the most soul-stirring treks in India. Here\'s why this 9km ridge walk deserves a spot on every trekker\'s bucket list.',
    author: 'Nikhil Singh Tanwar',
    date: '2024-11-15',
    content: `<h2>The Trail That Keeps Giving</h2><p>Triund is not the hardest trek in India. It\'s not the longest, the highest, or the most remote. But it might be the most rewarding. At 2,875m, this ridge walk above Dharamshala delivers panoramic views of the Dhauladhar range that rival anything you\'ll see on far more demanding trails.</p><h2>What Makes Triund Special</h2><p>The magic of Triund lies in its accessibility and its payoff. In just 5-6 hours from McLeod Ganj, you go from bustling Tibetan markets to a ridge where the mountains stretch endlessly in every direction. The Dhauladhar range rises like a wall of snow and granite, and on a clear day, you can see the peaks of Pir Panjal beyond.</p><h2>Best Time to Go</h2><p>March to June and September to November offer the clearest views. The monsoon months (July-August) can be treacherous with slippery trails and limited visibility. Winter treks are possible but require proper gear and an experienced guide.</p><h2>Zovara\'s Approach</h2><p>At Zovara, we include Triund as an option on Day 3 of our Dharamshala Eco-Retreat. We start early to beat the crowds, provide packed vegetarian lunches, and ensure our certified guides share the ecology and geology of the region. It\'s not just a trek — it\'s an education in the Himalayas.</p>`,
  },
  {
    id: '2',
    title: 'Zero-Waste Himalayan Trekking: The Complete Packing Guide',
    slug: 'zero-waste-himalayan-trekking-packing-guide',
    category: 'Sustainability',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?w=800&fit=crop',
    excerpt: 'How to trek the Himalayas without leaving a single piece of waste behind. Our complete guide to zero-waste trekking.',
    author: 'Nikhil Singh Tanwar',
    date: '2024-10-28',
    content: `<h2>Why Zero-Waste Matters</h2><p>The Himalayas are under threat — not from climate change alone, but from the sheer volume of waste left by trekkers. Plastic bottles, wrappers, and disposable gear litter trails that were pristine just a decade ago. At Zovara, we believe that leaving no trace isn\'t optional — it\'s the only acceptable way to trek.</p><h2>The Essentials</h2><p>Start with a reusable water bottle. We provide one to every Zovara guest. Add a set of reusable cutlery, a cloth napkin, and a small waste pouch for carrying back any waste you generate. That\'s 90% of the battle won right there.</p><h2>Food Without Waste</h2><p>All Zovara meals on trek are served without single-use packaging. We use steel plates and cups, pack lunches in reusable containers, and carry back all food waste for composting. It\'s more effort, but the mountains are worth it.</p>`,
  },
  {
    id: '3',
    title: 'McLeod Ganj Off the Tourist Trail: A Local\'s Guide',
    slug: 'mcleod-ganj-off-tourist-trail',
    category: 'Culture',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/1277381/pexels-photo-1277381.jpeg?w=800&fit=crop',
    excerpt: 'Beyond the cafés and souvenir shops lies a McLeod Ganj that most visitors never see. Our local guides share their secret spots.',
    author: 'Nikhil Singh Tanwar',
    date: '2024-10-10',
    content: `<h2>Beyond the Main Square</h2><p>Most visitors to McLeod Ganj spend their time between the Dalai Lama Temple and the cafés of Bhagsu Road. But the real McLeod — the one our guides know — is found in the narrow lanes behind the monastery, the hidden meditation caves above Dharamkot, and the family kitchens where Himachali dham is still cooked the old way.</p><h2>The Secret Meditation Caves</h2><p>Above Dharamkot, a 30-minute walk from the last café, you\'ll find a series of small caves used by Tibetan monks for solitary meditation. Some have been in use for decades. It\'s not a tourist spot — there are no signs or guides — but with a local, you can visit respectfully.</p><h2>Where Locals Eat</h2><p>Skip the international cafés and head to the small dhabas near the bus stand. The thukpa at Tibetan Kitchen, the momos at Lung Ta, and the Himachali dham at village homes — these are the flavours that define McLeod.</p>`,
  },
  {
    id: '4',
    title: 'Spiti Valley in Winter: What Nobody Tells You',
    slug: 'spiti-valley-in-winter',
    category: 'Destinations',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?w=800&fit=crop',
    excerpt: 'Winter in Spiti is not for the faint-hearted. But for those who brave it, the rewards are extraordinary — including the chance to spot the elusive snow leopard.',
    author: 'Nikhil Singh Tanwar',
    date: '2024-09-20',
    content: `<h2>The Cold Reality</h2><p>Let\'s be honest: Spiti in winter is brutal. Temperatures drop to -30°C, most guesthouses close, roads are blocked by snow, and you\'re days from the nearest hospital. This is not a casual holiday. It\'s an expedition.</p><h2>Why Do It Then?</h2><p>Because winter Spiti is the most beautiful version of itself. The monasteries are quiet — just monks and prayer. The night skies are impossibly clear. And in the villages of Kibber and Langza, you have a real chance of spotting the snow leopard — the ghost of the mountains.</p><h2>Snow Leopard Tracking</h2><p>January to March is snow leopard season. Our guides work with local spotters who\'ve been tracking these cats for years. Sightings aren\'t guaranteed, but the tracking itself — scanning ridgelines at dawn, following pug marks in fresh snow — is one of the most thrilling wildlife experiences on Earth.</p>`,
  },
  {
    id: '5',
    title: 'The Ethics of Eco-Tourism: Are We Doing It Right?',
    slug: 'ethics-of-eco-tourism',
    category: 'Sustainability',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=800&fit=crop',
    excerpt: 'Eco-tourism is the travel industry\'s favourite buzzword. But how many companies actually walk the talk? A honest look at what real sustainability means.',
    author: 'Nikhil Singh Tanwar',
    date: '2024-09-05',
    content: `<h2>The Greenwashing Problem</h2><p>Every travel company claims to be "eco-friendly" now. But dig beneath the marketing and you\'ll find the same single-use plastic, the same overcrowded trails, the same extractive model — just with a green logo. At Zovara, we started with a different question: what would travel look like if it actually helped the places it visits?</p><h2>What Real Eco-Tourism Looks Like</h2><p>Real eco-tourism means zero single-use plastic on every trip — not just the ones that are convenient. It means 100% local guides, not expat leaders. It means food sourced within 50km where possible. It means a percentage of every booking going to community funds. And it means being honest about the carbon footprint of travel and offsetting it completely.</p><h2>The Hard Truth</h2><p>Even with all our efforts, travel has an environmental cost. We can\'t pretend otherwise. What we can do is minimise that cost, offset what remains, and ensure that the communities we visit are better off for our presence. That\'s the standard we hold ourselves to.</p>`,
  },
  {
    id: '6',
    title: 'Kedarkantha Snow Trek 2025: Complete Beginner\'s Guide',
    slug: 'kedarkantha-snow-trek-beginners-guide',
    category: 'Trekking',
    readTime: '12 min',
    image: 'https://images.pexels.com/photos/1435761/pexels-photo-1435761.jpeg?w=800&fit=crop',
    excerpt: 'Everything you need to know before attempting India\'s most beautiful winter trek — from fitness preparation to gear recommendations.',
    author: 'Nikhil Singh Tanwar',
    date: '2024-08-15',
    content: `<h2>Is Kedarkantha Right for You?</h2><p>If you can walk 8-10km in a day and don\'t have severe knee or heart problems, Kedarkantha is within your reach. It\'s rated moderate, which means you\'ll work hard — especially on summit day — but no technical climbing skills are needed. This is a trek for determined beginners, not elite athletes.</p><h2>Fitness Preparation</h2><p>Start training at least 6 weeks before your trek. Focus on cardio (running, cycling, swimming) and leg strength (stairs, squats, lunges). Aim to walk 5km with a 5kg backpack comfortably before you arrive. The fitter you are, the more you\'ll enjoy the experience.</p><h2>Gear Essentials</h2><p>Good trekking shoes are non-negotiable — break them in for at least 2 weeks before the trek. You\'ll also need a down jacket, thermal layers, waterproof outer shell, gaiters for snow, and a headlamp. Zovara provides sleeping bags and tents, but personal clothing is your responsibility.</p><h2>What to Expect</h2><p>Days start early (5-6 AM), trails are snow-covered from December to April, and temperatures at camp can drop to -10°C. But the campsites are stunning, the food is hot and plentiful, and the summit sunrise is worth every cold step. This is the trek that changes people.</p>`,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Chetan Upadhaya',
    role: 'COO & Co-Founder',
    image: '/chetan.png',
    bio: 'Chetan oversees operations and marketing, ensuring every Zovara journey runs seamlessly from first enquiry to final farewell. His deep network across India\'s travel ecosystem — from local guides and homestay owners to transport partners and permit offices — makes every trip exceptional. Chetan\'s operational rigour and marketing instincts have been instrumental in scaling Zovara from a bootstrapped startup to a trusted name in responsible travel.',
  },
  {
    name: 'Aditya Singh Tanwar',
    role: 'CFO & Co-Founder',
    image: '/aditya.png',
    bio: 'Aditya manages Zovara\'s financial operations and strategic partnerships, bringing precision and integrity to every aspect of the business. With a sharp eye for sustainable growth and a commitment to keeping Zovara\'s values at the centre of every financial decision, he ensures the company grows without compromising on the principles that make it different.',
  },
  {
    name: 'Nikhil Singh Tanwar',
    role: 'CEO & Co-Founder',
    image: '/nikhil.png',
    bio: 'Nikhil leads Zovara\'s vision and strategy. A lifelong traveller and trekking enthusiast from Jaipur, he founded Zovara in 2019 after a transformative Triund trek that convinced him travel could — and should — be different. Under his leadership, Zovara has grown from a single curated trek to 8 destinations across India, all built on the principle that responsible travel and extraordinary experiences are not mutually exclusive.',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 4–6 weeks ahead, especially for peak season (March–June, September–November). Popular treks like Kedarkantha in December fill up quickly.',
  },
  {
    question: 'Can I customise an itinerary?',
    answer: 'Absolutely. Contact us via WhatsApp or the enquiry form and we\'ll build something just for you. We specialise in custom group experiences.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Full refund up to 30 days before departure. 50% refund 15–30 days before. No refund within 14 days of departure date.',
  },
  {
    question: 'Do I need prior trekking experience?',
    answer: 'Most of our treks require no prior experience. Each package clearly states the difficulty level. Our certified guides ensure safety and support throughout.',
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(d => d.id === slug);
}

export function getPackageBySlug(slug: string): PackageData | undefined {
  return packages.find(p => p.id === slug);
}

export function getPackagesForDestination(destinationId: string): PackageData[] {
  return packages.filter(p => p.destinationId === destinationId);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getRelatedPackages(destinationId: string): PackageData[] {
  return packages.filter(p => p.destinationId === destinationId).slice(0, 3);
}
