export const content = {
  pt: {
    themeToggle: { light: "Claro", dark: "Escuro" },
    personalInfo: {
      name: "GABRIEL MARINHO DE SOUZA",
      role: "Machine Learning & Engenharia de IA",
      summary: "Cientista da Computação com especialização em Inteligência Artificial e Ciência de Dados. Possuo sólido conhecimento em engenharia de software vindo da minha formação e experiência na IBM Research. Minha atuação foca em unir modelagem estatística à engenharia de sistemas, com experiência prática em Machine Learning, pipelines RAG e otimização de inferência.",
      contact: [
        { label: "Github", link: "https://github.com/gmarinho2", type: "github" },
        { label: "Linkedin", link: "https://linkedin.com/in/gmarinho2", type: "linkedin" },
        { label: "Email", link: "mailto:gabrielmarinho910@gmail.com", type: "email" }
      ]
    },
    experienceTitle: "Experiência Profissional",
    experiences: [
      {
        company: "M3 Partners",
        role: "Engenheiro de IA",
        period: "Janeiro 2026 - Presente",
        points: [
          "Membro do time Watsonx Inference, implementando abordagens de inferência para o chip Spyre.",
          "Desenvolvimento de engines de inferência de alto throughput para minimizar latência em produção.",
          "Gerenciamento de aplicações cloud-native com Kubernetes, cuidando de pods e recursos.",
          "Arquitetura de pipeline RAG ponta a ponta com ingestão, chunking e banco de dados vetorial.",
          "Implementação de suítes de testes End-to-End (E2E) e análise estatística de benchmarks."
        ]
      },
      {
        company: "Surfconnect (Contrato)",
        role: "Engenheiro de Machine Learning", 
        period: "Janeiro 2026 - Março 2026", 
        points: [
          "Desenvolvi um pipeline de Visão Computacional em tempo real para detecção e rastreamento de objetos em vídeo.", 
          "Implementei algoritmos de rastreamento de alta precisão com foco em consistência temporal e persistência de ID em ambientes externos dinâmicos.", 
          "Realizei a curadoria e o gerenciamento de datasets anotados em larga escala para garantir a robustez do modelo em diversas condições ambientais.",
          "Implementei lógica de visualização otimizada para bounding boxes e trajetórias, especializada no monitoramento de objetos a longo prazo.", 
          "Otimizei pipelines de inferência para alto desempenho em hardware limitado apenas por CPU.",
        ]
      },  
      {
        company: "IBM Research",
        role: "Estagiário em Engenharia de Software e IA",
        period: "Dezembro 2024 - Janeiro 2026",
        points: [
          "Membro do time Watsonx Inference, implementando abordagens de inferência para o chip Spyre.",
          "Desenvolvimento de engines de inferência de alto throughput para minimizar latência em produção.",
          "Gerenciamento de aplicações cloud-native com Kubernetes, cuidando de pods e recursos.",
          "Arquitetura de pipeline RAG ponta a ponta com ingestão, chunking e banco de dados vetorial.",
          "Implementação de suítes de testes End-to-End (E2E) e análise estatística de benchmarks."
        ]
      },
      {
        company: "Fraternidade Sem Fronteiras",
        role: "Desenvolvedor Backend (Voluntário)",
        period: "Janeiro 2024 - Outubro 2024",
        points: [
          "Desenvolvimento da API backend para digitalização do registro de assistidos.",
          "Redução drástica no tempo de processamento de informações através da migração para digital.",
          "Modelagem de banco de dados relacional e implementação de lógica de negócio escalável.",
          "Stack focada em TypeScript, AdonisJS e PostgreSQL."
        ]
      }
    ],
    openSourceTitle: "Contribuições Open Source",
    openSource: [
      {
        project: "vLLM",
        role: "Contribuidor",
        description: "Otimização de inferência e suporte para hardware específico (IBM Spyre). Implementação de testes e features para acelerar a inferência de LLMs.",
        link: "https://github.com/vllm-project/vllm"
      }
    ],
    academicTitle: "Formação & Pesquisa",
    academic: [
      {
        uni: "UFRRJ",
        education: "Bacharelado em Ciência da Computação",
        period: "2022 - 2025",
        points: [
          "Especialização em Data Mining e AI.",
          {text: "Pesquisa de conclusão em Avaliação e Implementação de Sistemas RAG.", link: "https://filipe.braida.com.br/monografias/braida_gabriel_sylvino.pdf"},
          { text: "Artigo publicado sobre simulação de N-corpos e HPC (CUDA/OpenMP) - ERAD-RJ 2024.", link: "https://github.com/gmarinho2" }
        ]
      }
    ],
    projectsTitle: "Projetos de Engenharia de Software e IA",
    projects: [
      {
        name: "DataCorners (Sports Analytics)",
        description: "Desenvolvimento de modelo preditivo híbrido (Ensemble) para resultados de partidas de futebol. Construção de um pipeline completo de dados usando a arquitetura Medallion. Uso de melhores práticas de MLOps como model tracking",
        result: "Aumento de 37% na acurácia sobre o modelo de redes neurais base (68.5% de precisão final no Brasileirão 2025).",
        link: "https://github.com/gmarinho2"
      },
      {
        name: "PraiaLivre (Visão Computacional)",
        description: "Sistema de visão computacional para monitoramento inteligente da densidade das praias do Rio de Janeiro. Desenvolvimento da API do backend. Orquestração dos serviços (banco de dados, IA, coleta de dados) usando Docker.",
        result: "No futuro: previsão de lotação de praias",
        link: "https://github.com/gmarinho2"
      },
      {
        name: "PraiaLivre (Visão Computacional)",
        description: "Sistema de visão computacional para monitoramento inteligente da densidade das praias do Rio de Janeiro. Desenvolvimento da API do backend. Orquestração dos serviços (banco de dados, IA, coleta de dados) usando Docker.",
        result: "No futuro: previsão de lotação de praias",
        link: "https://github.com/gmarinho2"
      },
    ],
    studiesTitle: "Aprendendo Fazendo",
    studies: [
      { 
        name: "NAS (Otimização de Arquiteturas)", 
        tech: "Python", 
        description: "Implementação de Têmpera Simulada e Algoritmos Genéticos para encontrar arquiteturas otimizadas de redes neurais (camadas e taxa de aprendizado).", 
        link: "https://github.com/gmarinho2/topicos-especiais-otimizacao" 
      },
      { name: "Mineração de Dados em Análise de Crédito", tech: "Python & Pandas", description: "Aplicação de mineração de regras para análise de perfis de clientes.", link: "https://github.com/gmarinho2/data-mining/blob/main/analise-de-credito/analise-de-credito.ipynb" },
      { name: "Clusterização Estelar", tech: "Python & Scikit-learn", description: "Aplicação de técnicas de aprendizagem não supervisionada (K-Means/Hierárquica) para classificação de estrelas baseada em propriedades físicas.", link: "https://github.com/gmarinho2/data-mining/blob/main/star-clustering/Clusteriza%C3%A7%C3%A3o.ipynb" },
      { name: "Compilador GALM", tech: "C++", description: "Desenvolvimento de um compilador completo para uma linguagem customizada.", link: "https://github.com/gmarinho2/compilador-galm" },
      { name: "Análise da Industrialização", tech: "Python & Pandas", description: "Estudo estatístico da industrialização do Brasil entre 2010 e 2021.", link: "https://github.com/gmarinho2/data-mining/blob/main/industrializacao-brasil/analise-da-industrializacao-brasileira.ipynb" },
      { name: "Sistema de Recomendação", tech: "Python", description: "Algoritmo de filtragem para recomendação personalizada de filmes.", link: "#" },
      { name: "Sem Clubismo FC", tech: "AdonisJS & PostgreSQL", description: "Sistema focado em performance backend e gestão de estados.", link: "https://github.com/gmarinho2/e-commerce" }
    ],
    skillsTitle: "Tech Stack",
    skills: [
      { category: "AI Engineering & Inference", items: ["vLLM",  "Model Quantization"] },
      { category: "Data Science & Analytics", items: ["Pandas", "Scikit-learn", "Estatística", "Data Mining", "Apache Spark"] },
      { category: "GenAI & LLMOps", items: ["LangChain/LangGraph", "Ragas (Evaluation)", "PostgreSQL (pgvector)", "Neo4j", "Kubernetes", "Docker"] },
      { category: "Linguagens de programação", items: ["Python", "C/C++", "SQL", "Typescript", "Java"] }
    ],
    languagesTitle: "Idiomas",
    languages: ["Português (Nativo)", "Inglês (Fluente)", "Espanhol (Básico)"]
  },
  en: {
    themeToggle: { light: "Light", dark: "Dark" },
    personalInfo: {
      name: "GABRIEL MARINHO DE SOUZA",
      role: "Machine Learning & AI Engineer",
      summary: "Computer Scientist with a specialization in Artificial Intelligence and Data Science. I have solid software engineering knowledge from my academic background and experience at IBM Research. My work focuses on bridging statistical modeling and systems engineering, with practical experience in Machine Learning, RAG pipelines, and inference optimization.",
      contact: [
        { label: "Github", link: "https://github.com/gmarinho2", type: "github" },
        { label: "Linkedin", link: "https://linkedin.com/in/gmarinho2", type: "linkedin" },
        { label: "Email", link: "mailto:gabrielmarinho910@gmail.com", type: "email" }
      ]
    },

    experienceTitle: "Professional Experience",
    experiences: [
      {
        company: "M3 Partners",
        role: "AI Engineer",
        period: "January 2026 - Present",
        points: [
          "Architecting and deploying production-grade AI systems on AWS, leveraging SageMaker and Lambda for scalable inference.",
          "Engineering intelligent document processing workflows utilizing OCR and LLMs (OpenAI/Anthropic) to extract and structure complex data into relational databases.",
          "Implementing advanced RAG architectures (GraphRAG and LangGraph-based Agentic workflows) integrated via REST APIs for real-time user interaction.",
          "Optimizing LLM reliability through sophisticated prompt engineering, JSON structured outputs, and programmatic validation layers.",
          "Designing API integration architecture with automated fallback mechanisms and retry logic to ensure high availability during outages.",
          "Developing robust data pipelines and AI backends using LangChain, PyTorch, and Pandas to automate complex workflows."
        ]
      },
      {
        company: "Surfconnect (Contract)",
        role: "Machine Learning Engineer", 
        period: "January 2026 - March 2026", 
        points: [
          "Engineered a real-time Computer Vision pipeline for object detection and tracking in low resolution video streams.", 
          "Developed high-precision tracking algorithms focused on temporal consistency and ID persistence for dynamic outdoor environments.", 
          "Curated and managed large-scale annotated datasets with balanced distributions to ensure model robustness across diverse environmental conditions.", 
          "Implemented optimized visualization logic for bounding boxes and trajectories, specialized in long-term object monitoring.", 
          "Optimized inference pipelines for high-throughput processing on resource-constrained CPU-only hardware.", 
        ]
      },
      {
        company: "IBM Research",
        role: "Software Engineering & AI Intern",
        period: "December 2024 - January 2026",
        points: [
          "Member of the Watsonx Inference team, implementing inference approaches for the Spyre chip.",
          "Development of high-throughput inference engines to minimize production latency.",
          "Managed cloud-native applications with Kubernetes, handling pods and resources.",
          "End-to-end RAG pipeline architecture including ingestion, chunking, and vector database.",
          "Implementation of End-to-End (E2E) test suites and statistical benchmark analysis."
        ]
      },
      {
        company: "Fraternidade Sem Fronteiras",
        role: "Backend Developer (Volunteer)",
        period: "January 2024 - October 2024",
        points: [
          "Developed a backend API for digitizing assisted person records.",
          "Drastically reduced information processing time by migrating to digital systems.",
          "Relational database modeling and implementation of scalable business logic.",
          "Stack focused on TypeScript, AdonisJS, and PostgreSQL."
        ]
      }
    ],
    openSourceTitle: "Open Source Contributions",
    openSource: [
      {
        project: "vLLM",
        role: "Contributor",
        description: "Inference optimization and support for specific hardware (IBM Spyre). Developed tests and features to accelerate LLM inference.",
        link: "https://github.com/vllm-project/vllm"
      }
    ],
    academicTitle: "Education & Research",
    academic: [
      {
        uni: "UFRRJ",
        education: "Bachelor's degree in Computer Science",
        period: "2022 - 2025",
        points: [
          "Specialization in Data Mining and AI.",
          {text: "Graduation research on Evaluation and Implementation of RAG Systems.", link: "https://filipe.braida.com.br/monografias/braida_gabriel_sylvino.pdf"},
          { text: "Paper on N-body simulation and HPC (CUDA/OpenMP) - ERAD-RJ 2024.", link: "https://github.com/gmarinho2" }
        ]
      }
    ],
    projectsTitle: "Software Engineering and AI Projects",
    projects: [
      {
        name: "DataCorners (Sports Analytics)",
        description: "Developed a hybrid ensemble model for football match predictions. Engineered an end-to-end data pipeline using Medallion architecture (Bronze, Silver, Gold). Applied MLOps best practices, focusing on model tracking and experiment reproducibility.",
        result: "37% accuracy increase over the baseline neural network model (68.5% precision in Brasileirão 2025).",
        link: "https://github.com/gmarinho2"
      },
      {
        name: "PraiaLivre (Computer Vision)",
        description: "Computer vision system for smart monitoring of beach crowd density in Rio de Janeiro. Engineered the backend API and orchestrated the service stack (database, AI models, and data ingestion) using Docker.",
        result: "Soon: density prediction",
        link: "https://github.com/gmarinho2"
      }
    ],
    studiesTitle: "Learning by Doing",
    studies: [
      { name: "Credit Analysis Rule Mining", tech: "Python & Pandas", description: "Applying rule mining for customer profile analysis.", link: "https://github.com/gmarinho2/data-mining/blob/main/analise-de-credito/analise-de-credito.ipynb" },
      { name: "Stellar Clustering", tech: "Python & Scikit-learn", description: "Implementation of unsupervised learning techniques (K-Means/Hierarchical) for stellar classification based on physical properties.", link: "https://github.com/gmarinho2/data-mining/blob/main/star-clustering/Clusteriza%C3%A7%C3%A3o.ipynb" },
      { name: "Industrialization Analysis", tech: "Python & Pandas", description: "Statistical study of Brazil's industrialization (2010-2021).", link: "https://github.com/gmarinho2/data-mining/blob/main/industrializacao-brasil/analise-da-industrializacao-brasileira.ipynb" },
      { 
        name: "Neural Architecture Search (NAS)", 
        tech: "Python", 
        description: "Implementation of Simulated Annealing and Genetic Algorithms to optimize neural network architectures, tuning layer depth and learning rates.", 
        link: "https://github.com/gmarinho2/topicos-especiais-otimizacao" 
      },
      { name: "GALM Compiler", tech: "C++", description: "Development of a full compiler for a custom language.", link: "https://github.com/gmarinho2/compilador-galm" },
      { name: "Recommendation System", tech: "Python", description: "Filtering algorithm for personalized movie recommendations.", link: "#" },
      { name: "Sem Clubismo FC", tech: "AdonisJS & PostgreSQL", description: "System focused on backend performance and state management.", link: "https://github.com/gmarinho2/e-commerce" }
    ],
    skillsTitle: "Tech Stack",
    skills: [
      { category: "AI Engineering & Inference", items: ["vLLM",  "Model Quantization"] },
      { category: "Data Science & Analytics", items: ["Pandas", "Scikit-learn", "Statistics", "Data Mining", "Apache Spark"] },
      { category: "GenAI & LLMOps", items: ["LangChain/LangGraph", "Ragas (Evaluation)", "PostgreSQL (pgvector)", "Neo4j", "Kubernetes", "Docker"] },
      { category: "Programming Languages", items: ["Python", "C/C++", "SQL", "Typescript", "Java"] }
    ],
    languagesTitle: "Languages",
    languages: ["Portuguese (Native)", "English (Fluent)", "Spanish (Basic)"]
  }
};