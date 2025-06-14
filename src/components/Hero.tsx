import { Skills } from './Skills.tsx';
import { Projects } from './Projects.tsx';

export const Hero = () => {
  return (
    <div className="shadow-sm py-4 relative space-y-3">
      {/* Objective */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-base font-sans font-medium text-black">
              {`Objective`}
            </h2>
          </div>
          <div className="md:w-3/4">
            <p className="text-sm font-sans font-normal text-black">
              {`As an experienced Senior Software Engineer with 13 years of experience developing enterprise solutions, I aim to design scalable, secure and high-performance systems using the Java ecosystem.
                Specializing in transforming legacy systems into modern architectures and leading technical teams to achieve business goals. I strive to create innovative technical strategies that connect
                business requirements with optimal technological solutions, focused on improving code quality through mentoring teams and implementing best standards.`}
            </p>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-base font-sans font-medium text-black">
              {`Education`}
            </h2>
          </div>
          <div className="md:w-3/4">
            <p className="text-sm font-sans font-normal text-black whitespace-pre-line">
              {`University of Belgrade
                School of Electrical Engineering
                Computer technology and informatics.`}
            </p>
          </div>
        </div>
      </div>
      {/* Language */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-base font-sans font-medium text-black">
              {`Language`}
            </h2>
          </div>
          <div className="md:w-3/4">
            <p className="text-sm font-sans font-normal text-black whitespace-pre-line">
              {`Serbian (native)
                English (upper intermediate level)
                Russian (basic)`}
            </p>
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      {/* Hobby */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-base font-sans font-medium text-black">
              {`Hobby`}
            </h2>
          </div>
          <div className="md:w-3/4">
            <p className="text-sm font-sans font-normal text-black">
              {`Skiing, salsa, basketball, reading, cycling, swimming, running, music, history, travel...`}
            </p>
          </div>
        </div>
      </div>
      {/* Contacts */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:w-1/4 text-center md:text-left">
            <h2 className="text-base font-sans font-medium text-black">
              {`Contacts`}
            </h2>
          </div>
          <div className="md:w-3/4 flex flex-col gap-2">
            {/* Email */}
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 object-cover border-2 border-gray-200" src="icons/contact/mail-icon.png" alt="Email icon" />
              <a href="mailto:dsmljiljak@yahoo.com" className="hover:text-blue-600 text-sm">
                dsmljiljak@yahoo.com
              </a>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 object-cover border-2 border-gray-200" src="icons/contact/linkedin-icon.png" alt="LinkedIn icon" />
              <a href="https://www.linkedin.com/in/stevan-ljiljak-a4888544/" className="hover:text-blue-600 text-sm">
                https://www.linkedin.com/in/stevan-ljiljak-a4888544/
              </a>
            </div>
            {/* GitHub */}
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 object-cover border-2 border-gray-200" src="icons/contact/github-cat-icon.png" alt="GitHub icon" />
              <a href="https://github.com/StevanLjiljak" className="hover:text-blue-600 text-sm">
                https://github.com/StevanLjiljak
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};