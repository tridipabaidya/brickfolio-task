import React from 'react';
import './ConsultationProgram.css';
import rectangle1 from "../assets/Rectangle1.png";
import rectangle2 from "../assets/Rectangle2.png";
import rectangle3 from "../assets/Rectangle3.png";
import rectangle4 from "../assets/Rectangle4.png"
import people1 from "../assets/people1.png"
import people from "../assets/people.png"
import thumbsup from "../assets/thumbsup.png"



export default function ConsultationProgram() {
    const stats = [
        {
            value: "718,000+",
            label: "Happy Home Buyers",
            // Simple SVG representing a group of people with stars
            icon: (
                <img src={people} alt="" />
            )
        },
        {
            value: "4.7/5",
            label: "Avg Ratings",
            // Simple SVG representing a hand holding a thumbs up rating board
            icon: (
                <img src={thumbsup} alt="" />
            )
        },
        {
            value: "100+",
            label: "Property Expert",
            // Simple SVG representing a connected structural network
            icon: (
                <img src={people1} alt="" />
            )
        }
    ];

    const audiences = [
        {
            img: rectangle1,
            text: "First-time home buyers who feel overwhelmed by the process."
        },
        {
            img: rectangle2,
            text: "Those confused about financing options and loan terms."
        },
        {
            img: rectangle3,
            text: "Buyers unsure about taxes, fees, and hidden costs."
        },
        {
            img: rectangle4,
            text: "Anyone looking to buy a new home but not sure where to start."
        }
    ];

    return (
        <div className="program-container">
            {/* Top Banner Stats Block */}
            <div className="stats-banner">
                <div className="banner-content">
                    <h2 className="stats-title">Numbers that speak<br />for themselves</h2>
                    <div className="stats-cards-container">
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Profile Core Audience Block */}
            <div className="audience-section">
                <div className="audience-header">
                    <p className="audience-subtitle">Who is this</p>
                    <h1 className="audience-main-title">Consultation Program For?</h1>
                </div>

                <div className="audience-grid">
                    {audiences.map((item, index) => (
                        <div key={index} className="audience-card">
                            <div className="audience-img-wrapper">
                                <img src={item.img} alt="Target client category visualization" className="audience-img" />
                            </div>
                            <p className="audience-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}