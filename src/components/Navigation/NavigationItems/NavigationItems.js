import React from 'react';
import classes from './NavigationItems.css';
import Navigationtins from './Navigationtins/Navigationtins';

const navigationitems = () => (
    <ul className={classes.NavigationItems}>
        <Navigationtins Link="/" active >Burger Builder</Navigationtins>
        <Navigationtins Link="/">Checkout</Navigationtins>
       
    </ul>
);

export default navigationitems