import React from 'react'
import HomeClient from '../client_views/home_client';
import Indoor from '../client_views/indoor';
import Outdoor from '../client_views/outdoor';
import LoginClient from '../client_views/login_client';
import SignupClient from '../client_views/signup_client';
import HomeBusiness from '../business_views/home_business';
import LoginBusiness from '../business_views/login_business';
import SignupBusiness from '../business_views/signup_business';
import ProductCards from '../client_views/cards/product_cards';
import { Route } from 'react-router-dom';

const PublicRoutes = () => {
    return (
        <>
            <Route exact path='/' component={HomeClient} />
            <Route exact path='/product_cards' component={ProductCards} />
            <Route exact path='/indoor_products' component={Indoor} />
            <Route exact path='/outdoor_proucts' component={Outdoor} />
            <Route exact path='/login_client' component={LoginClient} />
            <Route exact path='/signup_client' component={SignupClient} />
            <Route exact path='/business' component={HomeBusiness} />
            <Route exact path='/login_business' component={LoginBusiness} />
            <Route exact path='/signup_business' component={SignupBusiness} />
        </>
    )
}

export default PublicRoutes
