import { ProfileData, Publication, NewsItem, ResearchInterest } from './types';

export const PROFILE: ProfileData = {
  name: "Dr. Alex J. Mercer",
  title: "Postdoctoral Researcher",
  affiliation: "Department of Computer Science, Turing University",
  email: "alex.mercer@turing.edu",
  location: "Room 404, Ada Lovelace Hall",
  github: "https://github.com",
  scholar: "https://scholar.google.com",
  bio: `I am a Postdoctoral Researcher at Turing University, working with Prof. Alan Smith. My research interests lie at the intersection of Machine Learning and Systems, with a focus on efficient inference and distributed training. Before this, I received my Ph.D. from the University of Science, advised by Prof. Grace Hopper.`,
};

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  { id: '1', topic: 'Efficient Machine Learning Systems' },
  { id: '2', topic: 'Distributed Optimization' },
  { id: '3', topic: 'Model Compression & Quantization' },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: "Optimizing Large Language Model Inference on Heterogeneous Clusters",
    authors: ["Alex J. Mercer", "Jane Doe", "Alan Smith"],
    venue: "Proceedings of the International Conference on Machine Learning (ICML)",
    year: 2024,
    pdfLink: "#",
    codeLink: "#",
    abstract: "We propose a novel scheduling algorithm that reduces latency by 40%..."
  },
  {
    id: 'p2',
    title: "A Survey of Sparse Training Methodologies",
    authors: ["John Public", "Alex J. Mercer"],
    venue: "Journal of Machine Learning Research (JMLR)",
    year: 2023,
    pdfLink: "#",
    abstract: "This survey covers the recent advancements in sparse training..."
  },
  {
    id: 'p3',
    title: "Gradient Compression in Federated Learning",
    authors: ["Alex J. Mercer", "Grace Hopper"],
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2022,
    pdfLink: "#",
    abstract: "We introduce a new quantization scheme for federated updates..."
  }
];

export const NEWS: NewsItem[] = [
  { id: 'n1', date: "Sep 2024", content: "Our paper on LLM Inference was accepted to ICML 2024 (Oral)." },
  { id: 'n2', date: "Jan 2024", content: "Started my Postdoc at Turing University." },
  { id: 'n3', date: "Dec 2023", content: "Defended my Ph.D. thesis successfully." },
];
