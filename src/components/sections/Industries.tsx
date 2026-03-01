import { Cpu, Layout, Rocket, Globe, Layers } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { INDUSTRIES } from '../../constants/data';

const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6" />,
    Layout: <Layout className="w-6 h-6" />,
    Rocket: <Rocket className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
};

export const Industries = () => {
    return (
        <section className="py-24 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    title="Industries I Work With"
                    subtitle="Specialized solutions for diverse business sectors."
                />
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {INDUSTRIES.map((industry, i) => (
                        <div key={i} className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col items-center text-center gap-4 hover:border-zinc-400 transition-colors">
                            <div className="text-zinc-400">{iconMap[industry.iconName]}</div>
                            <span className="font-bold text-zinc-900">{industry.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

