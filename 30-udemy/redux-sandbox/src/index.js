import React from 'react';
import ReactDom from 'react-dom';

import {bindActionCreators, createStore} from 'redux';
import reducer from "./reducer";
import * as actions from "./actions";
import Counter from "./counter";


export const store = createStore(reducer);
const {dispatch} = store;
/*
const bindActionCreators = (creator, dispatch) => (...args) => dispatch(creator(...args));

const incDispatch = () => bindActionCreators(inc, dispatch);
const decDispatch = () => bindActionCreators(dec, dispatch);
const rndDispatch = () => bindActionCreators(rnd, dispatch)
*/

/*
const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
    incDispatch: inc,
    decDispatch: dec,
    rndDispatch: rnd,
}, dispatch)
*/

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const update = () => {
    // document.getElementById('counter').innerHTML = store.getState();
    ReactDom.render(
        <Counter
            counter={store.getState()}
            inc={inc}
            dec={dec}
            rnd={()=>{
                const payload = Math.floor(Math.random() * 10);
                rnd(payload);
            }}
        />,
        document.getElementById('root'));

};

update(); // draw component
store.subscribe(update);

