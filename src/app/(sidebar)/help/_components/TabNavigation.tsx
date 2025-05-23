interface TabNavigationProps {
    activeTab: 'faq' | 'report';
    setActiveTab: (tab: 'faq' | 'report') => void;
}

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
    return (
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
    );
};

export default TabNavigation;