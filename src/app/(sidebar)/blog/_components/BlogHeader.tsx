'use client';

import SvgIcon from '@/components/images/SvgIcon';

interface BlogHeaderProps {
    title: string;
    description: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, description }) => {
    return (
        <div className="mb-8">
            <div className="flex items-center mb-2">
                <SvgIcon name="blog" size={24} className="mr-2 text-blue-600" useSystemTheme={true} />
                <h1 className="text-3xl font-bold text-[var(--text-primary)]">{title}</h1>
            </div>
            <p className="text-[var(--text-secondary)]">{description}</p>
        </div>
    );
};

export default BlogHeader;