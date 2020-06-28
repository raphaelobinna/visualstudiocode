import React from 'react';

import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../HOC/Auxillary'
//import Menu from '../../Menu/Menu';

const sidedrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
                <div className={attachedClasses.join(' ')}>
                 <Logo height="11%"/>
                    <nav>
                         <Navigationitems/>
                     </nav>

                 </div>
        </Aux>
    )
};

export default sidedrawer;
