import React from 'react'
import Navbar from '../components/universal/Navbar';
import AddCookie from '../components/cookies/AddCookie';

export default function Cookies() {
    return (
        <>
        <div className="bg-gray-100 ">
            <Navbar />
            <AddCookie />
        </div>
        </>
    );
}