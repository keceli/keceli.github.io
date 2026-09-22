---
title: "Machine Learning Interatomic Potentials"
tagline: "First-principles accuracy at classical force-field cost"
summary: "Gaussian approximation potentials and high-order anharmonic lattice dynamics for the thermal properties of graphene, h-BN, MXenes, and transition-metal dichalcogenides."
period: "2018 – present"
order: 4
tags: [machine-learned potentials, phonons, thermal transport, 2D materials]
featured: true
icon: lattice
collaborators: [Cem Sevik, Tuğbey Kocabaş, Álvaro Vázquez-Mayagoitia, İlker Demiroğlu, Sevil Sarikurt, Deniz Çakır]
links:
  repo: https://github.com/AI4Materials/2DM-GAP
  paper: /publications/2023_kocabas_gap_2d_thermal_properties/
publications: [2025_kocabas_mos2_mose2_thermal_conductivity, 2023_kocabas_gap_2d_thermal_properties, 2021_demiroglu_graphene_thermal_expansion_gap, 2018_sarikurt_mxene_thermal_thermoelectric]
software: [2dm-gap, mlp]
forStudents: "The trained potentials and all training data for graphene, silicene, h-BN, h-AlN, and h-GaN are public in the 2DM-GAP repository. Reproducing a phonon dispersion from them is a compact, well-defined project for learning ML potentials."
---

Thermal properties of two-dimensional materials depend on subtle anharmonic interactions between phonons. First-principles methods capture them but are too expensive for the long molecular-dynamics runs and large supercells required; classical force fields are cheap but unreliable. Machine-learned interatomic potentials close the gap.

With Cem Sevik's group we trained **Gaussian approximation potentials (GAPs)** on density-functional data for graphene, silicene, h-BN, h-AlN, and h-GaN, and showed that they reproduce phonon dispersions, thermal expansion, and lattice thermal conductivity at first-principles accuracy while running orders of magnitude faster. The models and data are public, and the graphene thermal-expansion study resolved a long-standing disagreement between simulation protocols.

The 2025 *Applied Physics Reviews* article revisits the **thermal conductivity of MoS₂ and MoSe₂**, where experiments and theory had disagreed by more than an order of magnitude. By mapping the spread of published values and applying machine-learned potentials to high-order (four-phonon) anharmonic lattice dynamics, it identifies which methodological choices drive the discrepancies. Earlier work on oxygen-terminated **MXene** monolayers showed how surface functionalization tunes thermoelectric performance.

Related efforts at Argonne include distributed training of equivariant graph neural networks on Polaris and neural-network potentials for molten salts.
