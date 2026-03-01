import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { EXPERIENCES } from '../../constants/data';

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    title="Professional Experience"
                    subtitle="My career path and the companies I've helped grow."
                />
                <div className="space-y-12">
                    {EXPERIENCES.map((exp, i) => (
                        <div key={i} className="grid md:grid-cols-4 gap-8 group">
                            <div className="md:col-span-1">
                                <div className="text-sm font-bold text-zinc-400 mb-1">{exp.period}</div>
                                <div className="text-xl font-bold text-zinc-900">{exp.company}</div>
                            </div>
                            <div className="md:col-span-3 pb-12 border-b border-zinc-100 group-last:border-0">
                                <h3 className="text-2xl font-bold mb-4">{exp.role}</h3>
                                <ul className="space-y-4">
                                    {exp.description.map((item, j) => (
                                        <li key={j} className="flex gap-3 text-zinc-600 leading-relaxed">
                                            <CheckCircle2 className="w-5 h-5 text-zinc-900 shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
