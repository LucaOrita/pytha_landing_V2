import { IoBookmark, IoClose } from "react-icons/io5";
import ContactForm from "../contact/contact-form/ContactForm";

export default function Formular() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-4">
            <div className="relative w-full max-w-lg rounded-2xl shadow-lg bg-white p-6 lg:p-8">
                {/* Buton închidere */}
                <div className="flex justify-end">
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                        onClick={() => window.history.back()}
                    >
                        <IoClose className="h-6 w-6 text-gray-500 hover:text-main-900" />
                    </button>
                </div>

                {/* Titlu */}
                <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2 text-gray-800">
                    <IoBookmark className="text-main-900" />
                    Solicită oferta
                </h1>

                {/* Formular */}
                <ContactForm />
            </div>
        </div>
    );
}