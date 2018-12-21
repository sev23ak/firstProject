import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search';
import Block from './navBar/Block';
import Menu from './navBar/Menu';
class NavBar extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='navBar'>
                <Logo/>
                <Search/>
                <Block/>
                <Menu/>

            </div>
        );
    }
}
export default NavBar;