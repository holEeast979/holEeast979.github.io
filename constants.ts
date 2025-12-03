import { ProfileData, Project, EducationItem, HonorItem, ResearchInterest } from './types';

export const PROFILE: ProfileData = {
  name: "Haodong Zhang (HolEast)",
  title: "Incoming MSc Student @ CUHK | AI Engineer",
  affiliation: "The Chinese University of Hong Kong",
  email: "zhanghaodong0902@gmail.com",
  github: "https://github.com/holEeast979",
  linkedin: "https://www.linkedin.com/in/haodong-zhang-0a78b0311/",
  bio: `Hi, I'm Haodong Zhang. I am a final-year Software Engineering undergraduate at Jinan University and an incoming MSc student in Artificial Intelligence at The Chinese University of Hong Kong (CUHK) (Fall 2026). My passion lies in Applied AI and Edge-side Inference Acceleration.`,
};

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  { id: '1', topic: 'Edge AI: Efficient LLM inference on Jetson/Raspberry Pi' },
  { id: '2', topic: 'LLM Applications: RAG pipelines and Multi-Agent systems' },
  { id: '3', topic: 'System Engineering: Full-stack deployment from model to backend' },
];

export const TECH_STACK: { name: string; badge: string }[] = [
  { name: 'Python', badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
  { name: 'PyTorch', badge: 'https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white' },
  { name: 'HuggingFace', badge: 'https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black' },
  { name: 'LangChain', badge: 'https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white' },
  { name: 'TensorRT', badge: 'https://img.shields.io/badge/TensorRT-76B900?style=for-the-badge&logo=nvidia&logoColor=white' },
  { name: 'Docker', badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
  { name: 'Linux', badge: 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black' },
  { name: 'Git', badge: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
  { name: 'FastAPI', badge: 'https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white' },
  { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "Edge-LMM Inference Acceleration Research",
    tags: ["Research", "Edge AI", "Optimization"],
    description: "Multimodal large model inference acceleration research for edge devices like Jetson Orin.",
    highlights: [
      "Fine-grained analysis via PyTorch Hooks revealed ViT Encoder accounts for 92% of inference latency.",
      "Verified Q-Former architecture is 9x faster than MLP for video inference.",
      "Researching FlashAttention and Token Pruning algorithms."
    ]
  },
  {
    id: 'p2',
    title: "High-Quality RAG Benchmark Dataset",
    tags: ["Data Engineering", "NLP"],
    description: "A high-quality RAG evaluation dataset built on Natural Questions.",
    highlights: [
      "Built automated data augmentation pipeline using DeepSeek API, improving 'golden paragraph' coverage by 214%.",
      "Implemented re-ranking strategy, boosting recall rate by 3-5%."
    ]
  },
  {
    id: 'p3',
    title: "Kidney Stone Prediction System",
    tags: ["Machine Learning", "Data Science"],
    description: "End-to-end medical prediction analytics project based on ML classifiers.",
    highlights: [
      "Full pipeline from data preprocessing to model deployment.",
      "Comparative analysis of multiple classification algorithms."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  { 
    id: 'e1', 
    period: "Fall 2026", 
    title: "MSc in Artificial Intelligence", 
    institution: "The Chinese University of Hong Kong",
    detail: "Incoming"
  },
  { 
    id: 'e2', 
    period: "2022 - 2026", 
    title: "B.Eng. in Software Engineering", 
    institution: "Jinan University",
    detail: "GPA: 3.85/5.0, Top 5%"
  },
];

export const HONORS: HonorItem[] = [
  { id: 'h1', title: "National Scholarship (Top 1%)", year: "2025" },
  { id: 'h2', title: "APMCM Modeling Contest Winner", year: "2025" },
  { id: 'h3', title: "Blue Bridge Cup Provincial 2nd Prize", year: "2024" },
];
