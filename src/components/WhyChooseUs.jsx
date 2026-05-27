import React from 'react';
import './WhyChooseUs.css';
import Group23 from "../assets/Group 23.png"
import Group24 from "../assets/Group 24.png"
import Group25 from "../assets/Group 25.png"
import Group26 from "../assets/Group 26.png"
import Group from "../assets/Group.png"
import Group27 from "../assets/XMLID_2_.png"

export default function WhyChooseUs() {
    const cardsData = [
        {
            id: 1,
            title: "Expert Property Consultants",
            desc: "Experienced consultants providing tailored advice and expert guidance through every step of your real estate journey.",
            // Expert Property Consultants SVG
            svg: (
                <img src={Group23} alt="" />
            )
        },
        {
            id: 2,
            title: "Personalised Support",
            desc: "Personalized support to meet your unique requirements, helping you find the perfect property with precision and care.",
            // Personalised Support SVG
            svg: (
                <img src={Group24} alt="" />
            )
        },
        {
            id: 3,
            title: "Transparent Process",
            desc: "A fully transparent process, keeping you informed at every stage, building trust and confidence in your investment.",
            // Transparent Process SVG
            svg: (
                <img src={Group} alt="" />
            )
        },
        {
            id: 4,
            title: "Proven Results",
            desc: "Proven track record with successful deals and satisfied clients, delivering reliable results for all your real estate needs.",
            // Proven Results SVG
            svg: (
                <img src={Group26} alt="" />
            )
        },
        {
            id: 5,
            title: "Post-Sale Service",
            desc: "Our commitment extends beyond purchase, offering post-sale services to ensure a seamless and stress-free transition into your new home.",
            // Post-Sale Service SVG
            svg: (
                <img src={Group27} alt="" />
            )
        },
        {
            id: 6,
            title: "Free Site Visits",
            desc: "Enjoy free site visits with our team to help you make informed decisions about your dream property.",
            // Free Site Visits SVG
            svg: (
                <img src={Group25} alt="" />
            )
        }
    ];

    return (
        <section className="brickfolio-wrapper">
            <h1 className="brickfolio-heading">
                Why Choose <span className="highlight-text">Brickfolio?</span>
            </h1>

            <div className="brickfolio-grid">
                {cardsData.map((card) => (
                    <div key={card.id} className="brickfolio-card">
                        <div className="brickfolio-icon-container">
                            {card.svg}
                        </div>
                        <h3 className="brickfolio-card-title">{card.title}</h3>
                        <p className="brickfolio-card-desc">{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}