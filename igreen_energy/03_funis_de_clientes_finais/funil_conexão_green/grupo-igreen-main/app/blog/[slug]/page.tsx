import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { MDXContent } from "@/components/blog/MDXContent";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ChevronLeft, Share2 } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Post não encontrado",
        };
    }

    return {
        title: `${post.title} | Blog iGreen Energy`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            images: [{ url: post.image }],
        },
    };
}

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background font-sans antialiased text-foreground">
            <LandingHeader />

            <main className="pt-24 pb-20">
                {/* Article Progress / Navigation */}
                <div className="container mx-auto px-4 mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Voltar para o Blog
                    </Link>
                </div>

                <article>
                    {/* Header */}
                    <header className="container mx-auto px-4 mb-10 max-w-4xl text-center">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-600 tracking-tight mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-primary" />
                                <span>Por {post.author}</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="container mx-auto px-4 mb-12 max-w-5xl">
                        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="container mx-auto px-4 max-w-3xl">
                        <article className="prose prose-lg prose-green max-w-none">
                            <MDXContent source={post.content} />
                        </article>

                        {post.tags && post.tags.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-border">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                    Tags Relacionadas
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* SEO/Marketing CTA Section */}
                        <div className="mt-12 bg-secondary rounded-3xl p-8 px-16 text-center text-white shadow-xl shadow-secondary/20">
                            <h3 className="text-2xl font-bold mb-4">Gostou deste conteúdo?</h3>
                            <p className="mb-6 opacity-90 text-lg">
                                Comece sua jornada sustentável hoje mesmo e reduza sua conta de luz em até 15%.
                            </p>
                            <Link
                                href="https://digital.igreenenergy.com.br/?id=105658&sendcontract=true&desc=8"
                                className="inline-block bg-white text-primary font-black px-8 py-4 rounded-full hover:scale-105 transition-transform"
                            >
                                Simular Minha Economia Agora
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <LandingFooter />
        </div>
    );
}
