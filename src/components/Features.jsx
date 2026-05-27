import React from 'react';
import './Features.css';
import handshake from "../assets/handshake.png"
export default function HomeBuyingOffer() {
    const offerings = [
        "A personalised consultation to simplify the home-buying process.",
        "Guidance on taxes, fees, and hidden costs.",
        "A clear understanding of loan options and financing plans.",
        "Market analysis to help you assess property value.",
        "Answers to any specific questions you have about your home-buying journey."
    ];

    return (
        <div className="card-container">
            <div className="card-content">
                {/* Left Section */}
                <div className="text-section">
                    <h1 className="main-heading">What You'll Get for ₹99</h1>
                    <ul className="offer-list">
                        {offerings.map((text, index) => (
                            <li key={index} className="offer-item">
                                <span className="bullet-circle"></span>
                                <p className="offer-text">{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section */}
                <div className="image-section">
                    <div className="image-wrapper">
                        <img
                            src={handshake}
                            alt="Business handshake over contract"
                            className="deal-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}