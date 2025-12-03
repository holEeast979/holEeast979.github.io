export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  highlights: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  detail?: string;
}

export interface HonorItem {
  id: string;
  title: string;
  year: string;
}

export interface ResearchInterest {
  id: string;
  topic: string;
}

export interface ProfileData {
  name: string;
  title: string;
  affiliation: string;
  email: string;
  github?: string;
  linkedin?: string;
  bio: string;
}
