import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalog from './components/catalog';
import App from './App.js';
import Instagram from './components/instagram';
import Shoppingcart from './components/shoppingcart';



const Main = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/instagram" component={Instagram} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/shoppingcart" component={Shoppingcart} />

    </Switch>
)

export default Main;