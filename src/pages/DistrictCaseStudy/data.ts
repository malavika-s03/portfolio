export const COLORS = {
  background: '#1A0B2E',
  backgroundDark: '#120820',
  accent: '#D322FF',
  accentLight: '#E040FF',
  accentDark: '#9B11BE',
  purple: '#A020F0',
  purpleBorder: '#D322FF',
  text: '#FFFFFF',
  textSecondary: '#E8E8E8',
  textMuted: '#B8B8B8',
  textPurpleTint: '#C8A8E8',
  tableHeader: '#2A0E45',
  tableHeaderAlt: '#3A1260',
  tableRowDark: '#1A0830',
  tableRowAlt: '#220A3A',
  tableBorder: '#4A1870',
  bulletPurple: '#D322FF',
  // SWOT section specific colors (from Figma)
  swotBoxBg: '#5B2877',
  swotBoxBorder: '#9333EA',
};

export const problemStatement =
  "How can District penetrate the existing 'going-out' market in India with an all inclusive 'going-out' app";

export const districtInfo = {
  heading: 'DISTRICT',
  bullets: [
    "Launched in Nov 2024",
    "Aims to be the central app for all things 'going-out'",
    "Building off Zomato's existing user base",
    "Acquired Insider, PayTM's entertainment division",
  ],
};

export const bookMyShowInfo = {
  heading: 'BOOKMYSHOW',
  bullets: [
    'Launched in 2007',
    'Monopoly-like standing in Indian ticket booking market',
    'One-stop app for booking movie, sporting events, dance events etc. tickets',
    'Has a website and app',
  ],
};

/* ── SWOT Analysis Data ── */

export interface SwotItem {
  title: 'Strengths' | 'Weaknesses' | 'Opportunities' | 'Threat';
  items: string[];
}

export interface SwotAnalysis {
  heading: string;
  swot: SwotItem[];
}

export const districtSwot: SwotAnalysis = {
  heading: 'DISTRICT',
  swot: [
    {
      title: 'Strengths',
      items: [
        'Intuitive UI - clear differentiation between events, dining and movie booking',
        'Zomato + Insider user base',
        'More local experiences listed on the app',
      ],
    },
    {
      title: 'Weaknesses',
      items: [
        'Does not support web based booking',
        'Lack of awareness of the product among consumers',
        'Only available for Tier-1 cities at the moment',
      ],
    },
    {
      title: 'Opportunities',
      items: [
        'Alter the Insider website to make way for District',
        'Capitalise on the mistakes of competitor companies (Coldplay tickets debacle on BMS)',
        'Focus on niche events that can be combined with Zomato Dining (Eg. Collaborations with sports bars during match screenings etc.)',
      ],
    },
    {
      title: 'Threat',
      items: [
        'Largest market share by competitor BookMyShow',
        'Users may not be interested in shifting to a new going-out app',
      ],
    },
  ],
};

export const bookMyShowSwot: SwotAnalysis = {
  heading: 'BOOKMYSHOW',
  swot: [
    {
      title: 'Strengths',
      items: [
        'Well established, largest marketshare holder',
        'One stop solution for all types of going-out events',
        'More diversified experience options',
        'Available in both Tier-1, Tier-2 & some Tier-3 cities as well',
      ],
    },
    {
      title: 'Weaknesses',
      items: [
        'Servers unable to support extremely high demand of tickets',
        'UI might be outdated in terms of appeal to younger audience',
      ],
    },
    {
      title: 'Opportunities',
      items: [
        'Have their own flagship events like Zomato\'s Zomaland or Feed India',
      ],
    },
    {
      title: 'Threat',
      items: [
        'Smaller companies now providing the same services as they do',
      ],
    },
  ],
};

export interface SegmentationRow {
  variable: string;
  district: string;
  bookMyShow: string;
}

export const segmentationData: SegmentationRow[] = [
  {
    variable: 'Age',
    district: '18-35 years (Gen Z & Millennials)',
    bookMyShow: '16-45 years (broader demographic)',
  },
  {
    variable: 'Income',
    district: 'Middle to upper-middle class',
    bookMyShow: 'All income groups',
  },
  {
    variable: 'Location',
    district: 'Tier 1 & Tier 2 cities in India',
    bookMyShow: 'Pan-India (Tier 1, 2 & 3 cities)',
  },
  {
    variable: 'Lifestyle',
    district: 'Urban, socially active, experience-seekers',
    bookMyShow: 'Entertainment enthusiasts across lifestyles',
  },
];

