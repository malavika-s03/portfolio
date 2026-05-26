import type { Project } from '@/types';

const BASE = import.meta.env.BASE_URL + 'images/projects';

export const projects: Project[] = [
  {
    id: 1,
    title: "YULU : A UX STUDY",
    slug: "yulu",
    thumbnail: `${BASE}/yulu-hero.png`,
    category: "UX Research",
    description: "This project is a user research attempt at understanding the pain points that users face while using the Yulu app, explored through methodologies like Usability testing, Heuristic evaluation, Contextual enquiry etc.",
    year: "2024",
  },
  {
    id: 2,
    title: "VECTOR VAULT : FUN LEARN",
    slug: "vector-vault",
    thumbnail: `${BASE}/vectorvault-main.png`,
    category: "UI/UX",
    description: "Vector Vault is an attempt at creating a gamified way fo learning 3D software in this case Blender. It emerged from trying to understand what is a blocker for users to learn such free software, difficulty was found in not being able to do along to tutorials and getting lost while switching tabs. This project is an attempt at simplifying that",
    year: "2024",
    floatingImages: [
      `${BASE}/vectorvault-float-1.png`,
      `${BASE}/vectorvault-float-2.png`,
      `${BASE}/vectorvault-float-3.png`,
      `${BASE}/vectorvault-float-4.png`,
      `${BASE}/vectorvault-float-5.png`,
    ],
  },
  {
    id: 3,
    title: "WORK EXPERIENCE : PEAKMIND",
    slug: "peakmind-student",
    thumbnail: `${BASE}/peakmind-phones.png`,
    category: "Work Experience",
    description: "Redesigned the break page experience of a student wellness app to improve emotional safety & engagement.",
    year: "2024",
  },
  {
    id: 4,
    title: "ZOHO BOOKS CAMPAIGN",
    slug: "zoho",
    thumbnail: `${BASE}/zoho-dashboard.png`,
    category: "Campaign",
    description: "This project focused on designing a campaign kit for \"SmartReconcile,\" a fictional AI-powered bank reconciliation feature for Zoho Books. The goal was to create a cohesive set of promotional assets that communicated the feature's benefits such as automatic transaction matching, time savings, and reduced errors through a clean and scalable visual system.",
    year: "2024",
    overlayText: "Smart Reconcile",
    overlayTextColor: "#dbbe27",
  },
  {
    id: 5,
    title: "DISTRICT : CASE STUDY",
    slug: "district",
    thumbnail: `${BASE}/district-hero.png`,
    category: "Case Study",
    description: "This project explores a product management case study for \"District,\" an entertainment and event booking platform designed for the Indian market. The study aimed to understand how the product could penetrate an existing competitive market through user research, competitor analysis, and market evaluation.",
    year: "2024",
  },
];
