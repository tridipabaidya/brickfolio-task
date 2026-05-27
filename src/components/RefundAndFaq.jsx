import React, { useState } from 'react';
import './RefundAndFaq.css';

import back_image from "../assets/back_image.png";
import backg_image2 from "../assets/backg_image2.png";
export default function RefundAndFaq() {

    const [activeFaq, setActiveFaq] = useState(0);

    const faqData = [
        {
            question: "What will I learn during the consultation?",
            answer:
                "You'll get a detailed understanding of taxes, fees, loan options, property values, and the home-buying process tailored to your needs."
        },
        {
            question: "How long is the consultation?",
            answer:
                "The structured one-on-one session typically takes between 30 to 45 minutes depending on your specific requirements."
        },
        {
            question: "How do I schedule the consultation?",
            answer:
                "Immediately after your payment processing, you will be redirected to our booking calendar to pick a time slot that fits your schedule."
        },
        {
            question: "What happens if I don't find the consultation helpful?",
            answer:
                "Our program is backed by a 100% money-back guarantee. If you are not satisfied with the advice shared, we will process your full refund immediately."
        }
    ];

    return (
        <div className="exact-page-container">

            {/* MONEY BACK SECTION */}
            <section className="exact-refund-banner">

                {/* LEFT IMAGE */}
                <img
                    src={back_image}
                    alt="left design"
                    className="side-shape left-image"
                />

                {/* RIGHT IMAGE */}
                <img
                    src={backg_image2}
                    alt="right design"
                    className="side-shape right-image"
                />

                {/* CENTER CONTENT */}
                <div className="exact-refund-content">

                    <h1 className="exact-refund-title">
                        100% Money-Back
                    </h1>

                    <p className="exact-refund-description">
                        Your ₹99 ensures a dedicated consultant for your
                        one-on-one session.
                        <strong> But here's the best part </strong>
                        if you schedule and attend the meeting,
                    </p>

                    <div className="exact-dashed-box">
                        We'll refund the full amount!
                    </div>

                    <p className="exact-win-text">
                        It's a win-win
                    </p>

                    <button className="exact-orange-cta-btn">
                        Book My Consultation for ₹99
                    </button>

                </div>

            </section>

            {/* FAQ SECTION */}
            <section className="exact-dashboard-section">

                <div className="exact-dashboard-grid">

                    {/* LEFT CARD */}
                    <div className="exact-orange-info-card">

                        <h2 className="exact-card-title">
                            Still Not Convinced?
                        </h2>

                        <p className="exact-card-para">
                            You've read the whole page. Why not take the next
                            step and meet with us directly in the consultation?
                            For just ₹99, you've got nothing to lose and
                            everything to gain!
                        </p>

                        <button className="exact-white-pill-btn">
                            Book Now 99rs
                        </button>

                    </div>

                    {/* FAQ CARD */}
                    <div className="exact-faq-accordion-card">

                        <h2 className="exact-faq-header">
                            FAQs
                        </h2>

                        <div className="exact-faq-stack">

                            {faqData.map((faq, index) => {

                                const isOpen = activeFaq === index;

                                return (
                                    <div
                                        key={index}
                                        className={`exact-faq-row ${isOpen ? 'is-open' : ''}`}
                                    >

                                        <button
                                            className="exact-faq-toggle"
                                            onClick={() =>
                                                setActiveFaq(
                                                    isOpen ? null : index
                                                )
                                            }
                                        >

                                            <span className="exact-faq-q">
                                                {faq.question}
                                            </span>

                                            <span className="exact-faq-chevron">

                                                {isOpen ? (

                                                    <svg
                                                        width="10"
                                                        height="6"
                                                        viewBox="0 0 10 6"
                                                    >
                                                        <path
                                                            d="M1 5l4-4 4 4"
                                                            stroke="#000"
                                                            strokeWidth="1.5"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>

                                                ) : (

                                                    <svg
                                                        width="10"
                                                        height="6"
                                                        viewBox="0 0 10 6"
                                                    >
                                                        <path
                                                            d="M1 1l4 4 4-4"
                                                            stroke="#000"
                                                            strokeWidth="1.5"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>

                                                )}

                                            </span>

                                        </button>

                                        <div className="exact-faq-body">

                                            {isOpen && (
                                                <p className="exact-faq-a">
                                                    {faq.answer}
                                                </p>
                                            )}

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}