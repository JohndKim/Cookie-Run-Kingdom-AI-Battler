import React from 'react'
import Navbar from '../components/Navbar';
import AddCookie from '../components/AddCookie';

export default function Test() {
    return (
        <>
        <div className="bg-gray-100">
            <Navbar />
            <div className="flex justify-center">
            </div>
            <AddCookie />
        </div>
        </>
    );
}