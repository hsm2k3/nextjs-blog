'use client';

import { useState } from 'react';
import DashboardLayout from "@/components/boards/Dashboard";
import { useUser } from '@/lib/redux/hooks/useUser';
import SearchBar from './_components/SearchBar';
import TabNavigation from './_components/TabNavigation';
import FAQSection from './_components/FAQSection';
import BugReportSection from './_components/BugReportSection';

const HelpPage = () => {
    const user = useUser();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'faq' | 'report'>('faq');

    return (
        <DashboardLayout user={user.name}>
            <div className="container mx-auto px-4 py-6 max-w-4xl">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Help & Support</h1>
                    <p className="text-[var(--text-secondary)]">Find answers to common questions or report issues</p>
                </div>

                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <TabNavigation
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <div className="mt-4">
                    {activeTab === 'faq' && (
                        <FAQSection searchQuery={searchQuery} />
                    )}

                    {activeTab === 'report' && (
                        <BugReportSection />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default HelpPage;