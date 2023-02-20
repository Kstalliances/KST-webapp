import React, {Component} from 'react';
import './App.css'
import {CustomNavbar} from "./component/naveBar";
import {HomePage} from "./pages/homePage";
import {ServicePage} from "./pages/servicePage";
import {WhyKST} from "./pages/whyKst";
import {Benefits} from "./pages/benefits";
import {HowItsWorks} from "./pages/howItsWorks";
import {YourDetail} from "./pages/yourDetail";
import {ContactUs} from "./pages/contactUs";
import {ParallaxProvider} from "react-scroll-parallax";

function App() {
    return (
        <>
            <ParallaxProvider>
                <CustomNavbar/>
                <HomePage/>
                <ServicePage/>
                <WhyKST/>
                <Benefits/>
                <HowItsWorks/>
                <YourDetail/>
                <ContactUs/>
            </ParallaxProvider>
        </>
    );
}

export default App;