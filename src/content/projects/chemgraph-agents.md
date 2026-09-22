---
title: "Autonomous Scientific Agents and ChemGraph"
tagline: "LLM agents that plan, run, and validate atomistic simulations"
summary: "An agentic framework for computational chemistry and materials science, and the multi-agent orchestration needed to run it on exascale machines."
period: "2024 – present"
order: 1
tags: [agentic AI, large language models, workflows, exascale]
featured: true
icon: agent
collaborators: [Thang D. Pham, Aditya Tanikanti, Vitor Grizzi, Cong Liu]
links:
  repo: https://github.com/argonne-lcf/ChemGraph
  paper: /publications/2026_pham_chemgraph/
publications: [2026_pham_chemgraph, 2026_pham_multiagent_materials_screening, 2026_grizzi_chemgraph_xanes, 2026_roy_llm_hackathon_materials_chemistry]
software: [chemgraph, chemgraph-leaderboard, pubchemagent, paper2code, iodineagent, nickelagent]
forStudents: "ChemGraph is open source and runs on a laptop with free machine-learned potentials. Try asking it to optimize a molecule and compute its vibrational spectrum, then read the LangGraph trace to see how the agent decided what to do. Good first issues are tagged in the repository."
---

Setting up, running, and validating an atomistic simulation still requires expert knowledge at every step: choosing a level of theory, building a geometry, picking convergence settings, and knowing when a result is wrong. **ChemGraph** turns that expertise into tools an agent can use. A natural-language request is translated by a large language model into a plan; the plan is executed with graph-neural-network foundation models (MACE, UMA), simulation codes (ASE, RDKit, NWChem, ORCA, TBLite), and analysis tools; and the results are checked and reported. ChemGraph can be driven from the command line, from Python, through a Streamlit interface, or as an MCP server that other agents call.

The framework is also a research instrument. Because tasks range from a single-point energy to a multistep thermochemistry workflow, we can measure when a small model is sufficient, when a frontier model is required, and when decomposition into planner and executor agents improves reliability. Those measurements feed a public leaderboard of chemistry agents.

## Scaling agents to leadership systems

A single agent calling tools one at a time cannot use a machine with tens of thousands of GPUs. Two 2026 preprints address that bottleneck: a **planner–executor multi-agent architecture** that dispatches thousands of screening calculations across Aurora, and **EnsembleLauncher**, a decentralized, policy-driven orchestrator for heterogeneous simulation–AI ensembles. Together they let agentic workflows exploit the parallelism that exascale systems provide.

## Extensions

**ChemGraph-XANES** grounds the agent in FDMNES documentation through retrieval-augmented generation and generates deterministic inputs for large X-ray absorption spectroscopy campaigns. Companion efforts include a PubChem agent for natural-language data access, A2A-protocol agent templates for interoperable chemistry agents, and participation in the community LLM Hackathon for Materials Science and Chemistry.
