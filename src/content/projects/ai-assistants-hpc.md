---
title: "AI Assistants for HPC and Scientific Software"
tagline: "Retrieval-augmented assistants that help scientists use supercomputers"
summary: "LLM chatbots and agents grounded in documentation for ALCF systems and PETSc, plus rigorous methodology for evaluating AI models as research assistants."
period: "2023 – present"
order: 6
tags: [large language models, retrieval-augmented generation, HPC user support, AI evaluation]
featured: true
icon: chat
collaborators: [Huihuo Zheng, Taylor Childers, Barry Smith, Lois Curfman McInnes, Hong Zhang, Franck Cappello, Sandeep Madireddy]
links:
  repo: https://github.com/argonne-lcf/HPCBot
  paper: /publications/2025_bondapalli_askhpc/
publications: [2025_bondapalli_askhpc, 2025_smith_petsc_ai_assistants, 2026_smith_petsc_agent_workflows, 2025_cappello_eaira, 2025_wen_red_teaming_generative_ai_copyright]
software: [user-guides, hpcbot, drdoc, argoagent, argotools, petscagent-bench, aitools4science, ai-tools-for-science, ezgitup, ninjaparser, ezhpc, alcf_notebooks, jupyterhub, mpi_benchmark, balsam, ai-science-training-series]
forStudents: "Much of this work started as summer-student projects at ALCF: building a documentation chatbot, generating and grading question-answer pairs, and comparing retrieval strategies. If you are interested in an internship at the intersection of LLMs and HPC, get in touch."
---

Exascale systems are heterogeneous and their documentation is scattered across user guides, scheduler manuals, and mailing lists. New users lose days finding the right compiler flag. **AskHPC** is a retrieval-augmented chatbot built on the curated ALCF knowledge base; it uses modality-aware retrieval to answer questions about Aurora and Polaris and was presented at the SC25 workshops. The same approach powers **Dr. Doc**, which fixes grammar, formatting, and broken links in documentation, and the **ArgoAgent** command-line interface to Argonne's Argo LLM service.

With the **PETSc** team we are building an agent-based ecosystem that grounds LLMs in PETSc manual pages so that they can select solvers, debug configurations, and validate results, along with a benchmark for evaluating PETSc code-generation agents.

## Evaluating AI as a research assistant

Assistants are only useful if they are correct. **EAIRA**, developed across Argonne, defines a methodology for evaluating AI models as scientific research assistants through multiple-choice recall, open-response reasoning, lab-style experiments, and field-style interactive studies. Participation in a copyright-focused red-teaming exercise for generative AI in an academic medical center added a responsible-use perspective.

This theme also includes long-running advocacy for interactive HPC: Jupyter on leadership systems (ezHPC, ALCF JupyterHub webinars) and container technologies for reproducible HPC software.
