import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CheckoutStepOne from '../client_views/checkout/checkout_step_one';
import CheckoutStepTwo from '../client_views/checkout/checkout_step_two'
import HomeClient from '../client_views/home_client';
import Indoor from '../client_views/indoor';
import Outdoor from '../client_views/outdoor';
import LoginClient from '../client_views/login_client';
import SignupClient from '../client_views/signup_client';
import HomeBusiness from '../business_views/home_business';
import LoginBusiness from '../business_views/login_business';
import SignupBusiness from '../business_views/signup_business';
import Summary from '../business_views/account/summary';
import AddProduct from '../business_views/account/add_product';
import ProductsList from '../business_views/account/products_list';
import Profile from '../business_views/account/profile';
import OrdersList from '../business_views/account/orders_list';
import ProductCards from '../client_views/cards/product_cards';
import Blog from '../client_views/Blog';
import AuthProvider from '../context/auth/auth_state';
import AlertProvider from '../context/alert/alert_state';
import PrivateRoutes from './private_routes';
import injectContext from '../store/context';


const AppRouter = () => {
    return (

        <AuthProvider>
                <AlertProvider>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={HomeClient} />
                            <Route exact path='/product_cards' component={ProductCards} />
                            <Route exact path='/indoor_products' component={Indoor} />
                            <Route exact path='/outdoor_proucts' component={Outdoor} />
                            <Route exact path='/login_client' component={LoginClient} />
                            <Route exact path='/signup_client' component={SignupClient} />
                            <Route exact path='/business' component={HomeBusiness} />
                            <Route exact path='/login_business' component={LoginBusiness} />
                            <Route exact path='/signup_business' component={SignupBusiness} />
                            <Route exact path='/checkout_step_one' component={CheckoutStepOne} />
                            <Route exact path='/checkout_step_Two' component={CheckoutStepTwo} />
                            <PrivateRoutes exact path='/blog_cards' component={Blog} />
                            <Route exact path='/summary_business' component={Summary} />
                            <Route exact path='/add_product_business' component={AddProduct} />
                            <Route exact path='/orders_list_business' component={OrdersList} />
                            <Route exact path='/products_list_business' component={ProductsList} />
                            <Route exact path='/profile_business' component={Profile} />
                        </Switch>
                    </Router>
                </AlertProvider>
        </AuthProvider>

    )
}

export default injectContext(AppRouter);