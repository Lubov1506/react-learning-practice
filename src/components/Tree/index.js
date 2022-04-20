import React, { Component } from 'react';
import Parent from './Parent';

class Tree extends Component {
    render() {
        return (
            <div style={{border: '3px solid black', padding: '25px'}}>
                Tree
                <Parent/>
            </div>
        );
    }
}

export default Tree;
