const urlBackend = process.env.REACT_APP_APIURL

export const API = {
    REGISTERCLIENT: `${urlBackend}/signup_client`,
    LOGINCLIENT: `${urlBackend}/login_client`,
    TOKENLCIENT: `${urlBackend}/token_client`, 
    REGISTERBUSINESS: `${urlBackend}/signup_business`,
    LOGINBUSINESS: `${urlBackend}/signup_business`, 
    TOKENBUSINESS: `${urlBackend}/signup_business`,
    POSTPROFILEBUSINESS: `${urlBackend}/signup_business`,
    GETPROFILEBUSINESS: `${urlBackend}/profile_business/`, //<id>
    POSTPRODUCT: `${urlBackend}/product_cards`,
    CHECKOUT: `${urlBackend}/checkout_step_one`,
    POSTORDER: `${urlBackend}/orders_list_business`,
    GETPRODUCTSPERORDER: `${urlBackend}/products_list_business/`, //<id>
    SUMMARYBUSINES: `${urlBackend}/summary_business/` //<id>
}