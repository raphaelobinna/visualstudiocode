import React from 'react';
import Aux from '../../HOC/Auxillary'
 import classes from './layout.css'
 import Toolbar from '../Navigation/Toolbar/Toolbar';
// import * as stuff from './layout.css'/

const layout = (props) => {
    return(
    <Aux>
    <Toolbar/>
    <main 
    className={classes.Content}
    
    >
        {props.children}
    </main>
    </Aux>
    )};

 export default layout;