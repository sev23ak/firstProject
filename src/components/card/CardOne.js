import React, { Component } from 'react';

class CardOne extends Component {
    render() {
        return (
            <div className='cardOne'>
                <div className='kent'>
                    <img className='cardImg' src={require('../../../project/Layer 3.png')}/>
                    <span className='typeOne'>Trips</span>
                    <p className='aboutThis'>Vestibulum ac tincidunt quam. Etiam tempor cursus lorem, ut ornare est.</p>
                    <p className='dataThis'>12 October 2018 | <a href='#'>John Doe</a></p>

                </div>
                <div className='zuyg'>
                    <img className='cardImg' src={require('../../../project/Layer4.png')}/>
                    <span className='typeOne'>Trips</span>
                    <p className='aboutThis'>Vestibulum ac tincidunt quam. Etiam tempor cursus lorem, ut ornare est.</p>
                    <p className='dataThis'>12 October 2018 | <a href='#'>John Doe</a></p>

                </div>
            </div>


        );

    }
}

export default CardOne;