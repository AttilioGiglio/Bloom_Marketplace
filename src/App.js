import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/homepage/home';


const App = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
        </>
    )
}

export default App;
