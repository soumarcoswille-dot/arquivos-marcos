'use client';

import { Search, X, Hash } from 'lucide-react';
import { useState } from 'react';

interface BlogFiltersProps {
    categories: string[];
    onFilterChange: (category: string) => void;
    onSearchChange: (query: string) => void;
}

export default function BlogFilters({ categories, onFilterChange, onSearchChange }: BlogFiltersProps) {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        onFilterChange(category);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearchChange(query);
    };

    const clearSearch = () => {
        setSearchQuery('');
        onSearchChange('');
    };

    return (
        <div className="space-y-12">
            {/* Search Section */}
            <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/50 mb-6">
                    Pesquisar
                </h4>
                <div className="relative group">
                    <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40 group-focus-within:text-green-600 transition-colors" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="O que você procura?"
                        className="w-full bg-transparent border-b border-border/50 py-3 pl-8 pr-8 text-sm focus:outline-none focus:border-green-600 transition-all placeholder:text-muted-foreground/30"
                    />
                    {searchQuery && (
                        <button
                            onClick={clearSearch}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary/20 rounded-full transition-colors"
                        >
                            <X className="h-4 w-4 text-muted-foreground" />
                        </button>
                    )}
                </div>
            </div>

            {/* Categories Section */}
            <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/50 mb-6">
                    Categorias
                </h4>
                <nav className="flex flex-col gap-1">
                    <button
                        onClick={() => handleCategoryClick('Todos')}
                        className={`group flex items-center justify-between py-2 text-sm font-medium transition-all duration-300 border-r-2 ${activeCategory === 'Todos'
                                ? 'text-green-600 border-green-600'
                                : 'text-muted-foreground hover:text-foreground border-transparent'
                            }`}
                    >
                        <span>Todos os Artigos</span>
                        <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`group flex items-center justify-between py-2 text-sm font-medium transition-all duration-300 border-r-2 ${activeCategory === category
                                    ? 'text-green-600 border-green-600'
                                    : 'text-muted-foreground hover:text-foreground border-transparent'
                                }`}
                        >
                            <span>{category}</span>
                            <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Footer Sidebar Info (Optional/Elegance) */}
            <div className="pt-8 border-t border-border/30">
                <p className="text-[10px] text-muted-foreground/40 leading-relaxed uppercase tracking-widest">
                    iGreen Energy © 2026<br />
                    Conhecimento para sua<br />
                    Liberdade Energética
                </p>
            </div>
        </div>
    );
}
