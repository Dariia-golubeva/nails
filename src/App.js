import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './Header';
import Login from './Login';
import Categories from './Categories';
import Product from './Products';
import Contacts from './Contacts';
import Cart from './Cart';
import Checkout from './Checkout';
import Footer from "./Footer";
import Products from "./Products";
import Item from "./Item";
import { store, persistor } from './containers/store';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/Products" element={<Products />} />
                        <Route path="/Item" element={<Item />} />
                    </Routes>
                    <Footer />
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
