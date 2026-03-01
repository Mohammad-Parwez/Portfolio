import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PROJECTS } from '../../constants/data';

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="A selection of my recent work, ranging from complex SaaS platforms to creative experiments."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full text-zinc-900 hover:bg-zinc-100 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-2 py-1 bg-zinc-100 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-600 transition-colors">{project.title}</h3>
                                <p className="text-zinc-600 text-sm mb-6 leading-relaxed">{project.description}</p>
                                {project.caseStudy && (
                                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-xs italic text-zinc-500">
                                        <strong>Impact:</strong> {project.caseStudy}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
