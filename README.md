# GenevaJUG Website

This is the official website for the Geneva Java User Group, built with [Astro](https://astro.build/) and deployed on GitHub Pages.

## Setup

### Prerequisites
- Node.js 22.23.4+ and npm

### Installation

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:4321`

### Build

To build the website for production:

```bash
npm run build
```

The compiled website will be in the `dist/` directory.

## Content Management

### Adding a Session/Event

Create a new markdown file in the `src/content/posts/` directory with the naming convention: `src/content/posts/{locale}-YYYY-MM-DD-event-name.md`

**Example:** `src/content/posts/en-2024-06-25-event-sourcing.md`

The file consists of two parts:
1. **Front matter** (metadata) - delimited by three dashes (`---`)
2. **Content** - markdown or HTML format

#### Available Metadata

- `title` (required): Event title
- `locale` (required): Language code (`en` or `fr`)
- `speaker` (optional): Speaker identifier(s) - can be a string or array
  - Example: `speaker: nicolas_piguet` or `speaker: [nicolas_piguet, david_pilato]`
- `img` (optional): Session image URL
- `slideshare` (optional): SlideShare presentation ID(s)
- `location` (optional): Event venue name
- `locationlink` (optional): URL to venue website
- `address` (optional): Full venue address
- `transport` (optional): Nearby public transportation stops
- `parking` (optional): Nearby parking options
- `eventbrite` (optional): EventBrite ticket reference
- `eventbriteid` (optional): EventBrite event ID

#### Example (English)

```markdown
---
title: Event Sourcing - Reliability and Performance
locale: en
speaker:
  - nicolas_piguet
  - david_pilato
location: Foound
locationlink: https://www.foound.ch/
address: Rue Jean-Dassier 7, 1201 Genève
transport: Gare Cornavin, TPG Stops
parking: HEPIA building
---

## Event Description

This is the markdown content for the event...
```

#### Example (French)

```markdown
---
title: Event Sourcing - Fiabilité et Performance
locale: fr
speaker:
  - nicolas_piguet
  - david_pilato
location: Foound
locationlink: https://www.foound.ch/
address: Rue Jean-Dassier 7, 1201 Genève
transport: Gare Cornavin, TPG Stops
parking: HEPIA building
---

## Description de l'événement

Ceci est le contenu markdown pour l'événement...
```

**Note:** Each session must have both an English and French version:
- `src/content/posts/en-YYYY-MM-DD-slug.md` - English version
- `src/content/posts/fr-YYYY-MM-DD-slug.md` - French version

### Adding a Speaker

Create a new markdown file in the `src/content/speakers/` directory with the naming convention: `src/content/speakers/{locale}-YYYY-MM-DD-speaker-id.md`

**Example:** 
- `src/content/speakers/en-2024-06-25-nicolas_piguet.md`
- `src/content/speakers/fr-2024-06-25-nicolas_piguet.md`

The speaker ID is extracted from the filename (everything after the date) and used in URLs and links.

#### Available Metadata

- `title` (required): Speaker's full name
- `locale` (required): Language code (`en` or `fr`)

#### Speaker Image

Add a speaker image to the `public/speakers/` directory with the filename matching the speaker ID.

**Supported formats:** `.jpg` or `.png`

**Example:** `public/speakers/nicolas_piguet.jpg`

**Image dimensions:** Any size (will be cropped/styled by CSS)

#### Example

```markdown
---
title: Nicolas Piguet
locale: en
---

Nicolas Piguet is a Principal Software Engineer at Swissquote...
```

## Project Structure

```
├── src/
│   ├── components/           # Astro components
│   ├── content/              # Content collections
│   │   ├── config.ts         # Content schema definitions
│   │   ├── posts/            # Session/event posts
│   │   │   ├── en-*.md       # English sessions
│   │   │   └── fr-*.md       # French sessions
│   │   └── speakers/         # Speaker profiles
│   │       ├── en-*.md       # English speakers
│   │       └── fr-*.md       # French speakers
│   ├── pages/                # Astro pages and routes
│   │   ├── index.astro       # EN: homepage
│   │   ├── session/          # EN: /session/[slug]
│   │   ├── speaker/          # EN: /speaker/[slug]
│   │   └── fr/               # FR translations
│   │       ├── index.astro   # FR: /fr homepage
│   │       ├── session/      # FR: /fr/session/[slug]
│   │       └── speaker/      # FR: /fr/speaker/[slug]
│   └── utils/                # Utility functions
├── public/
│   ├── speakers/             # Speaker images
│   └── images/               # Event images
├── dist/                      # Built website (generated)
└── astro.config.mjs          # Astro configuration
```

## Building and Deploying

The website is automatically built and deployed to GitHub Pages when pushing to the main branch.

### Manual Deployment

```bash
npm run build
```

The `dist/` directory contains the static website ready for deployment.

## Technologies

- **Astro** - Static site generator with content collections
- **Markdown** - Content format with YAML frontmatter
- **CSS** - Styling with CSS variables for theming
- **JavaScript** - Interactive features (theme toggle, language switching)

## Features

- **Bilingual support** - English and French content
- **Content collections** - Type-safe content management with schemas
- **Dark mode toggle** - Theme customization
- **Responsive design** - Mobile-first approach
- **Session and speaker management** - Bilingual post and speaker profiles
- **Static site generation** - Optimal performance and SEO

## License

Please check the LICENSE file for details.
