import React, { Component } from 'react';
import Navbar from './NavBar';
import DomCarousel from './DomCarousel';
import HomeList from './card/HomeList';
import Footer from './Footer';
import FooterDown from './FooterDown';
export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='app'>
                <Navbar/>
                <DomCarousel/>
                <HomeList/>
                <Footer/>
                <FooterDown/>

            </div>
        );
    }
}