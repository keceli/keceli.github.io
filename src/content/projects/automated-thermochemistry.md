---
title: "Automated Thermochemistry and Kinetics"
tagline: "From a fuel molecule to a complete combustion mechanism, automatically"
summary: "Workflows that generate high-accuracy thermochemistry and rate constants for hundreds of species without manual setup: begun in William H. Green's group at MIT, continued at Argonne with Stephen J. Klippenstein and Sarah N. Elliott through the AutoMech project."
period: "2013 – present"
order: 3
tags: [thermochemistry, chemical kinetics, combustion, workflow automation]
featured: true
icon: flame
collaborators: [Stephen J. Klippenstein, Sarah N. Elliott, Yuri Georgievskii, Ahren W. Jasper, Carlo Cavallotti, William H. Green,]
links:
  repo: https://github.com/auto-mech 
  paper: /publications/2019_keceli_butane_thermochemistry/
publications: [2019_keceli_butane_thermochemistry, 2021_elliott_automech_pyrolysis_kinetics, 2023_elliott_cbh_anl_heats_of_formation, 2023_elliott_alkane_oxidation_thermodynamics, 2009_keceli_anharmonic_combustion_species]
software: [qtc, keceli-qtc, mess, mechdriver, rcdriver]
forStudents: "The 2021 pyrolysis paper received a Distinguished Paper Award from the International Symposium on Combustion, and the Auto-Mech team was recognized with Argonne's PSE Excellence Award in 2022. The codes are open on GitHub under Auto-Mech."
---

Combustion mechanisms contain thousands of species and reactions, and the accuracy of a model is limited by the accuracy of its thermochemistry. Computing a single heat of formation to chemical accuracy is routine; doing it for every species in a mechanism is not. This project built the automation to make it routine.

**QTC (Quantum Thermochemistry Calculator)** starts from a list of species, generates 3D structures and torsional conformers, runs quantum-chemistry calculations on HPC systems, and produces NASA polynomials ready for kinetic modeling. The 2019 butane-oxidation study demonstrated the full pipeline as a prelude to predictive automated kinetics. That work grew into **AutoMech**, a suite that also predicts rate constants via ab initio transition-state theory and master-equation calculations, and the **CBH-ANL** connectivity-based-hierarchy method that delivers sub-kcal/mol thermochemistry.

The theme goes back to my Ph.D. years: We calculated anharmonic vibrational frequencies and vibrationally averaged structures of the small radicals and ions (HCO⁺, HCO, HNO, HOO, CH₃) that appear in every combustion mechanism.
