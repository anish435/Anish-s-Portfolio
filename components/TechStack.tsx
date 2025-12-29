"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { portfolioContent } from "@/data/content";
import { useTheme } from "next-themes";

const iconMap: Record<string, string> = {
    "Java": "custom",
    "Python": "python",
    "C": "c",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Spring Boot": "springboot",
    "Next.js": "nextdotjs",
    "React": "react",
    "Tailwind CSS": "tailwindcss",
    "Git": "git",
    "Docker": "docker",
    "Linux": "linux",
    "PostgreSQL": "postgresql",
    "Adobe Photoshop": "ps",
    "Blender": "blender",
    "Unreal Engine": "unrealengine",
    "OBS Studio": "obsstudio",
    "MATLAB": "matlab",
    "Framer Motion": "framer",
};

const urlMap: Record<string, string> = {
    "Java": "https://www.oracle.com/java/",
    "Python": "https://www.python.org/",
    "C": "https://en.cppreference.com/w/c",
    "TypeScript": "https://www.typescriptlang.org/",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "Spring Boot": "https://spring.io/projects/spring-boot",
    "Next.js": "https://nextjs.org/",
    "React": "https://react.dev/",
    "Tailwind CSS": "https://tailwindcss.com/",
    "Git": "https://git-scm.com/",
    "Docker": "https://www.docker.com/",
    "Linux": "https://www.linux.org/",
    "PostgreSQL": "https://www.postgresql.org/",
    "Adobe Photoshop": "https://www.adobe.com/products/photoshop.html",
    "Blender": "https://www.blender.org/",
    "Unreal Engine": "https://www.unrealengine.com/",
    "OBS Studio": "https://obsproject.com/",
    "MATLAB": "https://www.mathworks.com/products/matlab.html",
    "Framer Motion": "https://www.framer.com/motion/",
};

export default function TechStack() {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const allTech = [
        ...portfolioContent.stack.languages,
        ...portfolioContent.stack.frameworks,
        ...portfolioContent.stack.tools,
    ];

    if (!mounted) return <div className="py-10 h-32" />;

    const isDark = theme === "dark";

    return (
        <div className="relative py-10">
            <div className="flex flex-wrap gap-10 md:gap-12 justify-start items-center">
                {allTech.map((tech) => {
                    const slug = iconMap[tech];
                    if (!slug) return null;

                    const url = urlMap[tech];

                    let iconUrl = "";
                    if (slug === "custom" && tech === "Java") {
                        iconUrl = "/java-cup.png";
                    } else if (slug === "ps" || slug === "matlab") {
                        // SkillIcons for Ps and Matlab
                        iconUrl = `https://skillicons.dev/icons?i=${slug}`;
                    } else {
                        // Simple Icons for everything else including OBS
                        const needsWhite = isDark && (slug === "nextdotjs" || slug === "unrealengine" || slug === "linux" || slug === "obsstudio");
                        iconUrl = `https://cdn.simpleicons.org/${slug}${needsWhite ? "/white" : ""}`;
                    }

                    return (
                        <motion.a
                            key={tech}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setHoveredIcon(tech)}
                            onMouseLeave={() => setHoveredIcon(null)}
                            initial={false}
                        >
                            <AnimatePresence>
                                {hoveredIcon === tech && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: -45, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-800 text-white text-xs rounded-md shadow-xl border border-zinc-700 whitespace-nowrap z-50 flex flex-col items-center"
                                    >
                                        {tech}
                                        <div className="absolute -bottom-1 w-2 h-2 bg-zinc-800 border-r border-b border-zinc-700 rotate-45" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.div
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300"
                            >
                                {/* Subtle Blue Aura Glow */}
                                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-600/15 rounded-full blur-2xl transition-all duration-300 scale-125" />
                                <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 rounded-full blur-3xl transition-all duration-500 scale-[2]" />

                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={iconUrl}
                                    alt={tech}
                                    className="relative w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                                    onError={(e) => {
                                        // Fallback for OBS if obsstudio fails
                                        if (slug === "obsstudio") {
                                            (e.target as HTMLImageElement).src = `https://skillicons.dev/icons?i=obs`;
                                        }
                                    }}
                                />
                            </motion.div>
                        </motion.a>
                    );
                })}
            </div>
        </div>
    );
}
