import React, { useState } from 'react';

const Interests = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const plusSlides = (n) => {
        setSlideIndex(slideIndex + n);
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    const showSlides = (n) => {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) { setSlideIndex(1) }
        if (n < 1) { setSlideIndex(slides.length) }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    };

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
                        <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}>
                            <div className="numbertext">1 / 3</div>
                            <img src="muay_thai.jpg" style={{ width: '100%' }} alt="Muay Thai" />
                            <div className="text">Muay Thai</div>
                        </div>

                        <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
                            <div className="numbertext">2 / 3</div>
                            <img src="toys.jpg" style={{ width: '100%' }} alt="Power Rangers Collection" />
                            <div className="text">Power Rangers Collection</div>
                        </div>

                        <div className={`mySlides fade ${slideIndex === 3 ? 'active' : ''}`}>
                            <div className="numbertext">3 / 3</div>
                            <img src="japan.jpg" style={{ width: '100%' }} alt="Kyoto, Japan" />
                            <div className="text">Kyoto, Japan</div>
                        </div>

                        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    </div>
                    <br />

                    <div style={{ textAlign: 'center' }}>
                        <span className={`dot ${slideIndex === 1 ? 'active' : ''}`} onClick={() => currentSlide(1)}></span>
                        <span className={`dot ${slideIndex === 2 ? 'active' : ''}`} onClick={() => currentSlide(2)}></span>
                        <span className={`dot ${slideIndex === 3 ? 'active' : ''}`} onClick={() => currentSlide(3)}></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Interests;