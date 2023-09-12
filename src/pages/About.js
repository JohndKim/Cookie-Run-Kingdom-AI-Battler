import React from 'react'
import Navbar from '../components/universal/Navbar';
// import Banner from '../components/Banner';
import AboutSection from '../components/about/AboutSection';

export default function About() {
    return ( 
        <>
        <div className="">
        {/* <h1>hi</h1> */}
            <Navbar/>      
            <AboutSection/>
        </div>
        </>
    );
}
