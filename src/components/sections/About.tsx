import { SectionHeading } from '../ui/SectionHeading';
import { Layout, Server, Database, Rocket } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    title="Introduction"
                    subtitle="I bridge the gap between complex backend logic and intuitive frontend design."
                />
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-6 text-lg text-zinc-600 leading-relaxed">
                        <p>
                            Hello! I'm a Full Stack Developer with 1 year of professional experience,
                            specializing in the MERN stack and AWS cloud deployments. My expertise lies in
                            building scalable backend architectures and crafting responsive, intuitive frontend
                            interfaces.
                        </p>
                        <p>
                            From coordinating backend teams at GDG to deploying production-ready applications
                            on AWS, I've developed a deep understanding of the entire software development
                            lifecycle. I'm passionate about integrating AI capabilities and real-time features
                            to create modern, high-impact digital solutions.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div>
                                <h4 className="text-zinc-900 font-bold mb-2">Location</h4>
                                <p>New Chandigarh</p>
                            </div>
                            <div>
                                <h4 className="text-zinc-900 font-bold mb-2">Education</h4>
                                <p>B.Tech CSE</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200">
                        <h3 className="text-2xl font-bold mb-6">Expertise</h3>
                        <ul className="space-y-4">
                            {[
                                { icon: <Layout className="w-5 h-5" />, label: "Frontend Architecture" },
                                { icon: <Server className="w-5 h-5" />, label: "Backend Systems" },
                                { icon: <Database className="w-5 h-5" />, label: "Database Design" },
                                { icon: <Rocket className="w-5 h-5" />, label: "DevOps & Cloud" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                                    <span className="text-zinc-400">{item.icon}</span>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
