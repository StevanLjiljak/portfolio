import { useEffect, useState } from 'react';

export const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 shadow-md hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors"
        >
            ↑
        </button>
    );
};
