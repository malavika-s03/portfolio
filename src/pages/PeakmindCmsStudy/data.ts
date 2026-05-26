export const COLORS = {
  orange: '#ff6d24',
  purple: '#5f21b7',
  green: '#10b981',
  red: '#d4183d',
  amber: '#f59e0b',
  text: '#1a1a1a',
  textSecondary: '#737373',
  heroBg: '#f8f5fb',
  white: '#ffffff',
  border: '#e5e5e5',
  lightPurple: '#f0e7fc',
  cardBg: '#fafafa',
  badgeBg: '#f5f5f5',
};

export const heroContent = {
  title: [
    { text: 'Peak', color: COLORS.orange },
    { text: 'mind', color: COLORS.purple },
    { text: ' CMS', color: COLORS.text },
  ],
  subtitle:
    'A case management platform helping schools coordinate mental wellness programs, student support, and safety reporting.',
};

export const heroGallery = {
  items: [
    { image: 'gallery-1.png', title: 'Gratitude Wall', subtitle: 'Year 5 Project' },
    { image: 'gallery-2.png', title: 'Kindness Week', subtitle: 'School-wide' },
    { image: 'gallery-3.png', title: 'Mindfulness Art', subtitle: 'Year 3 Activity' },
  ],
  stats: [
    { value: '124', label: 'Total Entries' },
    { value: '8', label: 'Collections' },
    { value: '15', label: 'Classes' },
  ],
  heading: 'Gallery',
  subtitle: 'Curated wellbeing activity documentation',
};

export const analyticsMetrics = {
  title: 'Student Wellbeing Metrics',
  bars: [
    { label: 'Participation Rate', value: 87, color: COLORS.purple },
    { label: 'Completion Rate', value: 92, color: COLORS.orange },
    { label: 'Engagement Score', value: 78, color: COLORS.purple },
  ],
  stats: [
    { value: '245', label: 'Active Students', bg: 'rgba(95,33,183,0.06)' },
    { value: '32', label: 'Activities This Week', bg: 'rgba(255,109,36,0.06)' },
  ],
};

export const incidentReport = {
  title: 'Incident Report',
  subtitle: 'Quick and secure logging',
  entries: [
    {
      id: '#2847',
      status: 'Pending Review',
      statusColor: '#f59e0b',
      statusBg: 'rgba(245,158,11,0.1)',
      borderColor: 'rgba(245,158,11,0.3)',
      description: 'Playground incident - Student wellbeing check',
      time: 'Reported: Today, 10:30 AM',
    },
    {
      id: '#2846',
      status: 'Resolved',
      statusColor: '#10b981',
      statusBg: 'rgba(16,185,129,0.1)',
      borderColor: 'rgba(16,185,129,0.3)',
      description: 'Classroom support request',
      time: 'Reported: Today, 9:15 AM',
    },
    {
      id: '#2845',
      status: 'Closed',
      statusColor: '#737373',
      statusBg: 'rgba(115,115,115,0.08)',
      borderColor: 'rgba(115,115,115,0.2)',
      description: 'Staff escalation - Follow up required',
      time: 'Reported: Yesterday, 2:45 PM',
    },
  ],
};

export const projectOverview = {
  problem: {
    label: 'The Problem',
    heading: 'Schools lacked a centralized system',
    items: [
      'Coordinate mental wellness activities across classes',
      'Track student support cases and intervention progress',
      'Manage counselling workflows and session notes',
      'Monitor wellbeing insights at scale with actionable data',
    ],
  },
  solution: {
    label: 'The Solution',
    heading: 'A professional CMS platform',
    description:
      'Design a comprehensive platform for school administrators and counsellors that combines:',
    capabilities: [
      'Planning',
      'Analytics',
      'Case Management',
      'Safety Reporting',
      'Content Library',
      'Resource Gallery',
    ],
  },
};

export const designSystemCards = [
  { title: 'Brand Continuity', description: "Retained Peakmind's signature purple and orange colors to maintain brand recognition while adapting the visual language" },
  { title: 'Enhanced Readability', description: 'Increased contrast ratios and spacing to improve legibility in data-heavy admin interfaces' },
  { title: 'Modular Components', description: 'Built scalable dashboard components that can handle complex workflows and large datasets' },
  { title: 'Data Visualization', description: 'Created standardized chart styles and progress indicators for consistent analytics presentation' },
  { title: 'Professional Tone', description: 'Evolved from playful student-facing design to structured, trustworthy admin interface' },
  { title: 'Responsive Layouts', description: 'Designed flexible grid systems that adapt to various screen sizes and information densities' },
];

export const designSystemTabs = ['overview', 'colors', 'typography', 'components', 'patterns'];

export const designPrinciples = [
  { icon: 'principle-compassionate.svg', title: 'Compassionate', description: 'Design with empathy for students and educators managing mental health and wellbeing.' },
  { icon: 'principle-safe.svg', title: 'Safe & Secure', description: 'Prioritize privacy and security in handling sensitive student information.' },
  { icon: 'principle-educational.svg', title: 'Educational', description: 'Support learning and growth through clear, accessible interfaces.' },
];

export const keyFeatures = [
  'Event planning and calendar management',
  'Analytics and wellbeing tracking',
  'Safety incident reporting',
  'Classroom resource library',
  'Student assessment tools',
  'Multi-tier support system',
];

