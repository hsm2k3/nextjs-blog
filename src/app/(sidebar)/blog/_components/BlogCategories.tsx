'use client';

import SvgIcon from '@/components/images/SvgIcon';

interface BlogCategoriesProps {
    categories: string[];
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({
                                                           categories,
                                                           selectedCategory,
                                                           onSelectCategory
                                                       }) => {
    return (
        <div className="mb-6">
            <div className="flex items-center mb-2">
                <SvgIcon name="category" size={18} className="mr-2" useSystemTheme={true} />
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">Categories</h2>
            </div>
            <div className="flex flex-wrap gap-2">
                <button
                    className={`px-3 py-1 text-sm rounded-full ${
                        selectedCategory === null
                            ? 'bg-blue-600 text-white'
                            : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                    }`}
                    onClick={() => onSelectCategory(null)}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-3 py-1 text-sm rounded-full ${
                            selectedCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                        }`}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogCategories;