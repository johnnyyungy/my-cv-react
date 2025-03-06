import React, { useState, useEffect } from 'react';

const Interests = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    // Function to show the current slide
    const showSlides = (n) => {
        let newIndex = n;
        const slides = document.getElementsByClassName("mySlides");

        if (newIndex > slides.length) {
            newIndex = 1;
        }
        if (newIndex < 1) {
            newIndex = slides.length;
        }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Show the current slide
        slides[newIndex - 1].style.display = "block";

        // Update the state
        setSlideIndex(newIndex);
    };

    // Function to move to the next/previous slide
    const plusSlides = (n) => {
        showSlides(slideIndex + n);
    };

    // Function to go to a specific slide
    const currentSlide = (n) => {
        showSlides(n);
    };

    // Automatically advance slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            plusSlides(1);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [slideIndex]); // Re-run effect when slideIndex changes

    return (
        <section className="interests" id="interests">
            <div className="wrapper">
                <div>
                    <h2>Outside Interests</h2>
                    <p>Outside of work, my hobbies include traveling, cooking, fitness, and learning different languages.</p>
                    <p>For fitness, I train Olympic weightlifting and CrossFit. I practice Mixed Martial Arts, in particular Muay Thai and Brazilian Jiu-Jitsu.</p>
                    <p>I like to collect limited edition action figures, such as Transformers and Power Rangers.</p>
                    <p>I am also interested in photography and videography. I combine my interests by taking photos on my travels and making videos for my YouTube cooking channel, <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank" rel="noopener noreferrer">Hello! Taste</a>.</p>
                    <p>I also have a fitness blog that is built in WordPress: <a href="http://www.trainsmartnothard.com/" target="_blank" rel="noopener noreferrer">www.trainsmartnothard.com</a></p>
                </div>
                <div className="photo">
                    <div className="slideshow-container">
                        {/* Slide 1 */}
                        <div className="mySlides fade">
                            <div className="numbertext">1 / 3</div>
                            <img src="muay_thai.jpg" style={{ width: '100%' }} alt="Muay Thai" />
                            <div className="text">Muay Thai</div>
                        </div>

                        {/* Slide 2 */}
                        <div className="mySlides fade">
                            <div className="numbertext">2 / 3</div>
                            <img src="toys.jpg" style={{ width: '100%' }} alt="Power Rangers Collection" />
                            <div className="text">Power Rangers Collection</div>
                        </div>

                        {/* Slide 3 */}
                        <div className="mySlides fade">
                            <div className="numbertext">3 / 3</div>
                            <img src="japan.jpg" style={{ width: '100%' }} alt="Kyoto, Japan" />
                            <div className="text">Kyoto, Japan</div>
                        </div>

                        {/* Next and Previous Buttons */}
                        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>
                    <br />

                    {/* Dots/Circles */}
                    <div style={{ textAlign: 'center' }}>
                        <span className="dot" onClick={() => currentSlide(1)}></span>
                        <span className="dot" onClick={() => currentSlide(2)}></span>
                        <span className="dot" onClick={() => currentSlide(3)}></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Interests;