import { portfolioContent } from "@/data/content";

export default function Experience() {
    return (
        <div className="space-y-12">
            {portfolioContent.experience.map((exp, index) => (
                <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-800">
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500" />
                    <div className="mb-1 flex flex-wrap justify-between items-baseline gap-2">
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{exp.organization}</p>
                    <ul className="space-y-2">
                        {exp.bullets.map((bullet, i) => (
                            <li key={i} className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex gap-2">
                                <span className="text-blue-500">•</span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
