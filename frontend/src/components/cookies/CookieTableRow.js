export default function CoookieTableRow({ key, id, name, rarity, attack, defense, health, description, deletion }) {
  function handleClick(){
    deletion(id)
    // props.deletion(props.id)
  }

  return(
    <>
        {/* ONE ROW */}
        <tr className="">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-1/6">
            {name}
            </td>
            <td className="px-4 py-2 text-gray-700 w-1/6">{rarity}</td>
            <td className="px-4 py-2 text-gray-700 w-1/18">{attack}</td>
            <td className="px-4 py-2 text-gray-700 w-1/18">{defense}</td>
            <td className="px-4 py-2 text-gray-700 w-1/18">{health}</td>
            <td className="px-4 py-2 text-gray-700 w-1/2">{description}</td>
            <td><button onClick={handleClick} className="
            inline-block rounded px-4 py-2 text-xs font-medium text-black hover:bg-primary/10 font-dmsans mx-4 border border-primary ">Delete</button></td>
            {/* <td className="whitespace-nowrap px-4 py-2"> */}
            {/* VIEW BUTTON */}
            {/* <a
                href="#"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
                View
            </a>
            </td> */}
        </tr>
    </>
  );
}

// function List(props){
//   function handleClick(){
// props.deletion(props.id)
// }
// return (
//     <div className="note">
//       <h1 >  Title: {props.title} </h1>
//       <p > Content: {props.content}</p>
//       <button onClick={handleClick}>Delete</button>
//     </div>
// )
// }