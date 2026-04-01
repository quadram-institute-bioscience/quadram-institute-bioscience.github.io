---
title: "Pixi to manage bioinformatics projects"
date: 2023-11-18T12:33:46+10:00
featured: false
weight: 1
layout: tutorial
---


Mamba (a faster version of [conda](/tutorials/conda)) is great — but it has some friction points that become obvious as your projects grow:

- You have to manually keep `environment.yml` in sync with what's actually installed
- There's no built-in **lockfile**, so collaborators may get slightly different package versions
- Environments are global, not tied to a project — it's easy to activate the wrong one
- The dependency solver, while improved with Mamba, can still be slow for large environments

Pixi solves all of these. 
It's built on the same conda ecosystem (so all Bioconda and conda-forge packages work), but takes a **project-first approach** — 
your environment lives alongside your data and scripts, not in a global `~/.conda/envs` folder.

This is a radical change for long time conda users, so pixi might not be the right tool for everyone.

**[Pixi](https://pixi.prefix.dev/latest/)** was launched in 2023 by prefix.dev, built on top of Rattler — a suite of Rust libraries that implement the full conda package ecosystem without needing Python at all. 
The result is something noticeably faster and more reproducible than traditional conda workflows.

---

## Installing Pixi

```bash
# Install on Linux or macOS
curl -fsSL https://pixi.sh/install.sh | sh

# Then restart your terminal, or source your shell config
source ~/.bashrc
```

Test the installation:

```bash
pixi --version
```

---

## ⚠ ️ Important: Configuring the Channel Mirror

Just like Mamba, Pixi by default fetches packages from Anaconda-hosted servers, **which are blocked on the HPC network**. You need to redirect it to the prefix.dev mirror.

Create or edit `~/.pixi/config.toml`:

```bash
mkdir -p ~/.pixi
cat > ~/.pixi/config.toml << 'EOF'
[mirrors]
"https://conda.anaconda.org/conda-forge" = [
  "https://prefix.dev/conda-forge"
]
"https://conda.anaconda.org/bioconda" = [
  "https://prefix.dev/bioconda"
]

[default-channels]
channels = ["conda-forge", "bioconda"]
EOF
```

Verify the configuration was applied:

```bash
pixi config list
```

This only needs to be done **once**.

---

## The Core Idea: Projects, Not Environments

With Mamba, you create a named environment (`conda activate myenv`) that lives globally on your system. With Pixi, you create a **project** — a folder that contains:

| File | Purpose |
|---|---|
| `pixi.toml` | Your project's dependencies (human-readable) |
| `pixi.lock` | Exact pinned versions of everything installed |
| `.pixi/` | The actual environment (local to the project) |

This means you can just `cd` into a project and activate it — no need to remember which environment name you used six months ago.

---

## Starting a New Project

```bash
# Create a new project directory and initialise pixi
pixi init kraken-analysis
cd kraken-analysis
```

This creates a `pixi.toml` file. Now add tools from Bioconda:

```bash
# Add bioinformatics tools — pixi.toml and pixi.lock are updated automatically
pixi add kraken2 bracken seqfu fastp multiqc
```

Activate the environment for this project:

```bash
# Drop into a shell with all project tools available
pixi shell
```

```bash
# Or run a single command without entering the shell
pixi run kraken2 --version
```

---

## A Real Example: Taxonomic Profiling Project

```bash
# Initialise the project
pixi init gut-metagenomics
cd gut-metagenomics

# Add all tools needed for the workflow
pixi add kraken2 bracken fastp seqfu multiqc pigz

# Optionally, check what got installed
pixi list
```

Now activate and run your analysis:

```bash
pixi shell

# All tools are available — run host removal, QC, classification as normal
fastp -i reads/Sample1_R1.fq.gz -I reads/Sample1_R2.fq.gz \
  -o filtered/Sample1_R1.fq.gz -O filtered/Sample1_R2.fq.gz \
  --detect_adapter_for_pe --length_required 100

kraken2 --db /data/db/kraken2/mouse_GRCm39 \
  --report results/Sample1.report \
  --paired filtered/Sample1_R1.fq.gz filtered/Sample1_R2.fq.gz \
  > /dev/null
```

---

## Sharing and Reproducing an Analysis

This is where Pixi really shines. Because `pixi.toml` and `pixi.lock` are plain text files, you can commit them to Git:

```bash
git init
git add pixi.toml pixi.lock
git commit -m "Add project dependencies"
```

A collaborator cloning your repository can recreate the **exact same environment** — same tool versions, same dependencies — with a single command:

```bash
# On a colleague's machine or a new HPC account
git clone https://github.com/you/gut-metagenomics
cd gut-metagenomics

# Recreate the environment exactly as you defined it
pixi install
pixi shell
```

No more "it worked on my machine."

---

## Defining Tasks (Optional but Useful)

Pixi lets you define **tasks** — named commands stored in `pixi.toml` — so your whole team runs things the same way. Edit `pixi.toml` and add a `[tasks]` section:

```toml
[tasks]
# Quality filter all samples
qc = "fastp -i reads/Sample_R1.fq.gz -I reads/Sample_R2.fq.gz -o filtered/Sample_R1.fq.gz -O filtered/Sample_R2.fq.gz --detect_adapter_for_pe -l 100"

# Run MultiQC on reports folder
report = "multiqc reports/ -o multiqc_report/"
```

Then run tasks with:

```bash
pixi run qc
pixi run report
```

---

## Pixi vs Mamba: Quick Comparison

| Feature | Mamba | Pixi |
|---|---|---|
| Based on conda ecosystem | ✅ | ✅ |
| Bioconda packages | ✅ | ✅ |
| Speed | Fast | Faster (Rust-based) |
| Lockfile | ❌ Manual | ✅ Automatic |
| Project-scoped environments | ❌ | ✅ |
| Reproducible by default | ❌ | ✅ |
| Built-in task runner | ❌ | ✅ |


* 💡 **Tip:** Commit both `pixi.toml` and `pixi.lock` to version control. The `.toml` is for humans; the `.lock` is for reproducibility.

* 💡 **Tip:** Add `.pixi/` to your `.gitignore` — the actual environment folder is large and can always be recreated with `pixi install`.

* 💡 **Tip:** You can use `pixi run` directly in a Slurm job script — no need to `conda activate` inside the script. Just prefix your commands with `pixi run`.
