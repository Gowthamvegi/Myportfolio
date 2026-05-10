import type { PageKey } from '../hooks/useHashRoute';

interface AboutProps {
    onNavigate?: (page: PageKey) => void;
}

export default function About({ onNavigate }: AboutProps) {
    return (
        <section className="space-y-20 sm:space-y-24">
            {/* ===== Hero ===== */}
            <div className="animate-fade-up">
                <p className="text-accent text-[13px] sm:text-[14px] font-medium uppercase tracking-wider mb-3">
                    Hi there 👋
                </p>
                <h2 className="section-title text-text-white text-[26px] sm:text-[34px] lg:text-[38px] leading-[1.25]">
                    I'm Gowtham, a software engineer who ships <span className="text-accent">reliable systems</span>.
                </h2>

                <div className="space-y-5 mt-8">
                    <p className="text-text-light text-[14px] sm:text-[16px] font-light leading-[1.75]">
                        Software Engineer based in Bengaluru with 1+ years of experience building
                        scalable Node.js / TypeScript microservices. I turn messy business workflows
                        into clean, type-safe systems — API design, schema architecture, schedulers,
                        and multi-tenant RBAC are my happy places.
                    </p>
                    <p className="text-text-light-70 text-[14px] sm:text-[15px] font-light leading-[1.75]">
                        I care about understanding the <em className="text-text-white not-italic font-medium">why</em> behind
                        engineering decisions before jumping to the how. Off-hours, you'll find me on
                        LeetCode or at a chess board.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-12">
                    <button type="button" className="btn-accent" onClick={() => onNavigate?.('Portfolio')}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                        View Projects
                    </button>
                    <a
                        href="mailto:gowthamvegi@gmail.com"
                        className="btn-accent"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* ===== What I'm Doing ===== */}
            <div>
                <h3 className="text-text-white text-[20px] sm:text-[24px] capitalize mb-8 font-semibold">
                    What I'm Doing
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger">
                    <ServiceCard
                        icon="🖥️"
                        title="Backend Development"
                        description="Scalable Node.js / TypeScript APIs, microservices, and data pipelines backed by solid database architecture."
                    />
                    <ServiceCard
                        icon="⚡"
                        title="API Design"
                        description="Type-safe REST APIs with validation, RBAC, multi-tenancy, and contract-first architecture you can trust."
                    />
                    <ServiceCard
                        icon="🗄️"
                        title="Database & Schema"
                        description="PostgreSQL schema design, Drizzle ORM, data modeling, and workflow automation with schedulers."
                    />
                    <ServiceCard
                        icon="🎨"
                        title="Frontend"
                        description="React interfaces with modern tooling — clean, responsive, and built to last."
                    />
                </div>
            </div>

            {/* ===== Tech Stack ===== */}
            <div>
                <h3 className="text-text-white text-[20px] sm:text-[24px] capitalize mb-8 font-semibold">
                    Tech Stack
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger">
                    <SkillGroup
                        title="Languages & Frameworks"
                        skills={['TypeScript', 'Node.js', 'React', 'Fastify', 'Express', 'Python', 'Java']}
                    />
                    <SkillGroup
                        title="Database & ORM"
                        skills={['PostgreSQL', 'MySQL', 'Redis', 'Drizzle ORM', 'Schema Design']}
                    />
                    <SkillGroup
                        title="Architecture"
                        skills={['REST APIs', 'Microservices', 'RBAC', 'Multi-tenancy', 'Schedulers', 'Data Pipelines']}
                    />
                    <SkillGroup
                        title="Tools & Practices"
                        skills={['Git', 'AWS S3', 'Zod', 'ts-rest', 'JWT', 'Postman', 'DBeaver']}
                    />
                </div>
            </div>

            {/* ===== Highlights ===== */}
            <div>
                <h3 className="text-text-white text-[20px] sm:text-[24px] capitalize mb-8 font-semibold">
                    Impact
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger">
                    <StatCard number="60%" label="Manual tracking reduced via workflow automation" />
                    <StatCard number="95%" label="Accuracy in data extraction pipelines" />
                    <StatCard number="150+" label="LeetCode problems solved" />
                </div>
            </div>

            {/* ===== Certifications ===== */}
            <div>
                <h3 className="text-text-white text-[20px] sm:text-[24px] capitalize mb-8 font-semibold">
                    Certifications
                </h3>

                <div className="flex flex-col gap-4 stagger">
                    <CertCard title="AWS Certified Cloud Practitioner" date="October 2024" icon="☁️" />
                    <CertCard title="Problem Solving (Basic) — HackerRank" date="July 2024" icon="🧩" />
                    <CertCard title="100 Days of Code: Python Pro Bootcamp — Udemy" date="May 2024" icon="🐍" />
                </div>
            </div>
        </section>
    );
}

/* ===== Sub-components ===== */

function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
    return (
        <div className="surface-card hoverable flex flex-col sm:flex-row sm:items-start sm:gap-5 p-6 sm:p-7">
            <div className="text-[36px] sm:text-[40px] mb-3 sm:mb-0 sm:mt-1 shrink-0 text-center sm:text-left">
                {icon}
            </div>
            <div className="text-center sm:text-left">
                <h4 className="text-text-white text-[16px] sm:text-[18px] font-semibold capitalize mb-2.5">{title}</h4>
                <p className="text-text-light text-[14px] sm:text-[15px] font-light leading-[1.7]">{description}</p>
            </div>
        </div>
    );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
    return (
        <div className="surface-card hoverable p-6">
            <h4 className="text-text-white text-[14px] sm:text-[16px] font-semibold mb-4">{title}</h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="bg-bg-element text-text-light text-[12px] sm:text-[13px] font-light px-3 py-1.5 rounded-lg border border-border/50"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="surface-card hoverable p-6 sm:p-7 text-center">
            <p className="text-accent text-[30px] sm:text-[36px] font-bold leading-tight">{number}</p>
            <p className="text-text-light-70 text-[12px] sm:text-[13px] font-light leading-[1.6] mt-3">{label}</p>
        </div>
    );
}

function CertCard({ title, date, icon }: { title: string; date: string; icon: string }) {
    return (
        <div className="surface-card hoverable p-5 sm:p-6 flex items-center gap-4">
            <span className="text-[24px] sm:text-[28px] shrink-0">{icon}</span>
            <div className="min-w-0 flex-1">
                <p className="text-text-white text-[14px] sm:text-[15px] font-medium truncate">{title}</p>
                <p className="text-accent-dark text-[12px] sm:text-[13px] font-light mt-1">{date}</p>
            </div>
        </div>
    );
}
