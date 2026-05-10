import type { PageKey } from '../hooks/useHashRoute';

interface NavbarProps {
    activePage: PageKey;
    onPageChange: (page: PageKey) => void;
}

const navItems: PageKey[] = ['About', 'Resume', 'Portfolio'];

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
    return (
        <nav
            aria-label="Main navigation"
            className="sticky top-0 z-10 -mx-6 sm:-mx-8 lg:-mx-10 -mt-6 sm:-mt-8 lg:-mt-10 mb-8 sm:mb-10 px-6 sm:px-8 lg:px-10 pt-5 sm:pt-6 pb-4 bg-bg-card/85 backdrop-blur border-b border-border rounded-t-[20px]"
        >
            <ul className="flex justify-end gap-4 sm:gap-7 lg:gap-8 list-none">
                {navItems.map((item) => {
                    const isActive = activePage === item;
                    return (
                        <li key={item}>
                            <button
                                type="button"
                                data-active={isActive}
                                aria-current={isActive ? 'page' : undefined}
                                className={`nav-btn text-[12px] sm:text-[14px] lg:text-[15px] font-medium bg-transparent border-none cursor-pointer transition-colors duration-200 py-2 ${isActive
                                    ? 'text-accent'
                                    : 'text-text-light-70 hover:text-text-white'
                                    }`}
                                onClick={() => onPageChange(item)}
                            >
                                {item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
