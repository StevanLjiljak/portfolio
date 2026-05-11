import { Skills } from './Skills.tsx';
import { Projects } from './Projects.tsx';
import { Experience } from './Experience.tsx';
import { useLanguage } from '../i18n/useLanguage';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-base font-sans font-semibold text-burg-600 dark:text-burg-400">
    {children}
  </h2>
);

const Section = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
      {children}
    </div>
  </div>
);

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="py-4 relative space-y-4">
      <Section>
        <div className="md:w-1/4"><SectionTitle>{t.sections.objective}</SectionTitle></div>
        <div className="md:w-3/4">
          <p className="text-sm font-sans font-normal text-stone-700 dark:text-stone-300 whitespace-pre-line">{t.objective}</p>
        </div>
      </Section>

      <Section>
        <div className="md:w-1/4"><SectionTitle>{t.sections.education}</SectionTitle></div>
        <div className="md:w-3/4">
          <p className="text-sm font-sans font-normal text-stone-700 dark:text-stone-300 whitespace-pre-line">{t.education}</p>
        </div>
      </Section>

      <Section>
        <div className="md:w-1/4"><SectionTitle>{t.sections.language}</SectionTitle></div>
        <div className="md:w-3/4">
          <p className="text-sm font-sans font-normal text-stone-700 dark:text-stone-300 whitespace-pre-line">{t.languages}</p>
        </div>
      </Section>

      <Experience />
      <Skills />
      <Projects />

      <Section>
        <div className="md:w-1/4"><SectionTitle>{t.sections.hobby}</SectionTitle></div>
        <div className="md:w-3/4">
          <p className="text-sm font-sans font-normal text-stone-700 dark:text-stone-300">{t.hobby}</p>
        </div>
      </Section>

      <Section>
        <div className="md:w-1/4"><SectionTitle>{t.sections.contacts}</SectionTitle></div>
        <div className="md:w-3/4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img className="w-8 h-8 flex-shrink-0 object-cover border-2 border-burg-200 dark:border-burg-400 rounded-full dark:brightness-0 dark:invert" src="/icons/contact/mail-icon.png" alt="Email icon" />
            <a href="mailto:dsmljiljak@yahoo.com" className="text-sm text-stone-700 dark:text-stone-300 hover:text-burg-600 dark:hover:text-burg-400 break-all transition-colors">
              dsmljiljak@yahoo.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8 h-8 flex-shrink-0 object-cover border-2 border-burg-200 dark:border-burg-400 rounded-full dark:brightness-0 dark:invert" src="/icons/contact/linkedin.png" alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/stevan-ljiljak-a4888544/" className="text-sm text-stone-700 dark:text-stone-300 hover:text-burg-600 dark:hover:text-burg-400 break-all transition-colors">
              linkedin.com/in/stevan-ljiljak-a4888544
            </a>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-8 h-8 flex-shrink-0 object-cover border-2 border-burg-200 dark:border-burg-400 rounded-full dark:brightness-0 dark:invert" src="/icons/contact/github-cat-icon.png" alt="GitHub icon" />
            <a href="https://github.com/StevanLjiljak" className="text-sm text-stone-700 dark:text-stone-300 hover:text-burg-600 dark:hover:text-burg-400 break-all transition-colors">
              github.com/StevanLjiljak
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};
