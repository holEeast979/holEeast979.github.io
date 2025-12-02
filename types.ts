export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  pdfLink?: string;
  codeLink?: string;
  abstract: string;
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
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
  scholar?: string;
  twitter?: string;
  bio: string;
  location: string;
}
