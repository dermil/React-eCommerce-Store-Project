import React, {Component} from "react";
import Title from "../Functional Components/Title";
import CartColumns from './CartColumns'
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from '../../context';
import CartList from "./CartList";
import CartTotals from './CartTotals.js';
import { ChildLink } from "../Functional Components/ChildLocationHistory";

export default class Cart extends Component {
    
    render(){
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value;
                        if(cart.length > 0) {
                            return (
                            <React.Fragment>
                                <Title name='your' title='cart' />
                                <CartColumns />
                                <CartList value = {value}></CartList>
                                <CartTotals value={value} navigate={<ChildLink navigate />} />
                            </React.Fragment>
                            )
                        } else { 
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}

