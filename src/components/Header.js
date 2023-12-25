import React from "react";

export const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2">
                            <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a
                                href="#" className="text-white">123 Street, New York</a></small>
                            <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#"
                                                                                                              className="text-white">mkstore@gmail.com</a></small>
                        </div>
                        <div className="top-link pe-2">
                            <a href="#" className="text-white"><small className="text-white mx-2">Política de privacidad</small>/</a>
                            <a href="#" className="text-white"><small className="text-white mx-2">Términos de uso</small>/</a>
                            <a href="#" className="text-white"><small className="text-white ms-2">Ofertas</small></a>
                        </div>
                    </div>
                </div>
            </div>
            {/*<h1 className="header-footer-text">Bienvenidos a UNIR Delivery</h1>*/}
        </header>
    );
}