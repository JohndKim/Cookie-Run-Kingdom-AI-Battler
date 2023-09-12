import axios from "axios";
import {useState, useMemo} from 'react'
//For testing first the link part

const fetchAPI = (cookies) => {
  axios({
    method: "GET",
    url:'battle_system',
    params:{
      q : cookies
    }
  }).then(response => console.log(response.data))
  .catch(error => console.log(error))
}

//For testing if battler can be connected
export default function FightButton(){
  const [cookies , setCookies] = useState(null)
  
  function getCookies(){
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

    useMemo(() => {
      getCookies()}, []);

    return(
    <div onClick={() => fetchAPI(cookies)}>
        <div className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
          <span
            className="absolute inset-0 border border-accent group-active:border-accent"
          ></span>
          <span
            className="block border border-accent bg-accent px-12 py-3 transition-transform active:border-accent active:bg-accent group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            Battle
          </span>
        </div>
    </div>
    );
}