import { ProfileData, Project, EducationItem, HonorItem, ResearchInterest } from './types';

export const PROFILE: ProfileData = {
  name: "Haodong Zhang (张浩东)",
  title: "Incoming MSc Student @ CUHK | AI Engineer",
  affiliation: "The Chinese University of Hong Kong",
  email: "haodong.zhang.hk@gmail.com",
  github: "https://github.com/holEeast979",
  linkedin: "https://www.linkedin.com/in/holeeast",
  bio: `Hi, I'm Haodong Zhang. I am a final-year B.Eng student in Software Engineering at Jinan University and an incoming MSc student in Artificial Intelligence at CUHK (Fall 2026).

My passion lies in Applied AI, NLP, and Multimodal technologies. I enjoy bridging the gap between advanced models and real-world applications, building robust systems that solve actual problems.

I am actively seeking AI Engineer / LLMOps Internships.`,
};

export const TECHNICAL_FOCUS: ResearchInterest[] = [
  { id: '1', topic: 'LLM Application Development: Building RAG pipelines, Multi-Agent systems, and integrating LLMs into full-stack applications.' },
  { id: '2', topic: 'Multimodal & NLP: Leveraging Vision-Language Models for complex data understanding and processing.' },
  { id: '3', topic: 'Model Optimization: Experimenting with edge-side inference acceleration and quantization techniques.' },
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
];

export const PROJECTS: Project[] = [
  {
    id: 'p0',
    title: "Enterprise Multi-Agent Orchestration Platform",
    tags: ["Internship", "LLMOps", "Platform Engineering", "RocketMQ"],
    description: "Internship @ Shifangronghai Technology | Sept. 2025 - Dec. 2025\n\nBuilt the LLMOps infrastructure for an enterprise-level Agent orchestration platform, supporting high-concurrency downstream services.",
    highlights: [
      "Evaluation Pipeline: Containerized high-concurrency evaluation suite via Docker/RocketMQ, establishing TPS & Latency baselines.",
      "Full-Stack Observability: Integrated Langfuse into LangGraph, reducing error attribution time for multi-agent systems by 50%+.",
      "System Monitoring: Built real-time Prometheus/Grafana dashboards for millisecond-level anomaly alerting."
    ]
  },
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
  { id: 'h2', title: "APMCM Modeling Contest Winner Prize", year: "2025" },
  { id: 'h3', title: "Blue Bridge Cup Provincial 2nd Prize", year: "2024" },
];
