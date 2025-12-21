# BioQuery Docs

Nextra documentation site for BioQuery - https://docs.bioquery.io

## ⚠️ PUBLIC REPOSITORY WARNING

**This repository is PUBLIC and deployed to https://docs.bioquery.io**

### DO NOT commit:
- API keys, secrets, credentials
- Internal architecture details (routing logic, prompt templates)
- Business strategy, revenue data, pricing logic
- Competitive analysis or moat strategies
- Unpublished research or proprietary algorithms
- Customer data or private usage analytics
- Internal roadmaps or unannounced features

### What SHOULD be documented here:
- Public API reference and schemas
- User guides and tutorials
- Example queries and use cases
- Data source descriptions (public datasets)
- Query Card format specification
- SDK installation and usage
- General troubleshooting

### For internal documentation, use:
- **Wiki**: `https://github.com/BioQuery-io/.github-private/wiki` (member-only)
- **Root docs/**: `bioquery-project/docs/` for session summaries and planning (not public)

## Quick Start

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## Project Structure

```
docs/
├── content/                    # MDX documentation pages
│   ├── index.mdx              # Home page
│   ├── _meta.json             # Navigation config
│   ├── guides/                # User guides
│   │   ├── _meta.json
│   │   ├── getting-started.mdx
│   │   ├── analysis-types.mdx
│   │   └── data-sources.mdx
│   ├── examples/              # Example queries
│   │   ├── _meta.json
│   │   └── index.mdx
│   └── api/                   # API reference
│       ├── _meta.json
│       ├── index.mdx
│       ├── endpoints.mdx
│       └── query-card-schema.mdx
├── app/                       # Next.js app directory
├── public/                    # Static assets
├── next.config.mjs           # Next.js config
└── package.json
```

## Content Guidelines

### Navigation
Edit `_meta.json` files to configure navigation:
```json
{
  "index": "Home",
  "guides": "Guides",
  "examples": "Examples",
  "api": "API Reference"
}
```

### Page Structure
```mdx
# Page Title

Brief description of the page content.

## Section Heading

Content goes here...

### Subsection

More details...
```

### Code Examples
Use language-specific code blocks:
```mdx
```python
import bioquery
client = bioquery.Client()
```
```

### Callouts
Use Nextra callouts for important information:
```mdx
<Callout type="info">
  Important information here.
</Callout>

<Callout type="warning">
  Warning message here.
</Callout>
```

## Common Tasks

### Adding a new page
1. Create `content/[section]/new-page.mdx`
2. Add entry to `content/[section]/_meta.json`
3. Write MDX content

### Adding a new section
1. Create `content/[new-section]/` directory
2. Create `content/[new-section]/_meta.json`
3. Add section to `content/_meta.json`
4. Create `content/[new-section]/index.mdx`

### Updating navigation order
Edit the relevant `_meta.json` - order matches object key order.

## Deployment

Deployed to Google Cloud Run via Cloud Build. Auto-deploys on push to `main`.

```bash
# Manual deploy via Cloud Build trigger
gcloud builds triggers run bioquery-docs-deploy \
  --branch=main \
  --region=us-central1 \
  --project=bioquery-frontend

# Or direct deploy
cd docs/
gcloud builds submit --config=cloudbuild.yaml --project=bioquery-frontend
```

## Data Sources Reference

When documenting data sources, include:
- Full name and abbreviation
- Data types available
- Number of samples/patients
- Example queries

Current data sources:
- TCGA (The Cancer Genome Atlas) - 33 cancer types
- TARGET (Therapeutically Applicable Research) - 7 pediatric cancers
- GTEx (Genotype-Tissue Expression) - 54 normal tissues
- CCLE (Cancer Cell Line Encyclopedia) - ~1,000 cell lines
- CPTAC (Clinical Proteomic Tumor Analysis) - 10 cancer types
- GENIE (Genomics Evidence Neoplasia Information Exchange) - ~40,000 patients

## Style Guide

- Use sentence case for headings
- Keep paragraphs concise (2-3 sentences)
- Include code examples where relevant
- Link to related pages using relative paths
- Use tables for structured data
