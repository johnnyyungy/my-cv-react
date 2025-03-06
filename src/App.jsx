import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Quote from './components/Quote';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Intro />
            <AboutMe />
            <Quote />
            <WorkExperience />
            <Education />
            <Interests />
            <Footer />
        </div>
    );
}

export default App;