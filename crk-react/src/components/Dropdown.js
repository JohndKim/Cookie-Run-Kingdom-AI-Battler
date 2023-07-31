import { useState, useEffect, useRef } from 'react';

function Dropdown({ cookies, value, onChange}) {
    // currently dropdown is closed
    const [ isOpen, setIsOpen ] = useState(false); 
    const divEl = useRef();

    // checks if click outside dropdown --> if outside, close dropdown
    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {

                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);


    // when clicked, open or close []
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    // when cookie selected --> 1. close dropdown; 2. select cookie
    const handleCookieClick = (cookie) => {
        setIsOpen(false);
        onChange(cookie);
        
    }


    // show list of all cookies

    const renderedCookies = cookies.map((cookie) => {
        // if a cookie is selected
        if (value && cookie.value == value.value) {
            return (
                // when clicked, close dropdown and select cookie
                    <div className="bg-gray-400 rounded cursor-pointer p-1" onClick={() => handleCookieClick(cookie)} key={cookie.value}>{cookie.label}</div>
            );
        }

        return (
            // when clicked, close dropdown and select cookie
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleCookieClick(cookie)} key={cookie.value}>{cookie.label}
            </div>
        );
    });

    // update selected cookie
    // let content = "Select a Cookie";
    // if (selection) {
    //     content = selection.label;
    // }

    console.log(value);

    // return everything from before
    return (
        <>
        {/* <AddPicture cookies={cookies} value={value}/> */}
        <div ref={divEl} className="w-48">
        
            {/*hover fix needed because it only does the text and not the full box, wip */}
            <div className="px-4 py-2 text-sm text-gray-600 font-medium" onClick={handleClick}>{value?.label || 'Select a Cookie'}</div>
            {/* if open, then show cookie list */}
            {isOpen && <div className="absolute rounded-lg p-3 text-sm text-gray-500 bg-gray-50 hover:text-gray-700">{renderedCookies}</div>}
        </div>
        {/* <h2 className="mt-2 font-bold">{value?.label || 'Cookie'}</h2> */}
        </>
    );
}

export default Dropdown;