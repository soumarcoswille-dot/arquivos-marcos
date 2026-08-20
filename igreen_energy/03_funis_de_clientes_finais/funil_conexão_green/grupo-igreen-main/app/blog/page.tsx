import { getBlogPosts } from "@/lib/blog";
import { BlogListContainer } from "@/components/blog/BlogListContainer";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | iGreen Energy",
    description: "Fique por dentro das novidades, dicas e guias sobre energia solar e sustentabilidade.",
};

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="min-h-screen bg-background font-sans antialiased text-foreground">
            <LandingHeader />
            <main className="pt-24 pb-20">
                <BlogListContainer initialPosts={posts} />
            </main>
            <LandingFooter />
        </div>
    );
}

