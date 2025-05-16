import React from 'react';

interface SkillCategory {
    name: string;
    skills: string[];
}

interface SkillsCardProps {
    categories: SkillCategory[];
}


const SkillsCard: React.FC<SkillsCardProps> = ({ categories }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-6 text-blue-300">Expertise</h3>

            {categories.map((category, index) => (
                <div key={index} className={index > 0 ? 'mt-6' : ''}>
                    <h4 className="text-lg font-semibold text-blue-200 mb-3">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                            <span
                                key={skillIndex}
                                className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsCard;