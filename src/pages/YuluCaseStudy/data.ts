export interface JourneyStage {
  stage: string;
  thought: string;
  action: string;
  emotion: string;
  touchpoint: string;
  environment: string;
}

export const journeyStages: JourneyStage[] = [
  {
    stage: "Problem Recognition",
    thought: '"Oh no! I\'m late for class again, where\'s my cab?"',
    action: "Sees a billboard ad for Yulu",
    emotion: "Anxious/Nervous",
    touchpoint: "Mind",
    environment: "PG Hostel",
  },
  {
    stage: "Information Search",
    thought: '"What is this Yulu? Can I use it right now?"',
    action: "Search Google for Yulu app",
    emotion: "Optimistic, Stressed",
    touchpoint: "Phone-Google",
    environment: "PG Hostel",
  },
  {
    stage: "Confirmation",
    thought: '"Where can I find nearest Yulu?"',
    action: "Search for nearest Yulu zone on Google",
    emotion: "Curious, Hopeful",
    touchpoint: "Phone-Google",
    environment: "PG Hostel",
  },
  {
    stage: "App Download",
    thought: '"I don\'t have to wait for a cab"',
    action: "Download Yulu app in the play store/app store",
    emotion: "Worried, Hopeful",
    touchpoint: "Play store/App store",
    environment: "On road, way to Yulu point",
  },
  {
    stage: "Setting Up",
    thought: '"I walk to get to the Yulu zone area"',
    action: "Sign-up while walking",
    emotion: "Overwhelmed",
    touchpoint: "Yulu App",
    environment: "On Road",
  },
  {
    stage: "Walk Through",
    thought: '"I want to unlock a Yulu"',
    action: "Finding instructions at Yulu point/App",
    emotion: "Agitated",
    touchpoint: "Yulu App",
    environment: "Yulu Point",
  },
  {
    stage: "Selecting a Bike",
    thought: '"How do I know which bike to choose?"',
    action: "Open bike categories in app",
    emotion: "Hasty",
    touchpoint: "Yulu App",
    environment: "Yulu Point",
  },
  {
    stage: "Unlocking",
    thought: '"Let\'s go!"',
    action: "Unlocks the Yulu via the app.",
    emotion: "Excited, Anticipatory",
    touchpoint: "Yulu App, Yulu Vehicle",
    environment: "Yulu Point",
  },
  {
    stage: "Riding",
    thought: '"This is fun and convenient!"',
    action: "Rides the Yulu to their destination.",
    emotion: "Happy, Satisfied",
    touchpoint: "Yulu Vehicle",
    environment: "Roads, Bike lane",
  },
  {
    stage: "Payment",
    thought: '"That wasn\'t so bad."',
    action: "Makes a payment through the app.",
    emotion: "Anxious, satisfied",
    touchpoint: "Payment Gateway",
    environment: "Destination",
  },
  {
    stage: "Customer Support",
    thought: '"I need help with..."',
    action: "Contacts customer support for issues.",
    emotion: "Frustrated, Anxious Hopeful",
    touchpoint: "Yulu App, Phone call",
    environment: "Anywhere",
  },
  {
    stage: "Feedback",
    thought: '"It would be great if..."',
    action: "Provides feedback through the app or other channels.",
    emotion: "Empowered, Hopeful",
    touchpoint: "Yulu App, Social Media",
    environment: "Anywhere",
  },
  {
    stage: "Community Engagement",
    thought: '"I want to be part of the Yulu community."',
    action: "Participates in surveys, discussions.",
    emotion: "Engaged",
    touchpoint: "Social Media, Yulu Forums",
    environment: "Online",
  },
  {
    stage: "Consideration to Leave",
    thought: '"I don\'t use Yulu much anymore."',
    action: "Evaluates their need for the service.",
    emotion: "Neutral, Pragmatic",
    touchpoint: "Mind",
    environment: "Anywhere",
  },
  {
    stage: "Uninstalling",
    thought: '"Time to simplify."',
    action: "Uninstalls the app or cancels subscription.",
    emotion: "Relieved, Slightly Disappointed",
    touchpoint: "App Store",
    environment: "Anywhere",
  },
  {
    stage: "Post Exit Evaluation",
    thought: '"Overall, it was a good experience."',
    action: "Reflects on their experience with Yulu.",
    emotion: "Neutral, Nostalgic",
    touchpoint: "Mind",
    environment: "Anywhere",
  },
];

export const rowLabels = [
  "Stage",
  "Customer thoughts",
  "Actions",
  "Experience/Emotions",
  "Touchpoint",
  "Environment",
];

export const heuristicLabels = [
  "Visibility of system status",
  "Match between system & world",
  "User control & freedom",
  "Consistency & standards",
  "Error prevention",
  "Recognition over recall",
  "Flexibility & efficiency",
  "Aesthetic & minimal design",
  "Help users with errors",
];

export interface CompetitorData {
  name: string;
  poweredBy: string;
  batterySwap: boolean;
  range: string;
  gpsTracking: boolean;
  lockSystem: string;
  rating: string;
  availability: string;
}

export const competitors: CompetitorData[] = [
  {
    name: "Yulu",
    poweredBy: "Battery",
    batterySwap: true,
    range: "60 km",
    gpsTracking: true,
    lockSystem: "QR code Scanning",
    rating: "4.4",
    availability: "5 Cities",
  },
  {
    name: "Zypp",
    poweredBy: "Battery",
    batterySwap: true,
    range: "120 km",
    gpsTracking: true,
    lockSystem: "QR code Scanning",
    rating: "4.2",
    availability: "15 Cities",
  },
  {
    name: "EVeez",
    poweredBy: "Battery",
    batterySwap: true,
    range: "80 -100 km",
    gpsTracking: true,
    lockSystem: "QR code Scanning",
    rating: "4.5",
    availability: "6 Cities",
  },
  {
    name: "MYBYK",
    poweredBy: "Human",
    batterySwap: false,
    range: "",
    gpsTracking: true,
    lockSystem: "QR code Scanning",
    rating: "4.3",
    availability: "6 Cities",
  },
];

export const competitorRowLabels = [
  "Powered by",
  "Battery swap",
  "Range",
  "GPS Tracking",
  "Lock system",
  "Rating",
  "Availability",
];

export interface StrengthItem {
  title: string;
  description: string;
  color: string;
}

export const yuluStrengths: StrengthItem[] = [
  {
    title: "Battery Swapping",
    description: "Real-time swaps eliminate range anxiety for users.",
    color: "#f59e0b",
  },
  {
    title: "Affordability",
    description: "Yulu's cost-effective pricing attracts budget-conscious users.",
    color: "#8b5cf6",
  },
  {
    title: "No License Required",
    description: "Yulu's service is accessible to those without a driving license.",
    color: "#eab308",
  },
  {
    title: "Eco-Friendly Focus",
    description: "Yulu's zero-emission bikes appeal to environmentally conscious consumers.",
    color: "#22c55e",
  },
  {
    title: "Convenience",
    description: "Yulu's extensive zone coverage ensures easy access for commuters.",
    color: "#22bddc",
  },
];
