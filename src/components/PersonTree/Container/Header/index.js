import React from 'react';
import { PersonContext } from '../../../../contexts/Avatar';

const Header = (props) => {

    return(
        <PersonContext.Consumer>
            {(contextValue)=> {
                const {avatar} = contextValue;
            return (
        <div style={{border: '3px solid black', padding: '25px'}}>
            Header <img src={avatar}/>
        </div>
    );        
            }}
        </PersonContext.Consumer>
    )
    
}

export default Header;
