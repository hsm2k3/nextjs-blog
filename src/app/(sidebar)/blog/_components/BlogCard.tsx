'use client';

import Link from 'next/link';
import Image from 'next/image';
import SvgIcon from '@/components/images/SvgIcon';
import { BlogPost } from '../_data/mockBlogData';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-[var(--bg-elevated)] rounded-lg shadow-md overflow-hidden border border-[var(--border-color)] hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                    {post.categories.map((category) => (
                        <span
                            key={category}
                            className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                        >
              {category}
            </span>
                    ))}
                </div>
                <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-semibold text-[var(--text-primary)] hover:text-blue-600 mb-2">
                        {post.title}
                    </h2>
                </Link>
                <p className="text-[var(--text-secondary)] mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-[var(--text-tertiary)]">
                    <div className="flex items-center">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <SvgIcon name="calendar" size={14} className="mr-1" useSystemTheme={true} />
                            <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center">
                            <SvgIcon name="clock" size={14} className="mr-1" useSystemTheme={true} />
                            <span>{post.readTime} min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;