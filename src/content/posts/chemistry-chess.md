---
title: "Will Machines Conquer Chemistry Like They Conquered Chess?"
date: 2026-10-29
summary: "From Deep Blue to AlphaZero, what can the history of chess engines teach us about molecular discovery?"
tags:
  - chemical-space
  - ai
  - computational-chemistry
draft: false
featured: true
---

![Chess pieces carrying element symbols — F, N, S, O, C — on a board in a wood-panelled study, with molecular structures sketched on a blackboard behind.](/images/chemistry-chess.jpg)

In 1997, IBM's Deep Blue defeated Garry Kasparov, the reigning world chess champion [1]. It was a remarkable achievement, but perhaps even more remarkable is what happened afterward.

Today, a chess engine running on an ordinary laptop or smartphone can defeat the strongest human players. With AlphaZero, we saw another breakthrough. A neural network learned to play chess through self-play, developing strategies that surprised even grandmasters [2].

**Could the same thing happen to chemistry?**

I believe it can. And I think we may see it happen within our lifetime.

## A Game with an Astronomical Number of Possibilities

Chess looks simple enough. There are 64 squares, 32 pieces, and a small set of rules. Yet the number of legal chess positions is estimated to be approximately 5 × 10<sup>44</sup> [3]. The number of possible games is vastly larger, commonly estimated to be on the order of 10<sup>120</sup> [12].

Examining every possibility is out of the question, even with the fastest supercomputers. But chess engines don't need to. They search selectively, evaluate positions, and discard unpromising moves. Neural networks have made them remarkably good at deciding where to focus that search.

Now consider chemistry.

**How many possible organic molecules are there?**

The often-quoted estimate of more than 10<sup>60</sup> drug-like molecules traces back to a rough combinatorial calculation from the 1990s [4]. It has been widely repeated, but it is not a reliable count.

Other estimates vary enormously. The GDB-17 database enumerated approximately 166 billion (1.66 × 10<sup>11</sup>) small organic molecules with up to 17 heavy atoms [6]. Extrapolations to larger drug-like molecules suggest around 10<sup>33</sup> possibilities [5], while estimates based on synthetic building blocks and reactions range from roughly 10<sup>20</sup> to 10<sup>24</sup> [8, 9].

These estimates describe different chemical spaces, depending on the allowed elements, molecular size, chemical stability, and synthesizability.

