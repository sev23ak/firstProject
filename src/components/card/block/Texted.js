import React from 'react';
import api from './api';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Texted = props => {
    const transit = api.get(parseInt(props.match.params.number));
    if(!transit){
        return 'not wey';
    }
    return (
        <div className='general'>
            <img alt='image' className='generalImg textImg' src={transit.img}/>
            <img className='textTrip' src={transit.rectangleImg}/>

            <div className='tripData' ><p className='dataThisGen'>{transit.data}|<a href='#'> {transit.author}</a></p></div>
            <div className='inText'>

                <h1>{transit.contentHead}</h1>
                <p>{transit.content}</p>
                <Link to='/'>
                    <button className='tripButton'>Back</button>
                </Link>
            </div>

        </div>
    );

};
Texted.propTypes={
    match: PropTypes.object
};

export default Texted;