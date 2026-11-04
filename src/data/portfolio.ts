/**
 * Central portfolio data for Md. Miftahur Rahman Swapnil.
 * Sourced directly from verified project assets, research papers, and production systems.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const crimson: Palette = {
  from: "#33080e",
  via: "#170407",
  to: "#07070a",
  accent: "#ff2a44",
};
export const violet: Palette = {
  from: "#1a0d33",
  via: "#0c0717",
  to: "#07070a",
  accent: "#b462ff",
};
export const amber: Palette = {
  from: "#2b1807",
  via: "#140c04",
  to: "#07070a",
  accent: "#ffaa33",
};
export const jade: Palette = {
  from: "#06261c",
  via: "#03120d",
  to: "#07070a",
  accent: "#2ee6a8",
};
export const ocean: Palette = {
  from: "#061c2e",
  via: "#030d17",
  to: "#07070a",
  accent: "#38bdf8",
};
export const cobalt: Palette = {
  from: "#0f172a",
  via: "#090d17",
  to: "#07070a",
  accent: "#6366f1",
};

export const profile = {
  fullName: "Md. Miftahur Rahman Swapnil",
  displayName: "Swapnil",
  firstName: "SWAPNIL",
  seriesTag: "THE SERIES",
  originalLabel: "A SWAPNIL PRODUCTION",
  role: "Product Designer & Builder",
  heroRoleTag: "PRODUCT DESIGNER & BUILDER • CO-FOUNDER & CTO @ OPUSGEN AI • AI, FRONTEND & AUTOMATION",
  tagline: [
    "Product Designer & Builder",
    "Co-Founder & CTO @ OpusGen AI",
    "AI, Frontend & Automation",
  ],
  headline:
    "Product Designer & Builder • Co-Founder & CTO @ OpusGen AI • AI, Frontend & Automation",
  intro:
    "I am Md. Miftahur Rahman Swapnil, a developer studying Computer Science & Engineering at BUBT (Dhaka, Bangladesh). Product Designer & Builder with an innovative and curious mindset, always exploring new ideas, technologies, and ways to turn them into working products. I specialize in building high-performance web applications and autonomous AI agents (Mikasa, n8n, Supabase pgvector) using modern AI-assisted engineering. Creator of Edu51Portal, final year CSE at BUBT.",
  location: "Dhaka, Bangladesh",
  coordinates: "23.8103° N, 90.4125° E",
  email: "miftahurr503@gmail.com",
  whatsappNumber: "+8801318090383",
  links: {
    linkedin: "https://www.linkedin.com/in/mr-swapnil/",
    github: "https://github.com/Swapnil-360",
    whatsapp: "https://wa.me/8801318090383",
    telegram: "https://t.me/swapnil360",
    x: "https://x.com/thomascryptoxx",
    facebook: "https://www.facebook.com/mr.swapnil360/",
    instagram: "https://www.instagram.com/callmeswap/",
    portfolio: "https://www.mrswapnil.me/",
  },
  resumePdf: "/resume.pdf",
  resumeBwPdf: "/Bw-Resume.pdf",
  portrait: {
    src: "/images/pfp-b&g.png",
    srcSet: "/images/pfp-b&g.png 720w, /images/pfp-b&g.png 1100w",
    alt: "Portrait of Md. Miftahur Rahman Swapnil",
  },
  interests: [
    "Product Engineering",
    "Frontend & Mobile (Kotlin, Flutter, React Native)",
    "Generative AI & Diffusion Models",
    "Autonomous AI Agents (n8n)",
    "Web3 Ecosystems & Biconomy BD",
    "Smart Classroom IoT & ESP32",
    "Knowledge Graphs & RAG",
    "Creative Direction & Motion",
  ],
};

export const education = [
  {
    school: "Bangladesh University of Business and Technology (BUBT)",
    place: "Dhaka, Bangladesh",
    degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
    period: "2022 – 2026 (Expected)",
    score: "CGPA: 3.60 / 4.00",
    cohort: "Intake 51",
  },
  {
    school: "Shaheed Police Smrity College",
    place: "Dhaka, Bangladesh",
    degree: "Higher Secondary Certificate (HSC) — Science",
    period: "2021",
    score: "GPA: 5.00 / 5.00",
  },
  {
    school: "Kadirabad BL High School, Pirganj, Rangpur",
    place: "Rangpur, Bangladesh",
    degree: "Secondary School Certificate (SSC) — Science",
    period: "2019",
    score: "GPA: 5.00 / 5.00",
  },
];

export const experience = [
  {
    company: "OpusGen AI",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    place: "Dhaka / Remote",
    period: "2025 – Present",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Diffusion AI APIs",
      "Vercel",
    ],
    points: [
      "Co-founded OpusGen AI to eliminate the high costs and delays of commercial product photography for e-commerce brands.",
      "Lead product engineering, frontend architecture, and diffusion model pipelines with Next.js 14 App Router, Tailwind CSS, and Supabase.",
      "Engineered one-click studio background replacement, canvas expansion, and 4x upscaling workflows operating with sub-3s response times.",
    ],
  },
  {
    company: "Edu51Portal",
    role: "Founder & Lead Developer",
    place: "BUBT, Dhaka",
    period: "2024 – Present",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Google Drive API",
      "Vercel",
    ],
    points: [
      "Built a student-first academic hub to solve lecture slide fragmentation and class routine confusion for our BUBT CSE department.",
      "Engineered interactive routine filtering, centralized course vaults, and Google Drive cloud streaming now serving 200+ students daily.",
      "Actively iterate based on student and faculty feedback, maintaining continuous releases on Vercel.",
    ],
  },
  {
    company: "Mikasa AI",
    role: "Creator & System Architect",
    place: "Dhaka, Bangladesh",
    period: "2025 – Present",
    stack: [
      "n8n Workflows",
      "Node.js",
      "Telegram Bot API",
      "Supabase",
      "Gemini Flash",
      "OpenRouter",
    ],
    points: [
      "Architected a 24/7 personal executive assistant on Telegram using event-driven n8n workflows and conversational context memory.",
      "Built local PC execution bridges, cloud webhook routing, and multi-model failover for continuous autonomous task management.",
    ],
  },
  {
    company: "Web3 Ecosystems & Biconomy",
    role: "Listing Partner & Community Operations Lead",
    place: "Remote / Global",
    period: "2022 – Present",
    stack: [
      "Biconomy Listing Partner",
      "Telegram Ops",
      "Lead Generation",
      "Project BD",
      "Community Growth & Raids",
      "Discord",
    ],
    points: [
      "3+ years hands-on operational experience in crypto/Web3, driving Telegram & Discord community management, moderation, and community raids.",
      "Served as a Biconomy listing partner, communicating directly with crypto project teams regarding exchange listings, marketing, liquidity, and commercial arrangements.",
      "Led crypto project sourcing and lead generation; built internal workflows and tracking tools for discovering, evaluating, and contacting prospective crypto initiatives.",
    ],
  },
  {
    company: "Independent / Freelance",
    role: "Full-Stack & Mobile Software Engineer",
    place: "Dhaka, Bangladesh",
    period: "2023 – Present",
    stack: [
      "Next.js / React",
      "Kotlin & Jetpack Compose",
      "Flutter",
      "React Native",
      "Supabase & Firebase",
      "Vercel",
    ],
    points: [
      "Hands-on CSE builder developing responsive web applications and cross-platform mobile apps using Kotlin/Jetpack Compose, React Native, and Flutter.",
      "Shipped active products including ReliefLink Bangladesh (disaster relief network), Pawfect Match (mobile pet adoption in React Native), and MuteBD (native Kotlin accessibility).",
      "Architected cloud backends and real-time databases using Supabase and Firebase, integrating auth, REST/GraphQL APIs, and AI/video generation pipelines.",
    ],
  },
  {
    company: "51 Stories & Tour Buddies",
    role: "Lead Video Editor & Graphics Designer",
    place: "Dhaka, Bangladesh",
    period: "2022 – Present",
    stack: [
      "Figma",
      "CapCut Pro",
      "Adobe Premiere Pro",
      "Photoshop",
      "AI Visual Concepts",
    ],
    points: [
      "Lead video editor and graphics designer for '51 Stories', producing engaging community content, reels, and visual branding.",
      "Lead video editor and graphics designer for 'Tour Buddies', editing travel vlogs, promotional videos, and creative digital assets.",
      "Designed UI concepts, thumbnails, banners, and promotional visuals; collaborated with creative video teams and crafted AI visual concepts for OpusGen AI.",
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  genre: string;
  categoryLabel: string;
  logline: string;
  description: string;
  stack: string[];
  features: string[];
  metrics: Metric[];
  status: "Live" | "Research" | "Completed" | "In Progress";
  image: string;
  video?: string;
  aspectRatio?: "16/9" | "16/10" | "9/16" | "4/3";
  domain?: string;
  mediaType?: "video" | "image";
  gallery?: string[];
  liveUrl?: string;
  github?: string;
  palette: Palette;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "mikasa-ai",
    title: "Mikasa — Personal AI Assistant",
    subtitle: "My 24/7 Personal Executive Assistant on Telegram Powered by n8n",
    year: "2026",
    genre: "AI · Agents · Automation",
    categoryLabel: "Personal AI Companion",
    logline:
      "A personal AI assistant I built on Telegram with n8n workflows, conversational memory, and direct bridges to my local PC actions.",
    description:
      "I built Mikasa because I wanted a reliable personal AI companion that actually remembers my context and helps me stay organized throughout the day. Using n8n workflow automation, Supabase for long-term memory, and Telegram as the interface, Mikasa lets me capture quick voice and text notes, schedule tasks, trigger scripts on my local PC, and query information on the go.",
    stack: [
      "n8n",
      "Node.js",
      "Telegram Bot API",
      "Supabase",
      "Gemini 2.5 Flash Lite",
      "OpenRouter API",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "n8n visual workflow orchestration for event routing and automated task queues",
      "Conversational memory that understands message replies and ongoing context",
      "Supabase vector memory vault storing notes, links, and personal context",
      "Local PC bridge daemon to run commands and file actions from Telegram",
      "Multi-LLM failover balancing fast Gemini Flash Lite with OpenRouter models",
    ],
    metrics: [
      { value: "24/7", label: "Always Online" },
      { value: "< 1.2s", label: "Avg Latency" },
      { value: "Multi-LLM", label: "Smart Routing" },
    ],
    status: "Live",
    image: "/images/projects/mikasa.jpg",
    video: "/videos/projects/mikasa.mp4",
    aspectRatio: "16/9",
    domain: "mikasa.mrswapnil.me",
    mediaType: "video",
    gallery: [
      "/images/projects/mikasa.jpg",
      "/images/projects/mikasa_logo.jpg",
    ],
    liveUrl: "https://mikasa.mrswapnil.me/",
    github: "https://github.com/Swapnil-360/personal-ai-assistant",
    palette: crimson,
    featured: true,
  },
  {
    id: "opusgen-ai",
    title: "OpusGen AI",
    subtitle: "Co-Founder & CTO · AI Visual Studio & Marketing Platform",
    year: "2026",
    genre: "Generative AI · SaaS · Co-Founder & CTO",
    categoryLabel: "Co-Founder & CTO",
    logline:
      "As Co-Founder & CTO, I lead engineering and design at OpusGen AI — an AI platform turning raw product photos into studio-grade commercial visuals in seconds.",
    description:
      "Commercial product photography is slow and expensive for e-commerce brands and solo creators. I co-founded OpusGen AI as CTO to make studio-quality product visual creation instant. I built the full-stack architecture using Next.js 14 App Router, integrating diffusion models for background replacement, canvas expansion, and 4x upscaling with under 3s response times.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Stable Diffusion API",
      "Canvas API",
      "Supabase",
      "Vercel Serverless",
    ],
    features: [
      "Co-Founder & CTO leading technical architecture, UX design, and model pipelines",
      "One-click neural background replacement with realistic studio lighting",
      "Generative canvas expansion and uncropping pipeline for social ad formats",
      "High-resolution 4x neural image upscaling optimized for e-commerce catalogs",
      "Fast sub-3 second image synthesis built on Next.js 14 and edge functions",
    ],
    metrics: [
      { value: "Co-Founder", label: "CTO Role" },
      { value: "Next.js 14", label: "App Router" },
      { value: "Sub-3s", label: "Generation" },
    ],
    status: "Live",
    image: "/images/projects/opusgen_real.png",
    video: "/images/projects/OpusGen-Preview.mkv",
    aspectRatio: "16/9",
    domain: "opusgenai.com",
    mediaType: "video",
    gallery: [
      "/images/projects/opusgen_real.png",
      "/images/projects/opusgen.jpg",
    ],
    liveUrl: "https://opusgenai.com",
    github: "https://github.com/Swapnil-360/OpusGenAi2.0",
    palette: amber,
    featured: true,
  },
  {
    id: "edu51portal-bubt",
    title: "Edu51Portal — BUBT Full Dept",
    subtitle:
      "Department-Scale Academic Resource & Routine Hub Serving 200+ Students",
    year: "2025–2026",
    genre: "Academic Web · Full-Stack",
    categoryLabel: "Department Platform",
    logline:
      "A centralized academic platform I created to solve schedule confusion and slide hunting for our university computer science department.",
    description:
      "Every semester, class routines changed and study materials were scattered across WhatsApp chats and broken drive links. I created Edu51Portal to fix this for my classmates. What started as a small project for intake 51 now serves over 200 students daily across our department with instant routine filtering, course materials, and teacher schedules.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Google Drive API",
      "Vercel Edge",
    ],
    features: [
      "Complete BUBT CSE intake course repositories and lecture slide vaults",
      "Real-time interactive class schedules with quick day/section filtering",
      "Google Drive document streaming with smart caching layer",
      "Department notices and academic calendar synchronizer",
    ],
    metrics: [
      { value: "200+", label: "Daily Students" },
      { value: "Department", label: "Wide Adoption" },
      { value: "100%", label: "Mobile Responsive" },
    ],
    status: "Live",
    image: "/images/projects/edu51_bubt_real.png",
    video: "/videos/projects/edu51.mp4",
    aspectRatio: "16/9",
    domain: "bubt.edu51portal.live",
    mediaType: "video",
    gallery: [
      "/images/projects/edu51_bubt_real.png",
      "/images/projects/edu51_real.jpeg",
    ],
    liveUrl: "https://bubt.edu51portal.live/",
    github: "https://github.com/Swapnil-360/Edu51Five",
    palette: jade,
    featured: true,
  },
  {
    id: "prince-portfolio",
    title: "Portfolio for Prince",
    subtitle: "Cinematic Client Portfolio & Personal Brand Platform",
    year: "2026",
    genre: "Client Work · Next.js · Motion",
    categoryLabel: "Client Web Experience",
    logline:
      "High-conversion personal brand website for digital marketing expert Prince, engineered with Framer Motion and sub-2-second load times.",
    description:
      "Designed and developed custom portfolio for client Prince to present their creative campaigns, client roster, and service booking. Engineered with Next.js App Router, Framer Motion choreography, and performance-tuned responsive layouts.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    features: [
      "Tailored responsive layouts with mobile-first fluidity",
      "Framer Motion interactive micro-animations and smooth page choreography",
      "Optimized performance achieving sub-2-second load times",
    ],
    metrics: [
      { value: "< 2s", label: "Load Time" },
      { value: "100%", label: "Responsive" },
      { value: "Framer", label: "Choreography" },
    ],
    status: "Live",
    image: "/images/projects/prince_real.png",
    aspectRatio: "16/10",
    domain: "sbprince.com",
    mediaType: "image",
    gallery: [
      "/images/projects/prince_real.png",
      "/images/projects/prince.jpg",
    ],
    liveUrl: "https://www.sbprince.com/",
    palette: cobalt,
    featured: false,
  },
  {
    id: "pawfect-match",
    title: "PawfectMatch",
    subtitle: "Mobile Animal Adoption & Rescue Community Platform",
    year: "2024–Present",
    genre: "Mobile App · React Native · UI/UX",
    categoryLabel: "Mobile Application",
    logline:
      "Cross-platform mobile application uniting animal shelters, rescue volunteers, and adopters through a streamlined pet discovery experience.",
    description:
      "Designed complete user journey in Figma and built front-end components using React Native. Simplifies rescue adoption through swipeable pet cards, shelter direct messaging, and verified vaccination statuses.",
    stack: ["React Native", "Figma", "Firebase", "Expo", "Mobile UI/UX"],
    features: [
      "Interactive pet profile discovery and swipe card interface",
      "Search filtering by breed, age, vaccination status, and shelter distance",
      "Direct shelter messaging and digital adoption inquiry forms",
    ],
    metrics: [
      { value: "React Native", label: "Cross-Platform" },
      { value: "Figma", label: "Design System" },
      { value: "Firebase", label: "Realtime DB" },
    ],
    status: "In Progress",
    image: "/images/projects/pawfect_gh_real.png",
    aspectRatio: "16/9",
    domain: "Expo / React Native",
    mediaType: "image",
    gallery: [
      "/images/projects/pawfect_gh_real.png",
      "/images/projects/pawfect.jpg",
    ],
    github: "https://github.com/orgs/PawfectMatch2-0/repositories",
    palette: amber,
    featured: false,
  },
  {
    id: "mutebd",
    title: "MuteBD",
    subtitle:
      "Accessibility & Sign Assist Platform for Hearing-Impaired Citizens",
    year: "2024",
    genre: "Android · Kotlin · Accessibility",
    categoryLabel: "Android Kotlin App",
    logline:
      "Native mobile accessibility application conceptualized for the speech and hearing-impaired community in Bangladesh.",
    description:
      "Built to address everyday accessibility barriers by offering localized visual sign assistance, pre-composed Bengali emergency communication cards, and vibrating visual alerts.",
    stack: ["Kotlin", "Android SDK", "Material Design", "Accessibility APIs"],
    features: [
      "Categorized emergency visual communication cards in Bengali",
      "High-contrast accessible interface engineered for bright outdoor visibility",
      "Offline-first phrase generation for urgent assistance",
    ],
    metrics: [
      { value: "Kotlin", label: "Native Android" },
      { value: "Offline", label: "First Capability" },
      { value: "Bengali", label: "Localized Signs" },
    ],
    status: "Completed",
    image: "/images/projects/mutebd_gh_real.png",
    aspectRatio: "16/9",
    domain: "Android Kotlin App",
    mediaType: "image",
    gallery: [
      "/images/projects/mutebd_gh_real.png",
      "/images/projects/mutebd.jpg",
    ],
    github: "https://github.com/Swapnil-360",
    palette: ocean,
    featured: false,
  },
  {
    id: "escaperoom-3d",
    title: "3D Escape Room Game",
    subtitle: "First-Person 3D Puzzle Game Built From Scratch in Pure C",
    year: "2024",
    genre: "Graphics · OpenGL · Pure C",
    categoryLabel: "Computer Graphics in C",
    logline:
      "First-person 3D puzzle escape environment engineered in pure C with OpenGL / freeglut without third-party game engines.",
    description:
      "Computer graphics showcase: constructed 3D perspective projections, 6-DOF camera Euler navigation, Phong illumination (ambient, diffuse, specular), and puzzle collision triggers from mathematical first principles in C.",
    stack: ["C", "OpenGL", "freeglut", "Linear Algebra", "3D Math"],
    features: [
      "6-DOF camera Euler pitch/yaw navigation",
      "Custom Phong illumination pipeline (ambient, diffuse, specular lighting)",
      "Interactive room puzzle triggers, collectible clues, and exit locks",
      "Real-time polygon rendering loop optimized for 60 FPS",
    ],
    metrics: [
      { value: "60 FPS", label: "Real-time Loop" },
      { value: "Pure C", label: "No Game Engine" },
      { value: "OpenGL", label: "Phong Shading" },
    ],
    status: "Completed",
    image: "/images/projects/escaperoom.png",
    aspectRatio: "16/9",
    domain: "OpenGL 3D in Pure C",
    mediaType: "image",
    gallery: [
      "/images/projects/escaperoom.png",
      "/images/projects/escaperoom.jpg",
    ],
    github: "https://github.com/Swapnil-360",
    palette: crimson,
    featured: false,
  },
  {
    id: "relieflink-bd",
    title: "ReliefLink Bangladesh",
    subtitle: "Real-time Crisis Response & Disaster Aid Coordination Network",
    year: "2024",
    genre: "Web · Mobile · Public Good",
    categoryLabel: "Disaster Relief Network",
    logline:
      "Community-driven emergency coordination platform connecting flood and crisis victims with real-time aid, rescue squads, and verified supplies.",
    description:
      "Built in response to urgent regional flood emergencies in Bangladesh. Combines real-time shelter and supply maps, an emergency SOS broadcast pipeline, volunteer task routing, and transparent aid disbursement tracking across web and mobile interfaces.",
    stack: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Leaflet Maps",
      "Vercel",
    ],
    features: [
      "Live interactive crisis map tracking verified relief shelters and supply camps",
      "Urgent SOS broadcast mechanism with geolocation tagging for stranded families",
      "Volunteer task dispatch and distribution verification to prevent aid hoarding",
      "Real-time aid registry connecting ground coordinators with remote donors",
    ],
    metrics: [
      { value: "Real-time", label: "SOS Dispatch" },
      { value: "Verified", label: "Aid Tracking" },
      { value: "Civic", label: "Open Impact" },
    ],
    status: "Completed",
    image: "/images/projects/mutebd_gh_real.png",
    aspectRatio: "16/9",
    domain: "relieflink-bd.vercel.app",
    mediaType: "image",
    gallery: [
      "/images/projects/mutebd_gh_real.png",
      "/images/projects/mutebd.jpg",
    ],
    github: "https://github.com/Swapnil-360",
    palette: ocean,
    featured: false,
  },
];

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: "Learning to Build",
    period: "2022 – 2023",
    synopsis:
      "Developing the builder mindset — foundational algorithms and systems at BUBT, viral multimedia storytelling, and global community operations.",
    episodes: [
      {
        code: "S01 E01",
        title: "Core Systems & Algorithms",
        description:
          "Enrolled in Computer Science & Engineering at BUBT. Mastered low-level systems programming in C/C++, advanced data structures, and mathematical problem-solving.",
        tags: ["BUBT CSE", "Data Structures", "Algorithms", "C/C++ Systems"],
        runtime: "2022 – 2023",
        palette: amber,
      },
      {
        code: "S01 E02",
        title: "Creative Media & Visual Storytelling",
        description:
          "Lead Video Editor and Visual Designer for '51 Stories' and 'Tour Buddies'. Directed and edited travel documentaries, community reels, and university club branding.",
        tags: ["51 Stories", "Tour Buddies", "Video Production", "Motion Design"],
        runtime: "2022 – Present",
        palette: violet,
      },
      {
        code: "S01 E03",
        title: "Decentralized Growth & Biconomy BD",
        description:
          "3+ years leading Web3 crypto community operations on Telegram/Discord, managing raid strategies, and serving as Biconomy listing partner for project BD and liquidity.",
        tags: ["Web3 Operations", "Biconomy BD", "Community Growth", "Token Strategy"],
        runtime: "2022 – Present",
        palette: cobalt,
      },
    ],
  },
  {
    number: 2,
    title: "Solving Real-World Friction",
    period: "2024 – 2025",
    synopsis:
      "Transforming daily pain points into production software: campus-wide academic hubs, crisis disaster coordination, and mobile rescue platforms.",
    episodes: [
      {
        code: "S02 E01",
        title: "Edu51Portal: Department Academic Hub",
        description:
          "Tired of scattered lecture drives and class routine confusion, engineered a centralized academic portal adopted university-wide by 200+ undergraduate CSE students.",
        tags: ["Edu51Portal", "200+ Students", "Next.js", "Supabase"],
        runtime: "2024 – Present",
        palette: jade,
      },
      {
        code: "S02 E02",
        title: "ReliefLink Bangladesh: Crisis Disaster Coordination",
        description:
          "Engineered a community-driven disaster relief platform during catastrophic Bangladesh floods, connecting stranded victims with rescue squads and verified relief caches.",
        tags: ["ReliefLink", "Civic Good", "Emergency Network", "Next.js"],
        runtime: "2024",
        palette: crimson,
      },
      {
        code: "S02 E03",
        title: "PawfectMatch & Inclusive Mobile Engineering",
        description:
          "Engineered PawfectMatch for stray animal adoption in React Native and developed MuteBD in native Kotlin Jetpack Compose for offline speech & hearing accessibility.",
        tags: ["PawfectMatch", "React Native", "Kotlin", "Accessibility"],
        runtime: "2024 – 2025",
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: "Commercial Ventures & Autonomous AI",
    period: "2025 – 2026",
    synopsis:
      "Co-founding an AI studio for e-commerce brands and engineering autonomous second-brain agents with cognitive memory vaults.",
    episodes: [
      {
        code: "S03 E01",
        title: "OpusGen AI: Co-Founder & CTO",
        description:
          "Co-founded OpusGen AI to eliminate commercial product photography overhead with sub-3s neural background replacement, canvas uncropping, and 4x upscaling pipelines.",
        tags: ["OpusGen AI", "Co-Founder & CTO", "Diffusion Models", "Next.js 14"],
        runtime: "2025 – Present",
        palette: amber,
      },
      {
        code: "S03 E02",
        title: "Mikasa: 24/7 Autonomous Personal Assistant",
        description:
          "Architected an event-driven autonomous companion on Telegram with n8n workflow queues, Supabase vector long-term memory, and local PC execution bridges.",
        tags: ["Mikasa AI", "n8n Workflows", "Vector Memory", "Autonomous Agents"],
        runtime: "2026 – Present",
        palette: crimson,
      },
      {
        code: "S03 E03",
        title: "High-Conversion Client Platforms (Prince Portfolio)",
        description:
          "Engineered bespoke personal brand platforms with fluid Framer Motion choreography, responsive micro-interactions, and sub-2-second load times.",
        tags: ["Client Work", "Framer Motion", "Next.js", "Performance Tuning"],
        runtime: "2026",
        palette: cobalt,
      },
    ],
  },
  {
    number: 4,
    title: "Scientific Discovery & Future Tech",
    period: "2026 – Future",
    synopsis:
      "Peer-reviewed IEEE scientific research in Graph Neural Networks, IoT edge mesh intelligence, and next-generation autonomous systems.",
    episodes: [
      {
        code: "S04 E01",
        title: "CurricuRAG: Prerequisite Question Answering (IEEE)",
        description:
          "First-author accepted research at IEEE OMLET 2026 (Nairobi, Kenya): Relation-aware graph retrieval with 2-layer R-GCN over curriculum knowledge graphs.",
        tags: ["IEEE OMLET 2026", "First Author", "Relational GCN", "Knowledge Graphs"],
        runtime: "Accepted 2026",
        palette: violet,
      },
      {
        code: "S04 E02",
        title: "Smart Classroom IoT: Edge-Cloud Mesh (IEEE)",
        description:
          "Co-authored accepted research at IEEE i-COSTE 2026 (Dhaka): ESP32 microcontroller edge mesh dynamically optimizing university power and introducing intelligent exam mode.",
        tags: ["IEEE i-COSTE 2026", "Co-Author", "ESP32 IoT", "Edge Computing"],
        runtime: "Accepted 2026",
        palette: ocean,
      },
      {
        code: "S04 E03",
        title: "The Next Episode: Autonomous Agentic Architectures",
        description:
          "Pioneering the frontier of autonomous software development — multi-agent collaboration, self-healing code pipelines, and intelligent edge-native user experiences.",
        tags: ["Future Systems", "Agentic AI", "Antigravity", "Self-Healing Systems"],
        runtime: "2026 & Beyond",
        palette: jade,
      },
    ],
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-agents",
    title: "AI, Agents & Automation",
    subtitle: "Autonomous workflows & intelligent systems",
    skills: [
      { name: "n8n Workflow Automation", mono: "N8", note: "Primary" },
      { name: "Autonomous AI Agents", mono: "Ag", note: "Primary" },
      { name: "Multi-LLM Orchestration", mono: "Lm" },
      { name: "Supabase pgvector", mono: "Vp" },
      { name: "Claude & Cursor IDE", mono: "Ai", note: "Primary" },
      { name: "Knowledge Graphs (Neo4j)", mono: "Kg" },
      { name: "Prompt Engineering", mono: "Pe" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Web Architecture",
    subtitle: "Modern component systems & performance",
    skills: [
      { name: "Next.js 14/15 (App Router)", mono: "Nx", note: "Primary" },
      { name: "React 18/19", mono: "Re", note: "Primary" },
      { name: "TypeScript", mono: "Ts", note: "Primary" },
      { name: "Tailwind CSS", mono: "Tw", note: "Primary" },
      { name: "Framer Motion", mono: "Fm" },
      { name: "JavaScript (ES6+)", mono: "Js" },
      { name: "HTML5 & Modern CSS", mono: "Ht" },
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Application Engineering",
    subtitle: "Native Android & cross-platform applications",
    skills: [
      { name: "Kotlin & Jetpack Compose", mono: "Kt", note: "Primary" },
      { name: "Flutter & Dart", mono: "Fl", note: "Primary" },
      { name: "React Native", mono: "Rn", note: "Primary" },
      { name: "Android SDK & Material Design", mono: "Ad" },
      { name: "Mobile UI/UX Architecture", mono: "Mu" },
    ],
  },
  {
    id: "web3-crypto",
    title: "Web3 & Crypto Operations",
    subtitle: "Community scaling, project sourcing & listing BD",
    skills: [
      { name: "Biconomy Listing Partner", mono: "Bc", note: "Primary" },
      { name: "Telegram Community Management", mono: "Tg", note: "Primary" },
      { name: "Project BD & Lead Generation", mono: "Bd", note: "Primary" },
      { name: "Community Growth & Raids", mono: "Rd" },
      { name: "Token Listing & Liquidity Coordination", mono: "Lq" },
      { name: "Discord Moderation & SMM", mono: "Dc" },
    ],
  },
  {
    id: "backend-cloud",
    title: "Backend, Cloud & APIs",
    subtitle: "Databases, serverless & infrastructure",
    skills: [
      { name: "Node.js & Express", mono: "No" },
      { name: "Telegram Bot API", mono: "Tg" },
      { name: "Supabase (PostgreSQL & RLS)", mono: "Sb", note: "Primary" },
      { name: "REST APIs & Webhooks", mono: "Ap" },
      { name: "Git & GitHub", mono: "Gt", note: "Primary" },
      { name: "Vercel / Netlify", mono: "Vc" },
      { name: "Firebase Realtime DB", mono: "Fb" },
    ],
  },
  {
    id: "product-design",
    title: "Product Design, Motion & Visuals",
    subtitle: "Premium interfaces, motion reels & marketing assets",
    skills: [
      { name: "Figma (Design Systems & UI)", mono: "Fg", note: "Primary" },
      { name: "UI/UX Prototyping", mono: "Ux", note: "Primary" },
      { name: "AI Product Visuals (OpusGen AI)", mono: "Ai", note: "Primary" },
      { name: "CapCut Pro & Motion Reels", mono: "Cp" },
      { name: "Adobe Premiere Pro & Video Editing", mono: "Pr" },
      { name: "Adobe Photoshop & Brand Assets", mono: "Ps" },
    ],
  },
  {
    id: "computer-science",
    title: "Computer Science & Hardware",
    subtitle: "Academic foundations & IoT engineering",
    skills: [
      { name: "Data Structures & Algorithms", mono: "Ds" },
      { name: "DBMS & Relational SQL", mono: "Db" },
      { name: "Software Engineering", mono: "Se" },
      { name: "ESP32 IoT & Microcontrollers", mono: "Ep" },
      { name: "Relational GCN (PyTorch)", mono: "Gz" },
      { name: "OpenGL & 3D Math in C", mono: "Gl" },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  "n8n Workflow Automation": [
    "Mikasa Personal AI Assistant (24/7 Daemon)",
    "Autonomous Telegram Workflow Engine",
  ],
  "Autonomous AI Agents": [
    "Mikasa Personal AI Assistant",
    "Event-Driven Workflow Automation",
  ],
  "Multi-LLM Orchestration": [
    "Gemini 2.5 Flash Lite + OpenRouter Failover Pipeline in Mikasa",
  ],
  "Supabase pgvector": [
    "Mikasa Cognitive Memory Vault",
    "Edu51Portal Database",
  ],
  "Claude & Cursor IDE": [
    "Core Daily Development & Rapid Architecture Acceleration",
  ],
  "Knowledge Graphs (Neo4j)": [
    "CurricuRAG Research Paper (Accepted IEEE OMLET 2026)",
  ],
  "Next.js 14/15 (App Router)": [
    "Edu51Portal Full Dept",
    "OpusGen AI",
    "Portfolio for Prince",
  ],
  "React 18/19": ["Edu51Five", "Edu51Portal", "Portfolio for Prince"],
  TypeScript: ["Mikasa Personal Assistant", "Edu51Portal", "OpusGen AI"],
  "Tailwind CSS": [
    "Edu51Portal",
    "OpusGen AI",
    "Portfolio for Prince",
    "Cinematic Portfolio Series",
  ],
  "Framer Motion": [
    "Portfolio for Prince (sbprince.com)",
    "Cinematic Portfolio Series",
  ],
  "Kotlin & Jetpack Compose": [
    "MuteBD Accessibility App",
    "Native Android Development",
  ],
  "Flutter & Dart": [
    "Cross-Platform Mobile Prototyping & Dynamic Interfaces",
  ],
  "React Native": [
    "PawfectMatch Mobile Pet Adoption App",
    "ReliefLink Bangladesh",
  ],
  "Biconomy Listing Partner": [
    "Exchange Listing BD, Token Marketing & Liquidity Arrangements",
  ],
  "Telegram Community Management": [
    "3+ Years Crypto/Web3 Community Ops, Moderation & Raids",
  ],
  "Project BD & Lead Generation": [
    "Crypto Project Sourcing, Lead Outreach & Internal Tracking Workflows",
  ],
  "AI Product Visuals (OpusGen AI)": [
    "Commercial E-Commerce Product Visuals & Generative Pipelines",
  ],
  "Supabase (PostgreSQL & RLS)": ["Edu51Portal", "OpusGen AI", "Mikasa Memory"],
  "Telegram Bot API": [
    "Mikasa Telegram Bot Interface with Quote-Aware Context Retention",
  ],
  "Git & GitHub": [
    "Swapnil-360 Organization Repositories",
    "Team Collaboration",
  ],
  "Figma (Design Systems & UI)": [
    "Edu51Portal Design System",
    "PawfectMatch Mobile UI/UX",
    "BUBT Tech Club Branding",
  ],
  "CapCut Pro & Motion Reels": [
    "51 Stories, Tour Buddies & BUBT Club Promotional Video Teasers",
  ],
  "ESP32 IoT & Microcontrollers": [
    "Smart Classroom Automation System (Accepted IEEE i-COSTE 2026)",
  ],
  "Relational GCN (PyTorch)": [
    "CurricuRAG Prerequisite QA (Accepted IEEE OMLET 2026)",
  ],
};

export const achievements = [
  {
    title: "Founder of Edu51Portal",
    year: "2024–Present",
    venue: "BUBT Academic Hub",
    blurb:
      "Created and deployed an academic infrastructure actively serving 200+ undergraduate CSE students with real-time class routines, course drives, and batch alerts.",
    badge: "Founder & Creator",
    link: "https://bubt.edu51portal.live/",
  },
  {
    title: "Co-Founder of OpusGen AI",
    year: "2025–Present",
    venue: "Generative AI Studio",
    blurb:
      "Co-founded and lead the tech stack of an AI visual suite transforming product photos into commercial-grade marketing visuals with sub-3s response times.",
    badge: "Co-Founder & CTO",
    link: "https://opusgenai.com",
  },
  {
    title: "Accepted Paper: IEEE OMLET 2026",
    year: "2026",
    venue: "Nairobi, Kenya · IEEE Xplore",
    blurb:
      "First-author research: 'CurricuRAG: Relation-Aware Graph Retrieval over a Curriculum Knowledge Graph for Prerequisite Question Answering' with 2-layer R-GCN.",
    badge: "First Author (IEEE)",
    link: "https://github.com/Swapnil-360/CurricuRAG",
  },
  {
    title: "Accepted Paper: IEEE i-COSTE 2026",
    year: "2026",
    venue: "Dhaka, Bangladesh · IEEE Xplore",
    blurb:
      "Co-author research: 'An Edge-Cloud Smart Classroom System for Energy Efficiency with Intelligent Classroom and Exam Modes' using ESP32 IoT mesh.",
    badge: "Co-Author (IEEE)",
    link: "https://github.com/Swapnil-360",
  },
];

export type ResearchPaper = {
  id: string;
  title: string;
  venue: string;
  location: string;
  year: string;
  date: string;
  paperId: string;
  status: string;
  role: string;
  supervisor?: string;
  authors: string[];
  abstract: string;
  domain: string;
  technologies: string[];
  github?: string;
  badge: string;
  metrics: { label: string; value: string }[];
};

export const researchPapers: ResearchPaper[] = [
  {
    id: "curricurag",
    title:
      "Relation-Aware Graph Retrieval over a Curriculum Knowledge Graph for Prerequisite Question Answering",
    venue: "IEEE OMLET 2026",
    location: "Nairobi, Kenya",
    year: "2026",
    date: "October 29–31, 2026",
    paperId: "Paper ID: 1017",
    status: "Accepted with Minor Revision (Indexed in IEEE Xplore & Scopus)",
    role: "First Author",
    supervisor: "Shrabani Das (Lecturer, Department of CSE, BUBT)",
    authors: [
      "Md. Miftahur Rahman Swapnil (First Author)",
      "Shrabani Das (Supervisor, Lecturer, CSE, BUBT)",
      "Md. Jahidul Kamal Islam",
      "Md. Asif Ali",
      "Shefayatuj Johara Chowdhury",
    ],
    abstract:
      "Introduces CurricuRAG, a relation-aware graph retrieval architecture over a curriculum knowledge graph (418 nodes, 558 typed prerequisite relationships) built with Neo4j. Utilizes a 2-layer Relational Graph Convolutional Network (R-GCN) encoder initialized with 384-dimensional Sentence-BERT embeddings and a DistMult decoder to predict prerequisite chains with zero query-time LLM overhead, evaluated using Qwen2.5-7B-Instruct 4-bit NF4.",
    domain: "Knowledge Graphs · Relational GCN · Prerequisite QA",
    technologies: [
      "PyTorch",
      "Relational GCN",
      "Neo4j",
      "Sentence-BERT",
      "Qwen2.5-7B",
      "DistMult",
    ],
    github: "https://github.com/Swapnil-360/CurricuRAG",
    badge: "IEEE OMLET 2026",
    metrics: [
      { label: "Graph Nodes", value: "418" },
      { label: "Typed Edges", value: "558" },
      { label: "Encoder", value: "2-Layer R-GCN" },
      { label: "Inference Overhead", value: "0 ms (Offline)" },
    ],
  },
  {
    id: "smart-classroom",
    title:
      "An Edge-Cloud Smart Classroom System for Energy Efficiency with Intelligent Classroom and Exam Modes",
    venue: "IEEE i-COSTE 2026",
    location: "IEEE Conference Proceedings",
    year: "2026",
    date: "2026",
    paperId: "i-COSTE-2026",
    status: "Accepted Peer-Reviewed Conference Paper",
    role: "Author / System Architect",
    authors: ["Md. Miftahur Rahman Swapnil et al."],
    abstract:
      "A distributed IoT edge-cloud architecture designed for institutional power efficiency. Employs an ESP32 microcontroller sensor mesh running edge sensor fusion and automated cloud-scheduled power gating with specialized Intelligent Classroom and automated Exam Modes to eliminate energy waste across university facilities.",
    domain: "Distributed IoT Systems · Edge-Cloud Architecture · Energy Optimization",
    technologies: [
      "ESP32",
      "Edge Computing",
      "IoT Sensor Mesh",
      "Cloud Automation",
      "C/C++",
      "MQTT",
    ],
    badge: "IEEE i-COSTE 2026",
    metrics: [
      { label: "Microcontrollers", value: "ESP32 Mesh" },
      { label: "Architecture", value: "Edge-Cloud Fusion" },
      { label: "Modes", value: "Classroom & Exam" },
      { label: "Focus", value: "Energy Optimization" },
    ],
  },
];

export const certifications = [
  {
    title: "BSc in Computer Science & Engineering (Final Year)",
    issuer: "BUBT",
    year: "2022–2026",
  },
  {
    title: "Peer-Reviewed Research Acceptance (IEEE OMLET 2026)",
    issuer: "IEEE",
    year: "2026",
  },
  {
    title: "Peer-Reviewed Research Acceptance (IEEE i-COSTE 2026)",
    issuer: "IEEE",
    year: "2026",
  },
  {
    title: "Full-Stack Development & AI Workflows Specialist",
    issuer: "Self-Directed / Production",
    year: "2024–Present",
  },
];

export const topPicks = [
  {
    rank: "01",
    title: "Edu51Portal",
    note: "200+ Students Daily",
    genre: "Live Academic Platform",
  },
  {
    rank: "02",
    title: "Mikasa Personal Assistant",
    note: "24/7 Autonomous Copilot",
    genre: "AI & Automation",
  },
  {
    rank: "03",
    title: "CurricuRAG",
    note: "IEEE OMLET 2026 Accepted",
    genre: "Graph AI Research",
  },
  {
    rank: "04",
    title: "OpusGen AI",
    note: "Generative Marketing Studio",
    genre: "Full-Stack SaaS",
  },
  {
    rank: "05",
    title: "Smart Classroom IoT",
    note: "IEEE i-COSTE 2026 Accepted",
    genre: "Edge Embedded Systems",
  },
  {
    rank: "06",
    title: "Portfolio for Prince",
    note: "Sub-2s Framer Motion",
    genre: "Client Web Experience",
  },
  {
    rank: "07",
    title: "PawfectMatch",
    note: "Animal Adoption Mobile App",
    genre: "React Native & Figma",
  },
  {
    rank: "08",
    title: "BUBT Tech Clubs Creatives",
    note: "Promotional Branding",
    genre: "Visual Storytelling",
  },
];

export type ProfileId = "swapnil" | "recruiter" | "founder" | "engineer";
export type SectionId =
  | "story"
  | "moments"
  | "skills"
  | "originals"
  | "research"
  | "about"
  | "journey"
  | "picks";

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: "swapnil",
    name: "The Builder",
    blurb: "The full cinematic series, in order",
    color: "#ff2a44",
    order: [
      "story",
      "moments",
      "skills",
      "originals",
      "research",
      "about",
      "journey",
      "picks",
    ],
  },
  {
    id: "recruiter",
    name: "Recruiter",
    blurb: "Resume, research papers & skills first",
    color: "#38bdf8",
    order: [
      "story",
      "research",
      "moments",
      "skills",
      "originals",
      "about",
      "journey",
      "picks",
    ],
  },
  {
    id: "founder",
    name: "Founder / Client",
    blurb: "Shipped products, Mikasa & Edu51 first",
    color: "#ffaa33",
    order: [
      "story",
      "originals",
      "research",
      "moments",
      "skills",
      "about",
      "journey",
      "picks",
    ],
  },
  {
    id: "engineer",
    name: "Engineer",
    blurb: "Architecture, R-GCN Paper & GitHub first",
    color: "#2ee6a8",
    order: [
      "story",
      "research",
      "originals",
      "skills",
      "moments",
      "about",
      "journey",
      "picks",
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  story: {
    nav: "Resume",
    card: "The Full Story",
    meta: "The Screenplay • View & Download PDF",
    palette: cobalt,
  },
  moments: {
    nav: "Memoirs",
    card: "Top Moments",
    meta: "Awards Season • Campus & Leadership",
    palette: crimson,
  },
  skills: {
    nav: "Skills",
    card: "My Skill Universe",
    meta: "Genres • Production Proof-of-Work",
    palette: ocean,
  },
  originals: {
    nav: "Originals",
    card: "Originals",
    meta: `${projects.length} Productions • Shipped Work`,
    palette: crimson,
  },
  research: {
    nav: "Research",
    card: "Research Field",
    meta: "2 Accepted IEEE Papers • GNN & IoT",
    palette: violet,
  },
  about: {
    nav: "About",
    card: "About Me",
    meta: "The Pilot • Education & Background",
    palette: violet,
  },
  journey: {
    nav: "Journey",
    card: "My Journey",
    meta: `${seasons.length} Seasons • BUBT to Builder`,
    palette: amber,
  },
  picks: {
    nav: "Top Picks",
    card: "Top Picks",
    meta: "Critics' Choice • Series Highlights",
    palette: jade,
  },
};

export const introSlides = [
  {
    title: "THE BUILDER",
    subtitle: "Turning Real-World Problems into Digital Products",
    detail:
      "Final year Computer Science & Engineering student at Bangladesh University of Business & Technology (BUBT).",
    palette: crimson,
  },
  {
    title: "EDU51PORTAL",
    subtitle: "From Classroom Friction to Campus Platform",
    detail:
      "Serving 200+ students daily with real-time class routines, course drives, and department collaboration.",
    palette: jade,
  },
  {
    title: "AUTONOMOUS AGENTS",
    subtitle: "Mikasa — 24/7 Personal AI Operating Layer",
    detail:
      "Event-driven n8n workflow pipelines, Supabase cognitive memory, and multi-LLM failover orchestration.",
    palette: amber,
  },
  {
    title: "PEER-REVIEWED RESEARCH",
    subtitle: "CurricuRAG accepted at IEEE OMLET 2026",
    detail:
      "Relation-aware Relational GCN graph retrieval for curriculum prerequisite QA with zero query-time LLM overhead.",
    palette: violet,
  },
];
