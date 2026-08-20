import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    author: string;
    category: string;
    tags: string[];
    content: string;
};

export function getBlogPosts(): Omit<BlogPost, 'content'>[] {
    if (!fs.existsSync(BLOG_DIRECTORY)) {
        fs.mkdirSync(BLOG_DIRECTORY, { recursive: true });
        return [];
    }

    const files = fs.readdirSync(BLOG_DIRECTORY);

    const posts = files
        .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
        .map((file) => {
            const filePath = path.join(BLOG_DIRECTORY, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(fileContent);

            const imagePath = data.image || `/assets/blog/${file.replace(/\.mdx?$/, '')}.png`;
            const absoluteImagePath = path.join(process.cwd(), 'public', imagePath);
            const finalImage = fs.existsSync(absoluteImagePath) ? imagePath : '/assets/blog/default.png';

            return {
                slug: file.replace(/\.mdx?$/, ''),
                title: data.title || 'Untitled Post',
                date: data.date || '',
                excerpt: data.excerpt || '',
                image: finalImage,
                author: data.author || 'iGreen Energy',
                category: data.category || 'Geral',
                tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const fullPath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);
    const alternatePath = path.join(BLOG_DIRECTORY, `${slug}.md`);

    let actualPath = '';
    if (fs.existsSync(fullPath)) actualPath = fullPath;
    else if (fs.existsSync(alternatePath)) actualPath = alternatePath;
    else return null;

    const fileContent = fs.readFileSync(actualPath, 'utf8');
    const { data, content } = matter(fileContent);

    const imagePath = data.image || `/assets/blog/${slug}.png`;
    const absoluteImagePath = path.join(process.cwd(), 'public', imagePath);
    const finalImage = fs.existsSync(absoluteImagePath) ? imagePath : '/assets/blog/default.png';

    return {
        slug,
        title: data.title || 'Untitled Post',
        date: data.date || '',
        excerpt: data.excerpt || '',
        image: finalImage,
        author: data.author || 'iGreen Energy',
        category: data.category || 'Geral',
        tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
        content,
    };
}
