# 🎬 SWAPNIL — THE SERIES
### A Cinematic, Episode-Driven Portfolio & Interactive Engineering Showcase

[![React 18](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6.3-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18-f01878?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lenis Smooth Scroll](https://img.shields.io/badge/Lenis-Smooth_Scroll-black)](https://lenis.darkroom.engineering/)
[![IEEE Research](https://img.shields.io/badge/IEEE_Research-Accepted_2026-00629b?logo=ieee&logoColor=white)](https://ieeexplore.ieee.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **"Have an idea worth building? Let's turn it into something real."**  
> An editorial, streaming-inspired personal portfolio engineering suite built for **Md. Miftahur Rahman Swapnil** — Co-Founder & CTO at **OpusGen AI**, Final Year CSE at **BUBT**, and first-author **IEEE** published researcher in Graph Neural Networks.

---

## 🌟 Overview & Concept

**Swapnil — The Series** reimagines the developer portfolio through a cinematic streaming paradigm. Instead of a standard static landing page, the visitor is greeted with an atmospheric studio sequence and an interactive streaming experience featuring:

- **Persona-Adaptive Storytelling:** 4 tailored viewer profiles (**Swapnil / Creator**, **Recruiter**, **Engineer**, and **Curious Visitor**) that dynamically rearrange sections and prioritize content for the visitor's focus.
- **Cinematic Originals Reel:** Sideways pinned horizontal scroll featuring live **4K video previews**, authentic browser chromes, OLED atmospheric back-glows, and interactive project modal billboards.
- **Episodic 4-Season Journey:** Structured problem-to-scale narrative organizing four distinct eras of engineering evolution from foundations to published science.
- **Peer-Reviewed Scientific Research:** Direct IEEE paper records detailing CurricuRAG (R-GCN) and Edge-Cloud Smart Classroom IoT mesh.
- **Multi-Channel Contact Deck:** Integrated background form dispatch (Formspree) backed by instant 1-click **Gmail Web Compose**, native mailto, and WhatsApp fail-safe bridges.

---

## 🏗️ Architectural Highlights

```
┌────────────────────────────────────────────────────────┐
│                   App (SmoothScroll)                   │
├───────────────────┬────────────────────────────────────┤
│  OpeningSequence  │ Cinematic Studio Card & Audio Cue  │
│  ProfileSelector  │ "Who's Watching?" Persona Router   │
├───────────────────┴────────────────────────────────────┤
│                       Home Deck                        │
├───────────────────┬────────────────────────────────────┤
│ Navbar            │ Dynamic Category & Profile Switch  │
│ Hero              │ Billboard Banner & Replay Cue      │
│ ContinueWatching  │ Quick-Jump Episodic Progress Bar   │
│ About             │ Origin Story, Credentials & Accents│
│ Seasons (1-4)     │ Impact & Value Matrix (12 Episodes)│
│ Originals         │ Horizontal Pinned 4K Media Reel    │
│ Research Field    │ IEEE OMLET & i-COSTE Paper Deepdive│
│ Top Picks         │ Curated Highlights Matrix          │
│ Skill Universe    │ Categorized Verified Stack Matrix  │
│ Moments           │ Key Milestones & Career Highlights │
│ Resume Section    │ Color / B&W PDF Reader Modals      │
│ FinalCTA          │ Resilient Multi-Provider Inbox Hub │
│ BackToTop         │ Portal-Mounted OLED Quick Jump     │
└───────────────────┴────────────────────────────────────┘
```

### 1. Persona-Adaptive Profiles
Selecting a profile instantly reorganizes the section sequence without page reloads:
- **Swapnil (Default):** The complete cinematic chronological sequence.
- **Recruiter:** Prioritizes **Resume**, **Originals**, and **Curated Top Picks** for 30-second talent evaluation.
- **Engineer:** Surfaces **Research**, **Architecture & Stack**, and GitHub links first.
- **Curious Visitor:** Streamlined visual journey highlighting personal stories, video production, and civic software.

### 2. High-Fidelity Originals Showcase
- **Video Previews:** Native Matroska (`.mkv`) and MP4 video streaming with dynamic decoding, automatic playback, pulsing `4K VIDEO` browser badges, and high-res poster fallbacks.
- **Device & Browser Chrome:** Realistic mac-style traffic light window headers with simulated SSL domain badges.
- **Dual Presentation:** Horizontal pinned desktop rail with smooth spring dynamics and mobile-first snap touch tracks.

### 3. Organized 4-Season Journey (The Impact Matrix)
- **Season 1 (2022–2023): Learning to Build** — Core Systems & Algorithms at BUBT, 51 Stories Creative Media, and Web3 / Biconomy Operations.
- **Season 2 (2024–2025): Solving Real-World Friction** — Edu51Portal campus hub (200+ students), ReliefLink Bangladesh flood disaster platform, and PawfectMatch mobile adoption.
- **Season 3 (2025–2026): Commercial Ventures & Autonomous AI** — OpusGen AI CTO generative studio, Mikasa 24/7 autonomous Telegram assistant, and client brand platforms.
- **Season 4 (2026–Future): Scientific Discovery & Future Tech** — CurricuRAG (Accepted IEEE OMLET 2026), Smart Classroom IoT (Accepted IEEE i-COSTE 2026), and Multi-Agent Systems.

### 4. Fail-Safe Contact Deck
- **Background Dispatch:** Seamlessly posts form data via JSON to Formspree (`VITE_CONTACT_ENDPOINT`).
- **Fail-Safe Fallback:** If third-party relays are unreachable, automatically opens **Gmail Web Compose** in 1 click with formatted subject and body so no client message is ever dropped.
- **Instant Messaging:** Direct 1-click WhatsApp and Telegram prefilled links.

---

## 🛠️ Tech Stack & Tooling

| Domain | Technology | Purpose |
|---|---|---|
| **Core Framework** | [React 18.3](https://react.dev/) | Component architecture, state hooks, and React DOM |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) | Strict type checking, zero untyped `any`, robust interfaces |
| **Build Tool** | [Vite 6.3](https://vitejs.dev/) | Sub-second HMR, optimized chunking, and modern ESM bundling |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-gen CSS-first styling, CSS variables, dark OLED theme |
| **Animation** | [Framer Motion 11.18](https://www.framer.com/motion/) | Spring physics, layout animations, exit transitions |
| **Smooth Scrolling**| [Lenis 1.1](https://lenis.darkroom.engineering/) | Hardware-accelerated cinematic inertia and scroll lock |
| **Form Dispatch** | [Formspree](https://formspree.io/) | Serverless form forwarding directly to Gmail |
| **Typography** | Bebas Neue, Oswald, Instrument Serif, Inter | Display titles, quotes, and readable UI |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js:** `v18.0.0` or later (`v20+` recommended)
- **Package Manager:** `npm` or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/Swapnil-360/Portfolio.git

# Navigate into the project directory
cd Portfolio

# Install dependencies using npm
npm install

# Or using pnpm
pnpm install
```

### Environment Configuration

Create a `.env` file in the root directory (you can copy `.env.example`):

```bash
cp .env.example .env
```

Set your contact form endpoint:

```env
# Optional: Formspree, Web3Forms, or custom API route
# If omitted, the contact form opens prefilled Gmail Web Compose directly
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id
```

### Local Development

Start the development server with Hot Module Replacement:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build & Verification

Run the TypeScript compiler and Vite production bundler:

```bash
# Type check and build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
Portfolio/
├── .agents/                 # AI Pair Programming rules, skills & workflows
├── public/                  # Static assets (images, videos, PDF resumes)
│   ├── images/projects/     # Genuine project screenshots & video previews
│   ├── videos/projects/     # 4K & HD project demonstration recordings
│   ├── resume.pdf           # Full color curriculum vitae
│   └── Bw-Resume.pdf        # Clean black & white ATS-optimized resume
├── src/
│   ├── components/          # Reusable UI & section components
│   │   ├── About.tsx        # Personal narrative, bio & credentials
│   │   ├── Achievements.tsx # Milestones & key career moments
│   │   ├── BackToTop.tsx    # Portal-mounted OLED floating scroll button
│   │   ├── ContinueWatching.tsx # Episodic quick-jump progress rail
│   │   ├── EpisodeCard.tsx  # Individual season episode card with 3D tilt
│   │   ├── FinalCTA.tsx     # Contact deck with Formspree & Gmail dispatch
│   │   ├── Hero.tsx         # Billboard hero with dynamic play triggers
│   │   ├── Navbar.tsx       # Dynamic navigation bar with profile switcher
│   │   ├── OpeningSequence.tsx # Cinematic studio opener & audio effects
│   │   ├── Originals.tsx    # Pinned horizontal title reel
│   │   ├── Poster.tsx       # Project media stage with video player & chrome
│   │   ├── ProfileSelector.tsx # "Who's watching?" profile picker
│   │   ├── ProjectCard.tsx  # Interactive project card with metadata
│   │   ├── ProjectModal.tsx # Fullscreen billboard project modal
│   │   ├── Research.tsx     # IEEE accepted research paper showcase
│   │   ├── ResumeViewer.tsx # Resume viewer section & modal trigger
│   │   ├── Seasons.tsx      # 4-Season Journey with tabbed switcher
│   │   ├── Skills.tsx       # Interactive technology matrix
│   │   └── TopPicks.tsx     # Curated top recommendations
│   ├── data/
│   │   └── portfolio.ts     # Central source of truth (projects, seasons, bio)
│   ├── hooks/
│   │   ├── smoothScroll.tsx # Lenis integration context & control hooks
│   │   └── useMedia.ts      # Responsive viewport & reduced-motion hooks
│   ├── App.tsx              # Application root, stage machine & modal manager
│   ├── index.css            # Tailwind CSS v4 design tokens & base rules
│   ├── main.tsx             # DOM root mount
│   └── vite-env.d.ts        # Vite client type definitions
├── .env.example             # Template for environment variables
├── .gitignore               # Comprehensive git exclusions
├── index.html               # HTML5 shell with meta tags & favicons
├── package.json             # NPM package dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build & chunking configuration
```

---

## 🎨 Design Philosophy & Tokens

- **Canvas Palette:** Cinematic OLED dark canvas (`#07070a`), secondary surface (`#0e0e13`), and card elevated (`#16161d`).
- **Brand Accents:** Netflix Crimson (`#e50914` / `#ff2a44`), Laurel Gold (`#d9b46a`), Emerald Badge (`#10b981`), Cobalt (`#3b82f6`), and Violet (`#8b5cf6`).
- **Typography:**
  - Headlines & Numbers: `Bebas Neue` / `Oswald`
  - Quotes & Editorial Accents: `Instrument Serif`
  - Clean UI & Data: `Inter`
- **Accessibility:**
  - Strict WCAG 2.1 compliance with high-contrast text ratios.
  - Full keyboard navigability (`Tab`, `Enter`, `Escape`).
  - Native `prefers-reduced-motion` detection across all Framer Motion springs.
  - Zero body-level horizontal overflow (`overflow-x: clip`).

---

## 🚢 Deployment (Vercel)

This project is optimized for deployment on **Vercel**:

1. Push your code to your GitHub repository.
2. Import the repository into the **Vercel Dashboard**.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build` (or `pnpm build`).
5. Output Directory: `dist`.
6. Under **Environment Variables**, add:
   ```env
   VITE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id
   ```
7. Click **Deploy**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, learn, and adapt the code for your own creative experiences.

---

## 👤 Author & Contact

**Md. Miftahur Rahman Swapnil**  
*Product Designer & Builder · Co-Founder & CTO @ OpusGen AI*  
📍 Dhaka, Bangladesh  

- 🌐 **Portfolio:** [mrswapnil.me](https://www.mrswapnil.me/)
- 💼 **LinkedIn:** [linkedin.com/in/mr-swapnil](https://www.linkedin.com/in/mr-swapnil/)
- 🐙 **GitHub:** [github.com/Swapnil-360](https://github.com/Swapnil-360)
- 💬 **WhatsApp:** [+880 1318-090383](https://wa.me/8801318090383)
- ✈️ **Telegram:** [@swapnil360](https://t.me/swapnil360)
- 📧 **Email:** [miftahurr503@gmail.com](mailto:miftahurr503@gmail.com)

