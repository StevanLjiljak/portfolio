import { useLanguage } from '../i18n/useLanguage';

const domains = [
    { label: 'FinTech', icon: '/icons/projects/fintech-icon.png' },
    { label: 'IoT', icon: '/icons/projects/iot-icon.png' },
    { label: 'BioTech', icon: '/icons/projects/biotech-icon.png' },
    { label: 'Telecomunications', icon: '/icons/projects/telecomunications-icon.png' },
    { label: 'Gambling & Betting', icon: '/icons/projects/gambling-and-betting-icon.png' },
    { label: 'Automotive', icon: '/icons/projects/autonomous-car.png' },
    { label: 'Government', icon: '/icons/projects/government.png' },
    { label: 'Drone & Aviation', icon: '/icons/projects/drone.png' },
];

const techStack = ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'React', 'Next.js', 'Railway', 'GitHub Actions', 'Google Analytics', 'OpenWeatherMap', 'Resend', 'Namecheap'];

export const Projects = () => {
    const { t } = useLanguage();

    return (
        <div className="py-2 relative space-y-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="md:w-1/4">
                        <h2 className="text-base font-sans font-semibold text-burg-600 dark:text-burg-400">{t.sections.featuredProject}</h2>
                    </div>
                    <div className="md:w-3/4">
                        <div className="border border-burg-100 dark:border-stone-700 rounded-lg p-3 sm:p-4 bg-white dark:bg-stone-800 transition-colors duration-300">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                                <div>
                                    <span className="text-sm font-medium text-burg-600 dark:text-burg-400">DroneEye</span>
                                    <span className="text-xs text-burg-500 dark:text-burg-400 ml-2">– Full Stack Developer</span>
                                </div>
                                <span className="text-xs text-stone-400 dark:text-stone-500 whitespace-nowrap">Aug 2024 – Present</span>
                            </div>
                            <p className="text-xs text-stone-600 dark:text-stone-300 mb-3">{t.droneEye.description}</p>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {techStack.map((tech) => (
                                    <span key={tech} className="text-xs bg-burg-50 dark:bg-stone-700 text-burg-700 dark:text-burg-300 border border-burg-200 dark:border-stone-600 px-2 py-0.5 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href="https://droneeye.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-burg-600 dark:text-burg-400 hover:text-burg-800 dark:hover:text-burg-200 transition-colors"
                            >
                                {t.droneEye.link}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="md:w-1/4">
                        <h2 className="text-base font-sans font-semibold text-burg-600 dark:text-burg-400">{t.sections.projectDomains}</h2>
                    </div>
                    <div className="md:w-3/4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                            {domains.map((d) => (
                                <div key={d.label} className="flex flex-col items-center gap-1 p-2 rounded-lg border border-burg-50 dark:border-stone-700 bg-white dark:bg-stone-800 transition-colors duration-300">
                                    <img src={d.icon} alt={d.label} className="w-10 h-10 sm:w-12 sm:h-12 dark:brightness-0 dark:invert" />
                                    <span className="text-xs text-center text-stone-600 dark:text-stone-300">{d.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
