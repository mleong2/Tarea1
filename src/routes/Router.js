import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import MakeupDetails from '../views/MakeupDetails';
import NotFound from '../views/NotFound';
import {Principal} from "../views/Principal";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Cart} from "../views/Cart";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/makeups" element={<Layout><Principal /></Layout>} />
                <Route path="/cart" element={<Layout><Cart /></Layout>} />
                <Route path="/makeups/:makeupId" element={<Layout><MakeupDetails /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default Router;
