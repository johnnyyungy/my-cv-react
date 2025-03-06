import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="socialmedia">
                <a href="http://www.instagram.com/johnnyyungy" target="_blank" rel="noopener noreferrer"><img src="instagram.png" width="35" height="35" alt="Instagram" /></a>
                <a href="https://twitter.com/johnnyyungy" target="_blank" rel="noopener noreferrer"><img src="x.png" width="35" height="35" alt="X" /></a>
                <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank" rel="noopener noreferrer"><img src="youtube.png" width="35" height="35" alt="YouTube" /></a>
                <a href="https://www.facebook.com/johnnyyungy" target="_blank" rel="noopener noreferrer"><img src="facebook.png" width="35" height="35" alt="Facebook" /></a>
                <a href="https://linkedin.com/in/john-yung-53930945" target="_blank" rel="noopener noreferrer"><img src="linkedin.png" width="35" height="35" alt="LinkedIn" /></a>
            </div>
            <div className="copyright">All work © John Yung 2019 - 2025 - All Rights Reserved</div>
        </footer>
    );
};

export default Footer;