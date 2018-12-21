import React, { Component } from 'react';
import About from './block/About';
import Contact from './block/Contact';
import Cooperation from './block/Cooperation';

class Block extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <ul className='block'>
                <About/>
                <Cooperation/>
                <Contact/>


            </ul>


        );
    }
}
export default Block;