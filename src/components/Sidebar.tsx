import { useState } from 'react';

export default function Sidebar() {
    const [showContacts, setShowContacts] = useState(false);

    return (
        <aside className="relative w-full lg:w-[320px] lg:shrink-0 bg-bg-card border border-border rounded-[20px] px-6 py-1 sm:px-8 sm:py-10 lg:px-8 lg:py-12 shadow-[-4px_8px_24px_hsla(0,0%,0%,0.25)] lg:shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] lg:sticky lg:top-[60px] lg:z-[1]">
            {/* Profile — row on mobile, stacked on desktop */}
            <div className="flex flex-row lg:flex-col items-center gap-4 sm:gap-5 lg:gap-4 lg:text-center">
                <div className="rounded-[18px] sm:rounded-[24px] lg:rounded-[30px] overflow-hidden bg-gradient-to-br from-[hsl(240,1%,25%)] to-[hsl(0,0%,19%)] shrink-0 ring-1 ring-border">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gowtham"
                        alt="Gowtham Vegi"
                        className="w-[72px] sm:w-[96px] lg:w-[150px] block"
                        width={150}
                        height={150}
                    />
                </div>

                <div className="min-w-0 flex-1 lg:flex-none lg:w-full">
                    <h1 className="text-text-white text-[18px] sm:text-[22px] lg:text-[26px] font-semibold tracking-[-0.25px] mb-2 lg:mb-3 truncate lg:whitespace-normal lg:text-center">
                        Gowtham Vegi
                    </h1>
                    <span className="bg-bg-element text-text-white text-[11px] sm:text-[12px] font-light px-3 py-1 sm:px-[18px] sm:py-[5px] rounded-lg inline-block lg:mx-auto">
                        Software Engineer
                    </span>
                </div>
            </div>

            {/* Show Contacts Toggle (mobile/tablet only) */}
            <button
                type="button"
                className="lg:hidden absolute top-0 right-0 rounded-tr-[20px] rounded-bl-[15px] text-[12px] text-accent bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsla(0,0%,25%,0)] px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_16px_30px_hsla(0,0%,0%,0.25)] cursor-pointer border-none flex items-center gap-1.5 transition-all hover:text-text-white"
                onClick={() => setShowContacts(!showContacts)}
                aria-expanded={showContacts}
                aria-label="Toggle contact information"
            >
                <span className="hidden sm:inline">{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
                <span className="sm:hidden">Contacts</span>
                <svg
                    className={`w-3 h-3 transition-transform duration-300 ${showContacts ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            {/* Contact info — collapsible on mobile, always visible on desktop */}
            <div
                className={`contacts-section mt-4 lg:!mt-0 lg:!max-h-none lg:!opacity-100 ${showContacts ? 'open' : ''
                    }`}
            >
                <div className="separator my-7 sm:my-8" />

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6 list-none max-w-[280px] mx-auto lg:max-w-none">
                    <ContactItem
                        icon={
                            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        }
                        label="Email"
                        value="gowthamvegi@gmail.com"
                        href="mailto:gowthamvegi@gmail.com"
                    />
                    <ContactItem
                        icon={
                            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        }
                        label="Phone"
                        value="+91-8688266827"
                        href="tel:+918688266827"
                    />
                    <ContactItem
                        icon={
                            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        }
                        label="Location"
                        value="Bengaluru, India"
                    />
                    <ContactItem
                        icon={
                            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        }
                        label="Education"
                        value="B.Tech CSE, 2023"
                    />
                </ul>

                <div className="separator my-7 sm:my-8" />

                {/* Social links — centered */}
                <div className="flex items-center justify-center gap-6">
                    <a href="https://github.com/Gowthamvegi" target="_blank" rel="noopener noreferrer"
                        className="text-text-light-70 hover:text-accent transition-colors"
                        aria-label="GitHub">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/gowthamvegi" target="_blank" rel="noopener noreferrer"
                        className="text-text-light-70 hover:text-accent transition-colors"
                        aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a href="https://leetcode.com/u/gowthamvegi" target="_blank" rel="noopener noreferrer"
                        className="text-text-light-70 hover:text-accent transition-colors"
                        aria-label="LeetCode">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                        </svg>
                    </a>
                </div>
            </div>
        </aside>
    );
}

function ContactItem({
    icon,
    label,
    value,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}) {
    return (
        <li className="flex items-center gap-4 min-w-0 justify-center lg:justify-start">
            <div className="icon-box text-accent">{icon}</div>
            <div className="min-w-0">
                <p className="text-text-light-70 text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">
                    {label}
                </p>
                {href ? (
                    <a
                        href={href}
                        className="text-text-white text-[13px] sm:text-[14px] font-light hover:text-accent transition-colors block truncate"
                    >
                        {value}
                    </a>
                ) : (
                    <address className="text-text-white text-[13px] sm:text-[14px] font-light not-italic truncate">
                        {value}
                    </address>
                )}
            </div>
        </li>
    );
}
