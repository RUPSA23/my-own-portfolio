import React from 'react';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className="px-12">
            <Navbar></Navbar>
            <Intro></Intro>
        </div>
    );
};

export default Home;