# Hero Image Specification

## Image Requirements

**File Location:** `/public/hero-dashboard.jpg`

**Dimensions:** 
- Recommended: 1200x1200px (square) or 1600x1200px (4:3)
- Minimum: 800x600px
- Format: JPG or WebP

## Visual Description

A minimalist, monochrome-toned image representing production data systems and analytics infrastructure.

### Mood & Style
- **Mood:** Calm, precise, operational — not futuristic or flashy
- **Style:** Documentary tech photography, understated, non-marketing
- **Feeling:** Institutional, trustworthy, systems-first, mid-market SaaS infrastructure

### Visual Elements
- Abstracted dashboard panels with line charts, metrics, and system indicators
- Softly out of focus and partially cropped
- No people, no logos, no AI imagery, no glowing effects

### Color Palette
- **Primary:** Charcoal (#2C3E50), Slate (#475569)
- **Accents:** Muted blue (#64748B), muted green (#6B7280)
- **Neutral:** Grays, whites
- **Avoid:** Neon, sci-fi colors, dramatic gradients

### Composition
- Designed to sit beside website hero text without competing for attention
- Should feel like a subtle background element that supports the text
- Soft focus/blur on edges to create depth
- Partial cropping suggests continuation beyond frame

### Technical Notes
- Image will be displayed with:
  - `opacity-90` (slight transparency)
  - `grayscale(0.3)` filter (subtle desaturation)
  - `contrast(0.95)` filter (slight contrast reduction)
  - `brightness(0.98)` filter (slight darkening)
- These filters ensure the image doesn't compete with text

## Generation Prompt

Use this exact prompt for generation or refinement:

```
A minimalist, monochrome-toned image representing production data systems and analytics infrastructure.

The image should feel calm, precise, and operational — not futuristic or flashy.

Show abstracted dashboard panels with line charts, metrics, and system indicators, softly out of focus and partially cropped.

No people. No logos. No AI imagery. No glowing effects.

Neutral color palette (charcoal, slate, muted blue/green accents).

Designed to sit beside website hero text without competing for attention.

Mood: institutional, trustworthy, systems-first, mid-market SaaS infrastructure.

Style: documentary tech photography, understated, non-marketing.
```

### Negative Prompts (if supported)
```
no neon, no sci-fi, no robots, no holograms, no faces, no gradients, no dramatic lighting
```

## Implementation Status

- ✅ Hero section layout updated to accommodate image
- ✅ Image component added with appropriate styling
- ⏳ Image file needs to be generated and placed in `/public/hero-dashboard.jpg`

## Fallback

If the image is not present, the hero section will display an error. To temporarily disable the image while generating it, comment out the image `<div>` in `src/app/page.tsx`.
