import React, {Component} from 'react';
import Aux from '../Auxillary'
 import classes from './layout.css'
 import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import Menu from '../Menu/Menu';
 import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
// import * as stuff from './layout.css'/

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }
     menuSideHandler = () => {
         this.setState( (prevState) => { return {showSideDrawer: !prevState.showSideDrawer}
     })
     }
    render () {
        return (
            <Aux>
            <Toolbar simi={this.menuSideHandler}/>
            <SideDrawer open={this.state.showSideDrawer}  closed={this.sideDrawerClosedHandler}/>
            <main 
            className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
            
        )
    }
} ;
   

 export default Layout;