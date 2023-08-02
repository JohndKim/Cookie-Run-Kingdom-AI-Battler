export default function CoookieTableRow({ name, rarity, attack, defense, health, description }) {

  return(
    <>
        {/* ONE ROW */}
        <tr className="">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-1/6">
            {name}
            </td>
            <td className="px-4 py-2 text-gray-700 w-1/6">{rarity}</td>
            <td className="px-4 py-2 text-gray-700 w-1/6">{attack} {defense} {health}</td>
            <td className="px-4 py-2 text-gray-700 w-1/2">{description}</td>
            {/* <td className="whitespace-nowrap px-4 py-2"> */}
            {/* VIEW BUTTON */}
            {/* <a
                href="#"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
                View
            </a> */}
            {/* </td> */}
        </tr>
    </>
  );
}