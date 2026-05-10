import { useEffect, useState } from 'react';

export type PageKey = 'About' | 'Resume' | 'Portfolio';

const VALID: PageKey[] = ['About', 'Resume', 'Portfolio'];

function parseHash(): PageKey {
    const raw = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const match = VALID.find((p) => p.toLowerCase() === raw);
    return match ?? 'About';
}

export function useHashRoute(): [PageKey, (page: PageKey) => void] {
    const [page, setPage] = useState<PageKey>(() =>
        typeof window !== 'undefined' ? parseHash() : 'About'
    );

    useEffect(() => {
        const onHashChange = () => setPage(parseHash());
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    const navigate = (next: PageKey) => {
        if (next === page) return;
        window.location.hash = `/${next.toLowerCase()}`;
    };

    return [page, navigate];
}
