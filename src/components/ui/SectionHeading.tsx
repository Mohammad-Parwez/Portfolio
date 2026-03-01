import { motion } from 'motion/react';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
    <div className="mb-12">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4"
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-zinc-600 max-w-2xl"
            >
                {subtitle}
            </motion.p>
        )}
        <div className="h-1 w-20 bg-zinc-900 mt-6" />
    </div>
);
