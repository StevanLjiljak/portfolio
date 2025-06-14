export const Skills = () => {
    return (

        <div className="py-4 relative space-y-3">
            {/* Skills */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-1/4 text-center md:text-left">
                        <h2 className="text-base font-sans font-medium text-black">Skills</h2>
                    </div>

                    <div className="md:w-3/4">
                        {/* Grid container with 6 colons */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">

                            {/* Backend */}
                            <div className="flex flex-col items-center">
                                {/* Prvi red - ikona + tekst */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">Backend</span>
                                    <img src="icons/skills/backend-icon.png" alt="Backend" className="w-12 h-12" />
                                </div>
                                {/* Drugi red - samo tekst */}
                                <p className="text-xs text-left whitespace-pre-line">
                                    {`Program language: Java, C#, C/C++, PHP
                                      Frameworks: Spring, Spring Boot, JHipster
                                      ORM/Database Access: Hibernate, JPA
                                      Architectures: Microservices, Modular and Monolithic, 
                                      Netflix OSS (Zuul, Ribbon, Eureka, Hystrix), Feign client
                                      API & Integration: WebServices (REST API), RabbitMQ`}
                                </p>
                            </div>

                            {/* Frontend */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">Frontend</span>
                                    <img src="icons/skills/frontend-icon.png" alt="Frontend" className="w-12 h-12" />
                                </div>
                                <p className="text-xs text-left whitespace-pre-line">
                                    {`Program language: JavaScript/Typescript:  Angular, React
                                      Web Technologies: HTML, CSS, Tailwind, JSP, JSTL, Servlets
                                      Build Tools & Package Managers: Yarn, Webpack, npm`}
                                </p>
                            </div>

                            {/* Database */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">Database</span>
                                    <img src="icons/skills/database-icon.png" alt="Database" className="w-12 h-12" />
                                </div>
                                <p className="text-xs text-left whitespace-pre-line">
                                    {`SQL: Oracle PL/SQL, SQL Server, MySQL, PostgreSQL, H2
                                      NoSQL / Tools: ELK stack (Elasticsearch, Logstash, Kibana), MongoDB, Redis
                                      Migrations & Versioning: Liquibase`}
                                </p>
                            </div>

                            {/* DevOps */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">DevOps</span>
                                    <img src="icons/skills/devops-icon.png" alt="DevOps" className="w-12 h-12" />
                                </div>
                                <p className="text-xs text-left whitespace-pre-line">
                                    {`Version Control: Git, Subversion, Perforce
                                      CI/CD: Jenkins 
                                      Build Automation: Gradle, Maven, Ant
                                      Project management: JIRA/ Confluence
                                      Cloud: AWS, Swiss Cloud`}
                                </p>
                            </div>

                            {/* XML & Data Processing */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">XML & Data Processing</span>
                                    <img src="icons/skills/xml-data-processing-icon.png" alt="XML & Data Processing" className="w-12 h-12" />
                                </div>
                                <p className="text-xs text-left whitespace-pre-line">
                                    {`XML Technologies: Schematron, XML, XSL, XSLT, XPath
                                      Design & Modeling: UML, Penpot`}
                                </p>
                            </div>

                            {/* Testing */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">Testing</span>
                                    <img src="icons/skills/testing-icon.png" alt="Testing" className="w-12 h-12" />
                                </div>
                                <p className="text-xs text-left whitespace-pre-line">
                                    {`Testing: JUnit, Selenium, Mockito, Cucumber, JMeter, Interoperable systems`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};