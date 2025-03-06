import React, { useState, useEffect } from "react";

const Interests = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const slides = [
        { src: "muay_thai.jpg", text: "Muay Thai" },
        { src: "toys.jpg", text: "Power Rangers Collection" },
        { src: "japan.jpg", text: "Kyoto, Japan" },
    ];

    // Automatically advance slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <section className="interests" id="interests">
            <div className="wrapper">
                <div>
                    <h2>Outside Interests</h2>
                    <p>Outside of work, my hobbies include traveling, cooking, fitness, and learning different languages.</p>
                </div>
                <div className="photo">
                    <div className="slideshow-container">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="mySlides fade"
                                style={{ display: slideIndex === index ? "block" : "none" }}
                            >
                                <div className="numbertext">{index + 1} / {slides.length}</div>
                                <img src={slide.src} style={{ width: "100%" }} alt={slide.text} />
                                <div className="text">{slide.text}</div>
                            </div>
                        ))}

                        {/* Next and Previous Buttons */}
                        <a className="prev" onClick={() => setSlideIndex((slideIndex - 1 + slides.length) % slides.length)}>&#10094;</a>
                        <a className="next" onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}>&#10095;</a>
                    </div>
                    <br />

                    {/* Dots */}
                    <div style={{ textAlign: "center" }}>
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${slideIndex === index ? "active" : ""}`}
                                onClick={() => setSlideIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Interests;
