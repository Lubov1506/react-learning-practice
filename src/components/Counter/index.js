import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    increment =() => {
        this.setState((state, props)=>({
            counter: state.counter + props.step
        }))
    }
    decrement =() => {
        this.setState((state, props)=>({
            counter: state.counter - props.step
        }))
    }
    render() {
        const {counter} = this.state;
        const inlineStyles = {
            border: '2px solid black',
            maxWidth: '400px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 auto'
        }
        return (
            <div style={inlineStyles}>
            <h1>Count: {counter}</h1>
            <div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>                
            </div>

            </div>
        );
    }
}

export default Counter;
