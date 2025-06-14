export const Footer = () => {
    return (
        <footer className="py-4 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center mx-auto">
                        <p className="text-xs font-sans font-normal text-black whitespace-pre-line">
                            {`When you get up, make your bed and the rest will follow.
                              Clean up after yourself, it is reflected in your code and lifestyle.
                              SOLID is a Principle that should be respected and followed.`}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-sans font-normal text-black mt-2">
                            {`© Stevan Ljiljak 2025`}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};