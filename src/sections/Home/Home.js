import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import SocialLink from '../SocialLink/SocialLink';

const Home = () => {
    return (
        <div className="px-12 bg-gray-700">
            <Navbar></Navbar>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <SocialLink></SocialLink>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;