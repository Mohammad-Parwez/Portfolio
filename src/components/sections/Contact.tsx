import { Mail, Phone, MessageSquare, Twitter, Linkedin, Github } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SOCIAL_LINKS } from '../../constants/data';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Let's connect." />

                <div className="mt-16 flex flex-col items-center gap-12">
                    <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
                        {/* Email Card */}
                        <a href={`mailto:${SOCIAL_LINKS.email}`} className="group flex flex-col items-center gap-4 p-8 bg-zinc-50 rounded-3xl w-full max-w-md hover:bg-zinc-100 transition-colors border border-zinc-100">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-zinc-900 group-hover:scale-110 transition-transform">
                                <Mail className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Email</div>
                                <div className="text-lg font-bold">{SOCIAL_LINKS.email}</div>
                            </div>
                        </a>

                        {/* Phone Card */}
                        <a href={`tel:${SOCIAL_LINKS.phone}`} className="group flex flex-col items-center gap-4 p-8 bg-zinc-50 rounded-3xl w-full max-w-md hover:bg-zinc-100 transition-colors border border-zinc-100">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-zinc-900 group-hover:scale-110 transition-transform">
                                <Phone className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Phone</div>
                                <div className="text-lg font-bold">{SOCIAL_LINKS.phone}</div>
                            </div>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div>
                        <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-6">Connect on Social</div>
                        <div className="flex gap-4">
                            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
