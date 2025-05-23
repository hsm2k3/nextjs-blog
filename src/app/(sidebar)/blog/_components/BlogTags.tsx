'use client';

import SvgIcon from '@/components/images/SvgIcon';

interface BlogTagsProps {
    tags: string[];
    selectedTags: string[];
    onToggleTag: (tag: string) => void;
}

const BlogTags: React.FC<BlogTagsProps> = ({
                                               tags,
                                               selectedTags,
                                               onToggleTag
                                           }) => {
    return (
        <div className="mb-6">
            <div className="flex items-center mb-2">
                <SvgIcon name="tag" size={18} className="mr-2" useSystemTheme={true} />
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">Tags</h2>
            </div>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full ${
                            selectedTags.includes(tag)
                                ? 'bg-blue-600 text-white'
                                : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                        }`}
                        onClick={() => onToggleTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogTags;