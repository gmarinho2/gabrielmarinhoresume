export const content = {
  pt: {
    themeToggle: { light: "Claro", dark: "Escuro" },
    personalInfo: {
      name: "GABRIEL MARINHO DE SOUZA",
      role: "Engenharia de IA e Machine Learning",
      summary: "Cientista da Computação com especialização em Inteligência Artificial e Machine Learning. Possuo sólido conhecimento em engenharia de software vindo da minha formação e experiência na IBM Research. Minha atuação foca em unir modelagem estatística à engenharia de sistemas, com experiência prática em Machine Learning, pipelines RAG e otimização de inferência.",
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
          "Arquitetando e realizando o deploy de sistemas de IA em produção na AWS, utilizando SageMaker e Lambda para inferência escalável.",
          "Implementando fluxos inteligentes de processamento de documentos utilizando OCR e LLMs (OpenAI/Anthropic) para extrair e estruturar dados complexos em bancos de dados relacionais.",
          "Desenvolvendo arquiteturas RAG avançadas (GraphRAG e fluxos Agentic baseados em LangGraph) integradas via APIs REST para interação em tempo real.",
          "Otimizando a confiabilidade de LLMs através de engenharia de prompts, saídas estruturadas em JSON e camadas de validação programática.",
          "Projetando arquiteturas de integração de API com mecanismos de fallback automatizados e lógica de retry para garantir alta disponibilidade durante falhas de provedores.",
          "Desenvolvendo pipelines de dados robustos e backends de IA utilizando LangChain, PyTorch e Pandas para automatizar fluxos de negócios complexos."
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
          "Otimizei pipelines de inferência para alto desempenho em hardware limitado apenas por CPU."
        ]
      },
      {
        company: "IBM Research",
        role: "Estagiário em Engenharia de Software",
        period: "Dezembro 2024 - Janeiro 2026",
        points: [
          "Membro do time Watsonx Inference, implementando abordagens inovadoras de inferência de IA para o chip Spyre.",
          "Desenvolvimento de engines de inferência de alto throughput para minimizar latência para alto volume de usuários simultâneos.",
          "Gerenciamento de ciclos de vida de pods e alocação de recursos usando Kubernetes para aplicações cloud-native escaláveis.",
          "Arquitetura de pipeline RAG ponta a ponta englobando ingestão, chunking e integração com bancos de dados vetoriais.",
          "Implementação de suítes de testes End-to-End (E2E) para garantir a qualidade dos dados e a confiabilidade do serviço.",
          "Contribuição para o projeto open-source vLLM e colaboração diária em equipe global utilizando inglês como língua principal."
        ]
      },
      {
        company: "Fraternidade Sem Fronteiras",
        role: "Desenvolvedor Backend (Voluntário)",
        period: "Janeiro 2024 - Outubro 2024",
        points: [
          "Desenvolvimento da API backend para digitalização do registro de assistidos.",
          "Redução drástica no tempo de processamento de informações através da migração para sistemas digitais.",
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
        description: "Otimização de inferência e suporte para hardware específico (IBM Spyre). Implementação de testes e funcionalidades para acelerar a inferência de LLMs.",
        link: "https://github.com/vllm-project/vllm"
      }
    ],
    academicTitle: "Formação & Pesquisa",
    academic: [
      {
        uni: "Universidade Federal Rural do Rio de Janeiro (UFRRJ)",
        education: "Bacharelado em Ciência da Computação (Ênfase em IA)",
        period: "2022 - 2025",
        points: [
          "Especialização acadêmica em Inteligência Artificial e Data Mining.",
          { text: "Artigo publicado: 'Parallel Architectures and the N-body Simulation' (ERAD-RJ 2024) - Pesquisa em HPC/CUDA.", link: "#" },
          { text: "Pesquisa de conclusão: Avaliação e Implementação de Sistemas RAG.", link: "https://filipe.braida.com.br/monografias/braida_gabriel_sylvino.pdf" }
        ]
      }
    ],
    projectsTitle: "Projetos de Engenharia de Software e IA",
    projects: [
      {
        name: "PraiaLivre (Visão Computacional)",
        description: "Sistema de visão computacional para monitoramento em tempo real da densidade populacional em praias. Uso de SAHI para detecção de pequenos objetos em imagens de alta resolução. Orquestração de microsserviços com FastAPI e Docker.",
        result: "Lançamento previsto para o Verão de 2026; Modelos de previsão de séries temporais em desenvolvimento.",
        link: "https://github.com/gmarinho2"
      },
      {
        name: "DataCorners (Sports Analytics)",
        description: "Modelo Ensemble Híbrido (Gradient Boosting + Redes Neurais) com Arquitetura Medallion (Bronze/Silver/Gold) para processamento de dados esportivos. Gerenciamento do ciclo de vida de ML com MLflow.",
        result: "Atingiu 68,5% de acurácia (37% de melhoria) nas previsões do Campeonato Brasileiro de 2025.",
        link: "https://github.com/gmarinho2"
      }
    ],
    studiesTitle: "Aprendendo Fazendo",
    studies: [
      { name: "Análise da Industrialização do Brasil", tech: "Python & Pandas", description: "Estudo estatístico sobre os setores industriais brasileiros (2010-2021).", link: "#" },
      { name: "Mineração de Regras em Análise de Crédito", tech: "Python", description: "Aplicação de algoritmos de mineração para perfis financeiros.", link: "#" },
      { name: "Compilador GALM", tech: "C++", description: "Desenvolvimento de um compilador completo para linguagem customizada.", link: "https://github.com/gmarinho2/compilador-galm" },
      { name: "Clusterização Estelar", tech: "Python & Scikit-learn", description: "Aprendizagem não supervisionada para classificação de estrelas.", link: "#" }
    ],
    skillsTitle: "Tech Stack",
    skills: [
      { category: "IA & Engenharia de LLM", items: ["LLMs (vLLM, LangChain)", "LangGraph", "RAG/GraphRAG", "OCR", "OpenAI/Anthropic APIs"] },
      { category: "Dados & API", items: ["FastAPI/Flask", "PostgreSQL", "Redis", "Bancos Vetoriais", "Pandas", "JSON Structured Outputs"] },
      { category: "Nuvem & Infra", items: ["AWS (SageMaker, Lambda, S3)", "Kubernetes", "Docker", "CI/CD", "Linux"] },
      { category: "Linguagens", items: ["Python", "SQL", "C/C++", "TypeScript", "Java", "JavaScript"] }
    ],
    languagesTitle: "Idiomas",
    languages: ["Português (Nativo)", "Inglês (Fluente)", "Espanhol (Básico)"]
  },
  en: {
    themeToggle: { light: "Light", dark: "Dark" },
    personalInfo: {
      name: "GABRIEL MARINHO DE SOUZA",
      role: "Machine Learning and AI Engineer",
      summary: "Computer Scientist with a specialization in AI Engineering and Machine Learning. I have solid software engineering knowledge from my academic background and experience at IBM Research. My work focuses on bridging statistical modeling and systems engineering, with practical experience in Machine Learning, RAG pipelines, and inference optimization.",
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
          "Engineered a real-time Computer Vision pipeline for object detection and tracking in video streams.",
          "Developed high-precision tracking algorithms focused on temporal consistency and ID persistence for dynamic outdoor environments.",
          "Curated and managed large-scale annotated datasets with balanced distributions to ensure model robustness across diverse environmental conditions.",
          "Implemented optimized visualization logic for bounding boxes and trajectories, specialized in long-term object monitoring.",
          "Optimized inference pipelines for high-throughput processing on resource-constrained CPU-only hardware."
        ]
      },
      {
        company: "IBM Research",
        role: "Software Engineering Intern",
        period: "December 2024 - January 2026",
        points: [
          "Member of the Watsonx Inference team, implementing novel AI inference approaches for the Spyre chip.",
          "Developed high-throughput inference engines to minimize latency for high-volume concurrent users.",
          "Managed pod lifecycles and resource allocation using Kubernetes for scalable cloud-native apps.",
          "Architected an end-to-end RAG data pipeline handling ingestion, chunking, and vector DB integration.",
          "Implemented End-to-End (E2E) testing suites to ensure data quality and service reliability.",
          "Collaborating daily with a global team using English as first language and contributing to vLLM project."
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
        uni: "Universidade Federal Rural do Rio de Janeiro (UFRRJ)",
        education: "Bachelor of Computer Science (AI Emphasis)",
        period: "2022 - 2025",
        points: [
          "Academic focus on Artificial Intelligence and Software Engineering.",
          { text: "Published Paper: 'Parallel Architectures and the N-body Simulation' (ERAD-RJ 2024) - HPC/CUDA Research.", link: "#" },
          { text: "Thesis: Evaluation and Implementation of RAG Systems.", link: "https://filipe.braida.com.br/monografias/braida_gabriel_sylvino.pdf" }
        ]
      }
    ],
    projectsTitle: "Software Engineering and AI Projects",
    projects: [
      {
        name: "PraiaLivre (Computer Vision)",
        description: "Real-time crowd monitoring system. Used SAHI for small object detection in high-resolution footage. Orchestrated microservices with FastAPI and Docker.",
        result: "Launch: Summer 2026; Time-series forecasting models for beach density trends in development.",
        link: "https://github.com/gmarinho2"
      },
      {
        name: "DataCorners (Sports Analytics)",
        description: "Hybrid Ensemble Model (Gradient Boosting + Neural Networks) using Medallion Architecture for data processing. Managed ML lifecycle with MLflow.",
        result: "Achieved 68.5% accuracy (37% uplift) in match outcome predictions for the 2025 Brazilian League.",
        link: "https://github.com/gmarinho2"
      }
    ],
    // projects and link ()
    studiesTitle: "Learning by Doing",
    studies: [
      { name: "Brazil Industrialization Analysis", tech: "Python & Pandas", description: "Statistical study on Brazilian industrial sectors (2010-2021).", link: "https://www.linkedin.com/posts/gmarinho2_datascience-machinelearning-python-activity-7415739205815017472-Ltgf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8RQqwBxEdKpiycXtNkJmd-1yArwBD_X8g" },
      { name: "Rule Mining in Credit Analysis", tech: "Python", description: "Data mining application for financial profiles.", link: "https://www.linkedin.com/posts/gmarinho2_datascience-machinelearning-fpgrowth-activity-7417955047222951936-lsqf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8RQqwBxEdKpiycXtNkJmd-1yArwBD_X8g" },
      { name: "GALM Compiler", tech: "C++", description: "Development of a full compiler from scratch.", link: "https://github.com/gmarinho2/compilador-galm" },
      { name: "Stellar Clustering", tech: "Python & Scikit-learn", description: "Unsupervised learning for stellar classification.", link: "https://www.linkedin.com/in/gmarinho2/details/projects/" }
    ],
    skillsTitle: "Tech Stack",
    skills: [
      { category: "AI & LLM Engineering", items: ["LLMs (vLLM, LangChain)", "LangGraph", "RAG/GraphRAG", "OCR", "OpenAI/Anthropic APIs"] },
      { category: "Data & API", items: ["FastAPI/Flask", "PostgreSQL", "Vector DBs", "Pandas", "JSON Structured Outputs"] },
      { category: "Cloud & Infra", items: ["AWS (SageMaker, Lambda, S3)", "Kubernetes", "Docker", "CI/CD", "Linux"] },
      { category: "Languages", items: ["Python", "SQL", "C/C++", "TypeScript", "Java", "JavaScript"] }
    ],
    languagesTitle: "Languages",
    languages: ["Portuguese (Native)", "English (Fluent)", "Spanish (Basic)"]
  }
};