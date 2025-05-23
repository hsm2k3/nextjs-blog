import { useState } from 'react';
import SvgIcon from "@/components/images/SvgIcon";

const BugReportSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            // Clear form fields here if needed
        }, 3000);
    };

    return (
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
    );
};

export default BugReportSection;