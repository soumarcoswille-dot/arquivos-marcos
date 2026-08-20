"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { gtmEvents } from "@/lib/gtm";

export function LandingHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5547997838464";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre a Conexão Solar.`;

    const navLinks = [
        { href: "/#how-it-works", label: "Como Funciona" },
        { href: "/#benefits", label: "Benefícios" },
        { href: "/#comparison", label: "Comparativo" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/identidade-visual-igreen/logo-colorida-igreen.png"
                            alt="iGreen Energy Logo"
                            width={140}
                            height={40}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button asChild className="bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 rounded-full">
                            <Link
                                href={whatsappLink}
                                target="_blank"
                                onClick={() => gtmEvents.whatsappClick("solar_header_desktop")}
                                className="flex items-center justify-center w-full h-full"
                            >
                                Quero meu Desconto
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border bg-white"
                    >
                        <div className="container px-4 py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <Button asChild className="w-full justify-center font-bold text-lg h-12 bg-primary text-white rounded-full">
                                    <Link
                                        href={whatsappLink}
                                        target="_blank"
                                        onClick={() => gtmEvents.whatsappClick("solar_header_mobile")}
                                        className="flex items-center justify-center w-full h-full"
                                    >
                                        Quero meu Desconto
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
