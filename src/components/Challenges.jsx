import React from 'react';
import './Challenges.css';

export default function Challenges() {
    const challengeData = [
        {
            id: 1,
            emoji: "😡",
            title: "I can't identify the various real estate taxes and fees.",
            desc: "Our experts will simplify all the costs, ensuring no hidden fees surprise you."
        },
        {
            id: 2,
            emoji: "😵‍💫",
            title: "Confused between fixed-rate and floating-rate loans?",
            desc: "We'll guide you through the right financing options based on your unique needs."
        },
        {
            id: 3,
            emoji: "🙁",
            title: "Legal paperwork and documentation are confusing.",
            desc: "Get help navigating legal paperwork to meet all home-buying requirements."
        },
        {
            id: 4,
            emoji: "🤔",
            title: "Unsure if you're paying too much?",
            desc: "Our consultants will help you assess the true market value so you don't overpay."
        }
    ];

    return (
        <section className="ui-wrapper">

            <header className="ui-header">
                <h2 className="ui-subheading">Overcome with Common</h2>
                <h1 className="ui-mainheading">Home-Buying Challenges</h1>
            </header>

            <div className="ui-grid">
                {challengeData.map((card) => (
                    <div key={card.id} className="ui-card">

                        <div className="ui-graphic-node">
                            <span className="ui-node-number">{card.id}</span>
                            <div className="ui-outer-ring">
                                <div className="ui-inner-sphere">
                                    <span
                                        className="ui-avatar"
                                        style={{ fontSize: '24px', display: 'block', lineHeight: '1' }}
                                    >
                                        {card.emoji}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="ui-card-body">
                            <h3 className="ui-card-title">{card.title}</h3>
                            <p className="ui-card-desc">{card.desc}</p>
                        </div>

                    </div>
                ))}
            </div>

            <div className="ui-action-row">
                <button className="ui-cta-button">
                    Book Your Personalized Consultation Now
                </button>
            </div>
        </section>
    );
}