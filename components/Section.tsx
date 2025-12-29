import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
    id: string;
    title?: string;
    children: ReactNode;
    className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={`section-padding ${className}`}>
            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-12 text-foreground"
                >
                    {title}
                </motion.h2>
            )}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {children}
            </motion.div>
        </section>
    );
}
