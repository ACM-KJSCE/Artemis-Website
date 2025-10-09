import { useState, useEffect } from "react";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [TopBottom, setTopBottom] = useState(false);

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            setTopBottom(window.scrollY > window.innerHeight - 150);
        };



        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className= {`z-[999] flex justify-center items-center  left-0 right-0 ${TopBottom ? 'fixed top-10' : 'fixed top-10'}`}>
                <div
                    className={`z-20 h-[80px] ${isScrolled ? 'md:w-[70vw]' : 'md:w-[90vw] '} 
                    w-[90vw]
                    backdrop-filter 
                    backdrop-blur-md 
                    bg-[#664b3962]                    
                    border-solid 
                    shadow-2xl 
                    border-opacity-10 
                    rounded-xl 
                    flex 
                    justify-between 
                    items-center
                    transition-all 
                    duration-300 
                    ease-in-out
                `}
                >
                    <div className={`image transition-all duration-300 ease-in-out `}>
                        <img
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="h-20 m-5 cursor-pointer origin-left"
                            src="/acm-logo-transparent.png"
                            alt="logo"
                        />
                    </div>

                    <div className="hidden md:flex">
                        <ul className={`flex gap-10 m-5 text-[20px] font-bold whitespace-nowrap text-[#21223d]`}>
                            <li className="cursor-pointer hover:scale-110 transition-transform duration-300 capitalize"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
                            <li className="cursor-pointer hover:scale-110" onClick={() => handleScrollTo("faq")}>FAQ</li>
                            {/* <li className="cursor-pointer hover:scale-110" onClick={() => handleScrollTo("PS")}>Problem Statement</li> */}
                        </ul>
                    </div>
                    <div className="md:hidden m-5">
                        <button
                            className="text-neutral-400 text-xl"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
                <div
                    className={`fixed inset-0 bg-[rgba(255, 255, 255, 0.9)] backdrop-blur-md z-[1000] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button
                        className="absolute top-5 right-5 text-xl text-neutral-400"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ✕
                    </button>
                    <ul className="flex flex-col justify-center items-center h-full gap-5 text-lg font-semibold text-neutral-400">
                        <li className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
                        <li className="cursor-pointer" onClick={() => handleScrollTo("faq")}>FAQ</li>
                        {/* <li className="cursor-pointer" onClick={() => handleScrollTo("PS")}>Problem Statement</li> */}

                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
