import { SectionHeading } from '../ui/SectionHeading';

const steps = [
    { step: "01", title: "Discovery", desc: "Understanding goals, target audience, and technical requirements." },
    { step: "02", title: "Architecture", desc: "Designing the database schema, API structure, and frontend state." },
    { step: "03", title: "Development", desc: "Iterative coding with regular updates and continuous testing." },
    { step: "04", title: "Deployment", desc: "Optimizing for production and launching on cloud platforms." }
];

export const Process = () => {
    return (
        <section className="py-24 bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    title="Development Process"
                />
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((item, i) => (
                        <div key={i} className="relative">
                            <div className="text-6xl font-bold text-zinc-800 mb-6">{item.step}</div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                            {i < 3 && <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[1px] bg-zinc-800" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
