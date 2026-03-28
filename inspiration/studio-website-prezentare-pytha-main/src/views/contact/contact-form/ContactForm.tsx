import MainAppRouter from "../../../router/MainAppRouter";
import {GrSend} from "react-icons/gr";
import React, {useState} from "react";
import {toast, Toaster} from "react-hot-toast";
import ContactService from "../../services/ContactService";

interface ContactFormInterface {
    callback?: (() => void) | null;
}

const ContactForm: React.FC<ContactFormInterface> = ({callback = null}) => {
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [isPolicyChecked, setIsPolicyChecked] = useState(false);
    const [emailRequest, setEmailRequest] = useState({
        name: null,
        email: null,
        phone: null,
        company: null,
        message: null,
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setEmailRequest((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const emptyRequest = () => {
        setEmailRequest({
            name: null,
            email: null,
            phone: null,
            company: null,
            message: null,
        });
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailRequest.email === null) {
            toast.error("Completeaza-ti emailul");
            return;
        }

        if (emailRequest.phone === null) {
            toast.error("Completeaza-ti telefonul");
            return;
        }

        if (emailRequest.name === null) {
            toast.error("Completeaza-ti numele complet");
            return;
        }

        if (emailRequest.company === null) {
            toast.error("Completeaza-ti numele companiei");
            return;
        }
        if (emailRequest.message === null) {
            toast.error("Completeaza oferta care te intereseaza");
            return;
        }

        setIsLoading(true)
        new ContactService().contact(emailRequest)
            .then((_) => {
                emptyRequest();
                toast.success("Mesaj transmis cu success");
                if (callback != null)
                    callback();
            })
            .catch((_) => toast.error("Am intampinat o eroare."))
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <div><Toaster/></div>
            <form className="space-y-4" onSubmit={sendEmail}>
                <div>
                    <label className="text-sm font-main-medium mb-1" htmlFor="name">
                        Numele tau
                    </label>
                    <input type="text"
                           id="name"
                           name={"name"}
                           required={true}
                           onChange={handleInputChange}
                           className="outline-main-900 w-full p-2 border border-input rounded-md"
                           placeholder="Nume Prenume"/>
                </div>
                <div>
                    <label className="text-sm font-main-medium mb-1" htmlFor="email">
                        Adresa ta de email
                    </label>
                    <input type="email"
                           id="email"
                           name={"email"}
                           required={true}
                           onChange={handleInputChange}
                           className="outline-main-900 w-full p-2 border border-input rounded-md"
                           placeholder="adresa@provider.com"/>
                </div>
                <div>
                    <label className="text-sm font-main-medium mb-1" htmlFor="phone">
                        Numarul de telefon
                    </label>
                    <input type="phone"
                           id="phone"
                           name={"phone"}
                           required={true}
                           onChange={handleInputChange}
                           className="outline-main-900 w-full p-2 border border-input rounded-md"
                           placeholder="07xxxxxxxx"/>
                </div>
                <div>
                    <label className="text-sm font-main-medium mb-1" htmlFor="company">
                        Compania ta
                    </label>
                    <input type="text" id="company"
                           name={"company"}
                           required={true}
                           onChange={handleInputChange}
                           className="outline-main-900 w-full p-2 border border-input rounded-md"
                           placeholder="SC xxxx SRL"/>
                </div>
                <div>
                    <label className="text-sm font-main-medium mb-1" htmlFor="message">
                        Lasă-ne un mesaj
                    </label>
                    <textarea id="message"
                              name={"message"}
                              onChange={handleInputChange}
                              required={true}
                              className="outline-main-900 w-full p-2 border border-input rounded-md"
                              rows={4}
                              placeholder="Adaugă detalii relevante în scopul unei oferte personalizate"></textarea>
                </div>
                <div className={"w-full flex justify-between gap-5 items-center"}>
                    <div className="pt-3 text-sm w-2/3">
                        <p className="font-main-light">
                            <input onChange={(e) => setIsPolicyChecked(e.target.checked)}
                                   type="checkbox"
                                   required={true}
                                   className="w-4 h-4 accent-main-900 mr-2"/>
                            Prin transmiterea formularului sunt de acord cu
                            <a href={MainAppRouter.privacyPolicy} className="ml-1 text-main-900">
                                Politica GDPR
                            </a>
                        </p>
                        <p className="font-main-light">
                            <input
                                required={true}
                                onChange={(e) => setIsTermsChecked(e.target.checked)} type="checkbox"
                                className="w-4 h-4 accent-main-900 mr-2"/>
                            Prin transmiterea formularului sunt de acord cu
                            <a href={MainAppRouter.termsAndConditions} className="ml-1 text-main-900">
                                Termenii și Condiții de utilizare
                            </a>
                        </p>
                    </div>
                    {
                        isLoading
                            ? <></>
                            : <button
                                disabled={!(isPolicyChecked && isTermsChecked)}
                                type="submit"
                                className="w-1/3 flex justify-center items-center gap-2 disabled:bg-gray-300 bg-main-900 text-white font-main-medium p-2 rounded-full">
                                Trimite <GrSend/>
                            </button>
                    }
                </div>
            </form>

        </>
    );
}

export default ContactForm;