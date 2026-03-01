import { Project, Experience } from '../types';

export const PROFILE_IMAGE = "/profile-pic.jpeg"; // Your uploaded profile picture
export const CV_URL = "/resume.pdf"; // Path to your CV in public folder
export const COMMUNITY_IMAGE = "/community-gdg.jpeg"; // Path to your GDG community picture
export const COMMUNITY_IMAGE_2 = "/gdg-pic.jpg"; // Path to your second GDG community picture

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/mohammad-parwez-47b972247",
    twitter: "https://x.com/ParwezMoh19299",
    github: "https://github.com/Mohammad-Parwez",
    email: import.meta.env.VITE_CONTACT_EMAIL || "parwezmohammad319@gmail.com",
    phone: import.meta.env.VITE_CONTACT_PHONE || "+91 1234567890"
};

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "AI Code Reviewer",
        description: "An AI tool that takes JavaScript code as input, reviews it for issues, and provides actionable feedback and optimized solutions.",
        tags: ["React", "Node.js", "Express", "Gemini API"],
        image: "/Ai-assistance (2).png",
        link: "https://ai-code-review-u2zh.vercel.app/",
        caseStudy: "Reduced manual review time by 60% for small to medium PRs."
    },
    {
        id: 2,
        title: "AI Assistance Platform",
        description: "An intelligent chatbot assistant that takes user prompts and provides comprehensive details about company description, pricing, services, and contact information.",
        tags: ["React", "Node.js", "Express", "Socket.io", "OpenAI API"],
        image: "/Ai-assistance (1).png",
        link: "https://ai-assistance-ruddy.vercel.app/",
        caseStudy: "Successfully automated 70% of common support queries for a pilot client."
    },
    {
        id: 3,
        title: "PhishFarm",
        description: "Diagnosed and resolved critical bugs in the production environment, optimized application performance, and successfully managed end-to-end project deployment workflows.",
        tags: ["MERN Stack", "Bug Fixing", "Deployment", "Optimization"],
        image: "/PhishFarm.png",
        link: "https://www.phishfarm.com/",
        caseStudy: "Resolved critical system issues and successfully deployed the project to production."
    },
    {
        id: 4,
        title: "ETS (Employee Tracking System)",
        description: "A SaaS platform developed at iPageums to track employee activity, attendance, and project statuses. Includes a real-time chat section for colleagues.",
        tags: ["MERN Stack", "Socket.io", "Real-time Chat", "SaaS", "AWS"],
        image: "/ETS.png",
        link: "#",
        caseStudy: "Streamlined employee monitoring and enhanced team communication through a unified platform."
    }
];

export const EXPERIENCES: Experience[] = [
    {
        company: "Stefax",
        role: "Full Stack Developer",
        period: "Jan 2026 - Present",
        description: [
            "Diagnosed and fixed critical bugs, and successfully deployed production-ready project updates.",
            "Developing and maintaining end-to-end web solutions using the MERN stack.",
            "Implementing complex business logic and ensuring high availability of services.",
            "Collaborating with cross-functional teams to deliver high-quality software products."
        ]
    },
    {
        company: "iPageums",
        role: "MERN & AWS Intern",
        period: "Nov 2025 - Jan 2026",
        description: [
            "Developed ETS (Employee Tracking System), a SaaS application for tracking employee activity, attendance, and project status.",
            "Implemented real-time chat features for colleague communication using Socket.io.",
            "Built scalable backend services using Node.js and Express, and deployed on AWS."
        ]
    },
    {
        company: "GDG IGC",
        role: "Backend Coordinator",
        period: "Sep 2024 - April 2025",
        description: [
            "Coordinated backend development for community projects and events.",
            "Mentored junior members on RESTful API design and database management.",
            "Organized technical workshops and hackathons for the developer community."
        ]
    }
];


export const SKILLS = {
    frontend: ["React", "Angular", "JavaScript", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "JWT", "Socket.io", "REST APIs", "Webhooks", "AWS Lambda", "API Integration"],
    database: ["MongoDB", "DynamoDB"],
    tools: ["Git", "GitHub", "Vercel", "Postman", "AWS"]
};

export const SERVICES = [
    { title: "Custom Web Application Development", desc: "Tailored web solutions designed to meet your specific business requirements.", iconName: "Code2" },
    { title: "Full-Stack MERN Development", desc: "End-to-end development using MongoDB, Express, React, and Node.js.", iconName: "Layers" },
    { title: "Backend & REST API Development", desc: "Robust and scalable server-side logic and API architectures.", iconName: "Server" },
    { title: "Frontend Development (React)", desc: "Interactive and responsive user interfaces built with modern React.", iconName: "Layout" },
    { title: "Admin Dashboard Development", desc: "Comprehensive management tools for data visualization and control.", iconName: "Terminal" },
    { title: "E-Commerce Website Development", desc: "Full-scale online stores with secure payment and inventory management.", iconName: "Smartphone" },
    { title: "Authentication & Authorization", desc: "Secure user access control using JWT, OAuth, and best practices.", iconName: "CheckCircle2" },
    { title: "Database Design & Optimization", desc: "Efficient data modeling and query optimization for high performance.", iconName: "Database" },
    { title: "Real-Time Application Development", desc: "Live features like chat and tracking using Socket.io and WebSockets.", iconName: "Zap" },
    { title: "AI API Integration", desc: "Enhancing apps with AI capabilities using Gemini, OpenAI, and more.", iconName: "Cpu" },
    { title: "Cloud Deployment & Hosting", desc: "Professional setup on AWS, Vercel, and other cloud providers.", iconName: "Rocket" },
    { title: "Performance & Maintenance", desc: "Continuous support and optimization to keep your app running smoothly.", iconName: "Rocket" }
];

export const INDUSTRIES = [
    { name: "Learning Model", iconName: "Cpu" },
    { name: "E-Commerce", iconName: "Layout" },
    { name: "Open Tracking", iconName: "Rocket" },
    { name: "Real Estate", iconName: "Globe" },
    { name: "SaaS", iconName: "Layers" }
];

