import React from 'react';
import BurgerLogo from '../../assets/images/28.1 burger-logo.png';
import classes from './Logo.css';


const logo = () => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="MyBurger" />
    </div>
);

export default logo;