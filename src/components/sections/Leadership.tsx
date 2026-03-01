import { Users, Globe } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { COMMUNITY_IMAGE, COMMUNITY_IMAGE_2 } from '../../constants/data';

export const Leadership = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    title="Leadership & Community"
                    subtitle="Giving back to the developer community and leading teams to success."
                />
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Open Source Card */}
                    <div className="p-8 rounded-3xl bg-zinc-900 text-white">
                        <h3 className="text-2xl font-bold mb-4">Open Source Contributor</h3>
                        <p className="text-zinc-400 mb-6">
                            Active contributor to various MERN stack libraries and tools. I believe in the power of open source to drive innovation.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-700 overflow-hidden">
                                        <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Avatar" referrerPolicy="no-referrer" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm text-zinc-400">200+ Total Commits</span>
                        </div>
                    </div>

                    {/* GDG Card */}
                    <div className="p-8 rounded-3xl border border-zinc-200 bg-zinc-50 group">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold text-zinc-900">Backend Coordinator</h3>
                                <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-zinc-900 shadow-sm border border-zinc-100 flex items-center gap-1">
                                    <Globe className="w-3 h-3" /> GDG
                                </span>
                            </div>

                            {/* Dual Image Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white aspect-square flex items-center justify-center">
                                    <img
                                        src={COMMUNITY_IMAGE}
                                        alt="GDG iGC Community 1"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white aspect-square flex items-center justify-center">
                                    <img
                                        src={COMMUNITY_IMAGE_2}
                                        alt="GDG iGC Community 2"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <p className="text-zinc-600 text-sm leading-relaxed">
                                Led the backend development team for community events, organizing technical workshops and fostering a collaborative environment.
                            </p>

                            <div className="flex items-center gap-2 text-zinc-400">
                                <Users className="w-4 h-4" />
                                <span className="text-xs font-medium uppercase tracking-wider">Community Leadership</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
