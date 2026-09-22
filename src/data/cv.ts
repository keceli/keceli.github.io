// Structured CV data used by /cv, /students, and the home page.
// Source: Murat_Keceli_CV LaTeX sources (updated September 2026).

export const education = [
  { degree: 'Ph.D. in Chemical Physics', place: 'University of Illinois at Urbana-Champaign', year: '2012', note: 'Advisor: So Hirata. Thesis: Vibrational Many-Body Methods for Molecules and Extended Systems.' },
  { degree: 'M.S. in Physics', place: 'Bilkent University, Ankara', year: '2006', note: 'Advisor: M. Özgür Oktel. Thesis: A Variational Approach to Stationary and Rotating Bose–Einstein Condensates.' },
  { degree: 'B.S. in Physics', place: 'Bilkent University, Ankara', year: '2004', note: 'Merit-based comprehensive scholarship.' },
];

export const appointments = [
  { title: 'Computational Scientist', place: 'Computational Science Division, Argonne National Laboratory', period: '2018 – present' },
  { title: 'Postdoctoral Appointee', place: 'Argonne National Laboratory', period: '2014 – 2018' },
  { title: 'Postdoctoral Associate', place: 'Massachusetts Institute of Technology', period: '2012 – 2014' },
];

export const awards = [
  { year: '2023, 2025', text: 'Impact Argonne Awards' },
  { year: '2022', text: 'Physical Sciences and Engineering Excellence Award for Scientific Achievement, Argonne National Laboratory, for the collaborative development of the Auto-Mech software suite' },
  { year: '2021', text: 'Distinguished Paper Award, 38th International Symposium on Combustion, for "Automated theoretical chemical kinetics: Predicting the kinetics for the initial stages of pyrolysis"' },
  { year: '2011 – 2012', text: 'Graduate Student Fellowship, University of Illinois at Urbana-Champaign' },
  { year: '2009', text: 'First place, poster competition, 18th Conference on Current Trends in Computational Chemistry' },
  { year: '2010 – 2012', text: 'Conference travel awards, University of Florida and University of Illinois' },
  { year: '2000 – 2006', text: 'Merit-based comprehensive scholarship, Bilkent University' },
];

export const service = [
  'ALCF Allocations Committee, 2024 – 2025',
  'ALCF Workshops Organization Committee, 2023 – 2025',
  'Co-organizer, AI for Chemistry and Materials Hands-on Series, 2023',
  'ALCF Software Committee, 2020 – 2023',
  'ATPESC (Argonne Training Program on Extreme-Scale Computing) review committee, 2018 – 2025',
  'INCITE computational-readiness reviewer since 2018; observer, INCITE science panel, 2023',
  'Guest associate editor, Frontiers in Theoretical and Computational Chemistry: special issue "Challenges and Opportunities for Computational Chemistry in the Exascale Era", 2022 – 2024',
  'Session chair, MolSSI Workshop on HPC in Computational Chemistry and Materials Science, 2021',
  'Reviewer for Chemical Science, Combustion and Flame, Applied Physics Letters, J. Phys. Chem. Letters, Surface Science, and DOE program reviews',
  'Member: American Physical Society (2004), American Chemical Society (2010), Association for Computing Machinery (2023)',
];

export const mentoring = [
  { year: '2025 – 2028', text: 'Argonne lead PI, FireAID undergraduate research training program (DOE/ASCR)' },
  { year: '2023, 2025', text: 'Mentor and project lead, DOE Intro to HPC Bootcamp' },
  { year: '2024 – 2025', text: 'Mentor, Student Inquiry and Research program, Illinois Mathematics and Science Academy' },
  { year: '2024, 2025', text: 'Introduce a Girl to Engineering Day, Argonne' },
  { year: '2023', text: 'Mentor for three students, Sustainable Research Pathways program' },
  { year: '2023', text: '"Breakthroughs Enabled by Computing", Argonne Open House' },
  { year: '2021, 2023', text: 'Webinars on interactive HPC with Jupyter (ALCF Developer Sessions)' },
  { year: '2019 – present', text: 'Hour of Code lessons at local elementary and middle schools' },
  { year: '2018 – present', text: 'Science-fair judge, Avery Coonley School' },
  { year: '2004 – 2007', text: 'Teaching assistant: freshman physics and quantum mechanics (Bilkent, University of Florida)' },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'C++', 'Fortran', 'TypeScript'] },
  { group: 'HPC', items: ['MPI', 'CUDA & SYCL', 'PETSc/SLEPc', 'ELPA/ScaLAPACK', 'Aurora & Polaris', 'containers'] },
  { group: 'AI / ML', items: ['PyTorch', 'LangGraph & MCP', 'RAG pipelines', 'GAP & equivariant GNN potentials', 'LLM evaluation'] },
  { group: 'Chemistry codes', items: ['NWChem/NWChemEx', 'SIESTA', 'MOPAC', 'Molpro', 'ASE', 'RDKit', 'RMG'] },
];

export const bookChapters = [
  'S. Hirata, K. Gilliard, X. He, M. Keçeli, J. Li, M. A. Salim, O. Sode, K. Yagi, "Ab initio ice, dry ice, and liquid water," in Fragmentation: Toward Accurate Calculations on Complex Molecular Systems (Wiley, 2017).',
  'S. Hirata, O. Sode, M. Keçeli, T. Shiozaki, "Electron correlation in solids: delocalized and localized orbital approaches," in Accurate Condensed-Phase Quantum Chemistry (CRC Press, 2010).',
  'S. Hirata et al., "Computational interstellar chemistry," in Recent Advances in Spectroscopy (Springer, 2010).',
];

