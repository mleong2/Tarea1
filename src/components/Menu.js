import React from "react";
import {useSearch} from "../hooks/useSearch";

export const Menu = (products) => {

    const { query, setQuery, filteredItems } = useSearch(products, 'name');
    return (
        <div className="container px-0">
            <nav className="navbar navbar-light bg-white navbar-expand-xl">
                <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Mk Store</h1></a>
                <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars text-primary"></span>
                </button>
                <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                    <div className="navbar-nav mx-auto">
                        <a href="index.html" className="nav-item nav-link">Inicio</a>
                        <a href="shop.html" className="nav-item nav-link">Compra</a>
                        <a href="shop.html" className="nav-item nav-link">Más vendidos</a>
                        <a href="shop-detail.html" className="nav-item nav-link">Sobre nosotros</a>
                        <a href="shop-detail.html" className="nav-item nav-link">Contáctanos</a>

                    </div>
                    <div className="d-flex m-3 me-0">

                        <form className="form-search" onSubmit="return busqueda()">
                            <div className="input-group mb-2">
                                <input className='searchinput form-control' type='text' name="s" id="searchinput"
                                       value={query}  autoComplete="off"/>
                                <div className="input-group-append">
                                    <a href="javascript:;" id='search' className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4">
                                        <span className="fa fa-search "></span>
                                    </a>

                                </div>
                            </div>
                        </form>
                        <a href="cart" className="position-relative me-4 my-auto"><i className="fa fa-shopping-bag fa-2x"></i>
                            <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"></span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Menu;