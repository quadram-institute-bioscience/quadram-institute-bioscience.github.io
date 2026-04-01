---
layout: post
title: "Machine Learning Workshop"
date: 2024-03-07
---

We have been pleased to have Dr. Giovanni Birolo (University of Turin) to deliver a seminar and a workshop on machine learning.

<!--more-->

![Machine Learning Workshop]({{ site.baseurl }}/images/blog/birolo_ws.jpeg)

Dr. Birolo introduced the theoretical foundations of machine learning and guided participants through hands-on exercises using a real microbiome dataset — a 16S metabarcoding study of the murine gut microbiome.

The workshop covered the full analysis pipeline: importing and exploring a typical microbiome dataset (metadata, feature table, and taxonomy table), applying dimensionality reduction techniques (PCA, t-SNE, and UMAP) for unsupervised visual exploration, and performing statistical testing to identify differentially abundant taxa between groups.

Participants then moved into supervised machine learning, training Random Forest classifiers and regressors to predict sample labels (Early/Late colonisation stages), mouse sex, and continuous variables such as days after weaning. A key focus was on proper model evaluation — comparing naïve train/test splits with group-aware cross-validation (GroupKFold) to avoid data leakage when multiple samples come from the same individual.

For more details, visit the [Machine Learning Workshop page](https://corebio.info/workshops-2024/machine-learning).
