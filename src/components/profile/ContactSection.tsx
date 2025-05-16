import React from 'react';
import SvgIcon from '@/components/images/SvgIcon';

interface ContactSectionProps {
    phone: string;
    email: string;
    linkedIn?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ phone, email, linkedIn }) => {
    return (
        <div className="flex flex-wrap gap-6">
            <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
                <SvgIcon name="email" size={20} />
                <span>Email Me</span>
            </a>

            {/*<a*/}
            {/*    href={`tel:${phone.replace(/[^0-9]/g, '')}`}*/}
            {/*    className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"*/}
            {/*>*/}
            {/*    <SvgIcon name="phone" size={20} />*/}
            {/*    <span>{phone}</span>*/}
            {/*</a>*/}

            {linkedIn && (
                <a
                    href={`https://${linkedIn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                    <SvgIcon name="linkedin" size={20} />
                    <span>LinkedIn</span>
                </a>
            )}
        </div>
    );
};

export default ContactSection;