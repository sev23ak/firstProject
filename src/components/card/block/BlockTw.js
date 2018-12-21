import React from 'react';

import Texted from './Texted';
import { Switch, Route } from 'react-router-dom';
import Block from './Block';


const BlockTw =()=>(
    <section>
        <Switch>
            <Route exact path='/' component={Block}/>
            <Route path='/image:number' component={Texted}/>
        </Switch>
    </section>
);


export default BlockTw;