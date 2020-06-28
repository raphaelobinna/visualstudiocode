import React from 'react';
import Logo from '../../Logo/Logo';
import Menu from '../SideDrawer/Menu/Menu';
import classes from './Toolbar.css';
import Navigationitems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Menu clicked={props.simi}/>
        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <Navigationitems/>
        </nav>
    </header>
);

export default toolbar;