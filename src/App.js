
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/Cart';

class App extends Component {
    render(){
        return (
            <React.Fragment>
               <Navbar />
               <Routes >
                <Route path='/' element={<ProductList />}></Route>
                <Route path='/details' element={<Details />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='*' element={<Default />}></Route>
               </Routes>
            </React.Fragment>
           );
    }
}

export default App;
