import CookieSelect from './CookieSelect'
// import Dropdown from './Dropdown'
// import CookiesList from './CookiesList'
import { useState, useMemo } from 'react';
import axios from 'axios';

function BattleInputs() {
    // console.log('in battleinputs')
    const [cookies , setCookies] = useState(null)
    let team1 = 1;
    let team2 = 2;
    // getCookies()

    // bro this thing doesnt run right away, it runs somehow one iteration late which means that the cookies are null for the first render????? which made stuff annoying
    // hopefully this change works with useMemo
    useMemo(() => {
        console.log("use effect!")
        getCookies()
    } ,[]);
    

    console.log(cookies)
    
    // get cookies info from database
    function getCookies() {
    axios({
        method: "GET",
        url:"cookies_db/",
        // '/api/cookies/?format=json'
        // 
        }).then((response)=>{ // success
            const data = response.data
            setCookies(data)
            // console.log(response.data)
            // console.log(cookies)

        }).catch((error) => { // failure
        if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}

    return (
        <section className="">
        {/* entire 5, 5 team layout*/}
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
            >

            {/* FIRST TEAM LAYOUT */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <CookieSelect cookies={cookies} teamNumber = {team1}/>
                    <CookieSelect cookies={cookies} teamNumber = {team1}/>
                    <CookieSelect cookies={cookies} teamNumber = {team1}/>
                    <CookieSelect cookies={cookies} teamNumber = {team1}/>
                    <CookieSelect cookies={cookies} teamNumber = {team1}/>



                </div>

            {/* SECOND TEAM LAYOUT */}

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <CookieSelect cookies={cookies} teamNumber = {team2}/>
                    <CookieSelect cookies={cookies} teamNumber = {team2}/>
                    <CookieSelect cookies={cookies} teamNumber = {team2}/>
                    <CookieSelect cookies={cookies} teamNumber = {team2}/>
                    <CookieSelect cookies={cookies} teamNumber = {team2}/>
                </div>
            </div>
        </div>
        </section>
    );
}

export default BattleInputs;