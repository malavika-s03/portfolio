import type { Profile } from '@/types';

/**
 * Profile data matching the Framer source exactly.
 * Social links extracted from framer-source/analysis/footer-section.html
 */
export const profile: Profile = {
  name: "Malavika Suresh",
  firstName: "MALAVIKA",
  lastName: "SURESH",
  title: "Freelance Designer",
  email: "malavikasparambumana@gmail.com",
  phone: "+91 9207768108",
  location: "Tokyo",
  intro: "Hello, I'm a UI/UX designer with a background in urban design, driven by curiosity about how people interact with spaces, systems, and digital experiences. My work focuses on creating intuitive and adaptable interfaces shaped by user behavior, accessibility, and everyday interactions.",
  about: "I collaborate with businesses of all sizes worldwide, using the latest technologies. My designs have also earned multiple awards.",
  philosophy: "I'm dedicated to crafting beautiful and highly functional designs that seamlessly align with my clients' unique needs and long-term goals.",
  available: true,
  social: {
    linkedin: "https://www.linkedin.com/in/malavika-suresh-40642a293?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYRmcKUiyQAOpWKGnadCgNQ%3D%3D",
    behance: "https://www.behance.net/malavikasuresh1",
  }
};
