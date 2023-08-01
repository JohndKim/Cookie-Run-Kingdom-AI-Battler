import strawberry from '../svg/strawberry.svg'
import gingerbrave from '../svg/gingerbrave.svg'
import muscle from '../svg/muscle.svg'
import CookieImage from './CookieImage'
import Dropdown from './Dropdown'


import { useState } from 'react';

export default function CookieList() {
    // use state for if cookie is selected or not
    const [ selection, setSelection ] = useState(null);
    // use state for entire cookie list object
    // label: Name
    // value: value given 
    // src: photo
    // selected: selection boolean
    const [ cookies, setCookies ] = useState([{
        label: 'Strawberry Cookie',
        value: 'strawberry',
        src: strawberry,
        selected: false,
    }, {
        label: 'Gingerbrave',
        value: 'gingerbrave',
        src: gingerbrave,
        selected: false,
    }, {
        label: 'Muscle Cookie',
        value: 'muscle',
        src: muscle,
        selected: false,
    },{
        label: 'Wizard Cookie',
        value: 'wizard',
        src: gingerbrave,
        selected: false,
    },{
        label: 'Beet Cookie',
        value: 'beet',
        src: gingerbrave,
        selected: false,
    },{
        label: 'Angel Cookie',
        value: 'angel',
        src: gingerbrave,
        selected: false,
    }]);


    // function to select cookie
    const handleSelect = (cookie) => {
        setSelection(cookie);
    };
    return (
        <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">        
            <CookieImage value={selection}/>

            <Dropdown cookies={cookies} value={selection} onChange={handleSelect} />
            {/* <h2 className="mt-2 font-bold">Add Cookie</h2> */}
        </div>
    );
}


    // handleCommentEdit: function(id, text) {
    //     this.setState({
    //       data: this.state.data.map(el => (el.id === id ? Object.assign({}, el, { text }) : el))
    //     });
    // }

    // setCookies

    // cookies = [{
    //     label: 'Strawberry Cookie',
    //     value: 'strawberry',
    //     src: strawberry,
    //     selected: false,
    // }, {
    //     label: 'Gingerbrave',
    //     value: 'gingerbrave',
    //     src: gingerbrave,
    //     selected: false,
    // }, {
    //     label: 'Muscle Cookie',
    //     value: 'muscle',
    //     src: gingerbrave,
    //     selected: false,
    // },{
    //     label: 'Wizard Cookie',
    //     value: 'wizard',
    //     src: gingerbrave,
    //     selected: false,
    // },{
    //     label: 'Beet Cookie',
    //     value: 'beet',
    //     src: gingerbrave,
    //     selected: false,
    // },{
    //     label: 'Angel Cookie',
    //     value: 'angel',
    //     src: gingerbrave,
    //     selected: false,
    // }];

    // const listCookies = cookies.map(cookie =>
        
    // );