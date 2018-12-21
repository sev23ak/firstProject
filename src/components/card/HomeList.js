import React, { Component } from 'react';

import CardOne from './CardOne';
import BlockTw from './block/BlockTw';

class HomeList extends Component {
    render() {
        return (
            <div className='homeList'>
                <CardOne/>
                <BlockTw/>
                <CardOne/>
            </div>
        );

    }
}

export default HomeList;