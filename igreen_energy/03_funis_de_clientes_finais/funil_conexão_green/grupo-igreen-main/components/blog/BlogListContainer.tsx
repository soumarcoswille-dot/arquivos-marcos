'use client';

import { useState, useMemo } from 'react';
import { BlogCard } from './BlogCard';
import BlogFilters from './BlogFilters';
import { BlogPost } from '@/lib/blog';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, SlidersHorizontal } from 'lucide-react';

interface BlogListContainerProps {
    initialPosts: Omit<BlogPost, 'content'>[];
    categories: string[];
}

export default function BlogListContainer({ initialPosts, categories }: BlogListContainerProps) {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const filteredPosts = useMemo(() => {
        return initialPosts.filter(post => {
            const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;

            const query = searchQuery.toLowerCase().trim();
            const matchesSearch = !query ||
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query) ||
                post.tags?.some(tag => tag.toLowerCase().includes(query));

            return matchesCategory && matchesSearch;
        });
    }, [initialPosts, selectedCategory, searchQuery]);

    return (
        <div className="container mx-auto px-4">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-8">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex items-center gap-2 bg-secondary/10 hover:bg-secondary/20 px-4 py-3 rounded-xl transition-colors w-full justify-center text-sm font-bold uppercase tracking-wider"
                >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filtros e Pesquisa
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 relative">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-64 shrink-0 sticky top-32 h-[calc(100vh-120px)] border-r border-border/30 pr-8 overflow-y-auto scrollbar-hide">
                    <BlogFilters
                        categories={categories}
                        onFilterChange={setSelectedCategory}
                        onSearchChange={setSearchQuery}
                    />
                </aside>

                {/* Mobile Drawer */}
                <AnimatePresence>
                    {isSidebarOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsSidebarOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
                            />
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-background p-8 z-[60] lg:hidden shadow-2xl"
                            >
                                <div className="flex items-center justify-between mb-10">
                                    <h2 className="text-xl font-black uppercase tracking-widest text-green-600">Navegação</h2>
                                    <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-secondary/20 rounded-full transition-colors">
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>
                                <BlogFilters
                                    categories={categories}
                                    onFilterChange={(cat) => {
                                        setSelectedCategory(cat);
                                        setIsSidebarOpen(false);
                                    }}
                                    onSearchChange={setSearchQuery}
                                />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Content Grid */}
                <main className="flex-grow">
                    <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/30 pb-6">
                        <div>
                            <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                                <span className="text-foreground">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'Resultado' : 'Resultados'}
                            </p>
                        </div>
                        {searchQuery && (
                            <div className="flex items-center gap-2">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground">Buscando por:</span>
                                <span className="bg-green-600/10 text-green-600 text-xs font-bold px-3 py-1 rounded-full border border-green-600/20">
                                    "{searchQuery}"
                                </span>
                            </div>
                        )}
                    </div>

                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            <AnimatePresence mode="popLayout">
                                {filteredPosts.map((post, index) => (
                                    <BlogCard key={post.slug} post={post} index={index} />
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-32 bg-secondary/5 rounded-3xl border border-dashed border-border"
                        >
                            <h3 className="text-xl font-bold mb-3">Nenhum artigo encontrado</h3>
                            <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
                                Redefina seus filtros ou mude sua pesquisa.
                            </p>
                        </motion.div>
                    )}
                </main>
            </div>
        </div>
    );
}
