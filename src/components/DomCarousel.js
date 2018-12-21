import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class DomCarousel extends Component {
    render() {
        return (

            <Carousel showArrows={true} showThumbs={false}>


                <div>
                    <img className='author' src={require('../../project/Author1.png')}/>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, animi, sed.</p>
                    <img src={require('../../project/Slide1.jpg')}/>

                </div>

                <div>
                    <img className='author' src={require('../../project/Author1.png')}/>
                    <p className='text'>Phasellus eu enim ut turpis tempus hendrerit. Pellentesque luctus massa </p>
                    <img src={require('../../project/Slide2.jpg')}/>
                </div>
                <div>
                    <img className='author' src={require('../../project/Author1.png')}/>
                    <p className='text'>Mauris pellentesque lacus id ornare euismod. Donec tincidunt purus ut </p>
                    <img src={require('../../project/Slide3.jpg')}/>
                </div>

            </Carousel>
        );

    }
}

export default DomCarousel;