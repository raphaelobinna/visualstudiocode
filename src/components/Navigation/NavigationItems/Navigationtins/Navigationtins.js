import React from 'react';
import classes from './Navigationtins.css'

const navigationtins = (props) => (
<li className={classes.Navigationtins}>
    <a 
    href={props.Link} 
    className={props.active ? classes.active : null}>
        {props.children}</a>
</li>
);

export default navigationtins;