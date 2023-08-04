import {useState, useEffect} from "react";
import CookieTable from "./CookieTable";
import CookieTableRow from "./CookieTableRow";
import axios from "axios";

// should be like cookie info
function AddCookie() {
    const [cookies , setCookies] = useState(null)
    const [formCookie, setFormCookie] = useState({ // form cookie data
            name: '',
            rarity: '',
            attack: 0,
            defense: 0,
            health: 0,
            description: "",
          })

    // so getCookies runs right after render is displayed
    useEffect(() => {
    getCookies()
        } ,[])

    // get cookies info from database
    function getCookies() {
    axios({
        method: "GET",
        url:"/api/cookies/?format=json",
        // '/api/cookies/?format=json'
        }).then((response)=>{ // success
            const data = response.data
            setCookies(data)

        }).catch((error) => { // failure
        if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}

    // send new cookies info to database
    function createCookie(event) {
        axios({
            method: "POST",
            url:"/api/cookies",
            data:{
                name: formCookie.name,
                rarity: formCookie.rarity,
                attack: formCookie.attack,
                defense: formCookie.defense,
                health: formCookie.health,
                description: formCookie.description,
            }
        })

        .then((response) => { // success
            console.log("cookie added!")
            console.log(response)
            getCookies()

        }).catch((error) => { // failure
            if (error.response) {
                console.log(error.response);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
        }})



        console.log("mandatory response;;")
        console.log(event)
    
        // reset form input
        setFormCookie(({
            name: '',
            rarity: '',
            attack: 0,
            defense: 0,
            health: 0,
            description: "",}))
    
        // prevents page reload
        event.preventDefault()
    }

    // delete cookie based on id
    function deleteCookie(id) {
        axios({
          method: "DELETE",
          url:`/api/cookies/${id}/`,
        })
        .then((response) => {
          getCookies()
        });
    }

    function handleChange(event) { 
        const {value, name} = event.target
        setFormCookie(prevCookie => ({
            ...prevCookie, [name]: value})
    )}


    // console.log(cookies)

    return(
        <div>
            <div className='h-screen bg-background pt-6'>
                {/* ADD COOKIE FORM */}
                <form className="create-cookie">
                    {/* name */}
                    <input onChange={handleChange} text={formCookie.name} name="name" placeholder="Name" value={formCookie.name} />
                    {/* rarity */}
                    <input onChange={handleChange} text={formCookie.rarity} name="rarity" placeholder="Rarity" value={formCookie.rarity} />
                    {/* attack */}
                    <input onChange={handleChange} text={formCookie.attack} name="attack" placeholder="Attack" value={formCookie.attack} />
                    {/* defense */}
                    <input onChange={handleChange} text={formCookie.defense} name="defense" placeholder="Defense" value={formCookie.defense} />
                    {/* health */}
                    <input onChange={handleChange} text={formCookie.health} name="health" placeholder="Health" value={formCookie.health} />
                    {/* description */}
                    <textarea onChange={handleChange} name="description" placeholder="Description" value={formCookie.content} />
                    {/* creates new cookie and adds to databse */}
                    <button onClick={createCookie}>Create Cookie</button>
                </form>

                {/* TABLE */}
                <div className="mx-16 bg-primary/10 h-full border-2 border-primary/40 rounded">
                {/* ENTIRE TABLE */}
                    <table className="table-fixed min-w-full max-w-full divide-y-2 divide-primary text-sm">
                        {/* TABLE HEAD */}
                        <thead className="ltr:text-left rtl:text-right w-screen">
                            <tr className="text-black">
                                <th className="whitespace-nowrap px-4 py-2 font-medium ">
                                Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">
                                Rarity
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">
                                Stats (ATK, DEF, HP)
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium">
                                Description
                                </th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>

                        {/* TABLE BODY */}
                        <tbody className="divide-y divide-gray-200">

                            <CookieTableRow 
                            key={0}
                            id={0}
                            name={"booo"}
                            rarity={"common"}
                            attack={50}
                            defense={30}
                            health={20}
                            description={"booooooooooooooooooooooooooooooo booooooooooooooooooooooooooooooo booooooooooooooooooooooooooooooo booooooooooooooooooooooooooooooo booooooooooooooooooooooooooooooo booooooooooooooooooooooooooooooo booooooooooooooooooooooooooooooo booooooooooooooooooooooooooooooo booooooooooooooooooooooooooooooo oooooooooooooo oooooooooooooo oooooooooooooo oooooooooooooo oooooooooooooo ooooooo ooooooo ooooooo ooooooo ooooooo ooooooo ooooooo ooooooo ooooooo ooooooo ooooooo ooooooo "}
                            />

                            {/* ROWS OF COOKIE */}
                            { cookies && cookies.map(cookie => <CookieTableRow
                            // key={cookie.id}
                            // id={cookie.id}
                            key={cookie.id}
                            id={cookie.id}
                            name={cookie.name}
                            rarity={cookie.rarity}
                            attack={cookie.attack}
                            defense={cookie.defense}
                            health={cookie.health}
                            description={cookie.description} 
                            deletion ={deleteCookie}
                            />)}
                        </tbody>
                    </table>
                </div>
        </div>
      </div>
    );

    // // let cookies = [{
    // //         name: 'Berry Cookie',
    // //         rarity: 'rare',
    // //         attack: 0,
    // //         defense: 0,
    // //         health: 0,
    // //         description: "N/A",
    // //     }, {
    // //         name: 'Angel Cookie',
    // //         rarity: 'common',
    // //         attack: 0,
    // //         defense: 0,
    // //         health: 0,
    // //         description: "N/A",
    // //     }];

    // // Make a request for a user with a given ID
    // axios.get('/api/cookies/?format=json')
    // .then(function (response) {
    //     // handle success
    //     console.log(response.data);
    //     console.log(response.data[0])
    //     console.log(response.data[0]['name'])
    //     console.log(response.data[0].name)

    //     let c1 = response.data[0]

    //     cookies[0].name = c1.name
    //     console.log(cookies[0].name)
    //     console.log(c1.name)
    //     cookies[0].rarity = c1.rarity
    //     cookies[0].attack = c1.attack
    //     cookies[0].defense = c1.defense
    //     cookies[0].health = c1.health
    //     cookies[0].description = c1.description


    //     // cookies[0].name, cookies[0].rarity, cookies[0].attack, cookies[0].defense, cookies[0].health, cookies[0].description = c1.name, c1.rarity, c1.attack, c1.defense, c1.health, c1.description

    //     console.log(cookies)
    //     console.log(c1)
        


    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })
    // .finally(function () {
    //     // always executed
    // });
}

export default AddCookie;