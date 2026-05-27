import React from 'react';
import './PricingBar.css';

export default function PricingBar() {

    return (

        <div className="pricing-section">

            <div className="pricing-bar-wrapper">

                {/* LEFT SIDE */}
                <div className="price-info-group">

                    <div className="price-row">

                        <span className="current-price">
                            ₹99
                        </span>

                        <span className="original-price">
                            499/-
                        </span>

                    </div>

                    <p className="urgency-subtext">
                        Limited Appointments Lefts
                    </p>

                </div>

                {/* RIGHT SIDE */}
                <button className="schedule-now-btn">
                    Schedule Now
                </button>

            </div>

        </div>

    );
}