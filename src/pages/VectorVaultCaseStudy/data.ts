export interface JTBDEntry {
  stakeholder: string;
  stakeholderColor: string;
  caption: string;
  situation: string;
  motivation: string;
  outcome: string;
}

export const jtbdData: JTBDEntry[] = [
  {
    stakeholder: 'STUDENT',
    stakeholderColor: '#2196F3',
    caption: '"REWIND"',
    situation: 'Following a tutorial',
    motivation: 'Go at my own pace',
    outcome: 'Can absorb the information'
  },
  {
    stakeholder: 'STUDENT',
    stakeholderColor: '#2196F3',
    caption: '"STREAK"',
    situation: 'Doing a course',
    motivation: 'Reminded of its timelines',
    outcome: "Don't leave it midway"
  },
  {
    stakeholder: 'TEACHER',
    stakeholderColor: '#FF9800',
    caption: '"GURUDAKSHINA"',
    situation: 'Making a tutorial',
    motivation: 'Ensure viewers complete it',
    outcome: 'So that it can be monetised'
  },
  {
    stakeholder: 'ADVERTISER',
    stakeholderColor: '#4CAF50',
    caption: '"MONEYBALL"',
    situation: 'Deploying ads',
    motivation: 'Ensure people interact with it',
    outcome: 'Can increase ROAS'
  }
];

export const jtbdHeaders = [
  'STAKEHOLDER',
  'CAPTION',
  'SITUATION (WHEN I AM)',
  'MOTIVATION (I WANT TO)',
  'OUTCOME (SO THAT I)'
];

export interface Persona {
  name: string;
  role: string;
  avatar: string;
  healthLevel: number;
}

export const personas: Persona[] = [
  {
    name: 'ARUN',
    role: 'ASPIRING ANIMATOR',
    avatar: 'persona-arun.png',
    healthLevel: 75
  },
  {
    name: 'SANA',
    role: 'FREELANCER',
    avatar: 'persona-sana.png',
    healthLevel: 80
  }
];

export interface SoftwareProviderData {
  company: string;
  percentage: number;
  color: string;
}

export const softwareProviders: SoftwareProviderData[] = [
  { company: 'ADOBE', percentage: 49, color: '#00E676' },
  { company: 'OTHER', percentage: 24, color: '#E040E0' },
  { company: 'APPLE', percentage: 11, color: '#2962FF' },
  { company: 'CANVA', percentage: 7, color: '#304FFE' },
  { company: 'ALLUDO', percentage: 5, color: '#00BFA5' },
  { company: 'AVID TECHNOLOGY', percentage: 2, color: '#3949AB' },
  { company: 'MAXON COMPUTER', percentage: 1, color: '#1A237E' }
];

export interface CountrySpendData {
  country: string;
  percentage: number;
  color: string;
}

export const countrySpendData: CountrySpendData[] = [
  { country: 'USA', percentage: 52.8, color: '#00E676' },
  { country: 'OTHERS', percentage: 20.5, color: '#E040E0' },
  { country: 'UNITED KINGDOM', percentage: 5, color: '#00BFA5' },
  { country: 'CHINA', percentage: 4.8, color: '#2962FF' },
  { country: 'GERMANY', percentage: 4.5, color: '#304FFE' },
  { country: 'JAPAN', percentage: 3.5, color: '#3949AB' },
  { country: 'CANADA', percentage: 3.1, color: '#5C6BC0' },
  { country: 'FRANCE', percentage: 2.6, color: '#F06292' },
  { country: 'AUSTRALIA', percentage: 1.7, color: '#7986CB' },
  { country: 'NETHERLANDS', percentage: 1.5, color: '#1A237E' }
];

export const introductionText = `VectorVault is a learning platform that helps users learn complex software without constantly switching tabs. Through in-app plugins, it provides step-by-step guidance directly within the software for a smoother learning experience.`;

export interface ArunPersonaDetail {
  shortDescription: string;
  keyAttributes: { label: string; value: string }[];
  needs: string[];
  challenges: string[];
  opportunities: string[];
}

export const arunPersonaDetail: ArunPersonaDetail = {
  shortDescription: 'A COLLEGE STUDENT PASSIONATE ABOUT 3D MODELING AND ANIMATION, LOOKING TO DEVELOP A STANDOUT PORTFOLIO AND GAIN INTERNSHIP OPPORTUNITIES.',
  keyAttributes: [
    { label: 'AGE', value: '18-25' },
    { label: 'OCCUPATION', value: 'DESIGN, ANIMATION, OR ART STUDENT' },
    { label: 'LOCATION', value: 'UNITED STATES, UNITED KINGDOM, GERMANY, ETC' },
    { label: 'TECH PROFICIENCY', value: 'INTERMEDIATE; FAMILIAR WITH BASIC DIGITAL TOOLS' }
  ],
  needs: [
    'STRUCTURED, BEGINNER-FRIENDLY BLENDER TUTORIALS.',
    'CONVENIENT HIGH-QUALITY LEARNING RESOURCES.',
    'OPPORTUNITIES TO SHOWCASE THEIR WORK (E.G., IN COMPETITIONS OR PROJECTS).'
  ],
  challenges: [
    'LIMITED BUDGET FOR PREMIUM LEARNING TOOLS.',
    'DIFFICULTY NAVIGATING FREE BUT UNSTRUCTURED CONTENT ON PLATFORMS LIKE YOUTUBE.'
  ],
  opportunities: [
    'PROVIDING AN AFFORDABLE COURSE WITH GAMIFICATION TO MAKE LEARNING ENJOYABLE.',
    'OFFERING CERTIFICATES TO ENHANCE EMPLOYABILITY.',
    'INCLUDING COLLABORATIVE FEATURES LIKE PROJECT SHARING OR GROUP CHALLENGES TO INCREASE ENGAGEMENT.'
  ]
};

export const COLORS = {
  background: '#000000',
  text: '#FFFFFF',
  pink: '#E040E0',
  cyan: '#00BCD4',
  buttonGreen: '#73927A',
  headerDarkBlue: '#1A237E',
  tableBorder: '#00BCD4',
  tableRowDark: '#263238',
  tableRowAlt: '#37474F',
  studentBlue: '#2196F3',
  teacherOrange: '#FF9800',
  advertiserGreen: '#4CAF50',
  roleGray: '#BDBDBD'
};
