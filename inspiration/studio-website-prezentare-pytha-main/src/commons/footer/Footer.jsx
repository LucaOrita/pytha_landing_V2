import React, {useState} from "react";
import {HiOutlineLocationMarker, HiOutlineMail} from "react-icons/hi";
import {MdOutlineLocalPhone} from "react-icons/md";
import {GrSend} from "react-icons/gr";
import MainAppRouter from "../../router/MainAppRouter";
import headerLinks from "../header/HeaderLinks";

export default function Footer() {
    const [foreignEmail, setForeignEmail] = useState("");

    const links = [
        {href: MainAppRouter.termsAndConditions, text: 'Termeni și condiții'},
        {href: MainAppRouter.termsAndConditions, text: 'Politică de confidențialitate'},
        {href: MainAppRouter.cookiePolicy, text: 'Politică cookie'},
        {href: 'https://anpc.ro/', text: 'ANPC'},
        {href: 'https://www.dataprotection.ro/', text: 'ANSPDCP'}
    ];

    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-12">
                <div className={"flex items-center justify-center"}>
                    <div className={"w-full md:w-1/2"}>
                        <h2 className="text-2xl font-semibold mb-4">Abonează-te la newsletter</h2>
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Introdu emailul tău"
                                className="bg-gray-800 border border-gray-600 text-white text-sm rounded-full px-4 py-2 w-full"
                                onChange={(v) => setForeignEmail(v.target.value)}
                            />
                            <button
                                onClick={() => console.log(foreignEmail)}
                                className="bg-main-900 p-3 rounded-full"
                            >
                                <GrSend className="text-white"/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Branding */}
                    <div>
                        <img src="/images/pytha-logo.png" alt="Logo" className="w-80 mb-4"/>
                        <p className="text-sm text-gray-300 mb-2">Soluție oferită de</p>
                        <img src="/images/logo-adline-min.png" alt="Adline Logo" className="w-40"/>
                    </div>

                    {/* Linkuri */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Linkuri</h2>
                        <ul className="space-y-2 text-sm">
                            {headerLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.link}
                                        className="text-gray-300 hover:text-white transition border-b border-transparent hover:border-main-900"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact (no extracted component) */}
                    <div className="space-y-3 text-sm">
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>

                        <a
                            href="tel:+40742065376"
                            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                        >
                            <div className="bg-main-900 p-2 rounded-full">
                                <MdOutlineLocalPhone/>
                            </div>
                            +40 742 065 376
                        </a>

                        <a
                            href="tel:+40742065893"
                            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                        >
                            <div className="bg-main-900 p-2 rounded-full">
                                <MdOutlineLocalPhone/>
                            </div>
                            +40 742 065 893
                        </a>

                        <a
                            href="mailto:pytha@adlineindustries.ro"
                            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                        >
                            <div className="bg-main-900 p-2 rounded-full">
                                <HiOutlineMail/>
                            </div>
                            pytha@adlineindustries.ro
                        </a>

                        <div className="flex items-center gap-2 text-gray-300">
                            <div className="bg-main-900 p-2 rounded-full">
                                <HiOutlineLocationMarker/>
                            </div>
                            <span>Bulevardul Metalurgiei 99-99B, București 041832</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Social Media */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
                        <div className="flex gap-4 items-center">
                            {["facebook", "linkedin", "instagram", "youtube"].map((platform) => (
                                <img
                                    key={platform}
                                    src={`/icons/${platform}-logo.svg`}
                                    alt={platform}
                                    className="w-8 h-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Utile */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Utile</h2>
                        <ul className="space-y-2 text-sm">
                            {links.slice(3).map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition border-b border-transparent hover:border-main-900"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Informatii */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Informatii</h2>
                        <ul className="space-y-2 text-sm">
                            {links.slice(0, 3).map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition border-b border-transparent hover:border-main-900"
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div
                    className="border-t border-gray-700 pt-6 text-sm flex flex-wrap justify-center gap-3 text-gray-400">
                    <p>Adline Industries © {new Date().getFullYear()} - Toate drepturile rezervate</p>
                </div>
            </div>
        </footer>
    );
}
