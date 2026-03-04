export type TrekData = {
  slug: string;
  title: string;
  breadcrumb: string[];
  images: string[];
  stats: {
    duration: string;
    bestSeason: string;
    groupSize: string;
    adventureLevel: string;
    activities: string;
    highestPoint:string;
  };
  pricing: {
    original: number;
    discounted: number;
    savePercent: number;
    depositAmount: number;
    currency: string;
  };
  details: {
    duration: string;
    maxAltitude: string;
    difficulty: string;
    groupSize: string;
  };
  overview: string[];
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  itinerary: {
    day: number;
    title: string;
    location: string;
    altitude: string;
    duration: string;
    difficulty: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  packages: {
    name: string;
    stars: number;
    price: number;
  }[];
  faqs: {
    category: string;
    questions: {
      q: string;
      a: string;
    }[];
  }[];
  reviews: {
    name: string;
    platform: "google" | "tripadvisor";
    rating: number;
    title: string;
    body: string;
    avatar: string;
  }[];
  mapEmbedUrl: string;
  gearList: {
    category: string;
    icon: string;
    count: number;
    items: string[];
  }[];
};

export const treks: Record<string, TrekData> = {
  "annapurna-circuit-trek": {
    slug: "annapurna-circuit-trek",
    title: "Annapurna Circuit Trek",
    breadcrumb: ["Home", "Tour", "Nepal"],
    images: [
      "/images/treks/annapurna-circuit-trek/main.jpg",
      "/images/treks/annapurna-circuit-trek/gallery-1.jpg",
      "/images/treks/annapurna-circuit-trek/gallery-2.jpg",
      "/images/treks/annapurna-circuit-trek/gallery-3.jpg",
      "/images/treks/annapurna-circuit-trek/gallery-4.jpg",
      "/images/treks/annapurna-circuit-trek/gallery-5.jpg",
      "/images/treks/annapurna-circuit-trek/gallery-6.jpg",
      "/images/treks/annapurna-circuit-trek/gallery-7.jpg",
      "/images/treks/annapurna-circuit-trek/gallery-8.jpg",
    ],
    stats: {
      duration: "14 days",
      bestSeason: "Mar-May, Sep-Nov",
      groupSize: "2-12",
      adventureLevel: "Moderate",
      activities: "Trekking Adventures",
      highestPoint: "5416m above sea-level"
    },
    pricing: {
      original: 900,
      discounted: 699,
      savePercent: 22,
      depositAmount: 140,
      currency: "USD",
    },
    details: {
      duration: "14 Days",
      maxAltitude: "5416 m",
      difficulty: "Moderate",
      groupSize: "2-12",
    },
    overview: [
      "Embark on the classic Annapurna Circuit Trek, a 14-day journey encircling the Annapurna massif. This trek traverses lush terraced farmland, deep gorges, alpine forests, and high-altitude deserts, culminating at Thorong La Pass (5,416m). Along the way you'll encounter Gurung, Manangi, and Thakali villages, observe diverse flora and fauna, and witness some of the most spectacular mountain vistas in Nepal.",
      "What sets the Annapurna Circuit apart is not just the stunning mountain scenery, but the incredible cultural diversity you'll encounter. Trek through traditional Gurung villages with their stone houses and slate roofs, experience the unique Manangi culture influenced by Tibetan Buddhism, and witness the fascinating blend of Hindu and Buddhist traditions at the sacred Muktinath Temple.",
      "The circuit also offers something truly unique - the trek through the Kali Gandaki Gorge, the deepest gorge in the world, flanked by the towering giants of Dhaulagiri (8,167m) and Annapurna I (8,091m). This natural wonder creates dramatic scenery and showcases the raw power of geological forces.",
    ],
    highlights: [
      {
        icon: `<img src="/icons/thorongla.svg"/>`,
        title: "Thorong La Pass (5,416m)",
        description: "Cross one of the highest trekking passes in the world with breathtaking 360° panoramic views of the Annapurna and Dhaulagiri ranges",
      },
      {
        icon: `<img src="/icons/diverselandscapes.svg"/>`,
        title: "Diverse Landscapes",
        description: "Experience dramatic changes from lush subtropical forests and terraced rice paddies to arid high-altitude deserts and glacial valleys",
      },
      {
        icon: `<img src="/icons/richculture.svg"/>`,
        title: "Rich Cultural Heritage",
        description: "Explore traditional villages of Gurung, Manangi, and Thakali people, visit ancient Buddhist monasteries and the sacred Muktinath Temple",
      },
      {
        icon: `<img src="/icons/hotsprings.svg"/>`,
        title: "Natural Hot Springs",
        description: "Relax and rejuvenate your tired muscles in the natural therapeutic hot springs of Tatopani after challenging days of trekking.",
      },
      {
        icon: `<img src="/icons/muktinath.svg"/>`,
        title: "Muktinath Temple",
        description: "Experience the spiritual atmosphere of this sacred pilgrimage site revered by both Hindus and Buddhists.",
      },
      {
        icon:`<img src="/icons/sidehikes.svg"/>`,
        title: "Scenic Side Hikes",
        description: "Take optional acclimatization hikes to Ice Lake or Tilicho Lake for added adventure and spectacular views.",
      },
    ],
    itinerary: [
      { day: 1, title: "Arrival Day", location: "Kathmandu", altitude: "1,800m", duration: "–", difficulty: "Easy", description: "Upon your arrival in Kathmandu, our representative will meet you at Tribhuvan International Airport, extend a warm welcome, and transfer to your hotel. Take advantage of this day to adjust to the new time zone and immerse yourself in the lively atmosphere of Kathmandu. Orientation Program will be at 5 PM. After orientation program welcome Dinner with guide." },
      { day: 2, title: "Full Day Sightseeing tour of Kathmandu Valley", location: "Kathmandu", altitude: "1,800m", duration: "4-5 hours", difficulty: "Easy", description: "Explore the cultural and historical highlights of the Kathmandu Valley including Pashupatinath Temple, Boudhanath Stupa, Swayambhunath, and Patan Durbar Square." },
      { day: 3, title: "Drive Kathmandu to Dharapani (1,960 m)", location: "Dharapani", altitude: "1,800m", duration: "9-11 hours", difficulty: "Easy", description: "Early morning drive from Kathmandu to Dharapani through scenic mountain roads. Enjoy beautiful views of the countryside along the way." },
      { day: 4, title: "Dharapani to Chame", location: "Chame", altitude: "1,800m", duration: "5-6 hours", difficulty: "Easy", description: "Trek from Dharapani to Chame through apple orchards and pine forests with stunning views of Annapurna II and Lamjung Himal." },
      { day: 5, title: "Chame to Upper Pisang", location: "Upper Pisang", altitude: "1,800m", duration: "5-6 hours", difficulty: "Easy", description: "Trek through dramatic gorges and forests to reach Upper Pisang, offering spectacular views of the Annapurna range." },
      { day: 6, title: "Upper Pisang to Manang", location: "Manang", altitude: "1,800m", duration: "5-6 hours", difficulty: "Easy", description: "Trek to Manang through high altitude terrain with breathtaking views of Annapurna III, Gangapurna, and Tilicho Peak." },
      { day: 7, title: "Acclimatization Day in Manang", location: "Manang", altitude: "1,800m", duration: "5-6 hours", difficulty: "Easy", description: "Rest day for acclimatization. Optional hike to Ice Lake or Gangapurna Lake for spectacular views. Attend altitude sickness briefing." },
      { day: 8, title: "Manang to Ledar", location: "Ledar", altitude: "1,800m", duration: "3-4 hours", difficulty: "Easy", description: "Short but scenic trek to Ledar through high altitude landscape with views of Thorong La Pass ahead." },
      { day: 9, title: "Ledar to Thorang-La High Camp", location: "High Camp", altitude: "1,800m", duration: "6-7 hours", difficulty: "Easy", description: "Trek to High Camp in preparation for the Thorong La Pass crossing the next day. Acclimatize and rest early." },
      { day: 10, title: "High Camp to Muktinath (3760m) via Thorong La Pass", location: "Muktinath", altitude: "1,800m", duration: "6-7 hours", difficulty: "Easy", description: "The most challenging and rewarding day! Cross Thorong La Pass (5,416m) and descend to the sacred town of Muktinath." },
      { day: 11, title: "Muktinath to Pokhara drive", location: "Pokhara", altitude: "1,800m", duration: "7-8 hours", difficulty: "Easy", description: "Drive from Muktinath through the dramatic Kali Gandaki Gorge to Pokhara, the lake city of Nepal." },
      { day: 12, title: "Sightseeing tour in Pokhara", location: "Pokhara", altitude: "1,800m", duration: "5-6 hours", difficulty: "Easy", description: "Explore Pokhara's highlights including Phewa Lake, Davis Falls, Gupteshwor Cave, and the World Peace Pagoda." },
      { day: 13, title: "Drive to Kathmandu by tourist bus", location: "Kathmandu", altitude: "1,800m", duration: "6-7 hours", difficulty: "Easy", description: "Scenic drive back to Kathmandu. Farewell dinner in the evening." },
      { day: 14, title: "Departure Day", location: "Kathmandu", altitude: "1,800m", duration: "5-6 hours", difficulty: "Easy", description: "Transfer to Tribhuvan International Airport for your departure. We hope you carry wonderful memories of your Annapurna Circuit Trek!" },
    ],
    inclusions: [
      "Airport pick up and drop",
      "Transportation by bus from Kathmandu-Beshishar- Bhulbhule and Pokhara- Kathmandu by tourist bus",
      "Meals, accommodation, insurance and other expenses of trekking crew",
      "Accommodation in simple lodges in twin sharing basis with breakfast during the trekking",
      "Three-star category hotel in Kathmandu (Himalayan Suite Hotel) and Pokhara (Hotel Lake Star or Hotel Mount View) in twin sharing bed and breakfast basis",
      "Guided sightseeing tour in Kathmandu and Pokhara",
      "English speaking guide and porters (1 porter for 2 travelers)",
      "ACAP, TIMS and necessary permit for trekking",
      "Necessary equipment (sleeping bag and duffle bag if necessary) during the trek",
      "Welcome dinner on Day One",
      "Muktinath- Pokhara by sharing Jeep",
      "All government taxes and office expenses",
    ],
    exclusions: [
      "Lunch and dinner during the trip (Meal cost about 4$ - 7$ dollar per item depending on the place where you eat)",
      "City sightseeing entry fees in Kathmandu (NRs 200+ 400+ 1000+1000)",
      "Flight ticket PKR-KTM (US$ 120 PP) - optional",
      "Personal expenses",
      "Anything that is not mentioned in inclusion list",
      "Tipping to a guide and porter as per your satisfaction",
    ],
    packages: [
      { name: "Standard Package", stars: 3, price: 699 },
      { name: "Premium", stars: 4, price: 999 },
      { name: "Luxury Option", stars: 5, price: 1499 },
    ],
    faqs: [
      {
        category: "General Information",
        questions: [
          {
            q: "What is the best time to trek the Annapurna Circuit?",
            a: "The best times are Spring (March-May) and Autumn (September-November). Spring offers blooming rhododendrons and warmer weather, while Autumn provides the clearest mountain views and most stable weather. Winter (Dec-Feb) is possible but requires extra preparation for snow and cold. Monsoon season (June-August) brings rain but fewer crowds.",
          },
          { q: "How difficult is the Annapurna Circuit Trek?", a: "The trek is rated as Moderate. While no technical climbing skills are required, you need good physical fitness for long days of walking (5-8 hours) at high altitude. The most challenging part is crossing Thorong La Pass (5,416m)." },
          { q: "Do I need previous trekking experience?", a: "Previous trekking experience is recommended but not mandatory. You should be physically fit and comfortable walking 5-8 hours per day. Regular hiking and good cardiovascular fitness will prepare you well." },
          { q: "What is the maximum altitude on this trek?", a: "The maximum altitude is Thorong La Pass at 5,416 meters (17,769 feet). Proper acclimatization days are built into the itinerary to minimize altitude sickness risk." },
        ],
      },
      {
        category: "Preparation & Fitness",
        questions: [
          { q: "How should I prepare for altitude?", a: "Train with cardiovascular exercises like hiking, running, or cycling for at least 2-3 months before the trek. Stay well hydrated, ascend gradually, and consider speaking to your doctor about altitude sickness medication." },
          { q: "What level of fitness do I need?", a: "You should be able to walk 5-8 hours per day on uneven terrain. Regular exercise including hiking with a loaded backpack is the best preparation. Yoga and swimming are also excellent complementary activities." },
          { q: "What vaccinations do I need?", a: "Consult your doctor, but commonly recommended vaccines include Hepatitis A & B, Typhoid, Tetanus, and Rabies. Malaria prophylaxis may be needed for lower elevations." },
        ],
      },
      {
        category: "Accommodation & Meals",
        questions: [
          { q: "What are the accommodations like?", a: "During the trek you'll stay in teahouses (local lodges) with basic twin-sharing rooms. In Kathmandu and Pokhara, you'll stay in 3-star hotels. Blankets are provided but sleeping bags are recommended for high altitude." },
          { q: "What food is available during the trek?", a: "Teahouses serve a variety of meals including dal bhat (the classic Nepali meal), pasta, rice dishes, soups, noodles, and local specialties. Breakfast is included in the package." },
          { q: "Is drinking water safe?", a: "We recommend using water purification tablets or a filter bottle rather than buying plastic bottles. Boiled water is available at teahouses for a small fee." },
        ],
      },
    ],
    reviews: [
      { name: "Marita Chuck", platform: "google", rating: 5, title: "Highly recommend HSJ", body: "Treked Annapurna circuit and base camp. This is the 3rd time using HSJ. Very well organised team. Usha my email go to with questions answered promptly and answered everything I needed to [...]", avatar: "/images/reviews/marita.jpg" },
      { name: "Nuno G", platform: "tripadvisor", rating: 5, title: "Once in a lifetime!", body: "Amazing views and our guide Tikaram was very helpful and funny. 5 stars for him!! Amazing time I had. Me and my friend loved every bit of it.", avatar: "/images/reviews/nuno.jpg" },
      { name: "Felix B", platform: "tripadvisor", rating: 5, title: "Thank you for all", body: "On our trek, we met the guide (Tikaram). He was accompanying a very nice Indian family in three generations were doing the trek. The oldest member of the family was 80 years old! An incredible [...]", avatar: "/images/reviews/felix.jpg" },
      { name: "Companion540 76802933", platform: "tripadvisor", rating: 5, title: "Best way to experience Nepal", body: "We did the 14 days Nepal budget tour and we could not be more happy with our choice. In only 2 weeks we visited Kathmandu, Chitwan national park, Pokhara and did a 5 day trek in the Annapurna [...]", avatar: "/images/reviews/companion.jpg" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453155.1522195024!2d83.72815!3d28.5967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995f5b87d99fced%3A0x6032e48a2b3b4d4d!2sAnnapurna%20Circuit!5e0!3m2!1sen!2snp!4v1234567890",
    gearList: [
      { category: "Clothing", icon: "👕", count: 10, items: ["Moisture-wicking base layers", "Fleece jacket", "Down jacket", "Waterproof jacket", "Trekking pants", "Thermal underwear", "Gloves", "Warm hat", "Sun hat", "Buff/neck gaiter"] },
      { category: "Foot wear", icon: "👟", count: 10, items: ["Waterproof trekking boots", "Trail runners", "Camp sandals", "Wool socks (5 pairs)", "Liner socks", "Gaiters", "Boot laces (spare)", "Insoles", "Waterproofing spray", "Blister kit"] },
      { category: "Health & Hygiene", icon: "❤️", count: 7, items: ["First aid kit", "Diamox (altitude sickness)", "Sunscreen SPF50+", "Lip balm", "Hand sanitizer", "Water purification tablets", "Personal medications"] },
      { category: "Electronics", icon: "📷", count: 6, items: ["Camera", "Power bank", "Universal adapter", "Headlamp + batteries", "Solar charger", "Satellite communicator"] },
      { category: "Sleeping gear", icon: "🌡️", count: 7, items: ["Sleeping bag (-10°C rated)", "Sleeping bag liner", "Inflatable pillow", "Earplugs", "Eye mask", "Sleeping mat (if camping)", "Tent (if camping)"] },
      { category: "Bags & packs", icon: "🎒", count: 9, items: ["Daypack (20-30L)", "Duffel bag for porter", "Rain cover for pack", "Dry bags", "Stuff sacks", "Packing cubes", "Waterproof document bag", "Money belt", "Trekking pole bag"] },
    ],
  },
};