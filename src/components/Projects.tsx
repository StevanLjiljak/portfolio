export const Projects = () => {
    return (
        <div className="py-4 relative space-y-3">
            {/* Projects */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-1/4 text-center md:text-left">
                        <h2 className="text-base font-sans font-medium text-black">Project domains</h2>
                    </div>

                    <div className="md:w-3/4">
                        {/* Grid container sa 6 kolona */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">

                            {/* Kolona 1 */}
                            <div className="flex flex-col items-center">
                                {/* Prvi red - ikona + tekst */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">FinTech</span>
                                    <img src="icons/projects/fintech-icon.png" alt="FinTech" className="w-12 h-12" />
                                </div>
                            </div>

                            {/* Kolona 2 */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">IoT</span>
                                    <img src="icons/projects/iot-icon.png" alt="IoT" className="w-12 h-12" />
                                </div>
                            </div>

                            {/* Kolona 3 */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">BioTech</span>
                                    <img src="icons/projects/biotech-icon.png" alt="BioTech" className="w-12 h-12" />
                                </div>
                            </div>

                            {/* Kolona 4 */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">Telecomunications</span>
                                    <img src="icons/projects/telecomunications-icon.png" alt="Telecomunications" className="w-12 h-12" />
                                </div>
                            </div>
                            {/* Kolona 5 */}
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-sm">Gambling & Betting</span>
                                    <img src="icons/projects/gambling-and-betting-icon.png" alt="Gambling & Betting" className="w-12 h-12" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};