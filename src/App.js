import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './app.scss'
import Checkout from './client_views/checkout';
import Eventos from './client_views/eventos';
import Home from './client_views/home';
import Indoor from './client_views/indoor';
import Noticias from './client_views/noticias';
import Outdoor from './client_views/outdoor';
import Tips from './client_views/tips';
import Todos from './client_views/todos';


const App = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/todos' component={Todos} />
                <Route exact path='/indoor' component={Indoor} />
                <Route exact path='/outdoor' component={Outdoor} />
                <Route exact path='/tips' component={Tips} />
                <Route exact path='/noticias' component={Noticias} />
                <Route exact path='/eventos' component={Eventos} />
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </Router>
        </>
    )
}

export default App;
