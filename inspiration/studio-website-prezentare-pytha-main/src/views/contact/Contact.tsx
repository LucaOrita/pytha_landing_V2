import React from 'react';
import {HiClock, HiOutlineLocationMarker, HiOutlineMail} from "react-icons/hi";
import {MdOutlineLocalPhone, MdOutlineSupportAgent} from "react-icons/md";
import ContactForm from "./contact-form/ContactForm";
import MultipleCardsWrap from "../../commons/components/MultipleCardsWrap";
import {Ri24HoursLine} from "react-icons/ri";
import {LiaChalkboardTeacherSolid} from "react-icons/lia";
import {LuDatabaseBackup} from "react-icons/lu";
import {IoLogoWechat} from "react-icons/io5";
import {Toaster} from "react-hot-toast";
import {PiBooksBold} from "react-icons/pi";

const ContactPage = () => {
    return (
        <>
            <Toaster/>
            <section>
                <div className="text-center pt-32">
                    <span
                        className="text-main-900 font-semibold text-sm tracking-widest uppercase bg-pink-100 px-3 py-1 rounded-full">
                        Producția ta nu stă. Nici sprijinul nostru.
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
                        Suport PYTHA – Asigurăm continuitatea producției tale
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mt-7">
                        Alegând PYTHA prin Adline Industries, nu primești doar un software puternic, ci și un partener
                        real de producție.
                    </p>
                </div>
                <MultipleCardsWrap cards={[
                    {
                        title: "Suport local în România",
                        description: "Intervenim rapid pentru probleme tehnice, erori, optimizări sau întrebări de utilizare.",
                        icon: <MdOutlineSupportAgent className="w-10 h-10"/>
                    },
                    {
                        title: "Asistență 24/7 pentru clienții contractați",
                        description: "Telefonic, e-mail sau remote control (TeamViewer, AnyDesk).",
                        icon: <Ri24HoursLine className={"w-10 h-10"}/>
                    },
                    {
                        title: "Training inițial + suport continuu",
                        description: "Te instruim să folosești eficient softul și rămânem lângă tine pe termen lung.",
                        icon: <LiaChalkboardTeacherSolid className={"w-10 h-10"}/>,
                    },
                    {
                        title: "Consultanță pentru integrarea fluxului CAD-CAM",
                        description: "Adaptăm soluția PYTHA la specificul atelierului sau fabricii tale.",
                        icon: <IoLogoWechat className={"w-10 h-10"}/>,
                    },
                    {
                        title: "Învățare rapidă cu ghiduri clare și suport inteligent",
                        description: "PYTHA oferă suport complet pentru fluxuri CAD–CAM complexe, cu interfață intuitivă, documentație detaliată și ghidare pas cu pas – ușor de folosit de începători, puternic pentru profesioniști.",
                        icon: <PiBooksBold className={"w-10 h-10"}/>,
                    },
                    {
                        title: "Back-up direct cu echipa PYTHA Germania",
                        description: "Probleme complexe? Le escaladăm direct la sursă, fără să pierzi timp.",
                        icon: <LuDatabaseBackup className={"w-10 h-10"}/>,
                    },
                ]}/>
            </section>
            <section>
                <div className={"bg-cover bg-no-repeat bg-center bg-gray-50"}>
                    <div className="bg-background text-foreground p-8">
                        <div className="flex xl:flex-row flex-col gap-4 pt-5">
                            <div className={"w-full xl:w-2/3 flex flex-col gap-4"}>
                                <div
                                    className={"w-full bg-white p-5 rounded-xl border-[1px] border-gray-300 shadow-lg"}>
                                    <h1 className={"font-bold text-3xl"}>
                                        Asistență tehnică locală! 📬
                                    </h1>
                                    <p className={"font-main-medium mt-3"}>
                                        Ești interesat de soluția PYTHA și vrei să afli cum te poate ajuta în
                                        activitatea
                                        ta? <br/>
                                        Contactează-ne acum și îți oferim rapid toate informațiile de care ai nevoie
                                        pentru a
                                        înțelege beneficiile și modul în care PYTHA poate aduce valoare afacerii tale.
                                    </p>
                                </div>
                                <div className={"flex flex-col md:flex-row gap-4"}>
                                    <div
                                        className={"flex flex-col w-full bg-white p-5 rounded-xl border-[1px] border-gray-300 shadow-lg"}>
                                        <div className={"h-full"}>
                                            <h1 className={"font-bold text-3xl"}>
                                                Date de contact
                                            </h1>
                                            <div className={"w-full flex flex-col gap-2 pt-2"}>
                                                <div className={"flex gap-2 items-center justify-start"}>
                                                    <div className={"rounded-full bg-main-900 p-2"}>
                                                        <MdOutlineLocalPhone className={"text-white"}/>
                                                    </div>
                                                    <a href={"tel:+40742065893"}>+40 742 065 893</a>
                                                </div>
                                                <div className={"flex gap-2 items-center justify-start"}>
                                                    <div className={"rounded-full bg-main-900 p-2"}>
                                                        <MdOutlineLocalPhone className={"text-white"}/>
                                                    </div>
                                                    <a href={"tel:+40742065376"}>+40 742 065 376</a>
                                                </div>
                                                <div className={"flex gap-2 items-center justify-start"}>
                                                    <div className={"rounded-full bg-main-900 p-2"}>
                                                        <HiOutlineMail className={"text-white"}/>
                                                    </div>
                                                    <a href={"mailTo:pytha@adlineindustries.ro"}>pytha@adlineindustries.ro</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"h-full mt-10 md:mt-0"}>
                                            <h1 className={"font-bold text-3xl"}>
                                                Orar
                                            </h1>
                                            <div className={"w-full flex flex-col gap-2 pt-2"}>
                                                <div className={"flex gap-2 items-start justify-start"}>
                                                    <div className={"rounded-full bg-main-900 p-2"}>
                                                        <HiClock className={"text-white"}/>
                                                    </div>
                                                    <span>Luni - Vineri: 09:00 - 17:00 <br/> Sâmbătă: Închis<br/> Duminică: Închis</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={"w-full bg-white p-5 rounded-xl border-[1px] border-gray-300 shadow-lg"}>
                                        <h1 className={"font-bold text-3xl"}>
                                            Adresa
                                        </h1>
                                        <div className={"w-full flex flex-col gap-2 pt-2"}>
                                            <div className={"flex gap-2 items-center justify-start"}>
                                                <div className={"rounded-full bg-main-900 p-2"}>
                                                    <HiOutlineLocationMarker className={"text-white"}/>
                                                </div>
                                                <span>Bulevardul Metalurgiei 99-99B, București 041832</span>
                                            </div>
                                        </div>
                                        <iframe
                                            title={"google"}
                                            className={"border-0 py-2 w-full h-[350px]"}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.1760296585153!2d26.1376258769667!3d44.37061747107713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fdfcab934173%3A0x1e80a87946f514b9!2sBulevardul%20Metalurgiei%2099-99b%2C%20Bucure%C8%99ti%20041837!5e1!3m2!1sro!2sro!4v1744898976930!5m2!1sro!2sro"
                                            allowFullScreen={false} loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={"w-full xl:w-1/3 bg-white p-5 rounded-xl border-[1px] border-gray-300 shadow-lg"}>
                                <h1 className={"font-bold text-2xl mb-2"}>Formular Suport</h1>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;