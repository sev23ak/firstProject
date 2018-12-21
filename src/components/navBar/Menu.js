import React, { Component } from 'react';
import Fashion from './menu/Fashion';
import Tech from './menu/Tech';
import People from './menu/People';
import Nature from './menu/Nature';
import Trips from './menu/Trips';
import Animals from './menu/Animals';

class Menue extends Component{
    constructor(){
        super();
    }render() {
        return (
            <ul className='menu'>
                <Nature/>
                <People/>
                <Trips/>
                <Animals/>
                <Fashion/>
                <Tech/>


            </ul>
        );
    }

}
export default Menue;