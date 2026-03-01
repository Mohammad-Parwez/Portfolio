import { Award } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const reasons = [
    { title: "Full Stack Mastery", desc: "Seamlessly handling both frontend and backend challenges with the MERN stack." },
    { title: "Quality Driven", desc: "Writing clean, maintainable code that follows industry best practices and design patterns." },
    { title: "User Focused", desc: "Always prioritizing the end-user experience and accessibility in every feature." },
    { title: "Timely Delivery", desc: "Committed to meeting deadlines with high-quality deliverables that exceed expectations." }
];

export const WhyChooseMe = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <SectionHeading title="Why Choose Me" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {reasons.map((item, i) => (
                            <div key={i} className="flex flex-col gap-4">
                                <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0">
                                    <Award className="w-6 h-6 text-zinc-900" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-zinc-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
