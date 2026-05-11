import { useLanguage } from '../i18n/useLanguage';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-6 mt-4 border-t border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 transition-colors duration-300">
            <div className="container mx-auto px-4 flex flex-col items-center gap-2 text-center">
                <p className="text-xs font-sans font-normal text-stone-500 dark:text-stone-400 whitespace-pre-line italic">
                    {t.footer.quote}
                </p>
                <p className="text-xs font-sans font-normal text-stone-400 dark:text-stone-500">
                    {t.footer.copyright}
                </p>
            </div>
        </footer>
    );
};
