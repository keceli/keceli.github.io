# GitHub projects catalog — github.com/keceli

Snapshot of public GitHub activity for **Murat Keçeli** (`keceli`, Argonne National Laboratory), assembled on 2026-09-10 from the public GitHub API. Scope: 40 original repositories under `keceli` (61 forks omitted), plus repositories in organizations where public commits authored by `keceli` were found (~3,000 public commits across ~131 repositories; the 2017–2019 window was capped at 1,000 results by the API, so counts there are lower bounds). Commit counts are approximate and cover public repositories only; private organization work is not visible.

Each entry: repository · primary language · stars · active years · approximate commit count · one-sentence summary · keywords. Grouped by research theme so that the groups can map directly onto project pages of the research-hub website. Organizations with public membership: Autonomous-Scientific-Agents, PACChem, VALENCE-software; other organizations below are inferred from commit history.

---

## 1. Agentic AI for computational chemistry and materials science

Flagship, current work: LLM agents that plan, run, and validate atomistic simulations, and the infrastructure (benchmarks, leaderboards, data agents) around them.

- **[argonne-lcf/ChemGraph](https://github.com/argonne-lcf/ChemGraph)** · Python · ★153 · 2024–2026 · ~283 commits by keceli · project lead/maintainer
  Agentic framework connecting natural-language requests to molecular construction, simulation (ASE, MACE, RDKit, and external QC codes), analysis, and reporting through LangGraph tools, a CLI, a Streamlit UI, and an MCP server; the software behind the Communications Chemistry 2026 paper and the ChemGraph-XANES and multi-agent screening extensions.
  *Keywords:* agentic AI, LLM agents, LangGraph, MCP, ASE, MACE, computational chemistry workflows
- **[Autonomous-Scientific-Agents/chemgraph-leaderboard](https://github.com/Autonomous-Scientific-Agents/chemgraph-leaderboard)** · Python · ★3 · 2026–2026
  Gradio/Hugging Face leaderboard for an agentic-AI benchmark in computational chemistry, ranking LLM agents on ChemGraph-style tasks.
  *Keywords:* benchmark, leaderboard, agent evaluation, Gradio
- **[Autonomous-Scientific-Agents/PubChemAgent](https://github.com/Autonomous-Scientific-Agents/PubChemAgent)** · Python · ★1 · 2025–2025 · ~3 commits by keceli
  LangGraph agent that gives a natural-language interface to the PubChem database with pluggable LLM providers (OpenAI, Gemini, Claude).
  *Keywords:* PubChem, LangGraph, chemical data retrieval, LLM tools
- **[Autonomous-Scientific-Agents/Paper2Code](https://github.com/Autonomous-Scientific-Agents/Paper2Code)** · Python · ★6 · 2024–2025
  CrewAI multi-agent system that turns computational-science papers into runnable code, with self-testing and iterative improvement.
  *Keywords:* paper-to-code, CrewAI, multi-agent, reproducibility
- **[keceli/IodineAgent](https://github.com/keceli/IodineAgent)** · Python · ★0 · 2026–2026
  A2A-protocol chemistry agent template (Agent-to-Agent / AgentBeats-compatible) for building interoperable chemistry agents.
  *Keywords:* A2A protocol, agent interoperability, chemistry agent
- **[keceli/NickelAgent](https://github.com/keceli/NickelAgent)** · Python · ★0 · 2026–2026
  A2A 'green agent' template for evaluating chemistry benchmarks on the AgentBeats platform.
  *Keywords:* A2A protocol, AgentBeats, benchmark evaluation
- **[petsc/petscagent-bench](https://github.com/petsc/petscagent-bench)** · Python · ★6 · 2025–2026 · ~4 commits by keceli · contributor
  Agentified evaluation framework, built on A2A and MCP, for benchmarking code-generation agents that write PETSc programs.
  *Keywords:* PETSc, code-generation agents, A2A, MCP, benchmark
- **[globus-labs/mof-generation-at-scale](https://github.com/globus-labs/mof-generation-at-scale)** · Python · ★30 · 2023–2026 · ~2 commits by keceli · contributor
  HPC workflow that couples generative AI with simulation to design new metal–organic frameworks at scale.
  *Keywords:* MOFs, generative AI, HPC workflows, materials discovery

## 2. Interactive Quantum Chemistry (IQC) and molecular data infrastructure

High-throughput quantum-chemistry data generation and the tooling to identify, store, and explore the results.

- **[Autonomous-Scientific-Agents/IQC](https://github.com/Autonomous-Scientific-Agents/IQC)** · Python · ★6 · 2024–2026 · ~242 commits by keceli · project lead/maintainer
  Python framework for running quantum-chemistry workflows (single-point energies, geometry optimization, frequencies, thermochemistry) at scale with QC codes and machine-learned potentials (MACE, FAIRChem UMA), writing Parquet datasets for downstream analysis.
  *Keywords:* quantum chemistry, high-throughput, thermochemistry, MLIP, MACE, UMA, Parquet
- **[Autonomous-Scientific-Agents/IQC-Dashboard](https://github.com/Autonomous-Scientific-Agents/IQC-Dashboard)** · Jupyter Notebook · ★1 · 2025–2026 · ~67 commits by keceli
  Streamlit + DuckDB dashboard (live at iqc-dashboard.streamlit.app) for browsing, filtering, and 3D-visualizing large IQC result sets molecule by molecule.
  *Keywords:* Streamlit, DuckDB, data visualization, 3D molecular viewer
- **[Autonomous-Scientific-Agents/HashMol3D](https://github.com/Autonomous-Scientific-Agents/HashMol3D)** · Python · ★1 · 2026–2026 · ~34 commits by keceli · project lead/maintainer
  Pure-NumPy library for deterministic, rotation/translation/permutation-invariant 3D conformer identifiers of the form `<Hill formula><state tag>-<geometry hash>`, with a draft specification and accompanying paper.
  *Keywords:* molecular identifiers, 3D geometry hashing, canonicalization, FAIR data, NumPy
- **[keceli/xpyz](https://github.com/keceli/xpyz)** · — · ★0 · 2025–2025
  Python tools for manipulating molecules from XYZ coordinates.
  *Keywords:* xyz, molecular geometry, utilities
- **[keceli/qparser](https://github.com/keceli/qparser)** · — · ★0 · 2018–2018
  Parser for quantum-chemistry output files that populates a structured database.
  *Keywords:* output parsing, quantum chemistry, databases
- **[keceli/chemdash](https://github.com/keceli/chemdash)** · Jupyter Notebook · ★0 · 2018–2020
  Jupyter/Binder notebook dashboard for exploring chemistry datasets.
  *Keywords:* Jupyter, dashboard, chemistry data

## 3. Automated thermochemistry and combustion kinetics

Predecessors of IQC: automated generation of thermochemical data for combustion modeling (Argonne/PACChem, now Auto-Mech).

- **[PACChem/QTC](https://github.com/PACChem/QTC)** · Python · ★7 · 2018–2020 · ~334 commits by keceli · lead developer
  Quantum Thermochemistry Calculator: integrates Open Babel with MOPAC/NWChem/Gaussian/Molpro calculations and MESS partition functions to generate NASA polynomials automatically; basis of the 2019 butane-oxidation thermochemistry paper.
  *Keywords:* thermochemistry, NASA polynomials, Open Babel, MESS, combustion, automation
- **[keceli/QTC](https://github.com/keceli/QTC)** · Python · ★8 · 2017–2022
  Personal development copy of the Quantum Thermochemistry Calculator (Python modules for quantum thermochemistry calculations).
  *Keywords:* thermochemistry, quantum chemistry, Python
- **[Auto-Mech/MESS](https://github.com/Auto-Mech/MESS)** · C++ · ★28 · 2019–2026 · ~16 commits by keceli · contributor
  Master Equation System Solver for pressure- and temperature-dependent phenomenological rate constants; recent contributions to build system and packaging.
  *Keywords:* master equation, rate constants, chemical kinetics, C++
- **[Auto-Mech/mechdriver](https://github.com/Auto-Mech/mechdriver)** · Python · ★4 · 2019–2026 · ~2 commits by keceli · contributor
  Automated workflow driver for theoretical kinetics data in the AutoMech suite.
  *Keywords:* AutoMech, automated kinetics, workflows
- **[PACChem/RCDriver](https://github.com/PACChem/RCDriver)** · Python · ★2 · 2018–2019 · ~1 commits by keceli · contributor
  Early reaction-class driver for automated kinetics calculations in the PACChem ecosystem.
  *Keywords:* automated kinetics, PACChem

## 4. Machine-learning interatomic potentials for 2D materials

- **[AI4Materials/2DM-GAP](https://github.com/AI4Materials/2DM-GAP)** · — · ★5 · 2023–2023 · ~8 commits by keceli · co-developer
  Gaussian approximation potentials plus training/validation data for graphene, silicene, h-BN, h-AlN, and h-GaN, accompanying the Nanoscale 2023 paper.
  *Keywords:* Gaussian approximation potentials, 2D materials, phonons, thermal properties, datasets
- **[keceli/MLP](https://github.com/keceli/MLP)** · Dockerfile · ★0 · 2021–2021
  Container recipes and notes for machine-learning-potential toolchains.
  *Keywords:* machine-learning potentials, containers

## 5. Parallel eigensolvers and electronic-structure software (PETSc/SLEPc, NWChemEx)

Scalable linear algebra and software architecture for exascale quantum chemistry.

- **[qetsc/petSCF](https://github.com/qetsc/petSCF)** · Jupyter Notebook · ★0 · 2022–2022 · ~161 commits by keceli · project lead/maintainer
  PSCF: parameterized self-consistent-field code (MINDO/3, DFTB-style) for large sparse systems built on petsc4py/slepc4py; testbed for the SIPs spectrum-slicing eigensolver.
  *Keywords:* PETSc, SLEPc, SCF, sparse eigensolvers, semi-empirical, DFTB
- **[keceli/SLEPc-SIPs](https://github.com/keceli/SLEPc-SIPs)** · — · ★1 · 2018–2018
  Documentation and drivers for the Shift-and-Invert Parallel spectral transformations (SIPs) eigensolver in SLEPc, demonstrated on 128k-atom DFTB systems (J. Comput. Chem. 2016).
  *Keywords:* spectrum slicing, SIPs, SLEPc, eigensolvers, DFTB
- **[keceli/siesta-sips](https://github.com/keceli/siesta-sips)** · HTML · ★1 · 2015–2017
  Integration of the SLEPc SIPs eigensolver into SIESTA (J. Comput. Chem. 2018).
  *Keywords:* SIESTA, SLEPc, eigensolvers, DFT
- **[keceli/inertia](https://github.com/keceli/inertia)** · Makefile · ★0 · 2023–2024
  Python package computing matrix inertia (eigenvalue counts) with PETSc and SLEPc, published on PyPI.
  *Keywords:* matrix inertia, PETSc, SLEPc, PyPI
- **[keceli/eigensolvers](https://github.com/keceli/eigensolvers)** · C++ · ★1 · 2014–2015
  Benchmarks of distributed eigensolvers (Elemental GHEP and others).
  *Keywords:* eigensolver benchmarks, Elemental, dense linear algebra
- **[argonne-lcf/EigenSolverBenchmark](https://github.com/argonne-lcf/EigenSolverBenchmark)** · C++ · ★0 · 2025–2025 · ~12 commits by keceli
  C++ benchmark suite comparing eigensolver libraries on ALCF systems.
  *Keywords:* eigensolvers, benchmarking, HPC
- **[keceli/qetsc_logs](https://github.com/keceli/qetsc_logs)** · Python · ★0 · 2016–2017
  Log files, parsers, and plots for QETSc/SIPs scaling runs.
  *Keywords:* performance logs, scaling, PETSc
- **[NWChemEx/PluginPlay](https://github.com/NWChemEx/PluginPlay)** · C++ · ★13 · 2017–2026 · ~33 commits by keceli · contributor
  Inversion-of-control plugin framework for modular exascale scientific software (J. Chem. Phys. 2023).
  *Keywords:* NWChemEx, plugin architecture, modular software, C++, exascale
- **[NWChemEx/Chemist](https://github.com/NWChemEx/Chemist)** · C++ · ★6 · 2017–2026 · ~72 commits by keceli · contributor
  C++ library describing chemical systems (molecules, basis sets, wave functions) for NWChemEx.
  *Keywords:* NWChemEx, chemical system representation, C++
- **[NWChemEx/ParallelZone](https://github.com/NWChemEx/ParallelZone)** · C++ · ★0 · 2021–2026 · ~37 commits by keceli · contributor
  Parallel runtime abstraction layer (MPI, hardware resources) for NWChemEx.
  *Keywords:* NWChemEx, parallel runtime, MPI, C++
- **[NWChemEx/SimDE](https://github.com/NWChemEx/SimDE)** · C++ · ★0 · 2019–2026 · ~30 commits by keceli · contributor
  Simulation development environment / SDK defining the property types and module APIs of NWChemEx.
  *Keywords:* NWChemEx, SDK, property types
- **[NWChemEx/NWChemEx](https://github.com/NWChemEx/NWChemEx)** · Python · ★16 · 2018–2026 · ~294 commits by keceli · contributor
  Top-level user-facing NWChemEx repository; plus contributions to TensorWrapper, NWXCMake, Utilities, ChemCache, Integrals, and CI configuration.
  *Keywords:* NWChemEx, exascale quantum chemistry, CMake, CI
- **[m-a-d-n-e-s-s/madness](https://github.com/m-a-d-n-e-s-s/madness)** · C++ · ★220 · 2014–2026 · ~30 commits by keceli · contributor
  Multiresolution Adaptive Numerical Environment for Scientific Simulation; contributions to build/CI and integration work.
  *Keywords:* MADNESS, multiresolution, numerical methods, C++
- **[VALENCE-software/VALENCE](https://github.com/VALENCE-software/VALENCE)** · Fortran · ★8 · 2018–2022 · ~36 commits by keceli · co-developer
  Massively parallel variational subspace valence bond (VSVB) code (J. Comput. Chem. 2019).
  *Keywords:* valence bond, VSVB, Fortran, parallel electronic structure
- **[keceli/MaVi](https://github.com/keceli/MaVi)** · Fortran · ★0 · 2018–2018
  Fortran code for many-body vibrational structure calculations (VSCF/VMP/VCC-type methods).
  *Keywords:* anharmonic vibrations, Fortran, vibrational structure theory

## 6. AI assistants for HPC and scientific software (LLM tooling at ALCF/Argonne)

- **[argonne-lcf/user-guides](https://github.com/argonne-lcf/user-guides)** · HTML · ★31 · 2021–2026 · ~258 commits by keceli · major contributor
  ALCF systems user documentation (Aurora, Polaris, AI testbeds); one of the most heavily edited repositories in this history and the knowledge base behind AskHPC/HPCBot.
  *Keywords:* ALCF, HPC documentation, Aurora, Polaris, MkDocs
- **[argonne-lcf/HPCBot](https://github.com/argonne-lcf/HPCBot)** · Jupyter Notebook · ★3 · 2024–2025 · ~9 commits by keceli
  RAG chatbot and QA-generation pipeline over HPC documentation (Chroma vector store, OpenAI/Argo models); precursor of the AskHPC paper (SC Workshops 2025).
  *Keywords:* RAG, chatbot, HPC user support, Chroma
- **[argonne-lcf/drdoc](https://github.com/argonne-lcf/drdoc)** · Python · ★3 · 2024–2025 · ~12 commits by keceli · project lead/maintainer
  Dr. Doc: LLM tool that fixes grammar, formatting, and broken links in documentation using the Argo API.
  *Keywords:* documentation QA, LLM, Argo API
- **[keceli/ArgoAgent](https://github.com/keceli/ArgoAgent)** · Python · ★4 · 2025–2026
  Command-line interface to Argonne's Argo LLM API with modular system prompts, predefined tasks, file ingestion, and logging.
  *Keywords:* Argo API, CLI, LLM productivity tools
- **[argonne-lcf/ArgoTools](https://github.com/argonne-lcf/ArgoTools)** · Python · ★1 · 2024–2024 · ~2 commits by keceli
  Scripts and notebooks demonstrating Argo API use cases.
  *Keywords:* Argo API, notebooks
- **[keceli/AITools4Science](https://github.com/keceli/AITools4Science)** · Python · ★6 · 2025–2025
  Curated, tabulated directory of AI tools for scientific productivity (literature search, writing, coding), with licensing and pricing.
  *Keywords:* AI tools, research productivity, curated list
- **[Autonomous-Scientific-Agents/AI-tools-for-science](https://github.com/Autonomous-Scientific-Agents/AI-tools-for-science)** · TypeScript · ★0 · 2026–2026 · ~7 commits by keceli
  React/TypeScript/Supabase web directory of AI tools for science, grown out of the Intro to HPC Bootcamp list, with visitor ratings.
  *Keywords:* AI tools directory, web app, React, Supabase
- **[keceli/EzGitUp](https://github.com/keceli/EzGitUp)** · Python · ★1 · 2023–2025
  pip-installable CLI to upload files to GitHub repositories without cloning (wildcards, target directories, UUID names).
  *Keywords:* GitHub API, CLI, PyPI
- **[keceli/NinjaParser](https://github.com/keceli/NinjaParser)** · Python · ★0 · 2022–2022
  Parses `.ninja_log` build logs and reports the slowest build targets.
  *Keywords:* build tooling, ninja, developer productivity

## 7. HPC usability: Jupyter, containers, workflows

- **[keceli/ezHPC](https://github.com/keceli/ezHPC)** · HTML · ★7 · 2020–2023
  Interactive, simplified HPC from Jupyter notebooks (job submission, monitoring, and visualization helpers).
  *Keywords:* Jupyter, HPC usability, job submission
- **[jupyter4hpc/ALCF_notebooks](https://github.com/jupyter4hpc/ALCF_notebooks)** · Jupyter Notebook · ★1 · 2020–2020 · ~12 commits by keceli
  Jupyter notebooks used by the ALCF data-science group, plus the `ganymede` notebook collection.
  *Keywords:* Jupyter, ALCF, notebooks
- **[keceli/jupyterhub](https://github.com/keceli/jupyterhub)** · Jupyter Notebook · ★0 · 2019–2019
  Notebooks for the ALCF JupyterHub service.
  *Keywords:* JupyterHub, ALCF
- **[keceli/mpi_benchmark](https://github.com/keceli/mpi_benchmark)** · — · ★1 · 2018–2019
  Exploration of Docker/Shifter/Singularity containers for HPC with MPI benchmarks; companion recipes in `container`, `container_nwchem`, and `mopac_container`.
  *Keywords:* containers, Singularity, Shifter, MPI, HPC
- **[argonne-lcf/balsam](https://github.com/argonne-lcf/balsam)** · Python · ★85 · 2018–2025 · ~8 commits by keceli · contributor
  High-throughput workflow and job automation for HPC; small contributions.
  *Keywords:* workflows, HPC automation
- **[argonne-lcf/ai-science-training-series](https://github.com/argonne-lcf/ai-science-training-series)** · Jupyter Notebook · ★239 · 2021–2025 · ~7 commits by keceli · contributor
  ALCF AI-for-science training series materials; contributions to lecture/tutorial content.
  *Keywords:* AI training, tutorials, ALCF

## 8. Education, workforce development, and AI for energy justice

- **[keceli/IntroductionToHPCBootcamp](https://github.com/keceli/IntroductionToHPCBootcamp)** · Jupyter Notebook · ★3 · 2025–2025
  Project materials for 'Evaluating Large Language Models for HPC Education' in the DOE Intro to HPC Bootcamp (undergraduates use LLMs to generate and evaluate HPC teaching content).
  *Keywords:* HPC education, LLM evaluation, bootcamp, undergraduates
- **[AI4EnergyJustice/Tutorials](https://github.com/AI4EnergyJustice/Tutorials)** · Jupyter Notebook · ★2 · 2023–2023 · ~21 commits by keceli · lead author
  Jupyter tutorials (ML, LLMs, web scraping, fine-tuning) for the AI for Energy Justice project, whose goal is a question-answering model on energy-justice reports and legislation.
  *Keywords:* energy justice, LLM fine-tuning, tutorials, education
- **[keceli/AI-Justice](https://github.com/keceli/AI-Justice)** · Python · ★0 · 2023–2023
  LLM-based automated scoring of renewable-energy laws against the Initiative for Energy Justice scorecard, run on HPC.
  *Keywords:* energy justice, legal text analysis, LLM scoring
- **[keceli/binary-bracelet](https://github.com/keceli/binary-bracelet)** · HTML · ★0 · 2026–2026
  Web app that lets students design a bracelet encoding text in binary — an outreach activity.
  *Keywords:* outreach, binary, web app

## 9. Neuroscience / image segmentation (side project)

- **[keceli/TorchFFN](https://github.com/keceli/TorchFFN)** · Python · ★3 · 2025–2025
  PyTorch reimplementation of Google's Flood-Filling Networks for 3D volumetric segmentation in electron-microscopy connectomics.
  *Keywords:* flood-filling networks, PyTorch, 3D segmentation, connectomics

## 10. Personal utilities and website

- **[keceli/keceli.github.io](https://github.com/keceli/keceli.github.io)** · HTML · ★0 · 2018–2025
  Personal website (keceli.github.io); `kecelinet` holds an earlier Hugo Academic version.
  *Keywords:* personal website, GitHub Pages
- **[keceli/research_notes](https://github.com/keceli/research_notes)** · Jupyter Notebook · ★0 · 2024–2024
  Running notes and link collections (polymer databases, LLM reasoning, etc.).
  *Keywords:* research notes
- **[keceli/PyLASH](https://github.com/keceli/PyLASH)** · Python · ★1 · 2015–2015
  Assorted Python scripts: file renaming, photo organizing, parsing Elemental/NWChem/SIPs outputs, xyz-to-input generation.
  *Keywords:* utility scripts, parsers
- **[keceli/kiler](https://github.com/keceli/kiler)** · Python · ★0 · 2014–2023
  Dotfiles and shell scripts.
  *Keywords:* dotfiles
- **[keceli/heritage_fest_dinner](https://github.com/keceli/heritage_fest_dinner)** · Python · ★1 · 2025–2026
  Generates PDF dish cards and a menu for a heritage-festival dinner from a CSV.
  *Keywords:* reportlab, PDF generation

Not catalogued (test/scratch repositories): `delete`, `test_actions`, `test_markdown_proofread`, `test_subrepo_mainrepo`, `test_subrepo_otherrepo`, `README`, `zipper`. Also omitted: 61 forks under `keceli` (notable ones show where the work plugs in: ChemGraph, mace, fairchem, ase, mechdriver, MESS, x2z, nwchem, psi4, tiledarray, madness, libint, balsam, torchani, allegro, gpu4pyscf, PubChemPy, argo-proxy, pbs-tui).

---

## Organization footprint (public commits authored by keceli)

| Organization | Public commits (approx.) | Repositories touched | Theme |
|---|---|---|---|
| argonne-lcf | 593 | 9 | ALCF: ChemGraph, user docs, HPC AI assistants |
| Autonomous-Scientific-Agents | 353 | 5 | ASA: IQC, HashMol3D, agents (public member) |
| PACChem | 335 | 2 | Automated thermochemistry / kinetics (public member) |
| NWChemEx | 234 | 11 | Exascale quantum chemistry software |
| qetsc | 161 | 1 | PETSc/SLEPc-based SCF and eigensolvers |
| NWChemEx-CI-test | 53 | 3 | NWChemEx CI mirrors |
| VALENCE-software | 36 | 1 | VSVB electronic structure (public member) |
| m-a-d-n-e-s-s | 30 | 1 | MADNESS numerical environment |
| AI4EnergyJustice | 21 | 1 | AI for energy justice education |
| Auto-Mech | 18 | 2 | AutoMech kinetics suite |
| jupyter4hpc | 12 | 2 | Jupyter for HPC |
| AI4Materials | 8 | 1 | ML potentials for 2D materials |
| ReactionMechanismGenerator | 7 | 1 | RMG (early contributions) |
| NWChemEx-Project | 7 | 1 | NWChemEx developer tools |
| petsc | 5 | 2 | PETSc and agent benchmark |
| slepc | 2 | 1 | SLEPc |
| Interactive-Chemistry-Engine | 2 | 2 | ICE / MLE |
| ValeevGroup | 2 | 1 | TiledArray |
| globus-labs | 2 | 1 | MOF generation at scale |
| RENEWFireAID | 2 | 1 | FireAid visuals |
| google | 1 | 1 | Flood-filling networks |
| NERSC | 1 | 1 | Intro to HPC Bootcamp 2023 |

Owners with 1–2 stray commits that are downstream forks of PETSc/SLEPc/NWChem (e.g. `firedrakeproject`, `trixirt`, `Schaudge`) are excluded.

## Suggested mapping to research-project pages

| Website project | Papers (see `papers.md`) | Code |
|---|---|---|
| Agentic AI for science | ChemGraph, ChemGraph-XANES, multi-agent screening, EnsembleLauncher, LLM hackathon | ChemGraph, chemgraph-leaderboard, PubChemAgent, Paper2Code, IodineAgent/NickelAgent, petscagent-bench |
| Molecular data infrastructure | HashMol3D paper (in prep.) | IQC, IQC-Dashboard, HashMol3D |
| Automated thermochemistry & kinetics | butane thermochemistry 2019, AutoMech 2021, alkane oxidation 2023 (×2), combustion species 2009 | QTC, MESS, mechdriver |
| ML potentials for 2D materials | GAP 2D 2023, graphene expansion 2021, MoS2/MoSe2 2025, MXene 2018 | 2DM-GAP |
| Eigensolvers & exascale software | SIPs 2016, SIESTA-SIPs 2018, ELSI 2020, VALENCE 2019, NWChemEx review 2021, PluginPlay 2023 | petSCF, SLEPc-SIPs, siesta-sips, inertia, NWChemEx/*, VALENCE |
| AI assistants for HPC | PETSc AI assistants 2025, PETSc agent workflows 2026, AskHPC 2025, EAIRA 2025 | user-guides, HPCBot, drdoc, ArgoAgent, ArgoTools |
| Education & energy justice | Intro to HPC Bootcamp 2024 | IntroductionToHPCBootcamp, AI4EnergyJustice/Tutorials, AI-Justice, AI-tools-for-science |
