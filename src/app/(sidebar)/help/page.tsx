'use client';

import { useState } from 'react';
import DashboardLayout from "@/components/boards/Dashboard";
import { useUser } from '@/lib/redux/hooks/useUser';
import SvgIcon from "@/components/images/SvgIcon";

interface FAQItem {
    question: string;
    answer: string;
}

const HelpPage = () => {
    const user = useUser();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'faq' | 'report'>('faq');
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real implementation, this would send the data to a backend
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            // Clear form fields here if needed
        }, 3000);
    };

    return (
        <DashboardLayout user={user.name}>
            <div className="container mx-auto px-4 py-6 max-w-4xl">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Help & Support</h1>
                    <p className="text-[var(--text-secondary)]">Find answers to common questions or report issues</p>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SvgIcon name="search" size={18} useSystemTheme={true} />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border rounded-lg bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search for help topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Tab Navigation */}
                <div className="flex mb-6 border-b border-[var(--border-color)]">
                    <button
                        onClick={() => setActiveTab('faq')}
                        className={`px-4 py-2 font-medium text-sm ${
                            activeTab === 'faq'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-[var(--text-secondary)]'
                        }`}
                    >
                        Frequently Asked Questions
                    </button>
                    <button
                        onClick={() => setActiveTab('report')}
                        className={`px-4 py-2 font-medium text-sm ${
                            activeTab === 'report'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-[var(--text-secondary)]'
                        }`}
                    >
                        Report a Bug
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    {/* FAQ Tab */}
                    {activeTab === 'faq' && (
                        <div>
                            {searchQuery && filteredFAQs.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-[var(--text-secondary)]">No results found for &quot;{searchQuery}&quot;</p>
                                    <button
                                        onClick={() => setSearchQuery('')}
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
                    )}

                    {/* Report a Bug Tab */}
                    {activeTab === 'report' && (
                        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Report a Bug</h2>

                            {submitted ? (
                                <div className="text-center p-6">
                                    <SvgIcon name="check-circle" size={48} useSystemTheme={true} className="mx-auto mb-4 text-green-500" />
                                    <h3 className="text-lg font-medium text-[var(--text-primary)]">Thank you for your report!</h3>
                                    <p className="text-[var(--text-secondary)] mt-2">Your feedback helps improve this blog for everyone.</p>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1" htmlFor="email">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-[var(--border-color)] rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1" htmlFor="bug-type">
                                            Issue Type
                                        </label>
                                        <select
                                            id="bug-type"
                                            className="w-full px-3 py-2 border border-[var(--border-color)] rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]"
                                        >
                                            <option value="ui">User Interface Issue</option>
                                            <option value="functionality">Feature Not Working</option>
                                            <option value="performance">Performance Problem</option>
                                            <option value="account">Account/Login Issue</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1" htmlFor="description">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-[var(--border-color)] rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]"
                                            placeholder="Please describe what happened and steps to reproduce the issue..."
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1" htmlFor="browser">
                                            Browser & Device Information
                                        </label>
                                        <input
                                            type="text"
                                            id="browser"
                                            className="w-full px-3 py-2 border border-[var(--border-color)] rounded-md bg-[var(--bg-input)] text-[var(--text-primary)]"
                                            placeholder="e.g. Chrome 121 on Windows 11"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Submit Bug Report
                                    </button>
                                </form>
                            )}

                            <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                                <p className="text-sm text-[var(--text-secondary)]">
                                    Bug reports help improve the blog experience for everyone. Thank you for taking the time to report issues!
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default HelpPage;