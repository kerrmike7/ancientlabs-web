# Essay Publishing Guide

This guide explains how to publish long-form essays to the `/insights` section of the site.

## Workflow: Notion → Paste → Publish

### Step 1: Duplicate the template

1. Navigate to `content/essays/_TEMPLATE.md`
2. Copy the file and rename it to your essay slug (e.g., `data-foundations-2026.md`)
3. **Important:** Keep the `_TEMPLATE.md` file unchanged—it's the master template.

### Step 2: Fill in the frontmatter

Edit the YAML frontmatter at the top of your new file:

```yaml
title: "Your Essay Title"
slug: "your-essay-slug"  # URL-friendly, lowercase, hyphens
date: "2026-01-15"       # YYYY-MM-DD format
summary: "1–2 sentence summary used on /insights and for SEO."
tags: ["ai", "systems"]  # Array of relevant tags
status: "draft"          # Set to "published" when ready
heroImage: "/images/essays/your-image.jpg"  # Optional
heroImageAlt: "Short alt text"  # Optional, but recommended if heroImage is set
```

**Status values:**
- `draft`: Essay won't appear on `/insights` (useful for WIP)
- `published`: Essay appears on `/insights` and is accessible via `/insights/[slug]`

### Step 3: Paste from Notion

1. Write your essay in Notion (or your preferred editor)
2. Copy the content
3. Paste into your markdown file below the frontmatter
4. **Clean up formatting:**
   - Convert Notion headings to markdown (`#`, `##`, `###`)
   - Convert Notion lists to markdown (`-` or `1.`)
   - Convert Notion bold/italic to markdown (`**bold**`, `*italic*`)
   - Remove any Notion-specific syntax

### Step 4: Add images (optional)

1. Place images in `public/images/essays/`
2. Reference them in markdown: `![Alt text](/images/essays/your-image.jpg)`
3. Add captions: `![Alt text](/images/essays/your-image.jpg)\n*Caption text.*`

**Image guidelines:**
- Use descriptive filenames (e.g., `reconciliation-flow.png`)
- Optimize images before committing (keep file sizes reasonable)
- Always include alt text for accessibility

### Step 5: Publish

1. Set `status: "published"` in the frontmatter
2. Commit and push:
   ```bash
   git add content/essays/your-essay-slug.md
   git commit -m "Publish essay: Your Essay Title"
   git push
   ```
3. The essay will appear on `/insights` (sorted by date, newest first)
4. Access it directly at `/insights/your-essay-slug`

## Structure Guidelines

Follow the template structure for consistency:

- **H1 title** (matches frontmatter `title`)
- **Subheadline** (bold, one sentence)
- **What this is (and who it's for)** — Context section
- **The core argument** — Main content with subsections
- **A simple model** (optional) — Diagrams, lists, tables
- **How to apply this** — Practical steps
- **Closing** — Memorable conclusion
- **Notes** (optional) — Footnotes, references

## Best Practices

- **Tone:** Executive, calm, readable. No hype.
- **Length:** Aim for 1,500–3,000 words for long-form essays
- **Formatting:** Use short paragraphs, clear headings, bullet lists
- **Links:** Use relative links for internal pages, absolute URLs for external
- **Code:** Use code fences for technical examples (`` `code` `` or ``` blocks)

## Troubleshooting

**Essay doesn't appear on `/insights`:**
- Check that `status: "published"` in frontmatter
- Verify the date format is `YYYY-MM-DD`
- Check for syntax errors in frontmatter (must be valid YAML)

**Images not loading:**
- Verify path starts with `/images/essays/` (not `./images/...`)
- Check that image file exists in `public/images/essays/`
- Ensure image filename matches exactly (case-sensitive)

**Build errors:**
- Run `npm run build` locally to catch frontmatter/syntax issues
- Check console for specific error messages
