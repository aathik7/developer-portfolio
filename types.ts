
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Vlog {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  tags: string[];
  date: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: string;
  docs?: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl: string;
}