import { SectionHeading } from '../ui/SectionHeading';
import { FAQItem } from '../ui/FAQItem';

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary based on complexity. A standard MVP typically takes 4-8 weeks, while larger enterprise platforms can take 3-6 months. I provide detailed milestones for every project."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, I offer various maintenance packages to ensure your application remains secure, updated, and performant after launch."
    },
    {
        question: "Can you work with existing codebases?",
        answer: "Absolutely. I'm experienced in auditing existing MERN applications, fixing bugs, and implementing new features while maintaining code consistency."
    },
    {
        question: "What is your preferred communication method?",
        answer: "I am highly responsive across multiple channels! I prefer using WhatsApp or Telegram for quick updates, Google Meet for technical syncs, and GitHub to track progress and code reviews."
    }
];

export const FAQ = () => {
    return (
        <section className="py-24 bg-zinc-50">
            <div className="max-w-4xl mx-auto px-6">
                <SectionHeading title="Frequently Asked Questions" />
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
