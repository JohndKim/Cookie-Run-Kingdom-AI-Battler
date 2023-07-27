import Dropdown from './Dropdown.js';
import strawberry from '../svg/strawberry.svg'
import gingerbrave from '../svg/gingerbrave.svg'
import CookieImage from './CookieImage.js'


import { useState } from 'react';

export default function CookieList() {
    // use state for if cookie is selected or not
    const [ selection, setSelection ] = useState(null);

    // function to select cookie
    const handleSelect = (cookie) => {
        setSelection(cookie);
    };

    const cookies = [{
        label: 'Strawberry Cookie',
        value: 'strawberry',
        src: strawberry,
    }, {
        label: 'Gingerbrave',
        value: 'gingerbrave',
        src: gingerbrave,
    }, {
        label: 'Muscle Cookie',
        value: 'muscle',
        src: gingerbrave,
    },{
        label: 'Wizard Cookie',
        value: 'wizard',
        src: gingerbrave,
    },{
        label: 'Beet Cookie',
        value: 'beet',
        src: gingerbrave,
    },{
        label: 'Angel Cookie',
        value: 'angel',
        src: gingerbrave,
    },];

    return (
        <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">        
            <CookieImage cookies={cookies} value={selection}/>

             <Dropdown cookies={cookies} value={selection} onChange={handleSelect} />
            {/* <h2 className="mt-2 font-bold">Add Cookie</h2> */}
        </div>
    );
}