export default function Resume() {
    return (
        <section className="space-y-16 sm:space-y-20">
            <h2 className="section-title text-text-white text-[26px] sm:text-[32px]">
                Resume
            </h2>

            {/* ===== Experience ===== */}
            <div>
                <div className="flex items-center gap-4 mb-10">
                    <div className="icon-box text-accent">
                        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <h3 className="text-text-white text-[20px] sm:text-[24px] font-semibold">Experience</h3>
                </div>

                <ol className="text-[14px] sm:text-[15px] list-none timeline-list">
                    <li className="timeline-item">
                        <h4 className="text-text-white text-[15px] sm:text-[16px] font-medium leading-[1.3] mb-2">Backend Developer</h4>
                        <span className="text-accent-dark text-[13px] sm:text-[14px] font-normal leading-[1.6] block mb-3">Axoidan · Present</span>
                        <ul className="space-y-2.5">
                            <li className="text-text-light text-[14px] sm:text-[15px] font-light leading-[1.75]">
                                Architected international cross-trade logistics platform handling consignment creation, multi-party documentation, and communication workflows for global trade partners.
                            </li>
                            <li className="text-text-light text-[14px] sm:text-[15px] font-light leading-[1.75]">
                                Built workflow tracker + schema automation (PostgreSQL, schedulers) that advanced shipment stages on document upload — reducing 60% manual tracking.
                            </li>
                            <li className="text-text-light text-[14px] sm:text-[15px] font-light leading-[1.75]">
                                Designed Express → FastAPI extraction/mapping pipeline to convert customs docs into DB records (95% accuracy).
                            </li>
                            <li className="text-text-light text-[14px] sm:text-[15px] font-light leading-[1.75]">
                                Built eBRC microservice with complete database architecture and scheduler workflows based on DGFT documentation for export compliance automation.
                            </li>
                        </ul>
                    </li>
                    <li className="timeline-item">
                        <h4 className="text-text-white text-[15px] sm:text-[16px] font-medium leading-[1.3] mb-2">Backend Developer — Learn-in-App API</h4>
                        <span className="text-accent-dark text-[13px] sm:text-[14px] font-normal leading-[1.6] block mb-3">Freelance · Recent</span>
                        <ul className="space-y-2.5">
                            <li className="text-text-light text-[14px] sm:text-[15px] font-light leading-[1.75]">
                                Built the complete test-management workflow — scheduling, question validation, approval cycles, and analytics — improving academic administration efficiency.
                            </li>
                            <li className="text-text-light text-[14px] sm:text-[15px] font-light leading-[1.75]">
                                Created structured educational hierarchies and question categorization models, improving retrieval speed and system organization.
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>

            {/* ===== Education ===== */}
            <div>
                <div className="flex items-center gap-4 mb-10">
                    <div className="icon-box text-accent">
                        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                    </div>
                    <h3 className="text-text-white text-[20px] sm:text-[24px] font-semibold">Education</h3>
                </div>

                <ol className="text-[14px] sm:text-[15px] list-none timeline-list">
                    <li className="timeline-item">
                        <h4 className="text-text-white text-[15px] sm:text-[16px] font-medium leading-[1.3] mb-2">B.Tech in Computer Science Engineering</h4>
                        <span className="text-accent-dark text-[13px] sm:text-[14px] font-normal leading-[1.6] block mb-3">2023</span>
                        <p className="text-text-light text-[14px] sm:text-[15px] font-light leading-[1.75]">
                            Amrita School of Engineering, Amrita Vishwa Vidyapeetham, Coimbatore, TN
                        </p>
                    </li>
                </ol>
            </div>

            {/* ===== Skills ===== */}
            <div>
                <h3 className="text-text-white text-[20px] sm:text-[24px] font-semibold mb-8">My Skills</h3>

                <div className="surface-card p-6 sm:p-7">
                    <div className="space-y-6">
                        <SkillBar label="TypeScript / Node.js" value={90} />
                        <SkillBar label="API Design & REST" value={88} />
                        <SkillBar label="PostgreSQL / Database Design" value={85} />
                        <SkillBar label="React.js" value={70} />
                        <SkillBar label="Python" value={65} />
                        <SkillBar label="AWS / Cloud" value={60} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillBar({ label, value }: { label: string; value: number }) {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2.5">
                <h5 className="text-text-white text-[13px] sm:text-[15px] font-medium">{label}</h5>
                <data className="text-text-light text-[13px] font-light ml-auto tabular-nums">{value}%</data>
            </div>
            <div
                className="skill-progress-bg"
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={label}
            >
                <div className="skill-progress-fill" style={{ width: `${value}%` }} />
            </div>
        </div>
    );
}
