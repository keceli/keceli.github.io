export const siteMeta = {
  name: 'Murat Keçeli',
  asciiName: 'Murat Keceli',
  title: 'Computational Scientist',
  division: 'Computational Science Division',
  affiliation: 'Argonne National Laboratory',
  email: 'keceli@anl.gov',
  location: 'Lemont, Illinois, USA',
  tagline: 'AI + HPC + Quantum Chemistry = Accelerated Scientific Discovery',
  description:
    'My research focuses on closing the gap between what our physical models can predict in principle and what we can calculate in practice. I combine quantum chemistry, artificial intelligence, and high-performance computing to accelerate scientific discovery for chemistry and materials science. AI + HPC + Quantum Chemistry = Accelerated Scientific Discovery.',
  portrait: '/images/portrait.jpg',
  cvPdf: '/Murat_Keceli_CV_m.pdf',
  links: {
    github: 'https://github.com/keceli',
    scholar: 'https://scholar.google.com/citations?user=wby3zK0AAAAJ&hl=en',
    orcid: 'https://orcid.org/0000-0001-8588-9272',
    linkedin: 'https://www.linkedin.com/in/keceli/',
    argonne: 'https://www.anl.gov/profile/murat-keceli',
    alcf: 'https://www.alcf.anl.gov/about/people/murat-keceli',
    asa: 'https://github.com/Autonomous-Scientific-Agents',
  },
};

// Sections that exist in the source tree but are not published yet.
// To publish one: remove it from this list AND rename its page file(s) in
// src/pages/ to drop the leading underscore (_research → research, _outreach.astro → outreach.astro, _cv.astro → cv.astro).
export const draftSections = ['research', 'outreach', 'cv'] as const;
export const isLive = (section: string) => !(draftSections as readonly string[]).includes(section);

const allNavigation = [
  { href: '/', label: 'Home' },
  { href: '/research/', label: 'Research', section: 'research' },
  { href: '/publications/', label: 'Publications' },
  { href: '/software/', label: 'Software' },
  { href: '/talks/', label: 'Talks' },
  { href: '/outreach/', label: 'Outreach & Training', section: 'outreach' },
  { href: '/blog/', label: 'Notes' },
  { href: '/cv/', label: 'CV', section: 'cv' },
  { href: '/contact/', label: 'Contact' },
];

export const navigation = allNavigation.filter((n) => !('section' in n) || isLive((n as { section: string }).section));

// The thesis of the site: three ingredients, one goal.
export const areaLabels: Record<string, string> = { ai: 'AI', hpc: 'HPC', quantum: 'QC' };

export const pillars = [
  {
    key: 'ai',
    title: 'Artificial Intelligence',
    text: 'Machine-learned potentials, agentic AI, retrieval-augmented generation, and AI evaluation.',
  },
  {
    key: 'hpc',
    title: 'High-Performance Computing',
    text: 'Scalable eigensolvers, automated workflows, exascale-ready software, and distributed training.',
  },
  {
    key: 'quantum',
    title: 'Quantum Chemistry',
    text: 'Accurate thermochemistry, coupled-cluster methods, anharmonic vibrations, and density functional theory.',
  },
];

export const careerTimeline = [
  {
    period: '2018 – present',
    title: 'Computational Scientist',
    place: 'Computational Science Division, Argonne National Laboratory',
    summary:
      'Leads ChemGraph and Interactive Quantum Chemistry; Argonne point of contact for NWChemEx (2019–2023); catalyst for ALCF chemistry, materials, and AI projects on Polaris and Aurora.',
  },
  {
    period: '2014 – 2018',
    title: 'Postdoctoral Appointee',
    place: 'Argonne National Laboratory',
    summary:
      'Built the SIPs spectrum-slicing eigensolver for 100,000-atom tight-binding systems and automated thermochemistry workflows (QTC) for combustion kinetics.',
  },
  {
    period: '2012 – 2014',
    title: 'Postdoctoral Associate',
    place: 'Massachusetts Institute of Technology',
    summary: 'Reaction Mechanism Generator (RMG) development and automated kinetic modeling with the Green group.',
  },
  {
    period: '2007 – 2012',
    title: 'Ph.D. in Chemical Physics',
    place: 'University of Illinois at Urbana-Champaign (with So Hirata; started at University of Florida)',
    summary:
      'Thesis: Vibrational Many-Body Methods for Molecules and Extended Systems. Size-extensive vibrational theories, mod-n coupled cluster for polymers, and anharmonic spectra of combustion radicals.',
  },
  {
    period: '2000 – 2006',
    title: 'B.S. and M.S. in Physics',
    place: 'Bilkent University, Ankara (with M. Özgür Oktel)',
    summary: 'Thesis: A Variational Approach to Stationary and Rotating Bose–Einstein Condensates.',
  },
];

export const quickFacts = [
  { value: '35+', label: 'peer-reviewed papers and preprints' },
  { value: '60+', label: 'open-source repositories contributed to' },
  { value: '12', label: 'years at Argonne' },
  { value: '100k', label: 'atoms diagonalized with SIPs' },
];

export const news = [
  { date: '2026-09', text: 'HashMol3D, a deterministic 3D molecular identifier library, and its paper are nearing release.', href: 'https://github.com/Autonomous-Scientific-Agents/HashMol3D' },
  { date: '2026-07', text: 'EnsembleLauncher preprint: decentralized orchestration of simulation–AI ensembles on Aurora.', href: '/publications/2026_tummalapalli_ensemblelauncher/' },
  { date: '2026-05', text: 'Outcomes of the 2025 LLM Hackathon for Materials Science and Chemistry published on arXiv.', href: '/publications/2026_roy_llm_hackathon_materials_chemistry/' },
  { date: '2026-04', text: 'Two new preprints: multi-agent orchestration for materials screening and ChemGraph-XANES.', href: '/publications/2026_pham_multiagent_materials_screening/' },
  { date: '2026-02', text: 'ChemGraph paper published in Communications Chemistry.', href: '/publications/2026_pham_chemgraph/' },
  { date: '2025-12', text: 'Thermal conductivity limits of MoS₂ and MoSe₂ published in Applied Physics Reviews.', href: '/publications/2025_kocabas_mos2_mose2_thermal_conductivity/' },
  { date: '2025-11', text: 'AskHPC chatbot paper presented at the SC25 workshops.', href: '/publications/2025_bondapalli_askhpc/' },
  { date: '2025-09', text: 'FireAID undergraduate research training program (DOE/ASCR) begins; Argonne lead PI.', href: undefined },
];
