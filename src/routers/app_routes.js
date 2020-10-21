import React, {useEffect, useContext} from 'react';
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
import AlertProvider from '../context/alert/alert_state';
import PrivateRoutesClient from './private_client_routes';
import injectContext, { Context } from '../store/context';
import PublicRoutes from './public_routes';
import PrivateRoutesBusiness from './private_business_routes';



const AppRouter = () => {
    
    return (

                <AlertProvider>
                    <Router>
                        <Switch>
                            <PublicRoutes exact path='/' component={HomeClient} />
                            <PublicRoutes exact path='/product_cards' component={ProductCards} />
                            <PublicRoutes exact path='/indoor_products' component={Indoor} />
                            <PublicRoutes exact path='/outdoor_proucts' component={Outdoor} />
                            <PublicRoutes exact path='/login_client' component={LoginClient} />
                            <PublicRoutes exact path='/signup_client' component={SignupClient} />
                            <PublicRoutes exact path='/business' component={HomeBusiness} />
                            <PublicRoutes exact path='/login_business' component={LoginBusiness} />
                            <PublicRoutes exact path='/signup_business' component={SignupBusiness} />
                            <PrivateRoutesClient exact path='/checkout_step_one' component={CheckoutStepOne} />
                            <PrivateRoutesClient exact path='/checkout_step_Two' component={CheckoutStepTwo} />
                            <PrivateRoutesClient exact path='/blog_cards' component={Blog} />
                            <PrivateRoutesBusiness exact path='/summary_business' component={Summary} />
                            <PrivateRoutesBusiness exact path='/add_product_business' component={AddProduct} />
                            <PrivateRoutesBusiness exact path='/orders_list_business' component={OrdersList} />
                            <PrivateRoutesBusiness exact path='/products_list_business' component={ProductsList} />
                            <PrivateRoutesBusiness exact path='/profile_business' component={Profile} />
                        </Switch>
                    </Router>
                </AlertProvider>

    )
}

export default injectContext(AppRouter);