"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import GitHubContributions from "@/components/GitHubContributions";
import { portfolioContent } from "@/data/content";
import { Mail, Github, Linkedin, MapPin, Phone, Globe, User } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-background selection:bg-blue-500/30">
            <Navbar />

            <Hero />

            <Section id="about" title="About">
                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                    {portfolioContent.about}
                </p>
            </Section>

            <Section id="experience" title="Experience">
                <Experience />
            </Section>

            <Section id="education" title="Education">
                <Education />
            </Section>

            <Section id="stack" title="Tech Stack">
                <TechStack />
            </Section>

            <Section id="projects" title="Projects">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolioContent.projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </Section>

            <Section id="github" title="GitHub Contributions">
                <GitHubContributions />
            </Section>

            <Section id="contact" title="Get in touch">
                <div className="bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex-1 space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-4 text-foreground">Let&apos;s build something together.</h3>
                            <p className="text-zinc-500 italic">
                                Currently looking for new opportunities and collaborations.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: MapPin, text: portfolioContent.socials.address },
                                { icon: Phone, text: portfolioContent.socials.phone },
                                { icon: Mail, text: "kotikalapudianish1@gmail.com", isEmail: true },
                                { icon: Globe, text: portfolioContent.socials.website },
                                { icon: User, text: portfolioContent.socials.pronouns },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="p-2.5 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-xl border border-zinc-300/50 dark:border-zinc-700/50 transition-colors group-hover:border-blue-500">
                                        <item.icon size={20} className="text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500" />
                                    </div>
                                    {item.isEmail ? (
                                        <a
                                            href={portfolioContent.socials.email}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono text-zinc-700 dark:text-zinc-300 text-sm md:text-base tracking-tight hover:text-blue-500 transition-colors"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="font-mono text-zinc-700 dark:text-zinc-300 text-sm md:text-base tracking-tight">{item.text}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <a
                            href={portfolioContent.socials.email}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 w-full"
                        >
                            <Mail size={18} />
                            Say Hello
                        </a>
                        <div className="flex gap-4 justify-center">
                            <a href={portfolioContent.socials.github} target="_blank" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-foreground hover:border-zinc-400 dark:hover:border-zinc-600 transition-all">
                                <Github size={24} />
                            </a>
                            <a href={portfolioContent.socials.linkedin} target="_blank" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-400 hover:text-white dark:hover:border-zinc-600 transition-all">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            <footer className="py-12 px-6 border-t border-zinc-100 dark:border-zinc-900 text-center">
                <p className="text-zinc-500 dark:text-zinc-600 text-sm font-mono">
                    &copy; {new Date().getFullYear()} {portfolioContent.name} — Built with Next.js & Framer Motion
                </p>
            </footer>
        </main>
    );
}
