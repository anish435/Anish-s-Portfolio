"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-zinc-800/50 py-3" : "bg-transparent py-5"}`}>
            <div className="max-w-4xl mx-auto px-6 flex justify-between items-center gap-4">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity shrink-0">
                    A.
                </Link>
                <div className="flex items-center gap-6">
                    <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar py-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[13px] md:text-sm font-medium text-zinc-400 hover:text-zinc-100 dark:hover:text-zinc-100 transition-colors relative group whitespace-nowrap"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
