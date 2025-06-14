export const Header = () => {
  return (
    <header className="shadow-sm py-4 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-left">
          <div className="flex flex-col">
            {/* name and title */}
            <h1 className="text-4xl font-sans font-normal text-black">
              Stevan Ljiljak
            </h1>
            <p className="text-base font-sans font-normal text-black mt-2">
              Senior Software Engineer
            </p>
            {/* download CV */}
            <a href="/StevanLjiljakCV.pdf" download className="mt-4 place-items-center" title="Download CV" onClick={() => {
              window.open('/StevanLjiljakCV.pdf');
            }}>
              <img src="/icons/cv/cv-icon.png" alt="Download CV" className="w-16 h-16" />
            </a>
          </div>
          {/* portfolio image */}
          <div className="ml-2">
            <img className="rounded-full w-40 h-50 object-cover border-2 border-gray-200" src="slj2.jpeg" alt="Profilna slika" />
          </div>
        </div>
      </div>
    </header>
  );
};