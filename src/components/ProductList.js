import React, {Component} from "react";
import Product from './Product';
import Title from "./Functional Components/Title";
import { storeProducts } from "../data";

export default class ProductList extends Component {
    constructor(props){
        super(props)
        this.state={
            products: storeProducts
        };
    }

    

    render(){
        console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="products" />
                        
                        <div className="row">
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}