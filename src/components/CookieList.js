import Dropdown from './Dropdown.js';
import { useState } from 'react';

export default function CookieList() {
    // use state for if cookie is selected or not
    const [ selection, setSelection ] = useState(null);

    // function to select cookie
    const handleSelect = (cookie) => {
        setSelection(cookie);
    };

    const cookies = [
        { label: 'Strawberry Cookie', value: 'strawberry' },
        { label: 'Gingerbrave', value: 'gingerbrave' },
        { label: 'Muscle Cookie', value: 'muscle' },
        { label: 'Wizard Cookie', value: 'wizard' },
        { label: 'Beet Cookie', value: 'beet' },
        { label: 'Angel Cookie', value: 'angel' },
    ];

    return <Dropdown cookies={cookies} value={selection} onChange={handleSelect} />;
}