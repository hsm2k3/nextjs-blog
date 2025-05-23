import { useState } from 'react';
import SvgIcon from "@/components/images/SvgIcon";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    searchQuery: string;
}

const FAQSection = ({ searchQuery }: FAQSectionProps) => {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: 'How do I sign up for this blog?',
            answer: 'You can sign up using email, two-factor authentication, or passkeys for a more secure experience.'
        },
        {
            question: 'What are passkeys?',
            answer: 'Passkeys are a more secure alternative to passwords that use biometric data or device PIN to authenticate you without needing to remember complex passwords.'
        },
        {
            question: 'Can I change my display name?',
            answer: 'Yes, you can update your profile information from the Account Settings page once you are logged in.'
        },
        {
            question: 'How do I enable dark mode?',
            answer: 'You can toggle between light and dark mode using the theme switch in the sidebar or header depending on your device.'
        },
        {
            question: 'How can I report a bug?',
            answer: 'You can use the Bug Report tab on this page to submit any issues you encounter while using the blog.'
        }
    ];

    const filteredFAQs = faqItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleFAQ = (index: number) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    return (
        <div>
            {searchQuery && filteredFAQs.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-[var(--text-secondary)]">No results found for &quot;{searchQuery}&quot;</p>
                    <button
                        onClick={() => {}}
                        className="mt-2 text-blue-500 hover:underline"
                    >
                        Clear search
                    </button>
                </div>
            ) : (
                <div className="space-y-3">
                    {filteredFAQs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[var(--border-color)] rounded-lg overflow-hidden bg-[var(--bg-card)]"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full px-4 py-3 text-left"
                            >
                                <span className="font-medium text-[var(--text-primary)]">{faq.question}</span>
                                <SvgIcon
                                    name={expandedFAQ === index ? "chevron-up" : "chevron-down"}
                                    size={18}
                                    useSystemTheme={true}
                                />
                            </button>
                            {expandedFAQ === index && (
                                <div className="px-4 pb-4 text-[var(--text-secondary)]">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                        <SvgIcon name="info" size={20} useSystemTheme={true} />
                    </div>
                    <div>
                        <h3 className="font-medium text-[var(--text-primary)]">Still have questions?</h3>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">
                            If you can&apos;t find what you&apos;re looking for, you can report an issue using the Bug Report tab.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;