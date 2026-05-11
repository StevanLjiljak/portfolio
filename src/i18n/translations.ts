export type Language = 'en' | 'sr' | 'ru';

interface ExperienceEntry {
    company: string;
    role: string;
    period: string;
    domain: string;
    highlights: string[];
    clients?: { name: string; highlights: string[] }[];
}

export interface Translations {
    header: { name: string; role: string; downloadCV: string };
    nav: { language: string };
    sections: {
        objective: string;
        education: string;
        language: string;
        experience: string;
        skills: string;
        featuredProject: string;
        projectDomains: string;
        hobby: string;
        contacts: string;
    };
    objective: string;
    education: string;
    languages: string;
    hobby: string;
    footer: { quote: string; copyright: string };
    droneEye: { description: string; link: string };
    experience: ExperienceEntry[];
}

export const translations: Record<Language, Translations> = {
    en: {
        header: {
            name: 'Stevan Ljiljak',
            role: 'Principal Software Engineer',
            downloadCV: 'Download CV',
        },
        nav: {
            language: 'Language',
        },
        sections: {
            objective: 'Objective',
            education: 'Education',
            language: 'Language',
            experience: 'Experience',
            skills: 'Skills',
            featuredProject: 'Featured Project',
            projectDomains: 'Project domains',
            hobby: 'Hobby',
            contacts: 'Contacts',
        },
        objective: `I'm a principal software engineer with over ${new Date().getFullYear() - 2012} years of experience building scalable, secure, and high-performance enterprise systems within the Java ecosystem.
                Throughout my career, I've focused not only on delivering robust technical solutions but on transforming how teams approach software: with clarity, discipline, and pride in craftsmanship.
                My strength lies in modernizing complex legacy systems, architecting future-proof platforms, and elevating code quality through principled engineering.
                I'm deeply invested in team growth, whether through mentoring, setting technical direction, or creating engineering cultures that value quality as much as speed.
                I thrive where others hesitate in environments where systems are complex, goals are ambitious, and transformation is overdue.
                I believe technical leadership is about more than just writing great code. It's about creating an ecosystem where excellence becomes the default.
                I leverage AI-assisted development tools to accelerate delivery and enhance code quality.
                If you're looking for someone who combines deep technical expertise with strategic thinking, ownership, and a strong sense of engineering culture - let's talk.`,
        education: `University of Belgrade
                School of Electrical Engineering
                Computer technology and informatics.`,
        languages: `Serbian (native)
                English (fluent)
                Russian (basic)`,
        hobby: 'Skiing, basketball, reading, cycling, salsa, swimming, running, music, history, travel...',
        footer: {
            quote: `When you get up make your bed and the rest will sort itself out.
                              Clean up after yourself, it is reflected in your code and lifestyle.
                              SOLID is a Principle that should be respected and followed.`,
            copyright: `© Stevan Ljiljak 2025–${new Date().getFullYear()}`,
        },
        droneEye: {
            description: 'Drone pilot platform — independent project built from scratch with full ownership of architecture, development, and infrastructure.',
            link: 'droneeye.ai →',
        },
        experience: [
            {
                company: 'DroneEye',
                role: 'Full Stack Developer',
                period: 'Aug 2024 – Present',
                domain: 'Independent project – drone pilot platform',
                highlights: [
                    'Designed and built full-stack web app with Java 21, Spring Boot, PostgreSQL',
                    'Containerized with Docker; deployed on Railway with CI/CD via GitHub Actions',
                    'Developed responsive UI with React, Next.js',
                    'Integrated Google Analytics (GA4), OpenWeatherMap API, Resend (email)',
                    'Domain management via Namecheap',
                ],
            },
            {
                company: 'NTT Data',
                role: 'Senior Java Developer',
                period: 'Oct 2022 – Mar 2025',
                domain: 'Belgrade',
                highlights: [],
                clients: [
                    {
                        name: 'MHP (Porsche)',
                        highlights: [
                            'Maintained and enhanced multi-service platform for vehicle processes (requests, reports, campaigns, loan settlements)',
                            'Resolved Splunk alerts, developed new features, increased test coverage',
                            'Led migration from COBOL to Java',
                            'Deployed releases across environments including production',
                            'Followed SAFe methodology',
                        ],
                    },
                    {
                        name: 'Bedag Informatik AG',
                        highlights: [
                            'Worked on ePolice platform for processing requests from authorities and citizens',
                            'Maintained applications, fixed bugs, developed new functionalities',
                            'Migrated data from external services',
                        ],
                    },
                    {
                        name: 'European Commission',
                        highlights: [
                            'Built and maintained OOTS interoperability system',
                            'Created LCM library used by all EU member states for business-rule validation',
                            'Developed Schematron validator for XML validation (schema, content, structure)',
                            'Wrote documentation, performed testing, refactored and improved existing code',
                        ],
                    },
                ],
            },
            {
                company: 'Telxira',
                role: 'Senior Java Developer',
                period: 'Feb 2022 – Oct 2022',
                domain: 'Belgrade',
                highlights: [
                    'Developed multi-platform SMS processing (chat, email, SMPP, HTTP)',
                    'Dockerized multiple environments and profiles',
                    'Integrated Liquibase for database versioning',
                    'Implemented CDR generation and export; followed CI/CD practices',
                ],
            },
            {
                company: 'Excela',
                role: 'Senior Solution Architect',
                period: 'Feb 2021 – Feb 2022',
                domain: 'Belgrade · Open Banking / Financial services',
                highlights: [
                    'Supervised and mentored development teams',
                    'Designed and documented architecture solutions',
                    'Made technology decisions and prepared technical tasks',
                    'Coordinated with multiple teams and stakeholders',
                ],
            },
            {
                company: 'Persida (CentoGene)',
                role: 'Lead Software Engineer',
                period: 'Sep 2018 – Feb 2021',
                domain: 'Belgrade · Bioinformatics – clinical & genetic data',
                highlights: [
                    'Designed and developed projects from scratch using microservices architecture',
                    'Managed distributed teams across Berlin, Rostock and Belgrade',
                    'Analyzed business logic and translated into workflows and user stories',
                    'Applied CI/CD methodologies',
                ],
            },
            {
                company: '3AP',
                role: 'Service Engineer',
                period: 'Jan 2017 – Jul 2018',
                domain: 'Belgrade · Smart warehouse / IoT',
                highlights: [
                    'Built project from scratch using JHipster (microservices)',
                    'Agile (Scrum / Kanban) environment',
                    'Analyzed business logic, created user stories and tasks',
                ],
            },
            {
                company: 'Fincore Group',
                role: 'Service Engineer',
                period: 'Dec 2015 – Jan 2017',
                domain: 'Belgrade · Casino / Gambling',
                highlights: [
                    'Set up servers and services for gaming systems; 24/7 developer support',
                    'Developed "Check games" support app using Spring Boot & AngularJS',
                    'Analyzed business logic for gaming, betting and gambling systems',
                ],
            },
            {
                company: 'MERA Software Services',
                role: 'Java Software Designer',
                period: 'Apr 2015 – Dec 2015',
                domain: 'Belgrade · Smart home automation',
                highlights: [
                    'Configured router devices with build server',
                    'Developed smart home integration simulator',
                ],
            },
            {
                company: 'Societe Generale Bank',
                role: 'IT Designer & Development Engineer',
                period: 'Sep 2012 – Apr 2015',
                domain: 'Belgrade · Financial software',
                highlights: [
                    'Supported information and reporting systems',
                    'Analyzed financial data and migrated databases',
                    'Implemented payment system products and security policies',
                    'Tested and maintained internal and external applications',
                ],
            },
        ],
    },

    sr: {
        header: {
            name: 'Стеван Љиљак',
            role: 'Принципал Софтверски Инжењер',
            downloadCV: 'Преузми CV',
        },
        nav: {
            language: 'Језик',
        },
        sections: {
            objective: 'Циљ',
            education: 'Образовање',
            language: 'Језици',
            experience: 'Искуство',
            skills: 'Вештине',
            featuredProject: 'Истакнути пројекат',
            projectDomains: 'Пројектни домени',
            hobby: 'Хоби',
            contacts: 'Контакти',
        },
        objective: `Принципал сам софтверски инжењер са више од ${new Date().getFullYear() - 2012} година искуства у изградњи скалабилних, безбедних и високоучинковитих enterprise система унутар Java екосистема.
                Током каријере, фокусирао сам се не само на испоруку робусних техничких решења, већ и на трансформацију приступа тимова развоју softvera: са јасноћом, дисциплином и поносом у занатском раду.
                Моја снага лежи у модернизацији сложених legacy система, пројектовању платформи отпорних на будућност и подизању квалитета кода кроз принципијелно инжењерство.
                Дубоко сам посвећен расту тима, било кроз менторство, постављање техничког правца или стварање инжењерских култура које вреднују квалитетједнако као и брзину.
                Напредујем тамо где други оклевају — у окружењима где су системи сложени, циљеви амбициозни и трансформација закаснела.
                Верујем да техничко лидерство значи више од писања одличног кода. Реч је о стварању екосистема у којем извrsност постаје подразумевано.
                Користим AI алате за развој kako бих убрзао испоруку и побољшао квалитет кода.
                Ако тражите некога ко комбинује дубоку техничку експертизу са стратешким размишљањем, власништвом и снажним осећајем инжењерске културе — хајде да разговарамо.`,
        education: `Универзитет у Београду
                Електротехнички факултет
                Рачунарска техника и информатика.`,
        languages: `Српски (матерњи)
                Енглески (течно)
                Руски (основно)`,
        hobby: 'Скијање, кошарка, читање, бициклизам, салса, пливање, трчање, музика, историја, путовања...',
        footer: {
            quote: `Када устанеш среди кревет и све остало ће се средити.
                              Почисти за собом, то се одражава у твом коду и начину живота.
                              SOLID је принцип који треба поштовати и следити.`,
            copyright: `© Stevan Ljiljak 2025–${new Date().getFullYear()}`,
        },
        droneEye: {
            description: 'Платформа за drone пилоте — независни пројекат изграђен од нуле са пуним власништвом архитектуре, развоја и инфраструктуре.',
            link: 'droneeye.ai →',
        },
        experience: [
            {
                company: 'DroneEye',
                role: 'Full Stack Developer',
                period: 'Авг 2024 – Данас',
                domain: 'Независни пројекат – платформа за drone пилоте',
                highlights: [
                    'Дизајнирао и изградио full-stack веб апликацију са Java 21, Spring Boot, PostgreSQL',
                    'Контејнеризовао уз Docker; deployment на Railway са CI/CD путем GitHub Actions',
                    'Развио респонзивни UI са React, Next.js',
                    'Интегрисао Google Analytics (GA4), OpenWeatherMap API, Resend (email)',
                    'Управљање доменом путем Namecheap',
                ],
            },
            {
                company: 'NTT Data',
                role: 'Senior Java Developer',
                period: 'Окт 2022 – Мар 2025',
                domain: 'Београд',
                highlights: [],
                clients: [
                    {
                        name: 'MHP (Porsche)',
                        highlights: [
                            'Одржавао и унапређивао multi-сервисну платформу за процесе возила (захтеви, извештаји, кампање, отплата зајмова)',
                            'Решавао Splunk алерте, развијао нове функционалности, повећавао покривеност тестовима',
                            'Водио миграцију са COBOL-а на Java',
                            'Деплојовао релизе у свим окружењима укључујући продукцију',
                            'Примењивао SAFe методологију',
                        ],
                    },
                    {
                        name: 'Bedag Informatik AG',
                        highlights: [
                            'Радио на ePolice платформи за обраду захтева власти и грађана',
                            'Одржавао апликације, исправљао грешке, развијао нове функционалности',
                            'Мигрисао податке из екстерних сервиса',
                        ],
                    },
                    {
                        name: 'Европска комисија',
                        highlights: [
                            'Изградио и одржавао OOTS интероперабилни систем',
                            'Креирао LCM библиотеку коју користе све државе чланице ЕУ за валидацију пословних правила',
                            'Развио Schematron validator за XML валидацију (шема, садржај, структура)',
                            'Писао документацију, вршио тестирање, рефакторисао и побољшавао постојећи код',
                        ],
                    },
                ],
            },
            {
                company: 'Telxira',
                role: 'Senior Java Developer',
                period: 'Феб 2022 – Окт 2022',
                domain: 'Београд',
                highlights: [
                    'Развио вишеплатформску SMS обраду (chat, email, SMPP, HTTP)',
                    'Контејнеризовао више окружења и профила путем Docker-а',
                    'Интегрисао Liquibase за верзионисање базе података',
                    'Имплементовао CDR генерисање и export; примењивао CI/CD праксе',
                ],
            },
            {
                company: 'Excela',
                role: 'Senior Solution Architect',
                period: 'Феб 2021 – Феб 2022',
                domain: 'Београд · Open Banking / Финансијске услуге',
                highlights: [
                    'Надгледао и менторисао развојне тимове',
                    'Пројектовао и документовао архитектурална решења',
                    'Доносио технолошке одлуке и припремао техничке задатке',
                    'Координисао са више тимова и стејкхолдера',
                ],
            },
            {
                company: 'Persida (CentoGene)',
                role: 'Lead Software Engineer',
                period: 'Сеп 2018 – Феб 2021',
                domain: 'Београд · Биоинформатика – клинички и генетски подаци',
                highlights: [
                    'Пројектовао и развијао пројекте од нуле користећи микросервисну архитектуру',
                    'Управљао дистрибуираним тимовима у Берлину, Ростоку и Београду',
                    'Анализирао пословну логику и преводио је у токове рада и корисничке приче',
                    'Примењивао CI/CD методологије',
                ],
            },
            {
                company: '3AP',
                role: 'Service Engineer',
                period: 'Јан 2017 – Јул 2018',
                domain: 'Београд · Паметно складиште / IoT',
                highlights: [
                    'Изградио пројекат од нуле користећи JHipster (микросервиси)',
                    'Агилно (Scrum / Kanban) окружење',
                    'Анализирао пословну логику, креирао корисничке приче и задатке',
                ],
            },
            {
                company: 'Fincore Group',
                role: 'Service Engineer',
                period: 'Дец 2015 – Јан 2017',
                domain: 'Београд · Казино / Клађење',
                highlights: [
                    'Поставио сервере и сервисе за gaming системе; подршка 24/7',
                    'Развио апликацију "Check games" користећи Spring Boot и AngularJS',
                    'Анализирао пословну логику gaming, betting и gambling система',
                ],
            },
            {
                company: 'MERA Software Services',
                role: 'Java Software Designer',
                period: 'Апр 2015 – Дец 2015',
                domain: 'Београд · Аутоматизација паметног дома',
                highlights: [
                    'Конфигурисао router уређаје са build сервером',
                    'Развио симулатор интеграције паметног дома',
                ],
            },
            {
                company: 'Societe Generale Bank',
                role: 'IT Designer & Development Engineer',
                period: 'Сеп 2012 – Апр 2015',
                domain: 'Београд · Финансијски софтвер',
                highlights: [
                    'Подржавао информационе и извештајне системе',
                    'Анализирао финансијске податке и мигрисао базе података',
                    'Имплементовао производе платног система и безбедносне политике',
                    'Тестирао и одржавао интерне и спољашње апликације',
                ],
            },
        ],
    },

    ru: {
        header: {
            name: 'Стеван Љиљак',
            role: 'Главный программный инженер',
            downloadCV: 'Скачать резюме',
        },
        nav: {
            language: 'Язык',
        },
        sections: {
            objective: 'Цель',
            education: 'Образование',
            language: 'Языки',
            experience: 'Опыт работы',
            skills: 'Навыки',
            featuredProject: 'Главный проект',
            projectDomains: 'Проектные домены',
            hobby: 'Хобби',
            contacts: 'Контакты',
        },
        objective: `Я главный программный инженер с более чем ${new Date().getFullYear() - 2012} годами опыта в создании масштабируемых, безопасных и высокопроизводительных корпоративных систем в экосистеме Java.
                На протяжении карьеры я фокусировался не только на создании надёжных технических решений, но и на трансформации подхода команд к разработке: с ясностью, дисциплиной и гордостью за мастерство.
                Моя сила — в модернизации сложных устаревших систем, проектировании перспективных платформ и повышении качества кода через принципиальную инженерию.
                Я глубоко вовлечён в развитие команды — через наставничество, определение технического направления и создание инженерной культуры, где качество ценится наравне со скоростью.
                Я процветаю там, где другие колеблются — в среде со сложными системами, амбициозными целями и назревшей трансформацией.
                Я убеждён, что техническое лидерство — это не только написание отличного кода, но и создание экосистемы, в которой совершенство становится нормой.
                Я использую AI-инструменты для ускорения разработки и повышения качества кода.
                Если вы ищете специалиста, сочетающего глубокую техническую экспертизу со стратегическим мышлением и сильным чувством инженерной культуры — давайте поговорим.`,
        education: `Белградский университет
                Электротехнический факультет
                Компьютерная техника и информатика.`,
        languages: `Сербский (родной)
                Английский (свободно)
                Русский (базовый)`,
        hobby: 'Горные лыжи, баскетбол, чтение, велоспорт, сальса, плавание, бег, музыка, история, путешествия...',
        footer: {
            quote: `Когда встаёшь застели кровать и всё остальное само устроится.
                              Убирай за собой — это отражается в твоём коде и образе жизни.
                              SOLID — это принцип, который нужно уважать и соблюдать.`,
            copyright: `© Stevan Ljiljak 2025–${new Date().getFullYear()}`,
        },
        droneEye: {
            description: 'Платформа для пилотов дронов — независимый проект, созданный с нуля с полным владением архитектурой, разработкой и инфраструктурой.',
            link: 'droneeye.ai →',
        },
        experience: [
            {
                company: 'DroneEye',
                role: 'Full Stack Developer',
                period: 'Авг 2024 – Настоящее время',
                domain: 'Независимый проект – платформа для пилотов дронов',
                highlights: [
                    'Спроектировал и создал full-stack веб-приложение на Java 21, Spring Boot, PostgreSQL',
                    'Контейнеризировал с Docker; развернул на Railway с CI/CD через GitHub Actions',
                    'Разработал адаптивный интерфейс на React, Next.js',
                    'Интегрировал Google Analytics (GA4), OpenWeatherMap API, Resend (email)',
                    'Управление доменом через Namecheap',
                ],
            },
            {
                company: 'NTT Data',
                role: 'Ведущий Java-разработчик',
                period: 'Окт 2022 – Мар 2025',
                domain: 'Белград',
                highlights: [],
                clients: [
                    {
                        name: 'MHP (Porsche)',
                        highlights: [
                            'Поддерживал и развивал многосервисную платформу для процессов автомобилей (запросы, отчёты, кампании, погашение займов)',
                            'Обрабатывал Splunk-алерты, разрабатывал новые функции, увеличивал покрытие тестами',
                            'Руководил миграцией с COBOL на Java',
                            'Развёртывал релизы во всех окружениях, включая продакшн',
                            'Применял методологию SAFe',
                        ],
                    },
                    {
                        name: 'Bedag Informatik AG',
                        highlights: [
                            'Работал над платформой ePolice для обработки запросов от органов власти и граждан',
                            'Поддерживал приложения, исправлял ошибки, разрабатывал новые функциональности',
                            'Выполнял миграцию данных из внешних сервисов',
                        ],
                    },
                    {
                        name: 'Европейская комиссия',
                        highlights: [
                            'Разрабатывал и поддерживал систему интероперабельности OOTS',
                            'Создал LCM-библиотеку, используемую всеми государствами-членами ЕС для валидации бизнес-правил',
                            'Разработал Schematron-валидатор для XML-валидации (схема, содержание, структура)',
                            'Писал документацию, проводил тестирование, рефакторил и улучшал существующий код',
                        ],
                    },
                ],
            },
            {
                company: 'Telxira',
                role: 'Ведущий Java-разработчик',
                period: 'Фев 2022 – Окт 2022',
                domain: 'Белград',
                highlights: [
                    'Разработал многоплатформенную обработку SMS (чат, email, SMPP, HTTP)',
                    'Контейнеризировал множество окружений через Docker',
                    'Интегрировал Liquibase для версионирования базы данных',
                    'Реализовал генерацию и экспорт CDR; применял практики CI/CD',
                ],
            },
            {
                company: 'Excela',
                role: 'Старший архитектор решений',
                period: 'Фев 2021 – Фев 2022',
                domain: 'Белград · Open Banking / Финансовые услуги',
                highlights: [
                    'Руководил и наставлял команды разработчиков',
                    'Проектировал и документировал архитектурные решения',
                    'Принимал технологические решения и готовил технические задания',
                    'Координировал работу нескольких команд и заинтересованных сторон',
                ],
            },
            {
                company: 'Persida (CentoGene)',
                role: 'Ведущий программный инженер',
                period: 'Сен 2018 – Фев 2021',
                domain: 'Белград · Биоинформатика – клинические и генетические данные',
                highlights: [
                    'Проектировал и разрабатывал проекты с нуля на основе микросервисной архитектуры',
                    'Управлял распределёнными командами в Берлине, Ростоке и Белграде',
                    'Анализировал бизнес-логику и переводил её в рабочие процессы и пользовательские истории',
                    'Применял методологии CI/CD',
                ],
            },
            {
                company: '3AP',
                role: 'Сервисный инженер',
                period: 'Янв 2017 – Июл 2018',
                domain: 'Белград · Умный склад / IoT',
                highlights: [
                    'Создал проект с нуля с использованием JHipster (микросервисы)',
                    'Agile-среда (Scrum / Kanban)',
                    'Анализировал бизнес-логику, создавал пользовательские истории и задачи',
                ],
            },
            {
                company: 'Fincore Group',
                role: 'Сервисный инженер',
                period: 'Дек 2015 – Янв 2017',
                domain: 'Белград · Казино / Ставки',
                highlights: [
                    'Настраивал серверы и сервисы для игровых систем; поддержка 24/7',
                    'Разработал приложение "Check games" на Spring Boot и AngularJS',
                    'Анализировал бизнес-логику игровых, букмекерских и азартных систем',
                ],
            },
            {
                company: 'MERA Software Services',
                role: 'Java-дизайнер программного обеспечения',
                period: 'Апр 2015 – Дек 2015',
                domain: 'Белград · Автоматизация умного дома',
                highlights: [
                    'Конфигурировал маршрутизаторы с сервером сборки',
                    'Разработал симулятор интеграции умного дома',
                ],
            },
            {
                company: 'Societe Generale Bank',
                role: 'IT-дизайнер и инженер по разработке',
                period: 'Сен 2012 – Апр 2015',
                domain: 'Белград · Финансовое программное обеспечение',
                highlights: [
                    'Поддерживал информационные и отчётные системы',
                    'Анализировал финансовые данные и мигрировал базы данных',
                    'Реализовывал продукты платёжных систем и политики безопасности',
                    'Тестировал и поддерживал внутренние и внешние приложения',
                ],
            },
        ],
    },
};
