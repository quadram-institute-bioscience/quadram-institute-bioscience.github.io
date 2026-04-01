---
title: "Singularity containers on the HPC"
date: 2022-11-18T12:33:46+10:00
featured: false
weight: 1
layout: tutorial
---


## The Problem: "It Works on My Machine"

You've probably encountered this: a tool works perfectly on your laptop, but fails on the HPC — or a colleague can't reproduce your results because they have a different version installed. 
Even with Conda, complex tools with many system-level dependencies can be difficult to install consistently across different machines.

The solution is **containers**.

---

## What is a Container?

A container packages a tool together with **everything it needs to run** — the software itself, its dependencies, system libraries, and even configuration. 
Think of it like a self-contained box: wherever you take the box, the tool inside behaves identically.

This is different from a Conda environment, which only manages packages within the host system. 
A container includes a complete, isolated filesystem — so it doesn't matter what Linux version is running underneath.

Containers are:

- **Reproducible** — the same image always produces the same behaviour
- **Portable** — run on any compatible system without reinstalling anything
- **Shareable** — you can distribute an image and others run it immediately

---

## What is Singularity (Apptainer)?

**Singularity** (recently rebranded as **Apptainer**) is the container system designed specifically for HPC environments. You may have heard of **Docker** — Singularity is similar in concept, but built for shared systems where users don't have administrator privileges.

Key differences from Docker:

| Feature | Docker | Singularity |
|---|---|---|
| Requires root/admin | Yes | No |
| Designed for HPC | No | Yes |
| Runs as your user | No | Yes |
| Shares host filesystem | Limited | Yes (naturally) |

On the HPC, **you cannot use Docker** — but Singularity is available and works seamlessly within Slurm jobs.

Singularity images are single files with a `.sif` extension. They are easy to move around, copy, and store alongside your project data.

---

## Using a Singularity Image

### Running a command inside a container

The basic syntax is:

```bash
# Run a command inside a .sif image
singularity exec my-tool.sif my-tool --version
```

This launches the container, runs `my-tool --version` inside it, and exits. Your home directory and current working directory are automatically accessible inside the container — no special setup needed.

### Accessing your files

By default, Singularity mounts your `$HOME` and the current directory automatically, so you can read and write files as normal:

```bash
# The tool inside the container can see your files
singularity exec fastp.sif fastp -i reads/Sample1_R1.fq.gz -I reads/Sample1_R2.fq.gz \
  -o filtered/Sample1_R1.fq.gz -O filtered/Sample1_R2.fq.gz
```

---

## Where to Get Pre-Built Images

You don't need to build images yourself. The **Galaxy Project** maintains a public repository of ready-to-use Singularity images for virtually every tool on Bioconda:

🔗 **https://depot.galaxyproject.org/singularity/**

Every tool is available in specific versioned images (e.g. `fastp:0.23.4--h5f740d0_0`), which is great for reproducibility — you can pin the exact version used in your analysis.

### Downloading an image

```bash
# Create a directory to store your images
mkdir -p ~/singularity-images

# Download an image with wget
wget -O ~/singularity-images/fastp.sif \
  https://depot.galaxyproject.org/singularity/fastp:0.23.4--h5f740d0_0
```

### Using it in a script

```bash
# Define the image path once at the top of your script
FASTP=~/singularity-images/fastp.sif

# Then use it like a regular command
singularity exec $FASTP fastp \
  -i reads/Sample1_R1.fq.gz -I reads/Sample1_R2.fq.gz \
  -o filtered/Sample1_R1.fq.gz -O filtered/Sample1_R2.fq.gz \
  --detect_adapter_for_pe --length_required 100
```

This makes it easy to swap versions by just changing the path to the `.sif` file at the top.


* 💡 **Tip:** Store your `.sif` files in a shared location (e.g. `/data/singularity-images/`) so your whole team can reuse them without each person downloading their own copy.

* 💡 **Tip:** Singularity works inside Slurm job scripts exactly like on the command line — just use `singularity exec` as you normally would.

* 💡 **Tip:** When reporting your methods, note both the tool version **and** the image tag — the full tag (e.g. `fastp:0.23.4--h5f740d0_0`) uniquely identifies the exact build used.
