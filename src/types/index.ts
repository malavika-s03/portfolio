export interface Project {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  description?: string;
  year?: string;
  client?: string;
  role?: string;
  images?: string[];
  link?: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  location: string;
  intro: string;
  about: string;
  philosophy: string;
  available: boolean;
  social: SocialLinks;
}

export interface SocialLinks {
  linkedin?: string;
  behance?: string;
  dribbble?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
}

export type CursorVariant = 'default' | 'hover' | 'click' | 'hidden' | 'text';

export interface CursorState {
  variant: CursorVariant;
  text?: string;
}
