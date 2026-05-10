import { useMemo, useState } from 'react';

type Category = 'All' | 'Backend' | 'Data Pipeline' | 'Full Stack' | 'Frontend';

interface Project {
    title: string;
    category: Exclude<Category, 'All'>;
    description: string;
    tags: string[];
    icon: string;
    github?: string;
    demo?: string;
}

const PROJECTS: Project[] = [
    {
        title: 'Cross-Trade Logistics Platform',
        category: 'Backend',
        description:
            'International logistics platform handling consignment creation, multi-party documentation, and communication workflows for global trade partners.',
        tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Fastify'],
        icon: '🚢',
    },
    {
        title: 'eBRC Microservice',
        category: 'Backend',
        description:
            'Electronic Bank Realization Certificate microservice with complete database architecture and scheduler workflows for export compliance automation.',
        tags: ['TypeScript', 'Schedulers', 'DGFT', 'PostgreSQL'],
        icon: '📜',
    },
    {
        title: 'Workflow Automation Engine',
        category: 'Backend',
        description:
            'Schema automation system with PostgreSQL and schedulers that advances shipment stages on document upload, reducing 60% manual tracking.',
        tags: ['PostgreSQL', 'Schedulers', 'Automation'],
        icon: '⚙️',
    },
    {
        title: 'Document Extraction Pipeline',
        category: 'Data Pipeline',
        description:
            'Express → FastAPI extraction/mapping pipeline converting customs documents into structured DB records with 95% accuracy.',
        tags: ['Express', 'FastAPI', 'Python'],
        icon: '🔄',
    },
    {
        title: 'Learn-in-App API',
        category: 'Full Stack',
        description:
            'Complete test-management workflow with scheduling, question validation, approval cycles, and analytics for academic administration.',
        tags: ['Node.js', 'REST API', 'Zod', 'RBAC'],
        icon: '📚',
    },
    {
        title: 'Portfolio Website',
        category: 'Frontend',
        description:
            'This personal portfolio built with React, TypeScript, and Tailwind CSS — responsive, dark-themed, and performance-focused.',
        tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
        icon: '🌐',
        github: 'https://github.com/Gowthamvegi',
    },
];

const CATEGORIES: Category[] = ['All', 'Backend', 'Data Pipeline', 'Full Stack', 'Frontend'];

export default function Portfolio() {
    const [filter, setFilter] = useState<Category>('All');

    const filtered = useMemo(
        () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
        [filter]
    );

    return (
        <section className="space-y-10">
            <h2 className="section-title text-text-white text-[26px] sm:text-[32px]">
                Portfolio
            </h2>

            {/* Category filter */}
            <ul
                role="tablist"
                aria-label="Filter projects"
                className="flex flex-wrap gap-2 sm:gap-3"
            >
                {CATEGORIES.map((cat) => {
                    const active = filter === cat;
                    return (
                        <li key={cat}>
                            <button
                                role="tab"
                                aria-selected={active}
                                type="button"
                                onClick={() => setFilter(cat)}
                                className={`text-[13px] sm:text-[14px] px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${active
                                    ? 'bg-accent text-bg-body border-accent font-medium'
                                    : 'bg-bg-element text-text-light-70 border-border hover:text-text-white hover:border-text-light-70'
                                    }`}
                            >
                                {cat}
                            </button>
                        </li>
                    );
                })}
            </ul>

            {/* Grid */}
            {filtered.length === 0 ? (
                <p className="text-text-light-70 text-[14px] text-center py-8">
                    No projects in this category yet.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 stagger">
                    {filtered.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            )}
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group surface-card hoverable flex flex-col p-0 overflow-hidden">
            {/* Visual */}
            <div className="relative h-[160px] sm:h-[180px] w-full overflow-hidden bg-gradient-to-br from-bg-element to-bg-card flex items-center justify-center">
                <span className="text-[56px] sm:text-[64px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {project.icon}
                </span>

                {/* Overlay with action buttons */}
                {(project.github || project.demo) && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} on GitHub`}
                                className="w-11 h-11 rounded-full bg-bg-card text-accent flex items-center justify-center hover:bg-accent hover:text-bg-body transition-colors"
                            >
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} live demo`}
                                className="w-11 h-11 rounded-full bg-bg-card text-accent flex items-center justify-center hover:bg-accent hover:text-bg-body transition-colors"
                            >
                                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>
                        )}
                    </div>
                )}

                {/* Category pill */}
                <span className="absolute top-3 left-3 text-[11px] font-medium bg-bg-card/90 text-accent px-2.5 py-1 rounded-full border border-border">
                    {project.category}
                </span>
            </div>

            {/* Body */}
            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-text-white text-[15px] sm:text-[16px] font-semibold leading-[1.35] mb-2">
                    {project.title}
                </h3>
                <p className="text-text-light-70 text-[13px] sm:text-[14px] font-light leading-[1.6] mb-4 flex-1">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] text-text-light-70 bg-bg-element px-2 py-0.5 rounded border border-border/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
