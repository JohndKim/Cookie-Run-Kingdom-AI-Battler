import React from 'react'
import Navbar from '../components/universal/Navbar';
import BattleInputs from '../components/battle/BattleInputs'
import FightButton from '../components/battle/FightButton'


export default function Battler() {
    return (
        <>
        <div className="sm:mx-8 lg:mx-16 xl:mx-24 ht-screen bg-background">
            <Navbar />
            <BattleInputs/>
            <div className="flex justify-center">
                <FightButton/>
            </div>
        </div>
        </>
        
    );
}