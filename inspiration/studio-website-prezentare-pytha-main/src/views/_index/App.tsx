import React from 'react';
import Header from "../../commons/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainAppRouter from "../../router/MainAppRouter";
import Footer from "../../commons/footer/Footer";
import PythaModules from "../aboutPytha/PythaModules";
import DetailsPytha from "../detailsPytha/DetailsPytha";
import Prices from "../prices/Prices";
import Resources from "../resources/Resources";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Formular from '../formular/Formular';
import TermsAndConditions from "../terms-and-conditions/TermsAndConditions";


function App() {
    return (
        <div className={"font-main-light"}>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path={MainAppRouter.home} element={<Home/>}/>
                    <Route path={MainAppRouter.pythaModules} element={<PythaModules/>}/>
                    <Route path={MainAppRouter.detailsPytha} element={<DetailsPytha/>}/>
                    <Route path={MainAppRouter.prices} element={<Prices/>}/>
                    <Route path={MainAppRouter.resources} element={<Resources/>}/>
                    <Route path={MainAppRouter.contact} element={<Contact/>}/>
                    <Route path={MainAppRouter.formular} element={<Formular/>}/>
                    <Route path={MainAppRouter.termsAndConditions} element={<TermsAndConditions/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
