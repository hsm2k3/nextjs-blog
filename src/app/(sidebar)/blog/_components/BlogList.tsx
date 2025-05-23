'use client';

import { BlogPost } from '../_data/mockBlogData';
import BlogCard from './BlogCard';

interface BlogListProps {
    posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    if (posts.length === 0) {
        return (
            <div className="text-center p-8 bg-[var(--bg-subtle)] rounded-lg border border-[var(--border-color)]">
                <p className="text-[var(--text-secondary)]">No blog posts found. Try adjusting your filters.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogList;