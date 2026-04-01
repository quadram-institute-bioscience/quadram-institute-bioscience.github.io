---
title: "A singularity image using Pixi"
date: 2018-11-18T12:33:46+10:00
featured: false
weight: 1
layout: tutorial
---


In the previous tutorials we covered two complementary tools:

- **[Pixi]({% link _tutorials/pixi.md %})** — reproducible, project-scoped environments from Bioconda/conda-forge
- **[Singularity]({% link _tutorials/singularity.md %})** — portable containers that run identically anywhere on the HPC

Combining them gives you the best of both worlds: Pixi handles the **software installation** (with its fast solver and exact lockfile), and Singularity wraps the result into a **single portable `.sif` file** that runs without any environment setup at all.

This is especially useful when you want to:

- Share a fixed version of a tool with collaborators
- Use a specific tool version in a Nextflow or Snakemake pipeline
- Archive a complete software environment alongside a publication

---

## The Definition File

Singularity images are built from a plain text **definition file** (`.def`). Think of it as a recipe: it describes the base operating system, what to install, and what the container does when you run it.

Here is a complete, annotated example that installs `seqfu` and `hyperfine` via Pixi:

```singularity
# Start from a minimal Ubuntu 24.04 base image
Bootstrap: docker
From: ubuntu:24.04

%environment
    # Set locale — important for many bioinformatics tools
    export LC_ALL=C.UTF-8
    export LANG=C.UTF-8

    # Add the Pixi-managed environment to PATH so tools are found automatically
    export PATH="/opt/software/.pixi/envs/default/bin:$PATH"

%post
    # --- System dependencies ---
    apt-get update && apt-get install -y \
        build-essential \
        wget \
        curl \
        nano \
        zlib1g-dev \
        ca-certificates \
        locales

    # Generate locale
    locale-gen en_US.UTF-8

    # --- Install Pixi ---
    mkdir -p /opt/software
    cd /opt/software

    # Download and install the Pixi binary
    curl -fsSL https://pixi.sh/install.sh | bash

    # Make pixi available for the rest of this build step
    export PATH="$HOME/.pixi/bin:$PATH"

    # --- Define the Pixi project ---
    # Note: channels point to prefix.dev mirror (no Anaconda dependency)
    cat > pixi.toml << EOF
[project]
name = "container-env"
version = "0.1.0"
description = "Container environment with bioconda packages"
channels = ["https://repo.prefix.dev/conda-forge", "https://repo.prefix.dev/bioconda"]
platforms = ["linux-64"]

[dependencies]
seqfu = "1.22.0"
hyperfine = "*"
EOF

    # --- Install all packages defined in pixi.toml ---
    /root/.pixi/bin/pixi install

    # --- Clean up to reduce image size ---
    apt-get clean
    rm -rf /var/lib/apt/lists/*

%runscript
    # Default behaviour when running the container directly:
    # passes all arguments to seqfu
    exec /opt/software/.pixi/envs/default/bin/seqfu "$@"
```

Save this as `seqfu.def`.

---

## Key Sections Explained

| Section | Purpose |
|---|---|
| `Bootstrap` / `From` | The base OS — Ubuntu 24.04 here |
| `%environment` | Variables set **every time** the container runs |
| `%post` | Commands run **once** during the build |
| `%runscript` | What happens when you run the `.sif` file directly |

The most important detail is where the tools end up:

```
/opt/software/.pixi/envs/default/bin/
```

Pixi installs everything into this path, and `%environment` adds it to `$PATH` — so tools are available without any activation step.

---

## Building the Image

You need Singularity and root/sudo access to **build** an image — typically done on a machine where you have admin rights, not directly on the HPC.

```bash
# Build the .sif image from the definition file (requires sudo)
sudo singularity build seqfu.sif seqfu.def
```

The build process will:
1. Pull the Ubuntu 24.04 base image
2. Install system packages
3. Download and run the Pixi installer
4. Solve and install all packages listed in `pixi.toml`
5. Package everything into `seqfu.sif`

This takes a few minutes the first time. The resulting `.sif` file is fully self-contained.

---

## Using the Image on the HPC

Copy the `.sif` to the HPC, then use it exactly like any other Singularity image:

```bash
# Run the default tool (seqfu, as defined in %runscript)
singularity run seqfu.sif stats reads/*.fq.gz

# Run any tool installed in the image with singularity exec
singularity exec seqfu.sif seqfu count reads/*.fq.gz
singularity exec seqfu.sif hyperfine "seqfu stats reads/Sample1_R1.fq.gz"
```

Because `$PATH` is set in `%environment`, all tools installed by Pixi are available via `singularity exec` without any further setup.

---

## Adding More Tools

To install additional tools, just add them to the `[dependencies]` block in `pixi.toml` inside the definition file:

```toml
[dependencies]
seqfu = "1.22.0"
hyperfine = "*"
# Add as many Bioconda/conda-forge tools as you need
fastp = "*"
multiqc = "*"
kraken2 = "2.1.3"
```

Pin versions explicitly (e.g. `kraken2 = "2.1.3"`) when building images for published analyses — this ensures the image is reproducible even if a newer version is released later.

---

## Using the Image in a Slurm Script

```bash
#!/bin/bash
#SBATCH --job-name=qc_pipeline
#SBATCH --cpus-per-task=8
#SBATCH --mem=16G

# Define the image path once
IMAGE=~/singularity-images/seqfu.sif

# Use tools from the image directly
singularity exec $IMAGE fastp \
  -i reads/Sample1_R1.fq.gz -I reads/Sample1_R2.fq.gz \
  -o filtered/Sample1_R1.fq.gz -O filtered/Sample1_R2.fq.gz \
  --detect_adapter_for_pe --length_required 100 \
  --thread $SLURM_CPUS_PER_TASK
```

