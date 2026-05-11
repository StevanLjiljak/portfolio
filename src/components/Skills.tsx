import { useLanguage } from '../i18n/useLanguage';

const skills = [
    {
        key: 'backend',
        label: 'Backend',
        icon: '/icons/skills/backend-icon.png',
        text: `Program language: Java (17, 21), C#, C/C++
Frameworks: Spring, Spring Boot, JHipster
ORM/Database Access: Hibernate, JPA
Architectures: Microservices, Modular and Monolithic,
Netflix OSS (Zuul, Ribbon, Eureka, Hystrix), Feign client
API & Integration: WebServices (REST API), RabbitMQ`,
    },
    {
        key: 'frontend',
        label: 'Frontend',
        icon: '/icons/skills/frontend-icon.png',
        text: `Program language: JavaScript/TypeScript: Angular, React, Next.js
Web Technologies: HTML, CSS, Tailwind, JSP, JSTL, Servlets
Build Tools & Package Managers: Yarn, Webpack, npm`,
    },
    {
        key: 'database',
        label: 'Database',
        icon: '/icons/skills/database-icon.png',
        text: `SQL: Oracle PL/SQL, SQL Server, MySQL, PostgreSQL, H2
NoSQL / Tools: ELK stack (Elasticsearch, Logstash, Kibana), MongoDB, Redis
Migrations & Versioning: Liquibase`,
    },
    {
        key: 'devops',
        label: 'DevOps',
        icon: '/icons/skills/devops-icon.png',
        text: `Version Control: Git, Subversion, Perforce
CI/CD: Jenkins, GitHub Actions
Containerization: Docker
Build Automation: Gradle, Maven, Ant
Methodologies: SAFe, Scrum, Kanban
Protocols: SMPP, HTTP, REST
Project management: JIRA, Confluence
Cloud & Hosting: AWS, Swiss Cloud, Railway, Netlify
Domain: Namecheap
Analytics: Google Analytics (GA4)
Integrations: OpenWeatherMap API, Resend (email)`,
    },
    {
        key: 'testing',
        label: 'Testing & XML',
        icon: '/icons/skills/testing-icon.png',
        text: `Testing: JUnit, Selenium, Mockito, Cucumber, JMeter, Interoperable systems
XML: Schematron, XML, XSL, XSLT, XPath
Design & Modeling: UML, Penpot`,
    },
    {
        key: 'ai',
        label: 'AI Tools',
        icon: '/icons/skills/artificial-intelligence.png',
        text: `Assistants: ChatGPT, DeepSeek, Claude Code
Code review & generation
Architecture & design consulting
Nano Bana`,
    },
];

export const Skills = () => {
    const { t } = useLanguage();

    return (
        <div className="py-2 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="md:w-1/4">
                        <h2 className="text-base font-sans font-semibold text-stone-800 dark:text-stone-100">{t.sections.skills}</h2>
                    </div>
                    <div className="md:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {skills.map((skill) => (
                                <div
                                    key={skill.key}
                                    className="flex flex-col p-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 transition-colors duration-300"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <img src={skill.icon} alt={skill.label} className="w-8 h-8 sm:w-10 sm:h-10" />
                                        <span className="text-sm font-medium text-stone-800 dark:text-stone-100">{skill.label}</span>
                                    </div>
                                    <p className="text-xs text-stone-600 dark:text-stone-300 whitespace-pre-line break-words leading-relaxed">
                                        {skill.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
