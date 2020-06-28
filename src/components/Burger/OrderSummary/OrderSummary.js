import React, { Component } from 'react';
import Aux from '../../../HOC/Auxillary';
import Button from '../../UI/Button/Button';

class Ordersummary extends Component {
    componentDidUpdate () {
        console.log('[Ordersummary], DidUpdate')
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igkey => {
    return (<li key={igkey}>
                <span style={{textTransform: 'capitalize'}}>{igkey}</span>:{this.props.ingredients[igkey]}
            </li>)
    });   
        return(
            <Aux>
            <h3>Your Order</h3> 
            <p>A delicious order with the following ingredients:</p>
            <ul >
                {ingredientSummary}
            </ul>
    <p><strong>Current price : {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchasecancel}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchasecontinue}>CONTINUE</Button>
        </Aux>
    )

        
    }

}

export default Ordersummary