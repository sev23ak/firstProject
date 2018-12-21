import React, { Component } from 'react';

class General extends Component {
    render() {
        return (
            <div className='general'>
                <img className='generalImg' src={require('../../../../project/Layer 11.png')}/>
                <span className='xary'>Trips</span>
                <div  className='generalAbout'>
                    <p>Lorem ipsum dolor sit.</p>
                    <p className='generalAbouturish'>
                        Lorem ipsum dolor sit amet, itaque labore maxime necessitatibus, saepe tempora voluptates. Praesentium, tempora?
                    </p>
                </div>

                <div className='generalData' ><p className='dataThisGen'>11 September 2018 |<a href='#'> John Doe</a></p></div>

            </div>
        );

    }
}

export default General;