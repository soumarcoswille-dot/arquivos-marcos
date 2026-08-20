import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

const components = {
    h1: (props: any) => (
        <h1 className="text-3xl md:text-4xl font-black text-foreground mt-8 mb-4 tracking-tight" {...props} />
    ),
    h2: (props: any) => (
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 border-l-4 border-primary pl-4" {...props} />
    ),
    h3: (props: any) => (
        <h3 className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-3" {...props} />
    ),
    p: (props: any) => (
        <p className="text-muted-foreground leading-relaxed mb-6 text-lg" {...props} />
    ),
    ul: (props: any) => (
        <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-muted-foreground text-lg" {...props} />
    ),
    ol: (props: any) => (
        <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-muted-foreground text-lg" {...props} />
    ),
    li: (props: any) => <li className="pl-2" {...props} />,
    strong: (props: any) => <strong className="font-bold text-foreground text-primary" {...props} />,
    a: ({ href, ...props }: any) => (
        <Link
            href={href}
            className="text-primary font-bold underline decoration-2 underline-offset-4 hover:text-primary/80 transition-colors"
            {...props}
        />
    ),
    img: ({ src, alt }: any) => (
        <span className="block relative w-full aspect-video my-8 rounded-2xl overflow-hidden shadow-lg">
            <Image src={src} alt={alt} fill className="object-cover" />
        </span>
    ),
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-secondary bg-secondary/10 p-6 my-8 rounded-r-2xl italic text-lg" {...props} />
    ),
};

export function MDXContent({ source }: { source: string }) {
    return (
        <div className="mdx-content">
            <MDXRemote source={source} components={components} />
        </div>
    );
}