export const press = [
  { title: "Argonne's Murat Keçeli helps prepare Jupyter Notebooks for Aurora", outlet: 'HPCwire / ALCF', year: '2023', url: 'https://www.hpcwire.com/off-the-wire/argonnes-murat-keceli-helps-prepare-jupyter-notebooks-for-aurora/' },
];

export const activities = [
  { years: '2025 – 2028', title: 'FireAID undergraduate research training program', text: 'Argonne lead PI of a DOE/ASCR program in which undergraduates from Alaska and partner institutions develop AI and deep-learning technologies for fighting wildland fire.', url: undefined },
  { years: '2023, 2025', title: 'DOE Intro to HPC Bootcamp', text: 'Mentor and project lead of a one-week program that introduces undergraduates from new and underrepresented communities to high-performance computing through energy-justice projects. In 2025 my project had students use large language models to generate and critically evaluate HPC teaching material.', url: 'https://intro-hpc-bootcamp.alcf.anl.gov/' },
  { years: '2023 – 2025', title: 'ALCF Workshops Organization Committee', text: 'Organizational decisions, participant selection, and speaker coordination for ALCF user workshops, including the first in-person workshop after the pandemic.', url: 'https://www.alcf.anl.gov/events' },
  { years: '2024', title: 'INCITE Hackathon', text: 'Organizing committee of the ALCF INCITE Hackathon (May 2024), a week of hands-on porting and optimization for teams preparing INCITE proposals for Aurora and Polaris.', url: 'https://www.alcf.anl.gov/events' },
  { years: '2024, 2026', title: 'UIC ACER – ALCF Lighthouse workshops', text: 'Technical overviews of ALCF systems and hands-on "Getting started on Polaris" sessions for University of Illinois Chicago researchers.', url: undefined },
  { years: '2024', title: 'Argonne Student Lecture Series', text: 'Lecture "Artificial Intelligence for Molecules and Materials in the Exascale Era" for summer students across the laboratory.', url: undefined },
  { years: '2024 – 2025', title: 'IMSA Student Inquiry and Research', text: 'Mentor for research interns from the Illinois Mathematics and Science Academy.', url: 'https://www.imsa.edu/academics/student-inquiry-and-research/' },
  { years: '2024, 2025', title: 'Introduce a Girl to Engineering Day', text: 'Hands-on activities at Argonne\'s annual event for middle-school girls.', url: 'https://www.anl.gov/education/introduce-a-girl-to-engineering-day' },
  { years: '2023', title: 'AI for Chemistry and Materials Hands-on Series', text: 'Co-organizer of an ALCF hands-on series on machine-learning potentials and AI tools for chemistry and materials science.', url: undefined },
  { years: '2023', title: 'Sustainable Research Pathways', text: 'Mentored three students from underrepresented institutions during the summer; the program pairs faculty–student teams with national-laboratory scientists.', url: 'https://shinstitute.org/sustainable-research-pathways/' },
  { years: '2023', title: 'Argonne Open House', text: '"Breakthroughs Enabled by Computing" activity for the public.', url: undefined },
  { years: '2021, 2023', title: 'ALCF Developer Sessions: Jupyter for HPC', text: 'Webinars on interactive high-performance computing with ALCF JupyterHub; featured in an ALCF interview covered by HPCwire.', url: 'https://www.alcf.anl.gov/events/interactive-high-performance-computing-alcf-jupyterhub' },
  { years: 'Ongoing', title: 'SULI and graduate internships', text: 'DOE Science Undergraduate Laboratory Internships and Argonne graduate programs place students in research groups; projects with me involve chemistry agents, LLM evaluation, or high-throughput quantum chemistry.', url: 'https://www.anl.gov/education/science-undergraduate-laboratory-internships' },
  { years: '2018 – present', title: 'Hour of Code', text: 'Annual coding and science lessons in local schools: Whittier School (2018), Lemont High School (2020), Heritage Grove Middle School (2021), St. Joseph\'s School (2022), Elizabeth Ide Elementary (2023), and continuing.', url: 'https://hourofcode.com/' },
  { years: '2026', title: 'AI Summer Camp, high-school session', text: '"Agentic AI for Science": from chatbots that talk to AI agents that act, experiment, and help discover.', url: undefined },
  { years: '2018 – 2025', title: 'ATPESC review committee', text: 'Annual review of applications to the Argonne Training Program on Extreme-Scale Computing.', url: 'https://extremecomputingtraining.anl.gov/' },
  { years: '2018 – 2019', title: 'Simulation, Data, and Learning Workshop', text: 'Lectures and hands-on sessions on using containers (Docker, Shifter, Singularity) on Theta at three editions of the ALCF SDL workshop.', url: undefined },
  { years: '2018 – present', title: 'Science fair judge', text: 'Annual middle-school science fair at the Avery Coonley School.', url: undefined },
  { years: '2002 – 2007', title: 'Teaching and tutoring', text: 'Teaching assistant for freshman physics and quantum mechanics (Bilkent University, University of Florida); volunteer science tutor for underprivileged students in Ankara.', url: undefined },
];
