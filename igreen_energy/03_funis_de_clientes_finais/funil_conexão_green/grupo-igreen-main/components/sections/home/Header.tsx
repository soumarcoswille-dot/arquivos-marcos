"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "#hub", label: "Nossas Conexões" },
        { href: "#ecosystem", label: "Diferenciais" },
        { href: "#authority", label: "Autoridade" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "py-4 bg-white/90 backdrop-blur-xl border-b border-slate-200"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95">
                        <Image
                            src="/identidade-visual-igreen/logo-colorida-igreen.png"
                            alt="iGreen Energy Logo"
                            width={160}
                            height={50}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-black transition-all hover:-translate-y-0.5 ${scrolled ? "text-slate-600 hover:text-primary" : "text-slate-500 hover:text-primary"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            asChild
                            className="bg-primary text-black hover:bg-primary/90 font-black px-8 h-12 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                        >
                            <Link href="https://wa.me/5547997838464" target="_blank">
                                Falar com Consultor
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 rounded-xl border transition-colors ${scrolled
                            ? "text-slate-900 bg-slate-100 border-slate-200"
                            : "text-slate-800 bg-white border-slate-200"
                            }`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-[2rem] border border-slate-200 bg-white/95 backdrop-blur-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-2xl font-black text-slate-900 hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Button
                                    asChild
                                    className="w-full justify-center font-black text-xl h-16 rounded-2xl bg-primary text-black"
                                >
                                    <Link href="https://wa.me/5547997838464" target="_blank" onClick={() => setIsOpen(false)}>
                                        Falar com Consultor
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
