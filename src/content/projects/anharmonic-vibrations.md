---
title: "Vibrational and Electronic Structure of Extended Systems"
tagline: "Size-extensive many-body theory for molecules, polymers, and crystals"
summary: "Foundational methods work: size-extensive vibrational theories, accelerated coupled-cluster for periodic systems, and anharmonic spectra of molecular clusters and solids."
period: "2007 – present"
order: 7
tags: [coupled cluster, anharmonic vibrations, many-body theory, periodic systems]
featured: false
icon: wave
collaborators: [So Hirata, Kiyoshi Yagi, Olaseni Sode, Toru Shiozaki]
links:
  paper: /publications/2010_keceli_fast_ccsd_extended_systems/
publications: [2010_keceli_fast_ccsd_extended_systems, 2010_hirata_anharmonic_lattice_vibrations, 2012_hirata_extensivity_crystals, 2009_sode_solid_hf_coupled_cluster, 2009_keceli_anharmonic_combustion_species, 2019_maystrovsky_co2_dimer_anharmonic, 2021_ruiz_co2_trimer_anharmonic]
software: [mavi]
forStudents: "The 2012 Annual Review article is a pedagogical introduction to why energies must scale correctly with system size and how that constraint shapes electronic and vibrational structure methods for extended systems."
---

The harmonic approximation treats a molecule as a set of independent springs. Real molecules are anharmonic, and for floppy systems, hydrogen-bonded solids, and spectroscopic accuracy the corrections matter. My doctoral work with So Hirata developed vibrational many-body methods that include these effects while scaling correctly with system size.

Key results include the **mod-n approximation**, which downsamples wave vectors in Brillouin-zone integrations to accelerate periodic coupled-cluster singles and doubles by two to three orders of magnitude at negligible cost in accuracy, enabling anharmonic vibrational frequencies of polyethylene; **size-extensive generalizations** of vibrational self-consistent field, perturbation, and coupled-cluster theories for lattice vibrations of solids; the **XVSCF** method, a diagonalization-free, size-extensive variational treatment of anharmonicity; and a fragment many-body expansion that brought CCSD(T) to solid hydrogen fluoride, including its phonon dispersion and inelastic neutron scattering spectrum.

The MaVi Fortran program implemented these methods (VSCF, VMP2, VCI, XVSCF, XVPT2, XVMP2) from quartic force fields. Later collaborations with Olaseni Sode applied the same vibrational toolkit to carbon dioxide dimers and trimers with a many-body potential, revising experimental band assignments.
