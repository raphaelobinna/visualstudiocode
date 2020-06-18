import React from 'react';
import Aux from '../../../HOC/Auxillary';
import Button from '../../UI/Button/Button';

const ordersummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
    return (<li key={igkey}>
                <span style={{textTransform: 'capitalize'}}>{igkey}</span>:{props.ingredients[igkey]}
            </li>)
    });   
    return (
        <Aux>
            <h3>Your Order</h3> 
            <p>A delicious order with the following ingredients:</p>
            <ul >
                {ingredientSummary}
            </ul>
    <p><strong>Current price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchasecancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchasecontinue}>CONTINUE</Button>
        </Aux>
    )

}

export default ordersummary