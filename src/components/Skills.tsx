import { useLanguage } from '../i18n/useLanguage';

const skills = [
    {
        key: 'backend',
        label: 'Backend',
        icon: '/icons/skills/backend-icon.png',
        items: [
            { label: 'Languages', value: 'Java (17, 21), C#, C/C++' },
            { label: 'Frameworks', value: 'Spring, Spring Boot, JHipster' },
            { label: 'ORM', value: 'Hibernate, JPA' },
            { label: 'Architectures', value: 'Microservices, Modular, Monolithic, Netflix OSS, Feign client' },
            { label: 'API', value: 'REST API, RabbitMQ' },
            { label: 'Build', value: 'Gradle, Maven, Ant' },
        ],
    },
    {
        key: 'frontend',
        label: 'Frontend',
        icon: '/icons/skills/frontend-icon.png',
        items: [
            { label: 'Languages', value: 'JavaScript, TypeScript' },
            { label: 'Frameworks', value: 'Angular, React, Next.js' },
            { label: 'Web', value: 'HTML, CSS, Tailwind, JSP, JSTL, Servlets' },
            { label: 'Build Tools', value: 'Yarn, Webpack, npm' },
        ],
    },
    {
        key: 'database',
        label: 'Database',
        icon: '/icons/skills/database-icon.png',
        items: [
            { label: 'SQL', value: 'Oracle PL/SQL, SQL Server, MySQL, PostgreSQL, H2' },
            { label: 'NoSQL', value: 'Elasticsearch, Logstash, Kibana, MongoDB, Redis' },
            { label: 'Migrations', value: 'Liquibase' },
        ],
    },
    {
        key: 'devops',
        label: 'DevOps',
        icon: '/icons/skills/devops-icon.png',
        items: [
            { label: 'Version Control', value: 'Git, Subversion, Perforce' },
            { label: 'CI/CD', value: 'Jenkins, GitHub Actions' },
            { label: 'Containerization', value: 'Docker, Kubernetes' },
            { label: 'Monitoring', value: 'Prometheus, Grafana' },
            { label: 'Cloud & Hosting', value: 'AWS, Swiss Cloud, Railway, Netlify' },
            { label: 'Domain', value: 'Namecheap' },
        ],
    },
    {
        key: 'testing',
        label: 'Testing & XML & Tools',
        icon: '/icons/skills/testing-icon.png',
        items: [
            { label: 'Testing', value: 'JUnit, Selenium, Mockito, Cucumber, JMeter' },
            { label: 'XML', value: 'Schematron, XML, XSL, XSLT, XPath' },
            { label: 'Design', value: 'UML, Penpot' },
            { label: 'Methodologies', value: 'SAFe, Scrum, Kanban' },
            { label: 'Project Management', value: 'JIRA, Confluence' },
            { label: 'Analytics', value: 'Google Analytics (GA4)' },
            { label: 'Integrations', value: 'OpenWeatherMap API, Resend' },
        ],
    },
    {
        key: 'ai',
        label: 'AI Tools',
        icon: '/icons/skills/artificial-intelligence.png',
        items: [
            { label: 'Assistants', value: 'ChatGPT, DeepSeek, Claude Code' },
            { label: 'Usage', value: 'Code review & generation, Architecture consulting' },
            { label: 'Other', value: 'Nano Bana' },
        ],
    },
];

export const Skills = () => {
    const { t } = useLanguage();

    return (
        <div className="py-2 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="md:w-1/4">
                        <h2 className="text-base font-sans font-semibold text-burg-600 dark:text-burg-400">{t.sections.skills}</h2>
                    </div>
                    <div className="md:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {skills.map((skill) => (
                                <div
                                    key={skill.key}
                                    className="flex flex-col p-3 rounded-lg border border-burg-100 dark:border-stone-700 bg-white dark:bg-stone-800 hover:bg-burg-50 dark:hover:bg-stone-700 transition-colors duration-300"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <img src={skill.icon} alt={skill.label} className="w-8 h-8 sm:w-10 sm:h-10 dark:brightness-0 dark:invert" />
                                        <span className="text-sm font-medium text-stone-800 dark:text-stone-100">{skill.label}</span>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        {skill.items.map((item) => (
                                            <div key={item.label}>
                                                <span className="text-xs font-semibold text-stone-600 dark:text-stone-300">{item.label}: </span>
                                                <span className="text-xs text-stone-500 dark:text-stone-400">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
