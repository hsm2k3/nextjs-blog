'use client';
import React from 'react';
import DashboardLayout from "@/components/boards/Dashboard";
import ProfileHeader from "@/components/profile/ProfileHeader";
import SkillsCard from "@/components/profile/SkillsCard";
import ExperienceTimeline from "@/components/profile/ExperienceTimeline";
import ContactSection from "@/components/profile/ContactSection";
import { useUser } from '@/lib/redux/hooks/useUser';

const Prologue = () => {
    const user = useUser();
    return (
        <DashboardLayout user={user.name}>
            <div className="max-w-5xl mx-auto px-4 py-8">
                <section className="mb-12">
                    <ProfileHeader
                        name="Alex Braverman"
                        title="PACS Administrator & Software Engineer"
                        location="Staten Island, NY"
                        description="Technology specialist with dual expertise in healthcare imaging systems and modern software development. I bridge the gap between clinical workflows and technical solutions."
                    />
                </section>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">How I Can Help</h2>
                        <div className="prose max-w-none">
                            <p className="mb-4 text-[var(--text-secondary)]">
                                With extensive experience in both radiology systems administration and full-stack software development,
                                I offer a unique combination of healthcare IT expertise and modern programming skills.
                            </p>
                            <p className="mb-4 text-[var(--text-secondary)]">
                                Whether you need to optimize your healthcare imaging workflow, integrate disparate medical systems,
                                or develop custom software solutions, I can translate complex technical requirements into
                                practical, efficient implementations.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold mt-10 mb-6 text-[var(--text-primary)]">My Approach</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[var(--bg-card)] p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">Technical Excellence</h3>
                                <p className="text-[var(--text-secondary)]">
                                    I bring deep technical knowledge across healthcare systems and modern development stacks,
                                    ensuring solutions that are robust, secure, and compliant with healthcare regulations.
                                </p>
                            </div>
                            <div className="bg-[var(--bg-card)] p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">Business Impact</h3>
                                <p className="text-[var(--text-secondary)]">
                                    My work directly improves operational efficiency, enhances diagnostic capabilities, and
                                    creates measurable improvements in healthcare delivery and technology integration.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <SkillsCard
                            categories={[
                                {
                                    name: "Healthcare IT",
                                    skills: ["Radiology PACS", "Cardiology PACS", "Fujifilm Synapse", "DICOM",
                                        "Nuance PowerScribe", "HIPAA Compliance", "Epic", "Cerner", "HL7"]
                                },
                                {
                                    name: "Development",
                                    skills: ["React", "TypeScript", "Java", "GoLang", "Node.js", "SQL/NoSQL",
                                        "Express", "Docker", "AWS", "Git"]
                                },
                                {
                                    name: "System Admin",
                                    skills: ["Networking", "VPN", "TCP/IP", "Linux", "Windows",
                                        "Server Management", "Disaster Recovery"]
                                }
                            ]}
                        />
                    </div>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Key Experience</h2>
                    <ExperienceTimeline
                        experiences={[
                            {
                                role: "PACS/Systems Administrator",
                                company: "Hackensack Meridian Health Pascack Valley Medical Center",
                                period: "Jan 2024 – Present",
                                highlights: [
                                    "Spearheaded disaster recovery efforts following cyber-attack",
                                    "Leading integration of Epic, PACS, and modalities with third-party systems",
                                    "Improving vascular TAT compliance from 20% to projected 95%",
                                    "Implemented Nuance PowerShare for improved image distribution"
                                ]
                            },
                            {
                                role: "Full Stack Software Engineer",
                                company: "GParency",
                                period: "May 2021 – Feb 2023",
                                highlights: [
                                    "Redesigned application creating new revenue streams",
                                    "Developed and deployed microservices using Java and React in AWS",
                                    "Optimized data-driven applications with SQL/NoSQL solutions",
                                    "Containerized API frameworks with Docker improving deployment"
                                ]
                            },
                            {
                                role: "PACS Supervisor",
                                company: "University Radiology Group",
                                period: "May 2011 – Aug 2019",
                                highlights: [
                                    "Developed automation for patient data entry reducing processing time by 75%",
                                    "Managed PACS operations across 11 hospitals and 22 imaging centers",
                                    "Ensured network security and HIPAA compliance for imaging systems",
                                    "Liaised between 20 imaging centers and hospitals to resolve technical issues"
                                ]
                            }
                        ]}
                    />
                </section>

                <section className="bg-[var(--bg-card)] rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Ready to Collaborate?</h2>
                    <p className="mb-6 text-[var(--text-secondary)]">
                        I&#39;m interested in consulting opportunities, technical challenges in healthcare IT,
                        and software engineering projects. Let&#39;s discuss how my expertise can help your organization.
                    </p>
                    <ContactSection
                        phone="(908) 917-6082"
                        email="alexbraverman@protonmail.com"
                        linkedIn="linkedin.com/in/alex-braverman"
                    />
                </section>
            </div>
        </DashboardLayout>
    );
};

export default Prologue;