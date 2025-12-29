import { portfolioContent } from "@/data/content";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <div className="space-y-12">
            {portfolioContent.education.map((edu, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
                    <div className="absolute left-[-16px] top-0 w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                        <GraduationCap className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="mb-1 flex flex-wrap justify-between items-baseline gap-2">
                        <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                        <span className="text-sm font-mono text-zinc-500">{edu.period}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
                </div>
            ))}
        </div>
    );
}
