---
title: "Sparse Eigensolvers and Exascale Software"
tagline: "Making quantum chemistry codes run on the largest computers"
summary: "Spectrum-slicing eigensolvers for sparse matrices that diagonalize 100,000-atom systems, and the software infrastructure (NWChemEx, PluginPlay, ELSI, VALENCE) for exascale quantum chemistry."
period: "2014 – present"
order: 5
tags: [sparse linear algebra, PETSc/SLEPc, exascale, scientific software]
featured: true
icon: matrix
collaborators: [Hong Zhang, Albert F. Wagner, Peter Zapol, Jose E. Roman, Carmen Campos, Volker Blum, Theresa L. Windus, Graham D. Fletcher]
links:
  repo: https://github.com/NWChemEx
  paper: /publications/2016_keceli_sips_eigensolver_dftb/
publications: [2016_keceli_sips_eigensolver_dftb, 2018_keceli_siesta_sips, 2020_yu_elsi, 2019_fletcher_valence_vsvb, 2021_kowalski_nwchem_to_nwchemex, 2023_richard_pluginplay]
software: [petscf, slepc-sips, siesta-sips, inertia, eigensolverbenchmark, pluginplay, chemist, parallelzone, simde, nwchemex, madness, valence]
forStudents: "Diagonalizing a matrix is the bottleneck of most electronic-structure codes. The SIPs papers are a readable introduction to how spectrum slicing turns one huge eigenproblem into many independent small ones, and PETSc/SLEPc are excellent libraries to learn parallel numerical computing with."
---

Most electronic-structure methods spend their time solving a generalized eigenvalue problem, and standard dense solvers scale as the cube of the system size. **SIPs (Shift-and-Invert Parallel spectral transformations)**, built on PETSc and SLEPc, instead slices the eigenvalue spectrum into intervals that are solved independently. In 2016 it computed 330,000 eigenpairs of a 128,000-atom carbon nanotube tight-binding Hamiltonian in 190 seconds on 266,144 cores of Mira. Integration into **SIESTA** followed, and the solver became one of the back ends of **ELSI**, the community interface that lets any Kohn–Sham code switch between eigensolvers.

## Exascale software

As Argonne point of contact and later lead PI for the Exascale Computing Project's **NWChemEx**, the work broadened from solvers to software architecture: the C++ infrastructure for caching and serialization, Python interfaces, and the **PluginPlay** inversion-of-control framework that lets exascale applications be assembled from interchangeable modules. **VALENCE**, a massively parallel implementation of the variational subspace valence bond method, and contributions to **MADNESS** and **TiledArray** round out this theme.

Since 2023 the emphasis has shifted toward using these systems rather than building them, through the AI-assistant and agent projects, but the lessons about maintainable, tested, modular scientific software carry directly into ChemGraph and IQC.
