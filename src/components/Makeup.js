import React from "react";
import { Link } from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";

export const Makeup = ({ id, name, category, price, image }) => {
    return (

        <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="rounded position-relative fruite-item">
                <Link to={`/makeups/${id}`}>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute">Ver detalles</div>
                </Link>
                <div className="fruite-img">
                    <img src={image} class="img-fluid w-100 rounded-top" alt="imagen"/>
                </div>

                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{name}</h4>
                    <p>{category}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">${price}</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                            <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                        {/*<Link to={`/makeups/${id}`}>
                            <button className="btn border border-secondary rounded-pill px-3 text-primary">Ver detalles</button>
                        </Link>*/}
                    </div>
                </div>
            </div>

        </div>


    );
}