export const classificationData: SegmentationRow[] = [
  {
    variable: 'Behavioral',
    district: 'Frequent diners, event-goers, nightlife explorers',
    bookMyShow: 'Movie-goers, event attendees, sport fans',
  },
  {
    variable: 'Psychographic',
    district: 'Values curated experiences, social discovery',
    bookMyShow: 'Values convenience in ticket booking',
  },
  {
    variable: 'Geographic',
    district: 'Metro cities initially (Mumbai, Delhi, Bangalore)',
    bookMyShow: 'Available across 650+ cities in India',
  },
  {
    variable: 'Usage Rate',
    district: 'High-frequency (weekly going-out plans)',
    bookMyShow: 'Moderate (event-based, 2-4 times/month)',
  },
];

export interface PorterForce {
  title: string;
  level: string;
  district: string;
  bookMyShow: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// FIGMA SOURCE OF TRUTH (file 53fS8w3jMxFC6GfgllEvwo, node 2:2)
// Content extracted directly from Figma design
// ═══════════════════════════════════════════════════════════════════════════
export const portersFiveForces: PorterForce[] = [
  {
    title: 'Threat of substitute products or services',
    level: 'MODERATE-HIGH',
    district: 'Other ticketing platforms; services that encourage staying inside',
    bookMyShow: 'Streaming platforms and direct venue bookings are increasing as alternatives',
  },
  {
    title: 'Bargaining power of suppliers',
    level: 'MODERATE-HIGH',
    district: 'Event organizers and venues hold power as exclusive content drives ticketing',
    bookMyShow: 'More influence due to a larger market share and proven sales records',
  },
  {
    title: 'Rivalry among existing customers',
    level: 'HIGH',
    district: 'Faces challenges in differentiating from existing competitors',
    bookMyShow: 'Dominates the market with a strong brand, extensive network, and loyal customer base',
  },
  {
    title: 'Bargaining power of buyers',
    level: 'HIGH',
    district: 'Buyers have many choices, can switch with low effort',
    bookMyShow: 'Price-sensitive users but strong trust in platform reliability',
  },
  {
    title: 'Threat of new entrants',
    level: 'LOW-MODERATE',
    district: 'High entry barriers due to lack of brand power, existing partnerships',
    bookMyShow: 'Economies of scale and brand loyalty reduce the threat of new entrants',
  },
];

export interface CompetitorFeature {
  feature: string;
  district: boolean | string;
  bookMyShow: boolean | string;
  paytmInsider: boolean | string;
  zomatoGold: boolean | string;
}

export const competitorAnalysisData: CompetitorFeature[] = [
  {
    feature: 'Movie Tickets',
    district: true,
    bookMyShow: true,
    paytmInsider: false,
    zomatoGold: false,
  },
  {
    feature: 'Event Booking',
    district: true,
    bookMyShow: true,
    paytmInsider: true,
    zomatoGold: false,
  },
  {
    feature: 'Restaurant Booking',
    district: true,
    bookMyShow: false,
    paytmInsider: false,
    zomatoGold: true,
  },
  {
    feature: 'Nightlife',
    district: true,
    bookMyShow: false,
    paytmInsider: false,
    zomatoGold: false,
  },
  {
    feature: 'Activities & Experiences',
    district: true,
    bookMyShow: true,
    paytmInsider: true,
    zomatoGold: false,
  },
  {
    feature: 'Loyalty Program',
    district: true,
    bookMyShow: true,
    paytmInsider: false,
    zomatoGold: true,
  },
  {
    feature: 'Social Discovery',
    district: true,
    bookMyShow: false,
    paytmInsider: false,
    zomatoGold: false,
  },
  {
    feature: 'Group Planning',
    district: true,
    bookMyShow: false,
    paytmInsider: false,
    zomatoGold: false,
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// NEW FIGMA-BASED DATA (Test-4 file)
// ═══════════════════════════════════════════════════════════════════════════

export interface CompetitorDetailRow {
  label: string;
  bookMyShow: string;
  district: string;
  notes: string;
}

export const competitorStrategyTable1: CompetitorDetailRow[] = [
  {
    label: 'Overall strategy',
    bookMyShow: 'Affiliate + email + social media + Search Engine Marketing',
    district: 'Local Experience Promotion, Digital Marketing, Targetting urban millennials and Gen Z, community building',
    notes: '',
  },
  {
    label: 'Website',
    bookMyShow: 'https://in.bookmyshow.com/',
    district: 'https://www.district.in/',
    notes: 'District website is not functional, only prompts the app download',
  },
  {
    label: 'Blog/content',
    bookMyShow: 'No blogs on the website, they have a medium page where employees have written blogs https://weare.bookmyshow.com/',
    district: 'No blogs, only updated content is on their social media accounts: Instagram and X',
    notes: '',
  },
];

export const competitorStrategyTable2: CompetitorDetailRow[] = [
  {
    label: 'Social presence',
    bookMyShow: 'Facebook (7.5M followers), X (612.6k followers), Instagram (4416k followers), Youtube (150K subs), Pinterest (3.6k followers), LinkedIn (110k followers)',
    district: 'Facebook (282k followers), 0.6k in District; 1.18M followers District Cane: 601.6k followers); Instagram (Life in your district: 1.16M followers; District Bulmline: 16.1k followers); LinkedIn (2K followers)',
    notes: '',
  },
  {
    label: 'SEO',
    bookMyShow: 'Has firm SEO. BMS is the first result to show up when searching for movie tickets as well as concert tickets',
    district: "Does not have organic SEO yet since the website is not functional. However, Paytm's Insider which was acquired by Zomato is the second result after BMS indicating a strong presence.",
    notes: "District's organic SEO need to be worked on since the word \"District\" has other context associated with it for instance the geographical context and a popular song. Has paid Google ads, on searching for District on Google we get sponsored link for the website on desktop and Google Play app download link on phones.",
  },
];

export interface CoreFeatureRow {
  feature: string;
  col1: boolean;
  col1Text: string;
  col2: boolean;
  col2Text: string;
}

export const coreFeatureComparisonData: CoreFeatureRow[] = [
  {
    feature: 'Feature 1',
    col1: true,
    col1Text: 'Wide range of entertainment options',
    col2: true,
    col2Text: 'Wide range of entertainment options',
  },
  {
    feature: 'Feature 2',
    col1: true,
    col1Text: 'User-friendly interface and mobile app',
    col2: true,
    col2Text: 'User-friendly interface and mobile app',
  },
  {
    feature: 'Feature 3',
    col1: false,
    col1Text: 'Buy now sell later',
    col2: true,
    col2Text: 'Buy now sell later',
  },
  {
    feature: 'Feature 4',
    col1: true,
    col1Text: 'Restaurant dining booking',
    col2: true,
    col2Text: 'Restaurant dining booking',
  },
  {
    feature: 'Feature 5',
    col1: true,
    col1Text: 'Website booking',
    col2: false,
    col2Text: 'Website booking',
  },
  {
    feature: 'Feature 6',
    col1: false,
    col1Text: 'Integrated Wallet',
    col2: true,
    col2Text: 'Integrated Wallet',
  },
  {
    feature: 'Feature 7',
    col1: true,
    col1Text: 'Loyalty program: Reward point system',
    col2: true,
    col2Text: 'Loyalty program: Reward point system',
  },
];

export interface GoalMetricRow {
  goal: string;
  metric: string;
}

export const goalMetricData: GoalMetricRow[] = [
  {
    goal: 'Digital campaigns, search engine marketing (SEM) and social media marketing (SMM)',
    metric: 'Achieve a 20% adoption rate of the District app among existing Zomato users within six months of launch',
  },
  {
    goal: 'Social media outreach',
    metric: 'Increased social media following by 28%',
  },
  {
    goal: 'Partnerships with influencers',
    metric: 'Generate at least 15% of total revenue from District within one year as a result of effective marketing strategies',
  },
  {
    goal: 'Loyalty Program, welcome offers, rewards and enhanced customer service',
    metric: "Enhanced customer service Ensure that at least 75% of users report satisfaction with their experience using both Zomato's food delivery service and District within six months of implementation",
  },
];

export const productDescription = `District is the ultimate 'going-out' app by Zomato. It was launched as its first-ever super app for all things 'going-out', integrating movies, events, dining, nightlife, and activities into a single platform. Building on Zomato's massive user base of 20+ million monthly active users, District aims to become the go-to platform for urban Indians planning their outings.

District is Zomato's bid to consolidate all 'going-out' experiences under one roof. The app leverages Zomato's acquisition of Insider (now rebranded) and PayTM's entertainment division to offer a comprehensive entertainment and dining ecosystem. With AI-powered recommendations and social features, District differentiates itself from competitors by understanding user preferences and enabling group planning for outings.`;

export const pricingStrategy = `District employs a freemium model with premium features:

• Free tier: Basic discovery, event browsing, restaurant listings
• District Plus: ₹299/month - priority booking, exclusive deals, no convenience fees
• District Black: ₹599/month - all Plus benefits + VIP access, concierge service, premium lounge access

Revenue streams include:
• Commission on ticket/booking sales (8-15%)
• Restaurant listing and promotion fees
• Sponsored placements and advertising
• Premium subscription revenue
• Data monetization through anonymized insights`;

export interface SocialMediaPost {
  heading: string;
  body: string;
}

export const socialMediaContent: SocialMediaPost[] = [
  {
    heading: 'New to being a parent? We put value in this too, we understand you',
    body: 'Targeted content for new parents looking for family-friendly outings and experiences.',
  },
  {
    heading: 'Help us get better',
    body: 'User feedback campaign to improve recommendations and app experience.',
  },
];

export interface IncentiveItem {
  title: string;
  description: string;
}

export const customerIncentives: IncentiveItem[] = [
  {
    title: 'Referral program',
    description: 'Get ₹200 credit for each friend who signs up and makes their first booking.',
  },
  {
    title: 'First booking discount',
    description: '50% off on your first movie ticket or event booking (up to ₹150).',
  },
  {
    title: 'Weekly streaks',
    description: 'Book 3 outings in a week and unlock bonus rewards and exclusive deals.',
  },
  {
    title: 'Birthday specials',
    description: 'Free dessert at partner restaurants + complimentary movie upgrade on your birthday month.',
  },
  {
    title: 'Group rewards',
    description: 'Plan outings with 4+ friends through District and everyone gets 10% off.',
  },
];

export const marketingMessage = `"Tired of hopping between apps to plan your weekend? Movies on one app, dinner on another, events somewhere else? District brings it all together. One app, one plan, one amazing night out. 

From blockbuster movies to hidden-gem restaurants, live concerts to adventure activities — District has it all. And with smart recommendations that actually get you, planning your perfect outing takes seconds, not hours.

Download District. Your weekends will thank you."`;

export interface RoadmapPhase {
  month: string;
  title: string;
  items: string[];
}

export const roadmapData: RoadmapPhase[] = [
  {
    month: 'Month 1',
    title: 'Foundation',
    items: [
      'Market research & user interviews',
      'Define MVP feature set',
      'Design system & brand identity',
    ],
  },
  {
    month: 'Month 2',
    title: 'Core Development',
    items: [
      'Build core booking engine',
      'Integrate movie & event APIs',
      'User authentication & profiles',
    ],
  },
  {
    month: 'Month 3',
    title: 'Integration',
    items: [
      'Restaurant partner onboarding',
      'Payment gateway integration',
      'Push notification system',
    ],
  },
  {
    month: 'Month 4',
    title: 'Social Features',
    items: [
      'Group planning functionality',
      'Social discovery feed',
      'Friend activity & recommendations',
    ],
  },
  {
    month: 'Month 5',
    title: 'Beta Launch',
    items: [
      'Closed beta in Mumbai & Delhi',
      'User feedback collection',
      'Performance optimization',
    ],
  },
  {
    month: 'Month 6',
    title: 'Public Launch',
    items: [
      'Pan-India rollout (Tier 1 cities)',
      'Marketing campaign launch',
      'Loyalty program activation',
    ],
  },
];
