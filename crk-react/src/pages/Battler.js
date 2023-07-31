import React from 'react'
import Navbar from '../components/Navbar';
import BattleInputs from '../components/BattleInputs'
import FightButton from '../components/FightButton'


export default function Battler() {
    return (
        <>
        <div className="bg-gray-100">
            <Navbar />
            <BattleInputs/>
            <div className="flex justify-center">
                <FightButton/>
            </div>
        </div>
        </>
        
    );
}