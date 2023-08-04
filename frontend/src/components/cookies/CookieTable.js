

export default function CookieTable({ cookies, value, onChange}) {


    //   return (
    //       <div className="note">
    //         <h1 >  Title: {props.title} </h1>
    //         <p > Content: {props.content}</p>
    //         <button onClick={handleClick}>Delete</button>
    //       </div>
    //   )
    // }

  return(
    <>
    <div className="overflow-x-auto">
        {/* ENTIRE TABLE */}
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            {/* TABLE HEAD */}
            <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Rarity
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Stats (ATK, DEF, HP)
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Description
                    </th>
                    <th className="px-4 py-2"></th>
                </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="divide-y divide-gray-200">
                {/* FIRST ROW */}
                {/* <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {cookies[0].name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{cookies[0].rarity}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{cookies[0].attack} {cookies[0].defense} {cookies[0].health}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{cookies[0].description}</td>
                    <td className="whitespace-nowrap px-4 py-2">
                    <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                        View
                    </a>
                    </td>
                </tr> */}
                {/* SECOND ROW */}
                <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Jane Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                    <td className="whitespace-nowrap px-4 py-2">
                    <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                        View
                    </a>
                    </td>
                </tr>
                {/* THIRD ROW */}
                <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Gary Barlow
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
                    <td className="whitespace-nowrap px-4 py-2">
                    <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                        View
                    </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</>
  );
}