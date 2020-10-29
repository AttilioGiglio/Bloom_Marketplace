const urlBackend = process.env.REACT_APP_APIURL

export const API = {
    REGISTERCLIENT: `${urlBackend}/signup_client`,
    LOGINCLIENT: `${urlBackend}/login_client`,
    TOKENCLIENT: `${urlBackend}/token_client`, 
    REGISTERBUSINESS: `${urlBackend}/signup_business`,
    LOGINBUSINESS: `${urlBackend}/login_business`, 
    TOKENBUSINESS: `${urlBackend}/token_business`,
    POSTPROFILEBUSINESS: `${urlBackend}/profile_business`,
    GETPROFILEBUSINESS: `${urlBackend}/profile_business/`, //<id>
    POSTPRODUCT: `${urlBackend}/add_product_business/`,
    GETALLPRODUCT: `${urlBackend}/product_cards`,
    POSTORDER: `${urlBackend}/checkout_step_one`,
    GETALLORDERBYSUPPLIER: `${urlBackend}/orders_list_business`,
    GETPRODUCTSPERORDER: `${urlBackend}/products_list_business/`, //<id>
    SUMMARYBUSINES: `${urlBackend}/summary_business/` //<id>
}