import React, {useContext} from 'react';
import '../styles/styles.css';
import '../styles/bootstrap.min.css';
import ilia from '../img/ilia2.jpg';
import {Makeup} from "../components/Makeup";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Menu} from "../components/Menu";
import {Categories} from "../components/Categories";
import {MakeupContext} from "../context/MakeupContext";


export const Principal = () => {

    const { makeups } = useContext(MakeupContext);

    return (
        <div>

            <Menu/>
            <Categories/>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            {makeups.length > 0 ? (
                                                makeups.map((makeup, index) => (
                                                    <Makeup
                                                        key={index}
                                                        id={makeup.id}
                                                        name={makeup.name}
                                                        category={makeup.category}
                                                        price={makeup.price}
                                                        image = {makeup.image}
                                                    />
                                                ))
                                            ) : (
                                                <div>No hay productos disponibles.</div>
                                                )
                                            }

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}



