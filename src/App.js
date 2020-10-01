import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './client_views/checkout';
import HomeClient from './client_views/home_client';
import Indoor from './client_views/indoor';
import Noticias from './client_views/noticias';
import Outdoor from './client_views/outdoor';
import ListaCards from './client_views/cards/lista_cards';
import LoginClient from './client_views/login_client';
import SignupClient from './client_views/signup_client';

// Agregar efecto de cambio de color a verde en navbar cuando se hace scroll
// Agregar scroll automatico hacia arriba
// Agregar iconos con animaciones

const App = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path='/' component={HomeClient} />
                <Route exact path='/todos' component={ListaCards} />
                <Route exact path='/indoor' component={Indoor} />
                <Route exact path='/outdoor' component={Outdoor} />
                <Route exact path='/noticias' component={Noticias} />
                <Route exact path='/checkout' component={Checkout} />
                <Route exact path='/login_client' component={LoginClient} />
                <Route exact path='/signup_client' component={SignupClient} />
            </Switch>
        </Router>
        </>
    )
}

export default App;
