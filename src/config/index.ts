import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Srivatsan Sreedaran",
  author: "Srivatsan Sreedaran",
  description:
    "Full Stack Cloud Developer 2 at Boeing. passionate about Cloud Technology, Quantum Computing and AI",
  lang: "en",
  siteLogo: "/srivatsan-big.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/Srivatsan_S18" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/srivatsan-sreedaran-3a874a1b1/" },
    { text: "Github", href: "https://github.com/srivatsan1892" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Srivatsan Sreedaran",
    specialty: "Full Stack Cloud Developer| App Modernization| Cloud Modernization",
    summary:
      "Full Stack Cloud Developer based in Bengaluru, India. I specialize in App and Cloud Modernization.",
    email: "srivatsan.sreedaran@gmail.com",
  },
  experience: [
    {
      company: "The Boeing Company",
      logoUrl: "/boeing.png",
      position: "Full Stack Cloud Developer 2",
      startDate: "June 2025",
      endDate: "Present",
      summary: [
        "Designed, programmed, and executed over 10+ test plans, improving software reliability and reducing post-release bugs by 30%",
        "Developed and maintained 10+ routine software applications on Azure Cloud, ensuring seamless integration and documentation for future updates.",
        "Collaborated with more than 3 cross-functional teams to gather and evaluate end-user requirements, enhancing application usability and performance.",
        "Investigated and resolved 50+ user-reported issues, reducing turnaround time by 40% through proactive troubleshooting and validation.",
      ],
    },
    {
      company: "The Boeing Company",
      logoUrl: "/boeing.png",
      position: "Full Stack Cloud Developer 1",
      startDate: "May 2025",
      endDate: "August 2023",
      summary: [
        " Migrated 9 enterprise applications on Azure Gov Cloud, reducing technical debt by $1.2M and improving infrastructure scalability.",
        "Refactored and re-platformed legacy on-premise applications to Azure Gov Cloud, increasing performance and reliability.",
        " Designed and implemented automated CI/CD pipelines using GitLab and Docker, reducing deployment time by 70%.",
        "Led training sessions for 40+ new hires on Java, Angular, and Azure-based Full Stack Development best practices.",
        " Conducted performance monitoring and health diagnostics of Azure Gov Cloud applications using Azure Monitoring and Log Analytics.",
      ],
    },
    
  ],
  projects: [
    {
      name: "Redis Server",
      summary: "Developed a lightweight in-memory data store mimicking Redis functionality, achieving up to 30% faster key-value retrieval speeds compared to baseline implementation.",
      linkSource: "https://github.com/srivatsan1892/Redis_Server",
      image: "/redis.png",
    },
    {
      name: "Urban Sound Classification",
      summary: " Built a machine learning model using MFCC features to classify 8,732+ urban sounds into 10 categories with 87% classification accuracy on test data.",
      linkSource: "https://github.com/srivatsan1892/Urban-Sound-Classification",
      image: "/music.png",
    },
    {
      name: "Satallite Image Classification",
      summary: "Classification of Satallite images from Dataset-RSI-CB256 using Convalutional Neural Networks (CNN).",
      linkSource: "https://github.com/srivatsan1892/Satellite-Image-Classification",
      image: "/satallite.png",
    },
  ],
  about: {
    description: `
     Hi, I’m Srivatsan Sreedaran, a passionate Full-Stack Cloud Developer recognized for driving enterprise cloud modernization and application modernization initiatives on Microsoft Azure. As a Certified Azure Developer, I excel at transforming legacy systems into agile, cloud-native solutions that boost scalability, security, and performance.
     My hands-on proficiency in full-stack development with Angular and Java enables me to deliver robust, user-centric applications tailored for today’s fast-moving digital landscape.
     I am well-versed in deploying secure microservices, automating CI/CD pipelines, and mentoring teams in agile environments, helping organizations achieve seamless migration to the cloud and continuous innovation. My focus is always on creating sustainable, future-ready applications that empower businesses and users alike.`,
    image: "/srivatsan-small.jpeg",
  },
};