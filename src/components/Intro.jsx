import React from 'react';

const Intro = () => {
    return (
        <section className="intro" id="home">
            <div className="wrapper">
                <aside>
                    <h1>Hi, I'm John, <br />a UI/UX Analyst.</h1>
                    <div className="intro-social">
                        <a href="http://www.instagram.com/johnnyyungy" target="_blank" rel="noopener noreferrer">Instagram</a> /
                        <a href="https://twitter.com/johnnyyungy" target="_blank" rel="noopener noreferrer">X</a> /
                        <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank" rel="noopener noreferrer">Youtube</a> /
                        <a href="https://www.facebook.com/johnnyyungy" target="_blank" rel="noopener noreferrer">Facebook</a> /
                        <a href="https://linkedin.com/in/john-yung-53930945" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </aside>
                <div className="photo">
                    <img src="me.jpg" alt="John Yung" />
                </div>
            </div>
        </section>
    );
};

export default Intro;