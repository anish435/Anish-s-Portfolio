"use client";

import { GitHubCalendar } from "react-github-calendar";
import { portfolioContent } from "@/data/content";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GitHubContributions() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <div className="bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl p-6 md:p-8 flex flex-col items-center animate-pulse">
            <div className="h-[150px] w-full bg-zinc-200 dark:bg-zinc-800/50 rounded-xl" />
        </div>
    );

    const githubUsername = portfolioContent.socials.github.split("/").pop() || "anish435";

    return (
        <div className="bg-zinc-50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl p-6 md:p-8">
            <div className="w-full overflow-hidden flex justify-center py-4">
                <div className="transform scale-[0.85] md:scale-100 origin-center">
                    <GitHubCalendar
                        username={githubUsername}
                        fontSize={12}
                        blockSize={13}
                        blockMargin={5}
                        // colorScheme is determined automatically by next-themes usually, 
                        // but we can pass it explicitly if needed.
                        theme={{
                            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                        }}
                        showColorLegend={true}
                        showTotalCount={true}
                    />
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-zinc-500 dark:text-zinc-400 font-mono text-sm leading-none">
                        Real-time contributions from GitHub
                    </span>
                </div>

                <motion.a
                    href={portfolioContent.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 rounded-full bg-foreground text-background font-bold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                >
                    View GitHub Profile
                </motion.a>
            </div>
        </div>
    );
}
