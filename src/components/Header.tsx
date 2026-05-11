import { useLanguage } from '../i18n/useLanguage';
import { useTheme } from '../i18n/useTheme';
import type { Language } from '../i18n/translations';

const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'sr', label: 'СР' },
    { code: 'ru', label: 'РУ' },
];

export const Header = () => {
    const { t, language, setLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="shadow-sm py-4 relative bg-white dark:bg-stone-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                            <img
                                className="rounded-full w-24 h-28 sm:w-36 sm:h-44 md:w-40 md:h-48 object-cover border-2 border-stone-300 dark:border-stone-600"
                                src="/slj2.jpeg"
                                alt="Profilna slika"
                            />
                        </div>
                        <div className="flex flex-col justify-start">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal text-stone-800 dark:text-stone-100">
                                {t.header.name}
                            </h1>
                            <p className="text-sm sm:text-base font-sans font-normal text-stone-600 dark:text-stone-300 mt-1 sm:mt-2">
                                {t.header.role}
                            </p>
                            <a href="/StevanLjiljakCV.pdf" download className="mt-3 sm:mt-4" title={t.header.downloadCV}>
                                <img src="/icons/cv/cv-icon.png" alt={t.header.downloadCV} className="w-12 h-12 sm:w-16 sm:h-16 opacity-80 hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 flex-shrink-0 mt-1 items-center">
                        <button
                            onClick={toggleTheme}
                            className="w-12 py-2 rounded text-sm border transition-colors border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-300 hover:border-stone-500 dark:hover:border-stone-400"
                            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code)}
                                className={`w-12 py-2 rounded text-xs border transition-colors text-center ${
                                    language === lang.code
                                        ? 'border-stone-800 bg-stone-800 dark:bg-stone-200 dark:border-stone-200 text-white dark:text-stone-900'
                                        : 'border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-300 hover:border-stone-500 dark:hover:border-stone-400'
                                }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};
