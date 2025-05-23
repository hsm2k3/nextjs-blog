'use client';

import { useState } from 'react';
import SvgIcon from '@/components/images/SvgIcon';

interface BlogSearchProps {
    onSearch: (query: string) => void;
}

const BlogSearch: React.FC<BlogSearchProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <div className="mb-6">
            <form onSubmit={handleSubmit}>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SvgIcon name="search" size={18} useSystemTheme={true} />
                    </div>
                    <input
                        type="text"
                        className="w-full pl-10 pr-3 py-2 border border-[var(--border-color)] rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]"
                        placeholder="Search blog posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 px-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogSearch;