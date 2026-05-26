export const COLORS = {
  heading: '#2d3748',
  body: '#364153',
  purple: '#7c3aed',
  orange: '#f97316',
  cardBg: 'rgba(255,255,255,0.5)',
  pageBg: '#eeccae',
  lineColor: '#d9b89a',
};

export const heroData = {
  title: 'PeakMind Break Page Redesign',
  subtitle: 'Designing a calm and emotionally supportive wellness experience for students.',
  badgeText: '4 → 7 messages per session',
  tags: ['UX/UI Design', 'Mobile Experience', 'Student Mental Wellness'],
};

export const problemText =
  'Students visiting the Break page often dropped off quickly due to overwhelming wellness tools, unclear navigation, and lack of emotionally safe support. The experience needed to feel simpler, calmer, and more helpful during stressful moments.';

export interface PersonaCard {
  title: string;
  description: string;
  titleColor: string;
}

export const researchData = {
  intro: 'Research revealed three major student types using the platform:',
  personas: [
    { title: 'Students in Crisis', description: 'needed immediate emotional relief', titleColor: '#f97316' },
    { title: 'Routine Builders', description: 'wanted structure and habit tracking', titleColor: '#7c3aed' },
    { title: 'Curious Explorers', description: 'preferred low-pressure discovery', titleColor: '#f97316' },
  ] as PersonaCard[],
  findingsText:
    'Key findings showed that students preferred anonymous support and quick, low-effort interactions.',
  stats: [
    { value: '44.7%', label: 'chatbot usage', color: '#f97316' },
    { value: '73.3%', label: 'light users', color: '#7c3aed' },
    { value: '1.8%', label: 'consistent engagement', color: '#f97316' },
  ],
};

export const designGoalText =
  'The goal was to redesign the Break page into a low-stress, emotionally safe experience that provides quick support, reduces cognitive load, and encourages consistent engagement.';

export interface StrategyItem {
  number: number;
  text: string;
  color: string;
}

export const strategyItems: StrategyItem[] = [
  { number: 1, text: 'Crisis support within 2 taps', color: '#7c3aed' },
  { number: 2, text: 'Calm and distraction-free interface', color: '#f97316' },
  { number: 3, text: 'Personalized support for different student needs', color: '#7c3aed' },
  { number: 4, text: 'Progressive disclosure to reduce overwhelm', color: '#f97316' },
  { number: 5, text: 'Wellness integrated with academic life', color: '#7c3aed' },
];

export const wireframeCallouts = [
  'Pop up window when clicking on a new feature, allowing users to explore. Easy exit so that users doesn\'t find it hard to get back to exploring',
  'Combining leading problem statements with Peakoo for easy access',
  'Customisable floating for users to put their favourite features to easily access it.',
  'Clubbing features together into creating zones of similar features for easy understand.',
  'Streaks combined with mood check-in so that users can track their mood and their streak with a simple emoji selections.',
];

export interface FeatureCallout {
  title: string;
  description: string;
}

export const finalExperienceCallouts: FeatureCallout[] = [
  {
    title: 'Mood Check-In',
    description:
      'A simple emoji-based check-in helps students quickly express emotions while building consistent self-awareness through streaks and rewards.',
  },
  {
    title: 'Peakoo AI Support',
    description:
      'Leading question prompts and a friendly AI companion reduce the pressure of expressing emotional concerns and guide students toward relevant support.',
  },
  {
    title: 'Goals & Progress Tracking',
    description:
      'Task tracking and progress indicators help students build healthy study routines through small, achievable wins.',
  },
];

export const keyLearningsText =
  'This project taught me how emotionally-aware UX can make wellness tools feel approachable, supportive, and easy to engage with during stressful moments.';
