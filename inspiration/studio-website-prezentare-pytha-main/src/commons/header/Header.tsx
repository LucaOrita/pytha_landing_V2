import React, {useEffect, useState} from 'react';
import headerLinks from './HeaderLinks';
import {IoBookmark, IoClose} from "react-icons/io5";
import ContactForm from "../../views/contact/contact-form/ContactForm";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [popupDemoBook, setPopupDemoBook] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (target && !target.closest('.dropdown-container')) {
                setOpenDropdownIndex(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const bookDemo = () => {
        setPopupDemoBook(true);
    }

    const closeDemo = () => {
        setPopupDemoBook(false);
    }

    return (
        <header className="font-poppins fixed top-0 z-50 w-full transition-all">
            <div
                className={`flex justify-between items-center px-6 py-4 transition-all duration-300 bg-white mx-auto ${!isScrolled ? 'lg:rounded-full lg:mt-4 lg:w-[90%] shadow-lg' : 'mt-0 shadow-sm w-full rounded-none'}`}>
                <div className="flex items-center gap-2">
                    <img src="/images/pytha-theoram-logo.png" className="h-8" alt="Logo"/>
                    <span className="text-xl font-bold">×</span>
                    <a href="https://adlineindustries.ro/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/adline-logo-full.jpg" className="h-8 cursor-pointer" alt="Icon" />
                    {/* Comentariu test */}
                    </a>
                </div>

                <nav className="hidden lg:flex gap-6 items-center">
                    {headerLinks.map((el, i) => (
                        <div
                            key={i}
                            className="relative dropdown-container"
                        >
                            {
                                el.hasDropdown ?
                                    <button
                                        onClick={() => setOpenDropdownIndex(openDropdownIndex === i ? null : i)}
                                        className="relative text-sm font-medium transition-all hover:text-main-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-main-800 after:transition-transform after:duration-300 hover:after:scale-x-100"
                                    >
                                        {el.text}
                                    </button>
                                    :
                                    <a
                                        href={el.link}
                                        className="relative text-sm font-medium transition-all hover:text-main-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-main-800 after:transition-transform after:duration-300 hover:after:scale-x-100"
                                    >
                                        {el.text}
                                    </a>
                            }
                        </div>
                    ))}
                </nav>

                {openDropdownIndex && (
                    <div
                        className="absolute min-w-xl left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-xl rounded-xl py-4 px-6 flex gap-10 z-50">
                        {(headerLinks[openDropdownIndex].dropdownCategories ?? []).map((cat, ci) => (
                            <div key={ci} className="min-w-[160px]">
                                <h4 className="font-semibold text-main-900 mb-2">{cat.title}</h4>
                                <ul className="space-y-1">
                                    {cat.items.map((item, ii) => (
                                        <li key={ii}>
                                            <a
                                                href={item.link}
                                                className="text-sm text-gray-700 hover:text-main-900 transition"
                                                onClick={() => setOpenDropdownIndex(null)}
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}


                <div className="hidden lg:block">
                    <button
                        onClick={bookDemo}
                        className="bg-main-900 hover:bg-main-800 text-white font-semibold rounded-full py-2 px-4 shadow-md transition-all duration-300">
                        Solicită ofertă
                    </button>
                </div>


                <div className="lg:hidden flex gap-4">
                    <button
                        onClick={bookDemo}
                        className="bg-main-900 hover:bg-main-800 text-white font-semibold rounded-full py-2 px-4 shadow-md transition-all duration-300">
                        Solicita ofertă
                    </button>
                    <button
                        className="text-main-900"
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className={"lg:hidden w-full flex justify-center"}>
                    <nav
                        className={`w-full bg-white shadow-md border-t border-main-900 z-40 transition-all duration-300`}>
                        <div className="flex flex-col p-4">
                            {headerLinks.map((el, i) => (
                                <div key={i}>
                                    {!el.hasDropdown ? (
                                        <a
                                            href={el.link}
                                            className="text-sm py-2 px-3 rounded-md hover:bg-main-900 hover:text-white transition-all mb-1 block"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {el.text}
                                        </a>
                                    ) : (
                                        <div className="mb-3">
                                            <div className="text-sm font-medium text-main-900 mb-2">{el.text}</div>
                                            <div className="pl-3 border-l border-gray-300 space-y-2">
                                                {(el.dropdownCategories ?? []).map((cat, ci) => (
                                                    <div key={ci}>
                                                        <div
                                                            className="text-xs font-semibold text-gray-500 uppercase mb-1">{cat.title}</div>
                                                        <ul className="space-y-1 mb-2">
                                                            {cat.items.map((item, ii) => (
                                                                <li key={ii}>
                                                                    <a
                                                                        href={item.link}
                                                                        className="text-sm text-gray-700 hover:text-main-900 block"
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                    >
                                                                        {item.text}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </nav>
                </div>
            )}


            {
                popupDemoBook
                    ? <div
                        className={"w-screen h-screen fixed inset-0 p-10 z-40 bg-black bg-opacity-90 flex justify-center items-center"}
                        onClick={closeDemo}>
                        <div className={"w-full lg:w-2/5 h-fit rounded-xl bg-white p-5"}
                             onClick={(e) => e.stopPropagation()}>
                            <div className={"flex justify-end items-center"}>
                                <button
                                    onClick={closeDemo}
                                    className={"z-30 p-2 rounded-full hover:text-main-900 text-gray-500"}>
                                    <IoClose className={"h-5 w-5"}/>
                                </button>
                            </div>
                            <h1 className={"translate-y-[-35px] text-3xl font-bold pb-3 text-center flex items-center justify-center gap-2"}>
                                <IoBookmark className={"text-main-900 mb-1"}/>
                                Solicită oferta
                            </h1>
                            <ContactForm/>
                        </div>
                    </div>
                    : <></>
            }
        </header>
    );
};

export default Header;
