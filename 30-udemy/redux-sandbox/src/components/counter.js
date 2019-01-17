import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from '../actions'

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button
                onClick={inc}
                className="btn btn-primary">Inc
            </button>
            <button
                onClick={dec}
                className="btn btn-primary">Dec
            </button>
            <button
                onClick={rnd}
                className="btn btn-primary">Rnd
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random()*10);
            rnd(randomValue);
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

