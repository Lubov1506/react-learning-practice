import React, { Component } from 'react';
import { PureComponent } from 'react';

const inlineStyles = {
  border: '2px solid blue',
  maxWidth: '400px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
};

class Counter extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((state, props) => ({
      count: state.count + props.step,
    }));
  };
  decrement = () => {
    this.setState((state, props) => ({
      count: state.count - props.step,
    }));
  };
  /*     shouldComponentUpdate(nextProps, nextState){
        return nextProps.step === this.props.step
    }  */
  render () {
    const { count } = this.state;
    const { step } = this.props;
    console.log('render Counter');

    return (
      <div style={inlineStyles}>
        <h1>Count: {count}</h1>
        <h1>Step: {step}</h1>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>          
          <button
            onClick={() => {
              this.setState({
                count,
              });
            }}
          >
            SET THIS VALUE
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