export const userRoles = [
  {
    icon: 'user-admin.svg',
    title: 'School Administrators',
    color: COLORS.purple,
    bgColor: 'rgba(95,33,183,0.08)',
    items: [
      'High-level visibility across all programs',
      'Scheduling oversight and conflict management',
      'School-wide analytics and reporting',
      'Resource allocation tracking',
    ],
  },
  {
    icon: 'user-counsellor.svg',
    title: 'Counsellors',
    color: COLORS.orange,
    bgColor: 'rgba(255,109,36,0.08)',
    items: [
      'Student case tracking and management',
      'Session notes and progress updates',
      'Intervention planning and monitoring',
      'Confidential communication channels',
    ],
  },
  {
    icon: 'user-teacher.svg',
    title: 'Teachers',
    color: COLORS.green,
    bgColor: 'rgba(16,185,129,0.08)',
    items: [
      'Access to classroom wellness resources',
      'Schedule visibility for planning',
      'Student wellbeing insights',
      'Quick reference to support materials',
    ],
  },
];

export const featureDeepDiveIntro = {
  heading: 'Feature Deep Dive',
  subtitle: 'Core workflows designed for efficiency, clarity, and emotional sensitivity',
};

export const plannerFeature = {
  heading: 'Coordinate mental wellness activities',
  description:
    'The planner was designed to help schools coordinate mental wellness activities across classes while avoiding scheduling conflicts and maintaining visibility for all stakeholders.',
  items: [
    'Color-coded event categories for quick scanning',
    'Conflict detection and resolution suggestions',
    'Multi-view support (monthly, weekly, list)',
    'Quick event creation with templates',
    'Class-level and school-wide filtering',
  ],
  imageLabel: 'Calendar View with Event Scheduling',
  imageIcon: 'feature-calendar-icon.svg',
};

export const analyticsFeature = {
  heading: 'Turn data into actionable insights',
  description:
    'The analytics section allows administrators to view school-wide wellness trends, drill down class-wise, and access individual student insights while maintaining privacy and data sensitivity.',
  challenges: [
    'Presenting complex mental health data clearly',
    'Maintaining information hierarchy across drill-downs',
    'Balancing transparency with privacy concerns',
    'Avoiding cognitive overload in dense dashboards',
  ],
  imageLabel: 'Analytics Dashboard with Wellbeing Metrics',
  imageIcon: 'feature-analytics-icon.svg',
};

export const caseManagementFeature = {
  heading: 'Streamline counselling workflows',
  description:
    'Counsellors needed a centralized workflow to track active cases, update progress, assign sessions, and maintain confidential notes with emotional sensitivity.',
  pills: ['Case Cards', 'Session Timeline', 'Status Progression', 'Notes Interface', 'Assignment Flow', 'Progress Tracking'],
  callout: { bold: 'Design Focus:', text: ' Clarity, emotional sensitivity, and operational efficiency' },
  imageLabel: 'Case Management Interface',
  imageIcon: 'feature-case-mgmt-icon.svg',
};

export const safetyFeature = {
  heading: 'Build trust through accessibility',
  description:
    'Students can raise concerns related to bullying, unsafe environments, or infrastructure issues through a system designed to feel safe, confidential, and easy to use.',
  steps: [
    { title: 'Simple Reporting Flow', subtitle: 'Minimized steps to reduce friction' },
    { title: 'Category System', subtitle: 'Clear incident categorization' },
    { title: 'Status Tracking', subtitle: 'Transparency in resolution progress' },
    { title: 'Escalation Indicators', subtitle: 'Priority management for critical issues' },
  ],
  imageLabel: 'Safety Reporting System',
  imageIcon: 'feature-safety-icon.svg',
};

export const heroSlides = [
  {
    title: 'Planner',
    description: 'Plan and manage wellbeing activities across the school',
    dotColor: '#ff6d24',
  },
  {
    title: 'Classroom',
    description: 'Prerecorded wellness and wellbeing activities',
    dotColor: '#d4183d',
  },
  {
    title: 'Gallery',
    description: 'Curated wellbeing activity documentation',
    dotColor: '#5f21b7',
  },
  {
    title: 'Safety',
    description: 'Incident reporting, tracking, and management',
    dotColor: '#5f21b7',
  },
  {
    title: 'Analytics',
    description: 'Track student wellbeing and completion metrics',
    dotColor: '#10b981',
  },
];

export const classroomContent = {
  title: 'Mindful Breathing',
  subtitle: 'Guided classroom activity for calm and focus',
  steps: [
    { number: 1, title: 'Find Your Position', description: 'Sit comfortably with feet flat on the floor' },
    { number: 2, title: 'Close Your Eyes', description: 'Gently close your eyes or soften your gaze' },
    { number: 3, title: 'Breathe Deeply', description: 'Inhale for 4, hold for 4, exhale for 4' },
  ],
};

export const bottomCards = [
  {
    icon: 'classroom-icon.svg',
    checkIcon: 'classroom-check.svg',
    title: 'Classroom',
    description: 'Teachers can access prerecorded wellness sessions and SEL content during class activities through an organized content library.',
    items: ['Video library organization', 'Category filtering', 'Quick search and playback'],
    iconBg: 'rgba(95,33,183,0.1)',
  },
  {
    icon: 'gallery-icon.svg',
    checkIcon: 'gallery-check.svg',
    title: 'Gallery',
    description: 'A centralized archive for school wellness events and activities, providing documentation and community building.',
    items: ['Event photo collections', 'Date-based organization', 'Share and download options'],
    iconBg: 'rgba(255,109,36,0.1)',
  },
];
