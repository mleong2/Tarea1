import React from "react";

export const Categories = () => {
    return (

        <div className="container-fluid fruite ">

            <div className="container">
                <div className="tab-class text-center">
                    <div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h3>Nuestros productos  </h3>
                        </div>
                        <div className="col-lg-8 text-end">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                <li className="nav-item categories">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"
                                       href="#tab-1">
                                        <span className="text-dark">Todos</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill"
                                       href="#tab-2">
                                        <span className="text-dark" >Maquillaje</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill"
                                       href="#tab-3">
                                        <span className="text-dark" >Skincare</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill"
                                       href="#tab-4">
                                        <span className="text-dark" >Perfumes</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill"
                                       href="#tab-5">
                                        <span className="text-dark" >Travel Size</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}