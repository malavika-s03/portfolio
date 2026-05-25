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
    customRoute: "/work/peakmind-student",
    thumbnail: `${BASE}/peakmind-phones.png`,
    category: "Work Experience",
    description: "Redesigned the break page experience of a student wellness app to improve emotional safety & engagement.",
    year: "2024",
  },
  {
    id: 4,
    title: "ZOHO BOOKS CAMPAIGN",
    slug: "zoho",
    thumbnail: `${BASE}/zoho-smart-reconcile.png`,
    category: "Campaign",
    description: "Hello, I'm a Multane specialist in creating digital experiences. With 10+ years of experience, I bring ideas to life with the right tools, one pixel at a time.",
    year: "2024",
    overlayText: "Smart Reconcile",
    overlayTextColor: "#006fda",
  },
];
