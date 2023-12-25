
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {MakeupContext} from '../context/MakeupContext';
import {Header} from "../components/Header";
import {Makeup} from "../components/Makeup";

const MakeupDetails = () => {
    const { makeupId } = useParams();
    const { makeups } = useContext(MakeupContext);
    const makeup = makeups.find(r => r.id === makeupId);

    if (!makeup) {
        return <h2>Producto no encontrado</h2>;
    }



    return (

        <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <h2>Detalles</h2>
                                            <p>Nombre: {makeup.name}</p>
                                            <p>Categoria: {makeup.category}</p>
                                            <p>Precio: {makeup.price}</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

/*        <div className="makeup-details">
            <h2 className="makeup-name">{makeup.name}</h2>
            <p className="makeup-category">Categoria: {makeup.category}</p>
            <p className="makeup-price">Precio: {makeup.price}</p>
            <p className="makeup-image">Imagen: {makeup.image} </p>
        </div>*/
    );
}

export default MakeupDetails;