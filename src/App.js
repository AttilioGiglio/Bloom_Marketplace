import React from 'react';
import AppRouter from './routers/app_routes';
import injectContext from './store/context';


// Agregar efecto de cambio de color a verde en navbar cuando se hace scroll
// Agregar scroll automatico hacia arriba
// Agregar iconos con animaciones

const App = () => {
    return (
        <AppRouter />
    )
}

export default injectContext(App);
