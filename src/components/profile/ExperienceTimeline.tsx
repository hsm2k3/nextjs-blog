
import React from 'react';
import SvgIcon from '@/components/images/SvgIcon';

interface Experience {
    role: string;
    company: string;
    period: string;
    highlights: string[];
}

interface ExperienceTimelineProps {
    experiences: Experience[];
}


const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
    return (
        <div className="relative text-gray-300">
            {experiences.map((exp, index) => (
                <div key={index} className={`flex gap-4 ${index !== experiences.length - 1 ? 'mb-8' : ''}`}>
                    <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-blue-400 mt-2"></div>
                        {index !== experiences.length - 1 && (
                            <div className="absolute top-3 bottom-0 left-1.5 -ml-px w-0.5 bg-gray-700"></div>
                        )}
                    </div>

                    <div className="bg-gray-800 rounded-lg shadow-md p-6 flex-1">
                        <h3 className="text-xl font-semibold text-blue-300">{exp.role}</h3>
                        <p className="text-lg text-blue-200 mt-1">{exp.company}</p>
                        <p className="text-gray-400 mt-1">{exp.period}</p>

                        <ul className="mt-4 space-y-2">
                            {exp.highlights.map((highlight, hIndex) => (
                                <li key={hIndex} className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceTimeline;