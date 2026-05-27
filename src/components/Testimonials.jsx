import React from 'react';
import './Testimonials.css';
import star1 from '../assets/star1.png';
import star2 from '../assets/star2.png';
import star3 from '../assets/star3.png';
import google from '../assets/google.png';

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            text: "I had a fantastic experience with Brickfolio, largely due to Himanshu kumar. He was clear in explaining the next steps of the bank procedure and kept me updated about the referral bonus until I received it. His professionalism and support made the process much smoother. Highly recommend!",
            avatar: star1,
            name: "Ritu sharma",
            time: "2 weeks ago"
        },
        {
            id: 2,
            text: "I have a good experience with Brickfolio abd specially would like to thank Chirag for helping us at each step to buy our home. He was polite and very sincere towards resolving the issues whatever we had during search of the property. He was always one call away to deal with any of our concerns. Highly recommend",
            avatar: star2,
            name: "PRERANA CHAVAN",
            time: "3 weeks ago"
        },
        {
            id: 3,
            text: "We had a good experience with Brickfolio. All team members like Onkar, Nipun, Saswata hold very good information about the market. They are very polite and ready for resolving the issues whatever we had during search of the property. Highly recommended!",
            avatar: star3,
            name: "umesh agrawal",
            time: "4 weeks ago"
        }
    ];

    return (
        <div className="testimonials-section">
            <div className="testimonials-max-width">

                {/* Title & Google Badge Unit */}
                <div className="rating-sidebar">
                    <h2 className="testimonials-title">Testimonials</h2>

                    <div className="google-badge-box">
                        <div className="badge-main-row">
                            <span className="rating-score">4.7</span>

                        </div>

                        <div className="badge-footer-row">
                            <div className="stars-row">
                                <span className="star solid">★</span>
                                <span className="star solid">★</span>
                                <span className="star solid">★</span>
                                <span className="star solid">★</span>
                                <span className="star partial">★</span>
                            </div>

                            {/* Google Colored 'G' Icon */}
                            <img
                                src={google}
                                alt="google"
                                className="google-logo-img"
                            />
                        </div>
                    </div>
                </div>

                {/*  Scrollable Grid Content Track */}
                <div className="reviews-scroll-track">
                    {reviews.map((card) => (
                        <div key={card.id} className="testimonial-card">
                            <p className="testimonial-body-text">"{card.text}"</p>

                            <div className="reviewer-profile-row">
                                <img src={card.avatar} alt={card.name} className="reviewer-avatar-img" />

                                <div className="reviewer-meta-col">
                                    <h4 className="reviewer-fullname">{card.name}</h4>

                                    <div className="reviewer-rating-subrow">
                                        <div className="mini-stars">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <span className="post-timestamp-label">{card.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}