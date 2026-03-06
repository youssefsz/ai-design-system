# AI Promoted Design System

## Overview

This repository serves as a centralized collection of high fidelity design models and aesthetic templates. It provides a structured approach for generating and referencing specific visual styles using HTML and Tailwind CSS. The primary purpose of this repository is to act as a source of truth for various design languages, ensuring consistency and precision when prompting artificial intelligence for frontend development.

## Project Structure

The design system is categorized into two primary collections of models:

- Gimini Models
- GPT Models

Each file within these directories functions as a standalone design template. Crucially, every template includes an embedded instruction block at the top of the document. These instructions document the precise rules required to replicate the specific aesthetic, covering typography, color palettes, spacing constraints, CSS effects, and layout architectures.

## Included Aesthetics

### Gimini Models

- Corporate Geometric: Enterprise grade, clean, minimal, and highly professional. Uses a trustworthy corporate palette with fine gradients.
- Dark Cyber: Retro futuristic hacker terminal style. Features glowing neon interfaces, scanlines, and strict monospace typography.
- Glass Frost: Ethereal, translucent, and premium. Focuses on heavy glassmorphism, vibrant blurred background blobs, and soft edges.
- Neo Brutalist: Rebellious, raw, and high contrast. Characterized by thick solid borders, hard offset shadows, and quirky typography.
- Organic Soft: Serene, holistic, and luxurious. Uses a warm low contrast earthy palette, editorial serifs, and organic blob shapes.
- Swiss Minimal: Strict International Typographic Style. Features mathematical precision, monochromatic foundations, and a single aggressive accent color.

### GPT Models

- Editorial Grid: Premium, journalistic, and typographic driven. Relies heavily on disciplined spacing and elegant serif headlines.
- Glass Atlas: Deep tech, data heavy, and cinematic. Combines deep space backgrounds with layered frosted panels and glowing accents.
- Kinetic Wave: Fast, fluid, and modern. Built around high energy motion, absolute black backgrounds, and saturated neon elements.
- Mono Architect: Clinical, exact, and restrained. An infrastructure style that is highly calculated, featuring absolute zero border radius and graph paper grids.
- Signal Brutalist: Loud, physical, and decision making design. Utilizes vintage paper backgrounds, heavy outlines, and pure primary colors.
- Solaris Luxe: Tactile, warm, and expensive. Designed for hospitality, featuring soft ambient lighting, massive soft shadows, and classic typography.

## Usage Guidelines

To apply a specific design language to a new project, navigate to the desired HTML template within the repository. Locate the embedded comment block at the top of the source code. This text can be extracted and supplied directly to any AI generation tool to ensure the resulting output strictly adheres to the predefined aesthetic rules.

## Technical Foundation

All templates within this repository are built exclusively with:

- HTML5
- Tailwind CSS (via CDN for portability)
- Standardized Web Fonts (Google Fonts API)
