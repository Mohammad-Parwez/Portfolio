import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { PROFILE_IMAGE, CV_URL } from '../../constants/data';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for new projects
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                            CRAFTING <br />
                            <span className="text-zinc-400">DIGITAL</span> <br />
                            EXPERIENCES.
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-lg mb-10 leading-relaxed">
                            I'm a MERN Stack Developer specializing in building high-performance,
                            scalable web applications with a focus on clean architecture and
                            exceptional user experience.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#projects" className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all group">
                                View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={CV_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-zinc-200 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all"
                            >
                                View CV
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-square"
                    >
                        <div className="absolute inset-0 bg-zinc-200 rounded-3xl overflow-hidden">
                            <img
                                src={PROFILE_IMAGE}
                                alt="Developer Portrait"
                                className="w-full h-full object-cover transition-all duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">1 Year</div>
                                    <div className="text-sm text-zinc-500">Experience</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
