import React, {Component} from "react";
import SearchBar from "./Functional Components/SearchBar";
import Product from './Product';
import Title from "./Functional Components/Title";
import { ProductConsumer } from "../context";



export default class ProductList extends Component {


    render(){
        
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="products" />
                        
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                   return <SearchBar value={value} />
                                }}
                            </ProductConsumer>
                                
                        
                            <ProductConsumer>
                                {(productInfo)=>{
                                
                                    return productInfo.products.map(product =>{
                                        return <Product key={product.id} product={product} /> 
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}