import React from "react";

export const ProductCart = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">
                                <p className="mb-0 mt-4">1</p>
                            </th>
                            <td>
                                <p className="mb-0 mt-4">Ilea Foundation</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">35.99 $</p>
                            </td>

                            <td>
                                <p className="mb-0 mt-4">35.99 $</p>
                            </td>
                            <td>
                                <button className="btn btn-md rounded-circle bg-light border mt-4">
                                    <i className="fa fa-times text-danger"></i>
                                </button>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="mb-0 mt-4">2</p>
                            </th>
                            <td>
                                <p className="mb-0 mt-4">Translucent Loose Setting Powder</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">43.00 $</p>
                            </td>

                            <td>
                                <p className="mb-0 mt-4">43.00 $</p>
                            </td>
                            <td>
                                <button className="btn btn-md rounded-circle bg-light border mt-4">
                                    <i className="fa fa-times text-danger"></i>
                                </button>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="mb-0 mt-4">3</p>
                            </th>
                            <td>
                                <p className="mb-0 mt-4">Halo Glow Contour Beauty Wand</p>
                            </td>
                            <td>
                                <p className="mb-0 mt-4">9.00 $</p>
                            </td>

                            <td>
                                <p className="mb-0 mt-4">9.00 $</p>
                            </td>
                            <td>
                                <button className="btn btn-md rounded-circle bg-light border mt-4">
                                    <i className="fa fa-times text-danger"></i>
                                </button>
                            </td>

                        </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}