import {useState, useEffect} from "react";
import axios from "axios";
import List from "./List"

function AddCookie() {

//     const [cookies , setNewCookies] = useState(null)
//     const [formNote, setFormNote] = useState({
//       name: "",
//       description: ""
//     })

//     useEffect(() => {
//       getcookies()
//         } ,[])

//     function getcookies() {
//       axios({
//           method: "GET",
//           url:"/cookies/",
//         }).then((response)=>{
//           const data = response.data
//           setNewCookies(data)
//         }).catch((error) => {
//           if (error.response) {
//             console.log(error.response);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//             }
//         })}

//     function createNote(event) {
//         axios({
//           method: "POST",
//           url:"/cookies/",
//           data:{
//             title: formNote.title,
//             content: formNote.content
//            }
//         })
//         .then((response) => {
//           getcookies()
//         })

//         setFormNote(({
//           title: "",
//           content: ""}))

//         event.preventDefault()
//     }

//     function DeleteNote(id) {
//         axios({
//           method: "DELETE",
//           url:`/cookies/${id}/`,
//         })
//         .then((response) => {
//           getcookies()
//         })
//     }

//     function handleChange(event) { 
//         const {value, name} = event.target
//         setFormNote(prevNote => ({
//             ...prevNote, [name]: value})
//         )}


//   return (

//      <div className=''>

//         <form className="create-note">
//           <input onChange={handleChange} text={formNote.title} name="title" placeholder="Title" value={formNote.title} />
//           <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={formNote.content} />
//           <button onClick={createNote}>Create Post</button>
//         </form>

//         { cookies && cookies.map(note => <List
//         key={note.id}
//         id={note.id}
//         title={note.title}
//         content={note.content} 
//         deletion ={DeleteNote}
//         />
//         )}

//     </div>

//   );
}

export default AddCookie;