"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioContent } from "@/data/content";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 order-2 md:order-1"
                >
                    <span className="text-blue-500 font-mono text-sm mb-4 block">Hi, I&apos;m</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground">
                        {portfolioContent.name}.
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-zinc-600 dark:text-zinc-400 mb-8">
                        {portfolioContent.role}
                    </h2>
                    <p className="text-lg text-zinc-500 dark:text-zinc-500 max-w-xl mb-10 leading-relaxed">
                        {portfolioContent.bio}
                    </p>

                    <div className="flex gap-6 items-center">
                        <a href={portfolioContent.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-foreground transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={portfolioContent.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-foreground transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={portfolioContent.socials.email} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-foreground transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-48 h-48 md:w-64 md:h-64 order-1 md:order-2 group/profile"
                >
                    {/* Speech Bubble */}
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        whileHover={{ opacity: 1, y: -10, scale: 1 }}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 bg-zinc-800 text-zinc-100 px-4 py-2 rounded-xl text-sm font-mono whitespace-nowrap border border-zinc-700 pointer-events-none z-20 group-hover/profile:opacity-100 transition-all duration-300 opacity-0"
                    >
                        I&apos;m from India
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-800 border-b border-r border-zinc-700 rotate-45" />
                    </motion.div>

                    {/* Flag */}
                    <div className="absolute top-4 left-4 z-10 w-9 h-9 overflow-hidden rounded-full shadow-lg group-hover/profile:scale-110 transition-transform duration-300">
                        <Image
                            src="/flag.jpg"
                            alt="India Flag"
                            fill
                            className="object-cover scale-[1.6]"
                        />
                    </div>

                    <div className="absolute inset-0 bg-blue-500/10 rounded-full rotate-6 -z-10 group-hover/profile:rotate-12 transition-transform duration-500" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800/50 group-hover/profile:border-blue-500/50 transition-colors duration-500">
                        <Image
                            src="/profile.png"
                            alt={portfolioContent.name}
                            fill
                            className="object-cover grayscale group-hover/profile:grayscale-0 transition-all duration-500 scale-110 group-hover/profile:scale-100"
                            style={{ objectPosition: 'center 20%' }}
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
