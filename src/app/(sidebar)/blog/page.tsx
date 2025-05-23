'use client';

import { useState, useEffect } from 'react';
import { mockBlogData, BlogPost } from './_data/mockBlogData';
import DashboardLayout from "@/components/boards/Dashboard";
import { useUser } from '@/lib/redux/hooks/useUser';
import BlogHeader from './_components/BlogHeader';
import BlogSearch from './_components/BlogSearch';
import BlogCategories from './_components/BlogCategories';
import BlogTags from './_components/BlogTags';
import BlogList from './_components/BlogList';
import BlogPagination from './_components/BlogPagination';

export default function BlogPage() {
    const user = useUser();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // Initialize with mock data
    useEffect(() => {
        // In a real app, this would be an API call
        setPosts(mockBlogData.posts);
        setFilteredPosts(mockBlogData.posts);
    }, []);

    // Handle search and filtering functions (same as before)
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
        applyFilters(query, selectedCategory, selectedTags);
    };

    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        applyFilters(searchQuery, category, selectedTags);
    };

    const handleTagToggle = (tag: string) => {
        const newSelectedTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];

        setSelectedTags(newSelectedTags);
        setCurrentPage(1);
        applyFilters(searchQuery, selectedCategory, newSelectedTags);
    };

    const applyFilters = (query: string, category: string | null, tags: string[]) => {
        let filtered = posts;

        if (query) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                post.content.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (category) {
            filtered = filtered.filter(post => post.categories.includes(category));
        }

        if (tags.length > 0) {
            filtered = filtered.filter(post =>
                tags.some(tag => post.tags.includes(tag))
            );
        }

        setFilteredPosts(filtered);
    };

    // Get current posts for pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <DashboardLayout user={user.name}>
            <div className="container mx-auto py-8 px-4">
                <BlogHeader
                    title="Blog"
                    description="Discover the latest insights, tutorials, and news about web development and technology."
                />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar with filters */}
                    <div className="lg:col-span-1">
                        <BlogSearch onSearch={handleSearch} />

                        <BlogCategories
                            categories={mockBlogData.categories}
                            selectedCategory={selectedCategory}
                            onSelectCategory={handleCategorySelect}
                        />

                        <BlogTags
                            tags={mockBlogData.tags}
                            selectedTags={selectedTags}
                            onToggleTag={handleTagToggle}
                        />
                    </div>

                    {/* Main content */}
                    <div className="lg:col-span-3">
                        <BlogList posts={currentPosts} />

                        <BlogPagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}