import { SectionHeading } from '../ui/SectionHeading';
import { SKILLS } from '../../constants/data';

export const Skills = () => {
    return (
        <section id="expertise" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    title="Technical Skills"
                    subtitle="My toolkit for building modern web applications."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(SKILLS).map(([category, items]) => (
                        <div key={category} className="space-y-6">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-zinc-100 rounded-lg text-sm font-medium text-zinc-700 border border-zinc-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
