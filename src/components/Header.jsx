import React, { useState } from 'react';

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div>
            <div className="toggle">
                <button onClick={toggleNav}>
                    <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>burger</title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="burger">
                                <g id="Layer_2" transform="translate(3.000000, 8.000000)" fill="#FFFFFF" fillRule="nonzero">
                                    <path d="M25,2 L1,2 C0.44771525,2 0,1.55228475 0,1 C0,0.44771525 0.44771525,0 1,0 L25,0 C25.5522847,0 26,0.44771525 26,1 C26,1.55228475 25.5522847,2 25,2 Z" id="Path"></path>
                                    <path d="M25,9 L1,9 C0.44771525,9 0,8.55228475 0,8 C0,7.44771525 0.44771525,7 1,7 L25,7 C25.5522847,7 26,7.44771525 26,8 C26,8.55228475 25.5522847,9 25,9 Z" id="Path"></path>
                                    <path d="M25,16 L1,16 C0.44771525,16 0,15.5522847 0,15 C0,14.4477153 0.44771525,14 1,14 L25,14 C25.5522847,14 26,14.4477153 26,15 C26,15.5522847 25.5522847,16 25,16 Z" id="Path"></path>
                                </g>
                                <g id="frame">
                                    <rect id="Rectangle" x="0" y="0" width="32" height="32"></rect>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>

            <nav className={showNav ? "showNav" : ""} id="myToggle">
                <a href="#home">Home</a>
                <a href="#aboutme">My Background</a>
                <a href="#work">Work Experience</a>
                <a href="#education">Education</a>
                <a href="#interests">Outside Interests</a>
            </nav>
        </div>
    );
};

export default Header;