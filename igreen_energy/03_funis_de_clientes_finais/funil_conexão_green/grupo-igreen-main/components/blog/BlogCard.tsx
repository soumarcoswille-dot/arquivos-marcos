"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { type BlogPost } from "@/lib/blog";

interface BlogCardProps {
    post: Omit<BlogPost, 'content'>;
    index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
        >
            <Link href={`/blog/${post.slug}`} className="relative h-48 overflow-hidden">
                <Image
                    src={post.image || '/assets/blog/default.png'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 3}
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                    </span>
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                    </div>
                </div>

                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                    </h3>
                </Link>

                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags?.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-[10px] bg-secondary/30 text-muted-foreground px-2 py-0.5 rounded uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-muted-foreground text-xs line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                </p>

                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-bold text-sm group/link"
                >
                    Ler Artigo Completo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}
