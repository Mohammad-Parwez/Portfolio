import { motion } from 'motion/react';
import {
    Code2,
    Layers,
    Server,
    Layout,
    Terminal,
    Smartphone,
    CheckCircle2,
    Database,
    Zap,
    Cpu,
    Rocket
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 />,
    Layers: <Layers />,
    Server: <Server />,
    Layout: <Layout />,
    Terminal: <Terminal />,
    Smartphone: <Smartphone />,
    CheckCircle2: <CheckCircle2 />,
    Database: <Database />,
    Zap: <Zap />,
    Cpu: <Cpu />,
    Rocket: <Rocket />,
};

const services = [
    { title: "Custom Web Application Development", desc: "Tailored web solutions designed to meet your specific business requirements.", icon: "Code2" },
    { title: "Full-Stack MERN Development", desc: "End-to-end development using MongoDB, Express, React, and Node.js.", icon: "Layers" },
    { title: "Backend & REST API Development", desc: "Robust and scalable server-side logic and API architectures.", icon: "Server" },
    { title: "Frontend Development (React)", desc: "Interactive and responsive user interfaces built with modern React.", icon: "Layout" },
    { title: "Admin Dashboard Development", desc: "Comprehensive management tools for data visualization and control.", icon: "Terminal" },
    { title: "E-Commerce Website Development", desc: "Full-scale online stores with secure payment and inventory management.", icon: "Smartphone" },
    { title: "Authentication & Authorization", desc: "Secure user access control using JWT, OAuth, and best practices.", icon: "CheckCircle2" },
    { title: "Database Design & Optimization", desc: "Efficient data modeling and query optimization for high performance.", icon: "Database" },
    { title: "Real-Time Application Development", desc: "Live features like chat and tracking using Socket.io and WebSockets.", icon: "Zap" },
    { title: "AI API Integration", desc: "Enhancing apps with AI capabilities using Gemini, OpenAI, and more.", icon: "Cpu" },
    { title: "Cloud Deployment & Hosting", desc: "Professional setup on AWS, Vercel, and other cloud providers.", icon: "Rocket" },
    { title: "Performance & Maintenance", desc: "Continuous support and optimization to keep your app running smoothly.", icon: "Rocket" }
];

export const Services = () => {
    return (
        <section className="py-24 bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Services I Offer</h2>
                    <p className="text-zinc-400 max-w-xl">Tailored solutions for your digital needs, from MVP development to enterprise-grade systems.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all"
                        >
                            <div className="mb-6 text-zinc-400">{iconMap[service.icon]}</div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
