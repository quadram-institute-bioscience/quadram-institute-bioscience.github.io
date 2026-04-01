---
title: "Installing Conda"
date: 2019-11-18T12:33:46+10:00
featured: false
weight: 1
layout: tutorial
---

# Using Mamba-forge to Manage Bioinformatics Software

## The Problem: Software Installation in Bioinformatics

Bioinformatics pipelines often require many tools — and these tools frequently have **conflicting dependencies**. 
For example, one tool might require Python 3.8 while another needs Python 3.11, or two tools might each depend on different versions of the same library.

Installing everything system-wide quickly becomes a mess. 
The solution is to use **isolated environments**, where each project (or group of tools) gets its own set of packages that don't interfere with each other.

---

## What is Conda?

**Conda** is a package and environment manager. 
It lets you:

- Install tools (and all their dependencies) with a single command
- Create isolated **environments** that can be activated or deactivated
- Switch between different versions of the same tool without conflict

Conda is widely adopted in bioinformatics because most tools are available through two community channels:

- **conda-forge** — general-purpose packages
- **bioconda** — bioinformatics-specific tools

---

## Installing Mambaforge

**Mamba** is a faster, drop-in replacement for the `conda` command. 
**Mambaforge** is a minimal installer that bundles Mamba with conda-forge as the default channel — making it the recommended starting point.

### Download and run the installer

Here we show Linux (Intel) example, but see [conda-forge download page](https://conda-forge.org/download/) for 
other platforms.

```bash
# Download the Mambaforge installer for Linux
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh"

# Run the installer (follow the prompts)
bash Miniforge3-Linux-x86_64.sh
```

After installation, either open a new terminal or run:

```bash
source ~/.bashrc
```

You should now see `(base)` at the start of your prompt, indicating the base environment is active.

---

## ⚠ ️ Important: Configuring the Channel Mirror QIBC Users)

By default, Mamba fetches packages from Anaconda-hosted servers (`anaconda.org`). **These are blocked on the HPC network.**

To work around this, you need to redirect Mamba to an alternative mirror hosted by [prefix.dev](https://prefix.dev). This is done by editing (or creating) the `~/.condarc` configuration file in your home directory.

```bash
# Add channel_alias line to Conda config file
echo 'channel_alias: https://repo.prefix.dev/' >> ~/.condarc
```

What each setting does:

| Setting | Purpose |
|---|---|
| `channel_alias` | Redirects all channel downloads to the prefix.dev mirror |
| `channels` | Specifies which channels to search, in order of priority |
| `channel_priority: strict` | Ensures packages are taken from the highest-priority channel that has them, avoiding version conflicts |

You only need to do this **once** — the setting persists across all environments and sessions.

---

## Basic Usage

### Creating an environment

Rather than installing everything into `base`, create a dedicated environment per project or workflow:

```bash
# Create a new environment called "metax" with a few tools
mamba create -n metax \
  -c conda-forge -c bioconda \
  seqkit kraken2 bracken fastp multiqc
```

### Activating and deactivating

```bash
# Activate the environment
conda activate metax

# Your prompt will change to (metax) — tools are now available
kraken2 --version

# Deactivate when done
conda deactivate
```

### Installing additional tools into an active environment

```bash
# Make sure the environment is active first
conda activate metax

# Then install
mamba install -c bioconda seqfu
```

### Listing your environments

```bash
conda env list
```

---

## Quick Reference

| Task | Command |
|---|---|
| Create environment | `mamba create -n myenv toolA toolB` |
| Activate environment | `conda activate myenv` |
| Deactivate environment | `conda deactivate` |
| Install a package | `mamba install -c bioconda toolname` |
| List environments | `conda env list` |
| List packages in env | `conda list` |
| Remove an environment | `conda env remove -n myenv` |

---

* 💡 **Tip:** Always prefer `mamba` over `conda` for installing packages — it uses a faster dependency solver and is significantly quicker, especially for large environments.

* 💡 **Tip:** Avoid installing tools directly into `base`. Keep `base` clean and create a fresh environment for each project or analysis type.
