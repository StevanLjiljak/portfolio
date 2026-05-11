import { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';

export const Experience = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-2 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="md:w-1/4">
                        <h2 className="text-base font-sans font-semibold text-burg-600 dark:text-burg-400">{t.sections.experience}</h2>
                    </div>
                    <div className="md:w-3/4 flex flex-col gap-2">
                        {t.experience.map((exp, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={exp.company + exp.period}
                                    className="border border-burg-100 dark:border-stone-700 rounded-lg overflow-hidden bg-white dark:bg-stone-800 transition-colors duration-300"
                                >
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between px-3 sm:px-4 py-3 text-left hover:bg-burg-50 dark:hover:bg-stone-700 transition-colors min-h-[44px]"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3 flex-1 min-w-0">
                                            <span className="text-sm font-medium text-burg-600 dark:text-burg-400">{exp.company}</span>
                                            <span className="text-xs text-burg-500 dark:text-burg-400">{exp.role}</span>
                                            <span className="text-xs text-stone-300 dark:text-stone-600 hidden sm:inline">·</span>
                                            <span className="text-xs text-stone-400 dark:text-stone-500 truncate">{exp.domain}</span>
                                        </div>
                                        <div className="flex items-center justify-between sm:justify-end gap-3 mt-1 sm:mt-0 flex-shrink-0">
                                            <span className="text-xs text-stone-400 dark:text-stone-500 whitespace-nowrap">{exp.period}</span>
                                            <span className="text-stone-400 dark:text-stone-500 text-xs accordion-arrow">{isOpen ? '▲' : '▼'}</span>
                                        </div>
                                    </button>
                                    <div className={`px-3 sm:px-4 pb-3 border-t border-burg-100 dark:border-stone-700 ${isOpen ? '' : 'hidden print:block'}`}>
                                        {exp.clients ? (
                                            <div className="flex flex-col gap-2 mt-2">
                                                {exp.clients.map((client) => (
                                                    <div key={client.name} className="rounded-md border border-stone-200 dark:border-stone-600 bg-stone-50 p-3">
                                                        <p className="text-xs font-semibold text-stone-700 mb-1">{client.name}</p>
                                                        <ul className="list-disc list-inside space-y-1">
                                                            {client.highlights.map((h, i) => (
                                                                <li key={i} className="text-xs text-stone-600 break-words">{h}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <ul className="list-disc list-inside space-y-1 mt-2">
                                                {exp.highlights.map((h, i) => (
                                                    <li key={i} className="text-xs text-stone-600 break-words">{h}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
