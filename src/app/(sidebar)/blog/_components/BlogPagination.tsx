'use client';

import SvgIcon from '@/components/images/SvgIcon';

interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const BlogPagination: React.FC<BlogPaginationProps> = ({
                                                           currentPage,
                                                           totalPages,
                                                           onPageChange
                                                       }) => {
    // Generate array of page numbers to display
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPageButtons = 5;

        if (totalPages <= maxPageButtons) {
            // Show all pages if there are not too many
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Always include first page, last page, and pages around current
            const startPage = Math.max(1, currentPage - 1);
            const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            // Add ellipsis if needed
            if (startPage > 2) {
                pageNumbers.unshift('...');
                pageNumbers.unshift(1);
            } else if (startPage === 2) {
                pageNumbers.unshift(1);
            }

            if (endPage < totalPages - 1) {
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (endPage === totalPages - 1) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="flex justify-center items-center mt-8 space-x-2">
            <button
                className="p-2 rounded-md bg-[var(--bg-subtle)] text-[var(--text-secondary)] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <SvgIcon name="chevron-left" size={18} useSystemTheme={true} />
            </button>

            {getPageNumbers().map((page, index) => (
                typeof page === 'number' ? (
                    <button
                        key={index}
                        className={`w-10 h-10 rounded-md ${
                            page === currentPage
                                ? 'bg-blue-600 text-white'
                                : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                        }`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className="px-2 text-[var(--text-secondary)]">
            {page}
          </span>
                )
            ))}

            <button
                className="p-2 rounded-md bg-[var(--bg-subtle)] text-[var(--text-secondary)] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <SvgIcon name="chevron-right" size={18} useSystemTheme={true} />
            </button>
        </div>
    );
};

export default BlogPagination;