I became interested enough in this question to create an interactive [Chemical Space Explorer](https://autonomous-scientific-agents.github.io/Chemical-Space-Explorer/) [7], as an application of an agentic coding tutorial I prepared for the Genesis Hackathon. You can choose the elements, adjust the molecular size, and explore how rapidly the number of possibilities grows. I also included a [discussion of the methods and published estimates](https://autonomous-scientific-agents.github.io/Chemical-Space-Explorer/method/#literature) [8].

Whatever assumptions we make, chemical space is astronomically large. PubChem contains on the order of 120 million chemical structures [10], an impressive collection but still a tiny fraction of the possibilities.

## The Periodic Table Is Our Set of Chess Pieces

Of course, chemistry is much more complicated than chess. Atoms can combine into structures of different sizes, bonds can form and break, and molecular properties depend on three-dimensional geometry and the environment.

But there is a fundamental similarity.

**Just as chess has well-defined rules, chemistry is governed by the laws of quantum mechanics.**

We know the physical laws that determine how atoms and electrons interact. In principle, quantum mechanics allows us to predict molecular structures, energies, and properties.

In practice, solving the equations accurately remains computationally expensive, and we rely on approximations.

In chess, an engine evaluates whether a position is promising. In chemistry, quantum calculations and machine learning models help evaluate whether a molecule is stable, reactive, or likely to have a desired property.

Instead of searching for checkmate, we might search for an effective drug, a better catalyst, or a material with extraordinary properties.

## We Don't Need to Explore Every Molecule

Computational chemists have understood this for a long time.

For decades, researchers have used virtual screening, molecular modeling, and search algorithms to identify promising molecules without examining every possibility. Machine learning, generative models, and active learning have made these searches more efficient. Some systems already combine predictions, calculations, and experiments in closed loops [11].

So intelligently exploring chemical space is certainly not new.

**What interests me most is how good machines might eventually become at doing it.**

Chess engines didn't become superhuman overnight. Decades of improvements in algorithms, hardware, and evaluation methods transformed their capabilities. Neural networks and self-play brought further advances [1, 2].

Computational chemistry may be following a similar trajectory.

Advances in quantum chemistry, machine learning, high-performance computing, and autonomous scientific agents are making molecular discovery increasingly powerful and accessible.

What might discovery look like when these capabilities improve by another order of magnitude? Or several?

I suspect the greatest breakthroughs will come not from any single model or computational method, but from combining them intelligently.

## Limits of the Analogy

There are important differences between chess and chemistry as well.

In chess, the rules and objective are clear: win the game. We can also track the strength of chess engines using Elo ratings.

Chemistry is messier.

A promising molecule might be difficult to synthesize. A potential drug might bind strongly to its target but also be toxic. Molecular behavior depends on temperature, solvent, biological environments, and many other factors.

Unlike chess, chemistry ultimately requires experimental verification. Even our best computational methods cannot always provide sufficiently accurate predictions with well-defined uncertainties at an affordable cost.

**And how do we measure progress?**

One interesting measure would be how much of the discovery process chemistry engines can carry out autonomously, from proposing molecules and selecting calculations to designing experiments and learning from the results. Another is how efficiently they use computational and experimental resources.

Of course, autonomy alone doesn't guarantee better science. Results must still be useful, reliable, and experimentally verifiable.

Our chemistry engines will need more than good evaluation functions. They will need to understand uncertainty, balance accuracy against cost, and learn from experiments.

## Chemistry's AlphaZero Moment

When I say chemistry might be conquered by machines, I don't mean calculating every possible molecule or solving every chemical problem.

I imagine chemistry engines that can independently navigate chemical space, identify promising structures, and decide which experiments to perform.

One milestone would be engines that reliably discover novel, experimentally validated molecules with minimal human intervention and at reasonable cost.

They might discover molecules no chemist would have thought to investigate, just as AlphaZero found surprising strategies in a game humans had studied for centuries [2].

This wouldn't make chemists irrelevant. Chess grandmasters didn't disappear after Deep Blue. Computers transformed how they study and understand the game.

I expect something similar in chemistry. Scientists will continue asking important questions, defining objectives, interpreting results, and challenging machine predictions.

I don't know when chemistry will have its AlphaZero moment, or whether it will be a gradual transformation rather than a single breakthrough.

But the enormous size of chemical space is not, by itself, a reason for pessimism. Chess has already taught us that lesson.

**And I hope to see that transformation in my lifetime and be part of it.**

### A Note on How This Article Came Together

This article grew out of conversations with ChatGPT and Claude while preparing my talk for Future Labs Live. I wanted an analogy to help an audience of scientists and industry professionals appreciate the enormous size of chemical space and how quantum mechanics provides the underlying rules.

Chess came to mind. As usual, the AI assistants enthusiastically agreed it was a great idea. I hope you do too!

After writing the first draft (or perhaps I should say *prompting* it), I asked ChatGPT whether anyone had explored this analogy before.

It turns out several researchers had, going back more than two decades. Matthew Todd compared computer-aided organic synthesis to chess in 2005 [13]. Peiretti and Brunel discussed AlphaZero's implications for organic chemistry in 2018 [14], and David Preitschaft revisited the analogy in 2022 [15].

So the analogy isn't new, but this is my personal reflection on what it might mean for the future of computational chemistry.

### References

1. [IBM: The History of Deep Blue](https://www.ibm.com/history/deep-blue)
2. [Silver et al., *A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play*, Science (2018)](https://pubmed.ncbi.nlm.nih.gov/30523106/)
3. [Tromp and Österlund: Estimating the Number of Legal Chess Positions](https://github.com/tromp/ChessPositionRanking)
4. [Bohacek, McMartin & Guida, *The art and practice of structure-based drug design: a molecular modeling perspective* (1996)](https://doi.org/10.1002/%28SICI%291098-1128%28199601%2916%3A1%3C3%3A%3AAID-MED1%3E3.0.CO%3B2-6)
5. [Polishchuk, Madzhidov & Varnek, *Estimation of the size of drug-like chemical space based on GDB-17 data* (2013)](https://doi.org/10.1007/s10822-013-9672-4)
6. [Ruddigkeit et al., *Enumeration of 166 billion organic small molecules in the chemical universe database GDB-17* (2012)](https://doi.org/10.1021/ci300415d)
7. [Chemical Space Explorer: Interactive Estimates](https://autonomous-scientific-agents.github.io/Chemical-Space-Explorer/)
8. [Chemical Space Explorer: Methods and Literature Comparison](https://autonomous-scientific-agents.github.io/Chemical-Space-Explorer/method/#literature)
9. [Ertl, *Cheminformatics analysis of organic substituents*, Journal of Chemical Information and Computer Sciences (2003)](https://doi.org/10.1021/ci0255782)
10. [PubChem: Database Statistics, National Center for Biotechnology Information](https://pubchem.ncbi.nlm.nih.gov/docs/statistics/)
11. [Koscher et al., *Autonomous, multiproperty-driven molecular discovery: From predictions to measurements and back*, Science (2023)](https://doi.org/10.1126/science.adi1407)
12. [Shannon, *Programming a Computer for Playing Chess*, Philosophical Magazine (1950)](https://doi.org/10.1080/14786445008521796)
13. [Todd, *Computer-aided organic synthesis*, Chemical Society Reviews (2005)](https://doi.org/10.1039/B104620A)
14. [Peiretti & Brunel, *Artificial Intelligence: The Future for Organic Chemistry?*, ACS Omega (2018)](https://doi.org/10.1021/acsomega.8b01773)
15. [Preitschaft, *The Chemist's Gambit*, Chemistry World (2022)](https://www.chemistryworld.com/opinion/the-chemists-gambit/4014412.article)
