import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Francis Chua Gregorio",
  initials: "FCG",
  location: "Quezon City, Metro Manila, Philippines",
  locationLink: "https://www.google.com/maps/place/Quezon+City",
  about: "Fullstack Web Developer",
  summary: "Results-driven professional with success in web development. Strong analytical, communication, and adaptability skills. Ready to contribute to a dynamic, growth-focused organization.",
  avatarUrl: "https://avatars.githubusercontent.com/u/5215523",
  personalWebsiteUrl: "https://fcgregor.io",
  contact: {
    email: "fcgregorio@gmail.com",
    tel: "+639273066819",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fcgregorio",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fcgregorio",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Technological Institute of the Philippines - Quezon City",
      degree: "Bachelor's Degree in Computer Science",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Deployed Philippines Inc. ",
      link: "https://deployedstaff.com",
      title: "Fullstack Web Developer",
      badges: ["Remote"],
      start: "2022",
      end: "Current",
      description:
        "Worked under a client to maintain a diverse range of Jira plugin offerings",
    },
    {
      company: "Eplayment Corp.",
      link: "https://www.eplayment.co",
      title: "Web Developer Intern",
      badges: ["Remote"],
      start: "2022",
      end: "2022",
      description: "Engaged in developing the company's internal tools",
    },
    {
      company: "Togoparts Pte. Ltd.",
      link: "https://www.togoparts.com",
      title: "Android Developer",
      badges: ["Remote"],
      start: "2016",
      end: "2017",
      description:
        "Improved and maintained the company's native Android application",
    },
    {
      company: "Diliman Technology Laboratories, Inc.",
      title: "Android Developer",
      badges: [],
      start: "2013",
      end: "2016",
      description:
        "Participated in all phases of projects which include design, development, testing, and deployment",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Vue.js",
    "Node.js",
    "Tailwind CSS",
    "Java/Kotlin",
    "Python",
    "Django",
  ],
  projects: [
    {
      title: "JimakuAI",
      techStack: ["Side Project", "TypeScript", "Next.js", "Tailwind CSS"],
      description: "AI-powered English-Japanese subtitle translations",
      link: {
        label: "jimaku.ai",
        href: "https://jimaku.ai",
      },
    },
    {
      title: "JBJ Trading",
      techStack: ["Side Project", "TypeScript", "React", "MUI", "Express.js"],
      description: "Inventory Management System",
    },
  ],
} as const;
