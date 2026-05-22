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

export const productDescriptionTagline = 'Events, Eats, Experiences. District by Zomato. Your one-stop shop for a great time out';

export const productDescription = `District by Zomato is your all-in-one guide to unforgettable experiences. Discover and book tickets to events, from concerts and plays to workshops and more, all while seamlessly connecting with Zomato's restaurant network. Find nearby dining options, pre-order food, and plan your perfect night out, all in one place.`;

export const positionStatement = `District by Zomato can position itself as a one-stop solution for a seamless "going out" experience and building user loyalty. The focus on user experience, targeted marketing efforts, and strategic customer incentives will drive adoption and growth. The continuous collection of user feedback is crucial to ensure District's offering remains relevant and caters to evolving customer needs in the competitive event booking landscape.`;

export interface NumberedItem {
  number: string;
  heading: string;
  body: string;
}

export const socialMediaItems: NumberedItem[] = [
  {
    number: '01',
    heading: 'Relatability with customers through engaging in meme culture',
    body: '',
  },
  {
    number: '02',
    heading: 'Cross collaboration between different verticals of Zomato',
    body: '',
  },
];

export const socialMediaConstraint = 'Constraint addressed: Limited Marketing budget. Organic content has minimal costs.';

export const socialMediaNote = 'Considering the macro economic environment organic acquisitions should naturally grow as people are looking to go out and theatre/events are opening up.';

export const socialMediaFollowUpHeading = 'New to being a parent?\nWe are new to this too,\nwe understand you.';
export const socialMediaFollowUpSubheading = 'Help us get better';

export const socialMediaFollowUpItems: NumberedItem[] = [
  {
    number: '01',
    heading: '',
    body: 'Listing if the event is kid friendly. Showing amenities at the venue(feeding room, Diaper station etc)',
  },
  {
    number: '02',
    heading: '',
    body: 'Feedback option : To understand user needs and to drop a complaint if anything is not functional or broken.',
  },
];

export interface IncentiveItem {
  number: string;
  title: string;
  lines: string[];
}

export const customerIncentives: IncentiveItem[] = [
  {
    number: '01',
    title: 'Bundle features and events together',
    lines: [
      'For example, existing Zomato Gold members get exclusive access to events organised by District OR',
      'Users who reserve a table at a Sports Bar during a football match get exclusive merchandise',
    ],
  },
  {
    number: '02',
    title: 'Referral programs',
    lines: [
      'Refer a friend, and both get ₹150 credits for their next booking',
      'Book 4+ tickets, get 1 free (Ideal for group events or family outings)',
    ],
  },
  {
    number: '03',
    title: 'Exclusive Partnerships & Collaborations',
    lines: [
      'Collaborate with event organizers for exclusive giveaways like free backstage passes',
    ],
  },
];

export const marketingMessageHeadline = '"Tired of frustrating ticket booking experiences? We heard you!"';

export const marketingMessageBody = 'By directly addressing past frustrations, highlighting unique advantages, and implementing targeted marketing and incentives, District can overcome user resistance and establish itself as a trusted and preferred event booking platform.';

export const marketingMessagePoints: NumberedItem[] = [
  {
    number: '01',
    heading: 'Empathy:',
    body: 'Showing empathy for frustrated users. Use of language that resonates with their experiences (e.g., "We understand the frustration of long queues, website crashes, and missing out on tickets").',
  },
  {
    number: '02',
    heading: '"We\'re Different" Messaging:',
    body: 'Clearly articulate how District is different and designed to address those pain points. Focus on specific improvements:',
  },
];

export const marketingMessageSubpoints = [
  { label: 'Scalability:', text: '"Built on robust infrastructure to handle high traffic volumes."' },
  { label: 'Fairness:', text: '"Implementing measures to prevent bots and ensure fair access to tickets."' },
  { label: 'User Experience:', text: '"Simplified booking process with a user-friendly interface."' },
];

export interface RoadmapPhase {
  title: string;
  lines: string[];
}

export const roadmapData: RoadmapPhase[] = [
  {
    title: 'Month 1: Foundation (Mobile-First)',
    lines: [
      'Mobile: App strengthening (core features, Zomato rewards integration).',
      'Web: Website development begins (basic browsing, SEO).',
      'Marketing: Pre-launch buzz (Zomato users), social media launch, PR.',
    ],
  },
  {
    title: 'Month 2: Rewards & Engagement (Web Beta)',
    lines: [
      'Mobile: Transferable rewards launched, in-app feedback.',
      'Web: Beta website launch (core booking), user testing.',
      'Marketing: User acquisition campaigns (mobile-focused), contests, influencer marketing.',
    ],
  },
  {
    title: 'Month 3: Enhanced Experience (Web Launch)',
    lines: [
      'Mobile: Restaurant offers with nearby events and vice versa.',
      'Web: Official website launch (full functionality, restaurant integration).',
      'Marketing: Targeted local event/restaurant campaigns, local partnerships, user feedback.',
    ],
  },
  {
    title: 'Month 4: Personalized Discovery (Mobile & Web)',
    lines: [
      'Mobile: Personalized recommendations, curated lists.',
      'Web: Personalized recommendations, website optimization.',
      'Marketing: Retargeting campaigns, content marketing.',
    ],
  },
  {
    title: 'Month 5: Exclusive Content (Mobile & Web)',
    lines: [
      'Mobile & Web: Exclusive local event ticketing (pilot programs).',
      'Marketing: Exclusive event promotion, influencer/media partnerships.',
    ],
  },
  {
    title: 'Month 6: Scaling & Growth (Mobile & Web)',
    lines: [
      'Mobile & Web: Scale exclusive events, new feature exploration, platform optimization.',
      'Marketing: Scale successful campaigns, expand target markets, brand loyalty focus.',
    ],
  },
];

export interface RiceRow {
  feature: string;
  reach: string;
  impact: string;
  confidence: string;
  effort: string;
  score: string;
}

export const riceData: RiceRow[] = [
  {
    feature: 'Event Pairing with Restaurant Suggestions and offers',
    reach: '200,000 (Active Event Bookers)',
    impact: '2',
    confidence: '75%',
    effort: '1.5/3',
    score: '200',
  },
  {
    feature: 'Transferable Rewards (Zomato <-> District)',
    reach: '600,000 (Existing Zomato Users + District Users)',
    impact: '3',
    confidence: '80%',
    effort: '2/3',
    score: '720',
  },
  {
    feature: 'Enhanced Event Discovery (Personalized Recommendations, Curated Lists)',
    reach: '300,000 (General Users)',
    impact: '2',
    confidence: '80%',
    effort: '2/3',
    score: '240',
  },
  {
    feature: 'Exclusive Ticketing for Famous Local Events (Only on District)',
    reach: '150,000 (Targeting Specific Local Events)',
    impact: '3',
    confidence: '60%',
    effort: '2/3',
    score: '135',
  },
];

export const addressingConstraintText = 'Addressing Constraint: Potential resistance from users who may be hesitant to switch platforms or try new services.';
