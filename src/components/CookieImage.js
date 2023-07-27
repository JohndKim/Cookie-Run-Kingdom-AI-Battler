import { useState, useEffect, useRef } from 'react';

function CookieImage({ cookies, value }) {

    // console.log(cookies, value)
    // const selectedCookie = cookies.filter(cookies => cookies.value === value.value);

    // return(
    //     {data.map(({ id, title,description, img }) => (
    //         <div key={id} className="guest--item swiper-slide">
    //           <div>
    //             <img key={id} src={img} alt='mySvgImage' />
    //              <h1>{title}</h1>
    //              <h2>{description}</h2>
    //           </div>
    //         </div>
    //        ))}
    // );

    if (!value) {
        return(
        <div className = "flex justify-center">
            {/* GRAY PADDING AROUND IMG */}
            <span className="inline-block rounded-lg bg-gray-50 p-3">

                {/* IMAGE */}
                


                {/* {value?.label || 'Select a Cookie'} */}

                <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
            </span>
        </div>
        );
    } else {
        return(
            <div className = "flex justify-center">
                {/* GRAY PADDING AROUND IMG */}
                <span className="inline-block rounded-lg bg-gray-50 p-3">
    
                    {/* IMAGE */}
                    
    
    
                    {/* {value?.label || 'Select a Cookie'} */}
                    <img alt="cookie" src={value.src} style={{width: 50, height: 50}}/>
                </span>
            </div>
            );

    }
}

export default CookieImage;