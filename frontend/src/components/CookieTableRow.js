export default function CoookieTableRow({ name, rarity, attack, defense, health, description }) {

  return(
    <>
        {/* ONE ROW */}
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {name}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{rarity}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{attack} {defense} {health}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{description}</td>
            <td className="whitespace-nowrap px-4 py-2">
            {/* VIEW BUTTON */}
            <a
                href="#"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
                View
            </a>
            </td>
        </tr>
    </>
  );
}