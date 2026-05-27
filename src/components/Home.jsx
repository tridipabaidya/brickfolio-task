import React from 'react';
import './Home.css';
import pensiveMan from '../assets/Hero2.png';

const Home = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="text-section">
                    <h1 className="hero-title">
                        Tired of Confusing <span className="highlight">Home-Buying Processes?</span> Taxes, Fees, & Hidden Costs Holding You Back?
                    </h1>

                    <p className="hero-description">
                        In this consultation, <strong>Gain Expert Guidance</strong> to make informed <strong>Home Buying Decisions</strong>, avoid hidden costs, and <strong>Buy Confidently</strong>.
                    </p>

                    <button className="cta-button">
                        Book Now for ₹99
                    </button>
                </div>

                <div className="image-section">
                    <div className="circle-wrapper">
                        <img
                            src={pensiveMan}
                            alt="Pensive man thinking about home buying"
                            className="hero-image"

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;