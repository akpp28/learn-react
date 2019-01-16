import React from 'react';


const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button id="inc"
                    onClick={inc}
                    className="btn btn-primary">Inc
            </button>
            <button id="dec"
                    onClick={dec}
                    className="btn btn-primary">Dec
            </button>
            <button id="rnd"
                    onClick={rnd}
                    className="btn btn-primary">Rnd
            </button>
        </div>
    );


};

export default Counter;

