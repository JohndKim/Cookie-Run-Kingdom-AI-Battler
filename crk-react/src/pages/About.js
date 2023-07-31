import React from 'react'
import Navbar from '../components/Navbar';
// import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';

export default function About() {
    return ( 
        <>
        <div className="bg-slate-600">
        {/* <h1>hi</h1> */}
            <Navbar/>      
            <AboutSection/>
        </div>
        </>
    );
}
