export type ProjectFeature = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  category: "Capstone Project" | "Personal Project";
  role: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  github?: string;
  features: ProjectFeature[];
  challenges: string;
  outcome: string;
  gradient: string;
  status?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "isangdiwa",
    title: "IsangDiwa",
    category: "Capstone Project",
    role: "Full Stack Developer",
    year: "2026",
    description:
      "Our capstone project — a church management system we built from scratch with AI insights, donation tracking, loan management, QR & RFID attendance, and a community prayer wall.",
    longDescription:
      "IsangDiwa started as our capstone project and grew into something we're really proud of. It's a full-featured platform built to help churches go paperless — handling everything from member management and donations to loan processing and attendance tracking via QR codes & RFID. We built dedicated dashboards for Admins, Loan Staff, Secretaries, and Members so everyone gets exactly the tools they need. One of the coolest parts was integrating Google Gemini AI to generate real-time insights from financial and attendance data, plus interactive Recharts dashboards that make trends easy to understand at a glance.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Recharts", "QR & RFID"],
    link: "https://puacfaithly.com/",
    github: "https://github.com/MjGuiang03/Isangdiwa",
    image: "/images/isangdiwa/homepage.jpg",
    features: [
      {
        title: "AI-Powered Admin Insights",
        description:
          "Integrated Google Gemini AI to automatically analyze member growth, donation trends, and attendance data — generating actionable, real-time insights directly on the admin dashboard.",
      },
      {
        title: "Donation & Financial Tracking",
        description:
          "Built a comprehensive donation management system supporting multiple fund categories (General, Mission, Youth, etc.) with real-time breakdowns, community-level summaries, and automated financial reporting.",
      },
      {
        title: "QR Code & RFID Attendance System",
        description:
          "Implemented a hybrid QR and RFID scanner-based attendance system for church services, enabling instant, frictionless member check-ins and tracking attendance trends across multiple branches with Present, Late, and Absent statuses.",
      },
      {
        title: "Officer Loan Management",
        description:
          "Developed a full loan lifecycle system for church officers — from application and approval to monthly payment tracking, overdue detection, and a Secretary Admin loan processing portal.",
      },
      {
        title: "Savings Goals & Prayer Wall",
        description:
          "Built a personal savings goals tracker with progress visualization for members, alongside a community Prayer Wall where members can post and share prayer requests.",
      },
      {
        title: "AI Chatbot Assistant",
        description:
          "Developed a Gemini-powered conversational chatbot embedded within the platform, allowing members and admins to ask questions, get guidance on features, and receive instant support without leaving the app.",
      },
    ],
    challenges:
      "The hardest part was figuring out how to make one platform work smoothly for four completely different user roles — each with their own dashboards, permissions, and workflows. Getting Gemini AI to generate useful insights (and not just generic responses) from real church data took a lot of prompt engineering and trial-and-error. We also had to be really careful with the loan system to make sure overdue detection worked consistently without any race conditions between the frontend and backend.",
    outcome:
      "We deployed IsangDiwa at an actual church and it completely replaced their paper-based workflow. The AI insights saved the admin hours of manual report analysis every week. The QR & RFID attendance system made service check-ins seamless, and members told us the transparent financial dashboard actually increased their trust in how donations were being managed.",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    slug: "pahinga",
    title: "Pahinga",
    category: "Personal Project",
    role: "Full Stack Developer",
    year: "2026",
    description:
      "A side project I'm building — a hiking marketplace where adventurers can discover trips and agencies can manage their teams, fleets, and bookings all in one place.",
    longDescription:
      "Pahinga is a passion project I started to learn Next.js properly. It's a platform that connects hikers with travel agencies, making it easy to browse trips, book adventures, and manage everything from drivers to coordinators. I built a multi-role auth system from scratch — hikers, drivers, coordinators, and admins all get their own experience. It's still a work in progress, but it's been an amazing learning experience in full-stack architecture.",
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
    link: "#",
    status: "In Development",
    github: "https://github.com/MjGuiang03/pahinga",
    features: [
      {
        title: "Role-Based Authentication",
        description:
          "Implemented a secure, multi-role authentication system supporting Hikers, Drivers, Coordinators, and Administrators — each with distinct access controls and personalized dashboards.",
      },
      {
        title: "Fleet & Team Management",
        description:
          "Built a comprehensive driver and coordinator management system allowing agencies to register members, assign roles, manage vehicle fleets, and track trip assignments in real time.",
      },
      {
        title: "Hiking Marketplace",
        description:
          "Developed a searchable listing system where agencies can publish hiking packages with images, pricing, difficulty ratings, and availability calendars for hikers to browse and book.",
      },
      {
        title: "Responsive Dashboard",
        description:
          "Designed mobile-first dashboards with sticky sidebars, tabbed navigation, and touch-friendly UI that adapt seamlessly across desktop, tablet, and mobile screen sizes.",
      },
      {
        title: "Booking & Reservation System",
        description:
          "Created a full booking flow from listing discovery to payment confirmation, including real-time availability checks and booking status management for both hikers and agencies.",
      },
    ],
    challenges:
      "The trickiest part was designing a database schema that could handle wildly different user types — a hiker and an agency admin have completely different needs, but they share the same platform. Keeping the fleet availability accurate in real-time while making the UI feel snappy required some creative state management and optimistic updates.",
    outcome:
      "Pahinga works! Hikers can browse and book trips, agencies can manage their teams, and the responsive design makes it just as usable on a phone as on a desktop. It's been my biggest learning project for Next.js and full-stack architecture.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
