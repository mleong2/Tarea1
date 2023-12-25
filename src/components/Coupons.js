import React from "react";

export const Coupons = () => {
    return (
        <div className="container-fluid py-2">
            <div className="container py-2">
                <div className="mt-5">
                    <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
                    <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon
                    </button>
                </div>

            </div>
        </div>

    );
}