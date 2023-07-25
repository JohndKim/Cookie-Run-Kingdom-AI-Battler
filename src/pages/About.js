import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About_Section from '../components/About_Section';

export default function About() {
    return ( 
        <>
        <div className="bg-slate-600">
        {/* <h1>hi</h1> */}
            <Navbar/>      
            <About_Section/>
        </div>
        </>
    );
}
