import SvgIcon from '@/components/images/SvgIcon';

const AuthInfo = () => {
    return (
        <div className="border border-[var(--border-color)] rounded-lg p-4 bg-[var(--bg-card)]">
            <h3 className="font-medium text-[var(--text-primary)] flex items-center">
                <SvgIcon name="info" size={16} useSystemTheme={true} className="mr-2" />
                Account Benefits
            </h3>
            <ul className="mt-3 space-y-2">
                {[
                    { icon: 'edit', text: 'Create and publish your own blog posts' },
                    { icon: 'bookmark', text: 'Save favorite articles to read later' },
                    { icon: 'message-circle', text: 'Engage with other readers through comments' },
                    { icon: 'bell', text: 'Get notifications for new content' }
                ].map((item, index) => (
                    <li key={index} className="flex text-sm text-[var(--text-secondary)]">
                        <SvgIcon name={item.icon} size={14} useSystemTheme={true} className="mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AuthInfo;