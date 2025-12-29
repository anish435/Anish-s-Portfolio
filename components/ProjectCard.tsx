"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
}

export default function ProjectCard({ title, description, tech, github, demo }: ProjectProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 card-hover flex flex-col h-full"
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                    {title}
                </h3>
                <div className="flex gap-4">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
